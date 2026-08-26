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
  return `eastokyo:reactions:v1:${namespace}:${target}:${reaction}:count`;
}
function votersKey(target: ReactionTarget, reaction: ReactionType) {
  return `eastokyo:reactions:v1:${namespace}:${target}:${reaction}:voters`;
}
function clientFingerprint(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const ip = forwarded || request.headers.get('x-real-ip') || 'unknown';
  return createHash('sha256').update(ip).digest('hex').slice(0, 24);
}

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get('target');
  const visitorId = (request.nextUrl.searchParams.get('visitorId') || '').slice(0, 120);
  if (!isTarget(target)) return NextResponse.json({ error: 'Unknown reaction target' }, { status: 400 });

  const fallback = Object.fromEntries(reactionTypes.map((r) => [r, { count: Math.max(0, reactionBaseCounts[target][r]), active: false }])) as Record<ReactionType, { count: number; active: boolean }>;
  if (!hasRedis()) return NextResponse.json({ reactions: fallback, persistent: false });

  try {
    const reactions = {} as Record<ReactionType, { count: number; active: boolean }>;
    for (const reaction of reactionTypes) {
      const rawCount = await redisCommand<string | number | null>(['GET', countKey(target, reaction)]);
      const active = visitorId ? Number(await redisCommand<number>(['SISMEMBER', votersKey(target, reaction), visitorId])) === 1 : false;
      const automatic = Number(rawCount || 0);
      reactions[reaction] = { count: Math.max(0, reactionBaseCounts[target][reaction] + automatic), active };
    }
    return NextResponse.json({ reactions, persistent: true });
  } catch (error) {
    console.error('Reaction read failed', error);
    return NextResponse.json({ reactions: fallback, persistent: false });
  }
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { target?: string; reaction?: string; visitorId?: string; action?: 'add' | 'remove' } | null;
  if (!body || !isTarget(body.target || null) || !isReaction(body.reaction || null) || !body.visitorId || !body.action) {
    return NextResponse.json({ error: 'Invalid reaction request' }, { status: 400 });
  }

  const target = body.target as ReactionTarget;
  const reaction = body.reaction as ReactionType;
  const visitorId = body.visitorId.slice(0, 120);
  const base = reactionBaseCounts[target][reaction];
  if (!hasRedis()) return NextResponse.json({ count: Math.max(0, base + (body.action === 'add' ? 1 : 0)), active: body.action === 'add', persistent: false });

  const rateKey = `eastokyo:reactions:v1:${namespace}:rate:${clientFingerprint(request)}`;
  const addScript = `
    local hits = redis.call('INCR', KEYS[3])
    if hits == 1 then redis.call('EXPIRE', KEYS[3], 3600) end
    if hits > 120 then return -1 end
    local added = redis.call('SADD', KEYS[2], ARGV[1])
    local current = tonumber(redis.call('GET', KEYS[1]) or '0')
    if added == 1 then current = redis.call('INCR', KEYS[1]) end
    return current
  `;
  const removeScript = `
    local hits = redis.call('INCR', KEYS[3])
    if hits == 1 then redis.call('EXPIRE', KEYS[3], 3600) end
    if hits > 120 then return -1 end
    local removed = redis.call('SREM', KEYS[2], ARGV[1])
    local current = tonumber(redis.call('GET', KEYS[1]) or '0')
    if removed == 1 and current > 0 then current = redis.call('DECR', KEYS[1]) end
    return current
  `;

  try {
    const result = await redisCommand<number>(['EVAL', body.action === 'add' ? addScript : removeScript, 3, countKey(target, reaction), votersKey(target, reaction), rateKey, visitorId]);
    if (Number(result) === -1) return NextResponse.json({ error: 'Too many reaction changes' }, { status: 429 });
    return NextResponse.json({ count: Math.max(0, base + Number(result || 0)), active: body.action === 'add', persistent: true });
  } catch (error) {
    console.error('Reaction update failed', error);
    return NextResponse.json({ count: Math.max(0, base + (body.action === 'add' ? 1 : 0)), active: body.action === 'add', persistent: false });
  }
}
