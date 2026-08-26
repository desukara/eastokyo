'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ReactionPreview.module.css';
import { reactionTargets, type ReactionTarget, type ReactionType } from './reaction-data';

type ReactionState = Record<ReactionType, { count: number; active: boolean }>;
type Host = { target: ReactionTarget; element: HTMLSpanElement; key: string };

const emptyState = (): ReactionState => ({
  like: { count: 0, active: false },
  love: { count: 0, active: false },
  wow: { count: 0, active: false },
});

function ensureVisitorId() {
  const key = 'eastokyo-reaction-visitor-v1';
  let value = window.localStorage.getItem(key);
  if (!value) {
    value = crypto.randomUUID();
    window.localStorage.setItem(key, value);
  }
  return value;
}

function ReactionIcon({ type }: { type: ReactionType }) {
  if (type === 'like') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.4 10.1 11.7 4c.5-.9 1.7-.9 2.1-.1.4.7.3 1.8.1 2.6l-.7 2.5h5.2c1.1 0 2 .9 2 2 0 .2 0 .4-.1.6l-1.7 6.3c-.3 1.1-1.3 1.9-2.4 1.9H8.4V10.1Z"/><path d="M4.1 10.1h4.3v9.7H4.1V10.1Z"/></svg>;
  if (type === 'love') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.4 4.7 13.5C1.8 10.8 3.1 5.8 7 5.1c2-.4 3.8.5 5 2 1.2-1.5 3-2.4 5-2 3.9.7 5.2 5.7 2.3 8.4L12 20.4Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="8.7" cy="9" r="1.15"/><circle cx="15.3" cy="9" r="1.15"/><ellipse cx="12" cy="15.1" rx="2.35" ry="3.05"/></svg>;
}

export default function ReactionPreview() {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [states, setStates] = useState<Record<ReactionTarget, ReactionState>>(() => Object.fromEntries(reactionTargets.map((t) => [t, emptyState()])) as Record<ReactionTarget, ReactionState>);
  const [visitorId, setVisitorId] = useState('');
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    setVisitorId(ensureVisitorId());
    let cancelled = false;
    let tries = 0;
    let timer = 0;

    const attach = () => {
      if (cancelled) return;
      const main = document.querySelector('.asagayaFestivalShell main#top');
      if (!main) { timer = window.setTimeout(attach, 80); return; }

      const found: Host[] = [];
      main.querySelectorAll<HTMLElement>('[data-eastokyo-share-rail]').forEach((mount) => {
        const target = mount.dataset.eastokyoShareRail as ReactionTarget | undefined;
        const rail = mount.querySelector<HTMLElement>('[aria-label="Partager cette section"]');
        if (!target || !rail || rail.querySelector('[data-eastokyo-reactions]')) return;
        const host = document.createElement('span');
        host.dataset.eastokyoReactions = target;
        host.className = styles.host;
        rail.appendChild(host);
        found.push({ target, element: host, key: target });
      });

      main.querySelectorAll<HTMLElement>('[aria-label="Partager cet article"]').forEach((rail, index) => {
        if (rail.querySelector('[data-eastokyo-reactions]')) return;
        const host = document.createElement('span');
        host.dataset.eastokyoReactions = 'article';
        host.className = styles.host;
        rail.appendChild(host);
        found.push({ target: 'article', element: host, key: `article-${index}` });
      });

      if (found.length) setHosts((current) => [...current, ...found]);
      tries += 1;
      if (tries < 20 && document.querySelectorAll('[data-eastokyo-reactions]').length < 8) timer = window.setTimeout(attach, 100);
    };

    timer = window.setTimeout(attach, 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      document.querySelectorAll('[data-eastokyo-reactions]').forEach((el) => el.remove());
    };
  }, []);

  useEffect(() => {
    if (!visitorId) return;
    let cancelled = false;
    Promise.all(reactionTargets.map(async (target) => {
      const response = await fetch(`/api/reactions?target=${encodeURIComponent(target)}&visitorId=${encodeURIComponent(visitorId)}`, { cache: 'no-store' });
      if (!response.ok) return null;
      const data = await response.json() as { reactions?: ReactionState };
      return data.reactions ? [target, data.reactions] as const : null;
    })).then((entries) => {
      if (cancelled) return;
      setStates((current) => {
        const next = { ...current };
        entries.forEach((entry) => { if (entry) next[entry[0]] = entry[1]; });
        return next;
      });
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [visitorId]);

  const toggle = async (target: ReactionTarget, reaction: ReactionType) => {
    if (!visitorId || busy) return;

    const before = states[target];
    const selected = before[reaction];
    const action = selected.active ? 'remove' : 'add';
    const key = `${target}:${reaction}`;
    setBusy(key);

    const optimistic = Object.fromEntries((['like', 'love', 'wow'] as ReactionType[]).map((type) => {
      const value = before[type];
      if (action === 'remove') {
        return [type, type === reaction ? { count: Math.max(0, value.count - 1), active: false } : { ...value, active: false }];
      }
      if (type === reaction) {
        return [type, { count: value.count + (value.active ? 0 : 1), active: true }];
      }
      return [type, { count: Math.max(0, value.count - (value.active ? 1 : 0)), active: false }];
    })) as ReactionState;

    setStates((all) => ({ ...all, [target]: optimistic }));

    try {
      const response = await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target, reaction, visitorId, action }),
      });
      if (!response.ok) throw new Error('Reaction update failed');
      const data = await response.json() as { reactions?: ReactionState };
      if (!data.reactions) throw new Error('Reaction response missing');
      setStates((all) => ({ ...all, [target]: data.reactions! }));
    } catch {
      setStates((all) => ({ ...all, [target]: before }));
    } finally {
      setBusy(null);
    }
  };

  const Cluster = ({ target }: { target: ReactionTarget }) => (
    <span className={styles.cluster} aria-label="Réactions — choisissez une seule réaction">
      {(['like','love','wow'] as ReactionType[]).map((type) => {
        const value = states[target][type];
        const isBusy = busy === `${target}:${type}`;
        const label = type === 'like' ? 'Like' : type === 'love' ? 'Love' : 'Wow';
        return <button key={type} type="button" className={`${styles.reaction} ${styles[type]} ${value.active ? styles.active : ''} ${isBusy ? styles.loading : ''}`} onClick={() => toggle(target, type)} aria-pressed={value.active} aria-label={`${label} — ${value.count}`} title={label}>
          <span className={styles.icon}><ReactionIcon type={type}/></span><span className={styles.count}>{value.count}</span>
        </button>;
      })}
    </span>
  );

  return <>{hosts.map((host) => createPortal(<Cluster target={host.target}/>, host.element, host.key))}</>;
}
