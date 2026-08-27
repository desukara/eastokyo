import { createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import {
  reactionBaseCounts,
  reactionTargets,
  reactionTypes,
  type ReactionTarget,
  type ReactionType,
} from '../../the-city-puts-on-a-costume/reaction-data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const namespace = process.env.VERCEL_ENV === 'production' ? 'prod' : 'preview';
const version = 'v2';

function hasRedis() {
  return Boolean(redisUrl && redisToken);
}

function isTarget(value: string | null): value is ReactionTarget {
  return Boolean(value && reactionTargets.includes(value as ReactionTarget));
}

function isReaction(value: string | null): value is ReactionType {
  return Boolean(value && reactionTypes.includes(value as ReactionType));
}

async function redisCommand<T = unknown>(command: Array<string | number>) {
  if (!redisUrl || !redisToken) throw new Error('Redis is not configured');
  const response = await fetch(redisUrl, {
    method: 'POST',
    headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Redis request failed: ${response.status}`);
  const payload = (await response.json()) as { result?: T; error?: string };
  if (payload.error) throw new Error(payload.error);
  return payload.result;
}

function countKey(target: ReactionTarget, reaction: ReactionType) {
  return `eastokyo:reactions:${version}:${namespace}:${target}:${reaction}:count`;
}
function votersKey(target: ReactionTarget, reaction: ReactionType) {
  return `eastokyo:reactions:${version}:${namespace}:${target}:${reaction}:voters`;
}
function clientFingerprint(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = forwarded || request.headers.get('x-real-ip') || 'unknown';
  return createHash('sha256').update(ip).digest('hex').slice(0, 24);
}

function responseState(target: ReactionTarget, automatic: Record<ReactionType, number>, active: ReactionType | null) {
  return Object.fromEntries(reactionTypes.map((reaction) => [reaction, {
    count: Math.max(0, reactionBaseCounts[target][reaction] + automatic[reaction]),
    active: active === reaction,
  }])) as Record<ReactionType, { count: number; active: boolean }>;
}

async function readTargetState(target: ReactionTarget, visitorId: string) {
  const fallback = responseState(target, { like: 0, love: 0, wow: 0 }, null);
  if (!hasRedis()) return { reactions: fallback, persistent: false };

  try {
    const automatic = { like: 0, love: 0, wow: 0 } as Record<ReactionType, number>;
    let active: ReactionType | null = null;
    for (const reaction of reactionTypes) {
      const rawCount = await redisCommand<string | number | null>(['GET', countKey(target, reaction)]);
      automatic[reaction] = Number(rawCount || 0);
      if (visitorId && !active) {
        const member = Number(await redisCommand<number>(['SISMEMBER', votersKey(target, reaction), visitorId]));
        if (member === 1) active = reaction;
      }
    }
    return { reactions: responseState(target, automatic, active), persistent: true };
  } catch (error) {
    console.error(`Reaction read failed for ${target}`, error);
    return { reactions: fallback, persistent: false };
  }
}

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get('target');
  const visitorId = (request.nextUrl.searchParams.get('visitorId') || '').slice(0, 120);

  if (target === 'all') {
    const entries = await Promise.all(reactionTargets.map(async (reactionTarget) => {
      const state = await readTargetState(reactionTarget, visitorId);
      return [reactionTarget, state] as const;
    }));
    return NextResponse.json({
      reactionsByTarget: Object.fromEntries(entries.map(([reactionTarget, state]) => [reactionTarget, state.reactions])),
      persistent: entries.every(([, state]) => state.persistent),
    });
  }

  if (!isTarget(target)) return NextResponse.json({ error: 'Unknown reaction target' }, { status: 400 });
  const state = await readTargetState(target, visitorId);
  return NextResponse.json(state);
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { target?: string; reaction?: string; visitorId?: string; action?: 'add' | 'remove' } | null;
  if (!body || !isTarget(body.target || null) || !isReaction(body.reaction || null) || !body.visitorId || !body.action) {
    return NextResponse.json({ error: 'Invalid reaction request' }, { status: 400 });
  }

  const target = body.target as ReactionTarget;
  const reaction = body.reaction as ReactionType;
  const visitorId = body.visitorId.slice(0, 120);

  if (!hasRedis()) {
    const automatic = { like: 0, love: 0, wow: 0 } as Record<ReactionType, number>;
    if (body.action === 'add') automatic[reaction] = 1;
    return NextResponse.json({ reactions: responseState(target, automatic, body.action === 'add' ? reaction : null), persistent: false });
  }

  const rateKey = `eastokyo:reactions:${version}:${namespace}:rate:${clientFingerprint(request)}`;
  const script = `
    local hits = redis.call('INCR', KEYS[7])
    if hits == 1 then redis.call('EXPIRE', KEYS[7], 3600) end
    if hits > 120 then return {-1, -1, -1} end

    local selected = tonumber(ARGV[2])
    local action = ARGV[3]

    for i = 1, 3 do
      local countKey = KEYS[(i - 1) * 2 + 1]
      local votersKey = KEYS[(i - 1) * 2 + 2]
      local isMember = redis.call('SISMEMBER', votersKey, ARGV[1])

      if action == 'add' then
        if i == selected then
          if isMember == 0 then
            redis.call('SADD', votersKey, ARGV[1])
            redis.call('INCR', countKey)
          end
        elseif isMember == 1 then
          redis.call('SREM', votersKey, ARGV[1])
          local current = tonumber(redis.call('GET', countKey) or '0')
          if current > 0 then redis.call('DECR', countKey) end
        end
      elseif i == selected and isMember == 1 then
        redis.call('SREM', votersKey, ARGV[1])
        local current = tonumber(redis.call('GET', countKey) or '0')
        if current > 0 then redis.call('DECR', countKey) end
      end
    end

    return {
      tonumber(redis.call('GET', KEYS[1]) or '0'),
      tonumber(redis.call('GET', KEYS[3]) or '0'),
      tonumber(redis.call('GET', KEYS[5]) or '0')
    }
  `;

  try {
    const selectedIndex = reactionTypes.indexOf(reaction) + 1;
    const result = await redisCommand<number[]>([
      'EVAL', script, 7,
      countKey(target, 'like'), votersKey(target, 'like'),
      countKey(target, 'love'), votersKey(target, 'love'),
      countKey(target, 'wow'), votersKey(target, 'wow'),
      rateKey,
      visitorId, selectedIndex, body.action,
    ]);
    if (result?.[0] === -1) return NextResponse.json({ error: 'Too many reaction changes' }, { status: 429 });

    const automatic = {
      like: Number(result?.[0] || 0),
      love: Number(result?.[1] || 0),
      wow: Number(result?.[2] || 0),
    } as Record<ReactionType, number>;
    return NextResponse.json({
      reactions: responseState(target, automatic, body.action === 'add' ? reaction : null),
      persistent: true,
    });
  } catch (error) {
    console.error('Reaction update failed', error);
    const automatic = { like: 0, love: 0, wow: 0 } as Record<ReactionType, number>;
    if (body.action === 'add') automatic[reaction] = 1;
    return NextResponse.json({ reactions: responseState(target, automatic, body.action === 'add' ? reaction : null), persistent: false });
  }
}
