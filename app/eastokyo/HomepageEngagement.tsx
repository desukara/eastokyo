'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import shareStyles from '../the-city-puts-on-a-costume/ShareRailPreview.module.css';
import reactionStyles from '../the-city-puts-on-a-costume/ReactionPreview.module.css';

type ReactionType = 'like' | 'love' | 'wow';
type Target = 'homepage-cover' | 'homepage-exhibition' | 'homepage-ideas' | 'homepage-tokyo' | 'homepage-index';
type ReactionState = Record<ReactionType, { count: number; active: boolean }>;
type Moment = { id: Target; section: string; title: string; url: string; caption: string };

type Mounts = Partial<Record<Target, HTMLElement>>;

const TYPES: ReactionType[] = ['like', 'love', 'wow'];
const MOMENTS: Moment[] = [
  { id: 'homepage-cover', section: '#bullfighting', title: 'HE NEVER REALLY LEFT THE ARENA.', url: 'https://www.eastokyo.com/he-never-really-left-the-arena', caption: 'HE NEVER REALLY LEFT THE ARENA — EASTOKYO' },
  { id: 'homepage-exhibition', section: '#exhibition', title: 'PICASSO SEEN WITH FRESH EYES.', url: 'https://www.eastokyo.com/picasso-seen-with-fresh-eyes', caption: 'PICASSO SEEN WITH FRESH EYES — EASTOKYO' },
  { id: 'homepage-ideas', section: '#cubism-works', title: 'A SINGLE POINT OF VIEW WOULD NEVER HAVE BEEN ENOUGH.', url: 'https://www.eastokyo.com/when-one-point-of-view-wasnt-enough', caption: 'WHEN ONE POINT OF VIEW WASN’T ENOUGH — EASTOKYO' },
  { id: 'homepage-tokyo', section: '#asagaya', title: 'THE CITY PUTS ON ITS COSTUME.', url: 'https://www.eastokyo.com/the-city-puts-on-a-costume', caption: 'THE CITY PUTS ON ITS COSTUME — EASTOKYO' },
  { id: 'homepage-index', section: '#picasso-index', title: 'NOTHING IS JUST WHAT IT IS.', url: 'https://www.eastokyo.com/nothing-is-just-what-it-is', caption: 'NOTHING IS JUST WHAT IT IS — EASTOKYO' },
];

const emptyState = (): ReactionState => ({ like: { count: 0, active: false }, love: { count: 0, active: false }, wow: { count: 0, active: false } });

function ensureVisitorId() {
  const key = 'eastokyo-reaction-visitor-v1';
  let value = window.localStorage.getItem(key);
  if (!value) {
    value = crypto.randomUUID();
    window.localStorage.setItem(key, value);
  }
  return value;
}

function optimisticState(before: ReactionState, reaction: ReactionType, action: 'add' | 'remove'): ReactionState {
  return Object.fromEntries(TYPES.map((type) => {
    const value = before[type];
    if (action === 'remove') return [type, type === reaction ? { count: Math.max(0, value.count - 1), active: false } : { ...value, active: false }];
    if (type === reaction) return [type, { count: value.count + (value.active ? 0 : 1), active: true }];
    return [type, { count: Math.max(0, value.count - (value.active ? 1 : 0)), active: false }];
  })) as ReactionState;
}

function links(url: string, text: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text);
  return {
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${u}&description=${t}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    x: `https://x.com/intent/tweet?text=${t}&url=${u}`,
    bluesky: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${text} ${url}`)}`,
  };
}

