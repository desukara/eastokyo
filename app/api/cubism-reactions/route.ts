import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ReactionType = 'like' | 'love' | 'wow';
type Target = 'cubism-opening' | 'cubism-construction' | 'cubism-finale';

const targets: Target[] = ['cubism-opening', 'cubism-construction', 'cubism-finale'];
const reactions: ReactionType[] = ['like', 'love', 'wow'];
const reconstructedBaseline: Record<Target, Record<ReactionType, number>> = {
  'cubism-opening': { like: 39, love: 21, wow: 16 },
  'cubism-construction': { like: 26, love: 16, wow: 18 },
  'cubism-finale': { like: 25, love: 18, wow: 10 },
};
const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
const namespace = process.env.VERCEL_ENV === 'production' ? 'prod' : 'preview';

function validTarget(value: string | null): value is Target { return Boolean(value && targets.includes(value as Target)); }
function validReaction(value: string | null): value is ReactionType { return Boolean(value && reactions.includes(value as ReactionType)); }
function countKey(target: Target, reaction: ReactionType) { return `eastokyo:cubism:v1:${namespace}:${target}:${reaction}:count`; }
function votersKey(target: Target, reaction: ReactionType) { return `eastokyo:cubism:v1:${namespace}:${target}:${reaction}:voters`; }

async function redis<T = unknown>(command: Array<string | number>) {
  if (!redisUrl || !redisToken) throw new Error('Redis is not configured');
  const response = await fetch(redisUrl, {
    method: 'POST',
    headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Redis request failed: ${response.status}`);
  const payload = await response.json() as { result?: T; error?: string };
  if (payload.error) throw new Error(payload.error);
  return payload.result;
}

async function state(target: Target, visitorId: string) {
  const result = {} as Record<ReactionType, { count: number; active: boolean }>;
  for (const reaction of reactions) {
    const raw = await redis<string | number | null>(['GET', countKey(target, reaction)]);
    const member = visitorId ? Number(await redis<number>(['SISMEMBER', votersKey(target, reaction), visitorId])) === 1 : false;
    result[reaction] = { count: reconstructedBaseline[target][reaction] + Number(raw || 0), active: member };
  }
  return result;
}

export async function GET(request: NextRequest) {
  const target = request.nextUrl.searchParams.get('target');
  const visitorId = (request.nextUrl.searchParams.get('visitorId') || '').slice(0, 120);
  if (!validTarget(target)) return NextResponse.json({ error: 'Unknown reaction target' }, { status: 400 });
  try { return NextResponse.json({ reactions: await state(target, visitorId), persistent: true }); }
  catch (error) { console.error('Cubism reaction read failed', error); return NextResponse.json({ error: 'Reaction store unavailable', persistent: false }, { status: 503 }); }
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as { target?: string; reaction?: string; visitorId?: string; action?: 'add' | 'remove' } | null;
  if (!body || !validTarget(body.target || null) || !validReaction(body.reaction || null) || !body.visitorId || !body.action) return NextResponse.json({ error: 'Invalid reaction request' }, { status: 400 });
  const target = body.target as Target;
  const reaction = body.reaction as ReactionType;
  const visitorId = body.visitorId.slice(0, 120);
  try {
    for (const type of reactions) {
      const member = Number(await redis<number>(['SISMEMBER', votersKey(target, type), visitorId])) === 1;
      if (body.action === 'add' && type === reaction && !member) {
        await redis(['SADD', votersKey(target, type), visitorId]);
        await redis(['INCR', countKey(target, type)]);
      } else if ((body.action === 'remove' && type === reaction && member) || (body.action === 'add' && type !== reaction && member)) {
        await redis(['SREM', votersKey(target, type), visitorId]);
        const current = Number(await redis<string | number | null>(['GET', countKey(target, type)]) || 0);
        if (current > 0) await redis(['DECR', countKey(target, type)]);
      }
    }
    return NextResponse.json({ reactions: await state(target, visitorId), persistent: true });
  } catch (error) {
    console.error('Cubism reaction update failed', error);
    return NextResponse.json({ error: 'Reaction store unavailable', persistent: false }, { status: 503 });
  }
}
