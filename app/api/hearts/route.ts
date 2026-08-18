import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { homepageStories, type StoryId } from "../../eastokyo/engagement-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

function isStoryId(value: string | null): value is StoryId {
  return Boolean(value && value in homepageStories);
}

function hasRedis() {
  return Boolean(redisUrl && redisToken);
}

async function redisCommand<T = unknown>(command: Array<string | number>) {
  if (!redisUrl || !redisToken) throw new Error("Redis is not configured");

  const response = await fetch(redisUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Redis request failed: ${response.status}`);
  const payload = (await response.json()) as { result?: T; error?: string };
  if (payload.error) throw new Error(payload.error);
  return payload.result;
}

function countKey(story: StoryId) {
  return `eastokyo:hearts:${story}:count`;
}

function votersKey(story: StoryId) {
  return `eastokyo:hearts:${story}:voters`;
}

function clientFingerprint(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 24);
}

export async function GET(request: NextRequest) {
  const story = request.nextUrl.searchParams.get("story");
  if (!isStoryId(story)) {
    return NextResponse.json({ error: "Unknown story" }, { status: 400 });
  }

  if (!hasRedis()) {
    return NextResponse.json({ automaticHearts: 0, persistent: false });
  }

  try {
    const raw = await redisCommand<string | number | null>(["GET", countKey(story)]);
    const automaticHearts = Math.max(0, Number(raw || 0));
    return NextResponse.json({ automaticHearts, persistent: true });
  } catch (error) {
    console.error("Heart count read failed", error);
    return NextResponse.json({ automaticHearts: 0, persistent: false });
  }
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | { story?: string; visitorId?: string; action?: "like" | "unlike" }
    | null;

  if (!body || !isStoryId(body.story || null) || !body.visitorId || !body.action) {
    return NextResponse.json({ error: "Invalid heart request" }, { status: 400 });
  }

  const story = body.story as StoryId;
  const visitorId = body.visitorId.slice(0, 120);

  if (!hasRedis()) {
    return NextResponse.json({ automaticHearts: body.action === "like" ? 1 : 0, persistent: false });
  }

  const rateKey = `eastokyo:hearts:rate:${clientFingerprint(request)}`;
  const likeScript = `
    local hits = redis.call('INCR', KEYS[3])
    if hits == 1 then redis.call('EXPIRE', KEYS[3], 3600) end
    if hits > 40 then return -1 end
    local added = redis.call('SADD', KEYS[2], ARGV[1])
    local current = tonumber(redis.call('GET', KEYS[1]) or '0')
    if added == 1 then current = redis.call('INCR', KEYS[1]) end
    return current
  `;
  const unlikeScript = `
    local hits = redis.call('INCR', KEYS[3])
    if hits == 1 then redis.call('EXPIRE', KEYS[3], 3600) end
    if hits > 40 then return -1 end
    local removed = redis.call('SREM', KEYS[2], ARGV[1])
    local current = tonumber(redis.call('GET', KEYS[1]) or '0')
    if removed == 1 and current > 0 then current = redis.call('DECR', KEYS[1]) end
    return current
  `;

  try {
    const result = await redisCommand<number>([
      "EVAL",
      body.action === "like" ? likeScript : unlikeScript,
      3,
      countKey(story),
      votersKey(story),
      rateKey,
      visitorId,
    ]);

    if (Number(result) === -1) {
      return NextResponse.json({ error: "Too many heart changes" }, { status: 429 });
    }

    return NextResponse.json({ automaticHearts: Math.max(0, Number(result || 0)), persistent: true });
  } catch (error) {
    console.error("Heart update failed", error);
    return NextResponse.json({ automaticHearts: body.action === "like" ? 1 : 0, persistent: false });
  }
}