function Icon({ name }: { name: 'share' | 'instagram' | 'tiktok' | 'pinterest' | 'facebook' | 'x' | 'bluesky' | 'copy' }) {
  if (name === 'share') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.2 12.1 16 4.3M10.4 4.3H16v5.6M14.8 12.7v4.7a2.3 2.3 0 0 1-2.3 2.3H6.6a2.3 2.3 0 0 1-2.3-2.3v-5.9a2.3 2.3 0 0 1 2.3-2.3h4.7"/></svg>;
  if (name === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>;
  if (name === 'tiktok') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.3 3.2v10.5a4.7 4.7 0 1 1-4-4.6v3a1.8 1.8 0 1 0 1.1 1.7V3.2h2.9Zm0 0c.7 2.5 2.2 4 4.7 4.6v3.1c-1.8-.2-3.4-.9-4.7-2"/></svg>;
  if (name === 'pinterest') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2a8.8 8.8 0 0 0-3.2 17l1.3-5.4c-.3-.7-.5-1.7-.5-2.5 0-2.3 1.3-4 3-4 1.4 0 2.1 1 2.1 2.3 0 1.4-.9 3.5-1.4 5.4-.4 1.6.8 2.9 2.4 2.9 2.9 0 4.8-3.7 4.8-8 0-3.3-2.7-6.1-7.5-6.1-5.5 0-8.9 4.1-8.9 8.7 0 1.6.5 2.8 1.3 3.7.4.4.4.6.3 1.1l-.4 1.6c-.1.5-.5.7-1 .5-2.6-1.1-3.8-4-3.8-7.3C.5 8 4.8 3.2 12 3.2Z"/></svg>;
  if (name === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.4-4 4.1v2.4H8V13h2.6v8h3Z"/></svg>;
  if (name === 'x') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.3 3.5h4.1l4.5 6 5.2-6h1.7l-6.1 7 6.3 10h-4.1l-4.9-6.6-5.8 6.6H3.5l6.7-7.6-5.9-9.4Zm3.2 1.3 9.1 14.4h1.9L9.4 4.8H7.5Z"/></svg>;
  if (name === 'bluesky') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 10.8c-1.1-2.1-4-6-6.7-7.9C2.7 1 1.7 1.3 1.1 1.6.4 2 .3 3.1.3 3.8c0 .8.4 6.3.7 7.2.9 3 4 4 6.8 3.5-4.8.8-6 3.5-3.4 6.2 4.9 5 6.8-1.1 7.6-3.9.8 2.8 2.1 8.7 7.6 3.9 2.7-2.4.8-5.4-3.4-6.2 2.8.5 5.9-.5 6.8-3.5.3-.9.7-6.4.7-7.2 0-.7-.1-1.8-.8-2.2-.6-.3-1.6-.6-4.2 1.3-2.7 1.9-5.6 5.8-6.7 7.9Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7.5" y="7.5" width="12" height="12" rx="1.5"/><path d="M16.5 7.5V5.7A1.7 1.7 0 0 0 14.8 4h-9A1.8 1.8 0 0 0 4 5.8v9A1.7 1.7 0 0 0 5.7 16.5h1.8"/></svg>;
}

function ReactionIcon({ type }: { type: ReactionType }) {
  if (type === 'like') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.4 10.1 11.7 4c.5-.9 1.7-.9 2.1-.1.4.7.3 1.8.1 2.6l-.7 2.5h5.2c1.1 0 2 .9 2 2 0 .2 0 .4-.1.6l-1.7 6.3c-.3 1.1-1.3 1.9-2.4 1.9H8.4V10.1Z"/><path d="M4.1 10.1h4.3v9.7H4.1V10.1Z"/></svg>;
  if (type === 'love') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.4 4.7 13.5C1.8 10.8 3.1 5.8 7 5.1c2-.4 3.8.5 5 2 1.2-1.5 3-2.4 5-2 3.9.7 5.2 5.7 2.3 8.4L12 20.4Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="8.7" cy="9" r="1.15"/><circle cx="15.3" cy="9" r="1.15"/><ellipse cx="12" cy="15.1" rx="2.35" ry="3.05"/></svg>;
}

export default function HomepageEngagement() {
  const pathname = usePathname();
  const isHomepage = pathname === '/' || pathname === '/eastokyo';
  const [mounts, setMounts] = useState<Mounts>({});
  const [states, setStates] = useState<Record<Target, ReactionState>>(() => Object.fromEntries(MOMENTS.map((moment) => [moment.id, emptyState()])) as Record<Target, ReactionState>);
  const [visitorId, setVisitorId] = useState('');
  const [busy, setBusy] = useState<Set<Target>>(new Set());
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!isHomepage) return;
    setVisitorId(ensureVisitorId());
    const created: Mounts = {};
    MOMENTS.forEach((moment) => {
      const section = document.querySelector<HTMLElement>(moment.section);
      if (!section?.parentElement) return;
      const mount = document.createElement('div');
      mount.className = shareStyles.momentMount;
      section.parentElement.insertBefore(mount, section.nextSibling);
      created[moment.id] = mount;
    });
    setMounts(created);
    return () => Object.values(created).forEach((element) => element?.remove());
  }, [isHomepage]);

  useEffect(() => {
    if (!isHomepage || !visitorId) return;
    Promise.all(MOMENTS.map(async ({ id }) => {
      const response = await fetch(`/api/reactions?target=${id}&visitorId=${encodeURIComponent(visitorId)}`, { cache: 'no-store' });
      if (!response.ok) return null;
      const data = await response.json() as { reactions?: ReactionState };
      return data.reactions ? [id, data.reactions] as const : null;
    })).then((rows) => {
      const valid = rows.filter(Boolean) as Array<readonly [Target, ReactionState]>;
      setStates((current) => ({ ...current, ...Object.fromEntries(valid) }));
    }).catch(() => {});
  }, [isHomepage, visitorId]);

  const nativeShare = async (moment: Moment) => {
    try {
      if (navigator.share) await navigator.share({ title: moment.title, text: moment.caption, url: moment.url });
      else {
        await navigator.clipboard.writeText(moment.url);
        setStatus('LINK COPIED');
        window.setTimeout(() => setStatus(''), 1600);
      }
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') setStatus('SHARE NOT COMPLETED');
    }
  };

  const copy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setStatus('LINK COPIED');
      window.setTimeout(() => setStatus(''), 1600);
    } catch {
      setStatus('COULD NOT COPY');
    }
  };

  const toggle = async (target: Target, reaction: ReactionType) => {
    if (!visitorId || busy.has(target)) return;
    const before = states[target];
    const action = before[reaction].active ? 'remove' : 'add';
    const optimistic = optimisticState(before, reaction, action);
    setStates((current) => ({ ...current, [target]: optimistic }));
    setBusy((current) => new Set(current).add(target));
    try {
      const response = await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target, reaction, visitorId, action }),
      });
      if (!response.ok) throw new Error('failed');
      const data = await response.json() as { reactions?: ReactionState };
      if (data.reactions) setStates((current) => ({ ...current, [target]: data.reactions! }));
    } catch {
      setStates((current) => ({ ...current, [target]: optimistic }));
    } finally {
      setBusy((current) => {
        const next = new Set(current);
        next.delete(target);
        return next;
      });
    }
  };

  const Rail = ({ moment }: { moment: Moment }) => {
    const direct = links(moment.url, moment.caption);
    const targetBusy = busy.has(moment.id);
    return <div className={shareStyles.rail} aria-label={`Share ${moment.title}`}>
      <button className={`${shareStyles.cell} ${shareStyles.lead}`} type="button" onClick={() => nativeShare(moment)} aria-label={`Share ${moment.title}`}><Icon name="share"/><span className={shareStyles.leadText}>SHARE THIS STORY</span></button>
      <button className={shareStyles.cell} type="button" onClick={() => nativeShare(moment)} aria-label="Share to Instagram using your device"><Icon name="instagram"/></button>
      <button className={shareStyles.cell} type="button" onClick={() => nativeShare(moment)} aria-label="Share to TikTok using your device"><Icon name="tiktok"/></button>
      <a className={shareStyles.cell} href={direct.pinterest} target="_blank" rel="noreferrer" aria-label="Share on Pinterest"><Icon name="pinterest"/></a>
      <a className={shareStyles.cell} href={direct.facebook} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><Icon name="facebook"/></a>
      <a className={shareStyles.cell} href={direct.x} target="_blank" rel="noreferrer" aria-label="Share on X"><Icon name="x"/></a>
      <a className={shareStyles.cell} href={direct.bluesky} target="_blank" rel="noreferrer" aria-label="Share on Bluesky"><Icon name="bluesky"/></a>
      <button className={`${shareStyles.cell} ${shareStyles.copy}`} type="button" onClick={() => copy(moment.url)} aria-label="Copy EASTOKYO link"><Icon name="copy"/></button>
      <span className={reactionStyles.host}><span className={reactionStyles.cluster} aria-label="Reactions — choose one reaction">
        {TYPES.map((type) => {
          const value = states[moment.id][type];
          const label = type === 'like' ? 'Like' : type === 'love' ? 'Love' : 'Wow';
          return <button key={type} type="button" className={`${reactionStyles.reaction} ${reactionStyles[type]} ${value.active ? reactionStyles.active : ''} ${targetBusy ? reactionStyles.loading : ''}`} onClick={() => toggle(moment.id, type)} disabled={targetBusy} aria-pressed={value.active} aria-label={`${label} — ${value.count}`} title={label}>
            <span className={reactionStyles.icon}><ReactionIcon type={type}/></span><span className={reactionStyles.count}>{value.count}</span>
          </button>;
        })}
      </span></span>
    </div>;
  };

  if (!isHomepage) return null;
  return <>{MOMENTS.map((moment) => mounts[moment.id] ? createPortal(<Rail moment={moment}/>, mounts[moment.id]!, moment.id) : null)}{status && <div className={shareStyles.toast} role="status">{status}</div>}</>;
}
