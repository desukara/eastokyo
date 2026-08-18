"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { homepageStoryList, type HomepageStory, type StoryId } from "./engagement-data";

const VERDICTS = [
  { id: "nailed", emoji: "🐐", label: "BASTARD PULLED IT OFF" },
  { id: "hate-like", emoji: "🤢", label: "I HATE THAT I LIKE IT" },
  { id: "what-happened", emoji: "🛸", label: "THE F#¢K HAPPENED!?" },
  { id: "one-job", emoji: "🤦‍♂️", label: "YOU HAD ONE JOB" },
  { id: "brush-down", emoji: "🛑", label: "PUT THE BRUSH DOWN" },
] as const;

type VerdictId = (typeof VERDICTS)[number]["id"];
type Counts = Record<VerdictId, number>;
type Response = { counts: Counts; selected?: VerdictId; persistent: boolean };
type ShareTarget = { story: HomepageStory; verdict: VerdictId };

const VISITOR_KEY = "eastokyo:verdict-visitor";
const VOTE_PREFIX = "eastokyo:verdict:";
const emptyCounts = (): Counts => ({ nailed: 0, "hate-like": 0, "what-happened": 0, "one-job": 0, "brush-down": 0 });

function visitorId() {
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) return existing;
  const id = typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  localStorage.setItem(VISITOR_KEY, id);
  return id;
}
function voteKey(story: StoryId) { return `${VOTE_PREFIX}${story}`; }
function verdictFor(id: VerdictId) { return VERDICTS.find((v) => v.id === id) || VERDICTS[0]; }
function labelFor(id: VerdictId) { return verdictFor(id).label; }
function displayFor(id: VerdictId) { const item = verdictFor(id); return `${item.emoji} ${item.label}`; }
function winner(counts: Counts) {
  return VERDICTS.reduce((best, item) => counts[item.id] > counts[best.id] ? item : best, VERDICTS[0]);
}
function totalVotes(counts: Counts) { return VERDICTS.reduce((sum, item) => sum + counts[item.id], 0); }

function VerdictPanel({ story }: { story: HomepageStory }) {
  const [selected, setSelected] = useState<VerdictId | null>(null);
  const [counts, setCounts] = useState<Counts>(emptyCounts);
  const [busy, setBusy] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem(voteKey(story.id)) as VerdictId | null;
    if (VERDICTS.some((v) => v.id === local)) setSelected(local);
    fetch(`/api/verdicts?story=${encodeURIComponent(story.id)}`, { cache: "no-store" })
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((data: Response) => setCounts(data.counts || emptyCounts()))
      .catch(() => {});
  }, [story.id]);

  const castVote = async (verdict: VerdictId) => {
    if (busy) return;
    const previous = selected;
    setBusy(true);
    setSelected(verdict);
    localStorage.setItem(voteKey(story.id), verdict);
    setCounts((current) => {
      const next = { ...current };
      if (previous && previous !== verdict) next[previous] = Math.max(0, next[previous] - 1);
      if (previous !== verdict) next[verdict] += 1;
      return next;
    });
    try {
      const r = await fetch("/api/verdicts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ story: story.id, visitorId: visitorId(), verdict }) });
      if (!r.ok) throw new Error("vote failed");
      const data = (await r.json()) as Response;
      if (data.counts) setCounts(data.counts);
    } catch { /* local vote remains usable */ }
    finally { setBusy(false); }
  };

  const top = winner(counts);
  const total = totalVotes(counts);
  const percent = total ? Math.round((counts[top.id] / total) * 100) : 0;

  return <section className={`verdict-panel ${selected ? "has-voted" : ""}`} aria-label={`Rate ${story.title}`}>
    <div className="verdict-heading"><span>EASTOKYO VERDICT</span><strong>{selected ? "THE MOB HAS SPOKEN." : "YOUR HONEST FIRST REACTION."}</strong></div>
    <div className="verdict-options">
      {VERDICTS.map((item) => <button key={item.id} type="button" disabled={busy} aria-pressed={selected === item.id} className={`verdict-option ${selected === item.id ? "is-selected" : ""} ${selected && top.id === item.id ? "is-winning" : ""}`} onClick={() => castVote(item.id)}>
        <span className="verdict-option-copy"><span className="verdict-emoji" aria-hidden="true">{item.emoji}</span><span className="verdict-label">{item.label}</span></span>{selected && <b>{counts[item.id].toLocaleString("en-US")}</b>}
      </button>)}
    </div>
    {selected && <div className="verdict-result"><p>THE MOB’S VERDICT</p><strong><span className="verdict-result-emoji" aria-hidden="true">{top.emoji}</span>{top.label}</strong><span>{percent}% · {total.toLocaleString("en-US")} TOTAL VOTES</span><button type="button" onClick={() => setShareOpen(true)}>SHARE YOUR VERDICT ↗</button></div>}
    {shareOpen && <ShareVerdict target={{ story, verdict: selected! }} onClose={() => setShareOpen(false)} />}
  </section>;
}

function ShareVerdict({ target, onClose }: { target: ShareTarget; onClose: () => void }) {
  const url = typeof window === "undefined" ? "" : `${window.location.origin}/share/${target.story.shareSlug}?verdict=${encodeURIComponent(target.verdict)}`;
  const text = `I voted “${displayFor(target.verdict)}” on ${target.story.title} — EASTOKYO`;
  const item = verdictFor(target.verdict);
  const share = async () => {
    if (navigator.share) { try { await navigator.share({ title: "My EASTOKYO verdict", text, url }); onClose(); return; } catch {} }
    try { await navigator.clipboard.writeText(`${text}\n${url}`); } catch {}
  };
  return <div className="verdict-share-backdrop" onMouseDown={(e) => { if (e.currentTarget === e.target) onClose(); }}><div className="verdict-share" role="dialog" aria-modal="true"><button className="verdict-share-close" onClick={onClose} aria-label="Close">×</button><small>YOUR VERDICT</small><div className="verdict-share-emoji" aria-hidden="true">{item.emoji}</div><h2>{labelFor(target.verdict)}</h2><p>{target.story.title}</p><button className="verdict-share-primary" onClick={share}>SHARE YOUR VERDICT</button><button className="verdict-share-copy" onClick={async () => { try { await navigator.clipboard.writeText(`${text}\n${url}`); } catch {} }}>COPY SHARE LINK</button></div></div>;
}

export default function VerdictVoting() {
  const pathname = usePathname();
  const [mounts, setMounts] = useState<Array<{ host: HTMLElement; story: HomepageStory }>>([]);
  const isHomepage = pathname === "/" || pathname === "/eastokyo";
  useEffect(() => {
    if (!isHomepage) { setMounts([]); return; }
    const hosts: HTMLElement[] = [];
    const next: Array<{ host: HTMLElement; story: HomepageStory }> = [];
    for (const story of homepageStoryList) {
      const cta = document.querySelector<HTMLElement>(story.ctaSelector);
      if (!cta?.parentElement) continue;
      const host = document.createElement("div");
      host.className = "verdict-host";
      cta.insertAdjacentElement("afterend", host);
      hosts.push(host); next.push({ host, story });
    }
    setMounts(next);
    return () => hosts.forEach((host) => host.remove());
  }, [isHomepage]);
  const portals = useMemo(() => mounts.map(({ host, story }) => createPortal(<VerdictPanel story={story} />, host, story.id)), [mounts]);
  if (!isHomepage) return null;
  return <>{portals}</>;
}
