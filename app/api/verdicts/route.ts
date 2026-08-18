import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { homepageStories, type StoryId } from "../../eastokyo/engagement-data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const VERDICTS = ["nailed", "hate-like", "what-happened", "one-job", "brush-down"] as const;
export type VerdictId = (typeof VERDICTS)[number];

type Counts = Record<VerdictId, number>;

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

function isStoryId(value: string | null): value is StoryId { return Boolean(value && value in homepageStories); }
function isVerdict(value: unknown): value is VerdictId { return typeof value === "string" && (VERDICTS as readonly string[]).includes(value); }
function hasRedis() { return Boolean(redisUrl && redisToken); }
function countKey(story: StoryId) { return `eastokyo:verdicts:${story}:counts`; }
function voterKey(story: StoryId) { return `eastokyo:verdicts:${story}:voters`; }
function clientFingerprint(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 24);
}
async function redisCommand<T = unknown>(command: Array<string | number>) {
  if (!redisUrl || !redisToken) throw new Error("Redis is not configured");
  const response = await fetch(redisUrl, { method: "POST", headers: { Authorization: `Bearer ${redisToken}`, "Content-Type": "application/json" }, body: JSON.stringify(command), cache: "no-store" });
  if (!response.ok) throw new Error(`Redis request failed: ${response.status}`);
  const payload = (await response.json()) as { result?: T; error?: string };
  if (payload.error) throw new Error(payload.error);
  return payload.result;
}
function emptyCounts(): Counts { return { nailed: 0, "hate-like": 0, "what-happened": 0, "one-job": 0, "brush-down": 0 }; }
async function readCounts(story: StoryId): Promise<Counts> {
  const raw = await redisCommand<Array<string>>(["HMGET", countKey(story), ...VERDICTS]);
  const counts = emptyCounts();
  VERDICTS.forEach((id, index) => { counts[id] = Math.max(0, Number(raw?.[index] || 0)); });
  return counts;
}

export async function GET(request: NextRequest) {
  const story = request.nextUrl.searchParams.get("story");
  if (!isStoryId(story)) return NextResponse.json({ error: "Unknown story" }, { status: 400 });
  if (!hasRedis()) return NextResponse.json({ counts: emptyCounts(), persistent: false });
  try { return NextResponse.json({ counts: await readCounts(story), persistent: true }); }
  catch (error) { console.error("Verdict read failed", error); return NextResponse.json({ counts: emptyCounts(), persistent: false }); }
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as { story?: string; visitorId?: string; verdict?: string } | null;
  if (!body || !isStoryId(body.story || null) || !body.visitorId || !isVerdict(body.verdict)) return NextResponse.json({ error: "Invalid verdict request" }, { status: 400 });
  const story = body.story as StoryId;
  const verdict = body.verdict as VerdictId;
  const visitorId = body.visitorId.slice(0, 120);
  if (!hasRedis()) { const counts = emptyCounts(); counts[verdict] = 1; return NextResponse.json({ counts, selected: verdict, persistent: false }); }

  const rateKey = `eastokyo:verdicts:rate:${clientFingerprint(request)}`;
  const script = `
    local hits = redis.call('INCR', KEYS[3])
    if hits == 1 then redis.call('EXPIRE', KEYS[3], 3600) end
    if hits > 50 then return 'RATE' end
    local previous = redis.call('HGET', KEYS[2], ARGV[1])
    if previous == ARGV[2] then return previous end
    if previous then
      local old = tonumber(redis.call('HGET', KEYS[1], previous) or '0')
      if old > 0 then redis.call('HINCRBY', KEYS[1], previous, -1) end
    end
    redis.call('HINCRBY', KEYS[1], ARGV[2], 1)
    redis.call('HSET', KEYS[2], ARGV[1], ARGV[2])
    return ARGV[2]
  `;
  try {
    const result = await redisCommand<string>(["EVAL", script, 3, countKey(story), voterKey(story), rateKey, visitorId, verdict]);
    if (result === "RATE") return NextResponse.json({ error: "Too many verdict changes" }, { status: 429 });
    return NextResponse.json({ counts: await readCounts(story), selected: verdict, persistent: true });
  } catch (error) {
    console.error("Verdict update failed", error);
    const counts = emptyCounts(); counts[verdict] = 1;
    return NextResponse.json({ counts, selected: verdict, persistent: false });
  }
}
