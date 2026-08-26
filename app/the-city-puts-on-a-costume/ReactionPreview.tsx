'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ReactionPreview.module.css';
import { reactionTargets, reactionTypes, type ReactionTarget, type ReactionType } from './reaction-data';

type ReactionState = Record<ReactionType, { count: number; active: boolean }>;
type MountMap = Record<ReactionTarget, HTMLElement | null>;

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

export default function ReactionPreview() {
  const [mounts, setMounts] = useState<MountMap>(() => Object.fromEntries(reactionTargets.map((t) => [t, null])) as MountMap);
  const [states, setStates] = useState<Record<ReactionTarget, ReactionState>>(() => Object.fromEntries(reactionTargets.map((t) => [t, emptyState()])) as Record<ReactionTarget, ReactionState>);
  const [visitorId, setVisitorId] = useState('');
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    setVisitorId(ensureVisitorId());

    const main = document.querySelector('.asagayaFestivalShell main#top');
    if (!main) return;

    const map = Object.fromEntries(reactionTargets.map((t) => [t, null])) as MountMap;
    reactionTargets.filter((t) => t !== 'article').forEach((target) => {
      map[target] = main.querySelector(`[data-eastokyo-share-rail="${target}"]`) as HTMLElement | null;
    });

    const firstFigure = main.querySelector('img[src$="asagaya-feature-02-desktop.jpg"]')?.closest('figure') as HTMLElement | null;
    const firstSection = firstFigure?.closest('section') as HTMLElement | null;
    const topMount = firstSection?.previousElementSibling as HTMLElement | null;
    const footer = main.querySelector('footer');
    const bottomMount = footer?.previousElementSibling as HTMLElement | null;

    if (topMount) {
      topMount.classList.add('eastokyoEngagementMount');
      map.article = topMount;
    }
    if (bottomMount) bottomMount.classList.add('eastokyoEngagementMount');
    Object.values(map).forEach((mount) => mount?.classList.add('eastokyoEngagementMount'));

    setMounts(map);

    return () => {
      topMount?.classList.remove('eastokyoEngagementMount');
      bottomMount?.classList.remove('eastokyoEngagementMount');
      Object.values(map).forEach((mount) => mount?.classList.remove('eastokyoEngagementMount'));
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

  const bottomMount = useMemo(() => {
    if (typeof document === 'undefined') return null;
    const main = document.querySelector('.asagayaFestivalShell main#top');
    const footer = main?.querySelector('footer');
    return footer?.previousElementSibling as HTMLElement | null;
  }, [mounts]);

  const toggle = async (target: ReactionTarget, reaction: ReactionType) => {
    if (!visitorId) return;
    const current = states[target][reaction];
    const action = current.active ? 'remove' : 'add';
    const key = `${target}:${reaction}`;
    setBusy(key);

    setStates((all) => ({
      ...all,
      [target]: {
        ...all[target],
        [reaction]: { count: Math.max(0, current.count + (current.active ? -1 : 1)), active: !current.active },
      },
    }));

    try {
      const response = await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target, reaction, visitorId, action }),
      });
      if (!response.ok) throw new Error('Reaction update failed');
      const data = await response.json() as { count: number; active: boolean };
      setStates((all) => ({
        ...all,
        [target]: { ...all[target], [reaction]: { count: data.count, active: data.active } },
      }));
    } catch {
      setStates((all) => ({
        ...all,
        [target]: { ...all[target], [reaction]: current },
      }));
    } finally {
      setBusy(null);
    }
  };

  const Cluster = ({ target }: { target: ReactionTarget }) => {
    const state = states[target];
    const items: Array<{ type: ReactionType; icon: string; label: string; className: string }> = [
      { type: 'like', icon: '👍', label: 'Like', className: styles.like },
      { type: 'love', icon: '♥', label: 'Love', className: styles.love },
      { type: 'wow', icon: '😮', label: 'Wow', className: styles.wow },
    ];

    return <div className={styles.cluster} aria-label="Réactions">
      {items.map((item) => {
        const value = state[item.type];
        const isBusy = busy === `${target}:${item.type}`;
        return <button
          key={item.type}
          type="button"
          className={`${styles.reaction} ${item.className} ${value.active ? styles.active : ''} ${isBusy ? styles.loading : ''}`}
          onClick={() => toggle(target, item.type)}
          aria-pressed={value.active}
          aria-label={`${item.label} — ${value.count}`}
          title={item.label}
        >
          <span className={styles.icon} aria-hidden="true">{item.icon}</span>
          <span className={styles.count}>{value.count}</span>
        </button>;
      })}
    </div>;
  };

  return <>
    {mounts.article && createPortal(<Cluster target="article" />, mounts.article)}
    {reactionTargets.filter((t) => t !== 'article').map((target) => mounts[target] ? createPortal(<Cluster target={target} />, mounts[target]!, `reaction-${target}`) : null)}
    {bottomMount && createPortal(<Cluster target="article" />, bottomMount)}
  </>;
}
