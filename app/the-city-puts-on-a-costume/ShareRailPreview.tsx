'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ShareRailPreview.module.css';

type Section = { id: string; number: number; endNumber: number; image: string; caption: string };
type Mounts = { top: HTMLElement | null; sections: Record<string, HTMLElement> };

const STORY_URL = 'https://www.eastokyo.com/the-city-puts-on-a-costume';
const STORY_TEXT = 'Le Tanabata d’Asagaya — EASTOKYO';

const SECTIONS: Section[] = [
  { id: 'asagaya-look-up', number: 2, endNumber: 3, image: '/images/editorial/asagaya-feature-02-desktop.jpg', caption: 'LA RUE SE MET À REGARDER EN L’AIR.' },
  { id: 'asagaya-second-street', number: 4, endNumber: 4, image: '/images/editorial/asagaya-feature-04-desktop.jpg', caption: 'LE PLAFOND DEVIENT UNE DEUXIÈME RUE.' },
  { id: 'asagaya-handmade', number: 5, endNumber: 7, image: '/images/editorial/asagaya-feature-05-desktop.jpg', caption: 'UN FESTIVAL FAIT MAIN.' },
  { id: 'asagaya-crowd', number: 8, endNumber: 9, image: '/images/editorial/asagaya-feature-08-desktop.jpg', caption: 'LA FOULE FABRIQUE SA PROPRE MÉTÉO.' },
  { id: 'asagaya-imagination', number: 10, endNumber: 10, image: '/images/editorial/asagaya-feature-10-desktop.jpg', caption: 'PENDANT QUELQUES JOURS, L’IMAGINATION DE QUELQU’UN PREND DU VOLUME.' },
  { id: 'asagaya-details', number: 11, endNumber: 12, image: '/images/editorial/asagaya-feature-11-desktop.jpg', caption: 'LE FESTIVAL S’INVITE JUSQUE DANS LES DEVANTURES.' },
];

function sectionUrl(section: Section) {
  const params = new URLSearchParams({
    image: section.image,
    destination: '/the-city-puts-on-a-costume',
    section: section.id,
    caption: `${String(section.number).padStart(2, '0')} · ${section.caption}`,
  });
  return `https://www.eastokyo.com/share/asagaya-tanabata?${params.toString()}`;
}

function directLinks(url: string, text: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text);
  return {
    x: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
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

export default function ShareRailPreview() {
  const [mounts, setMounts] = useState<Mounts>({ top: null, sections: {} });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const main = document.querySelector('.asagayaFestivalShell main#top');
    if (!main) return;

    const firstShareFigure = main.querySelector('img[src$="asagaya-feature-02-desktop.jpg"]')?.closest('figure') as HTMLElement | null;
    const firstShareSection = firstShareFigure?.closest('section') as HTMLElement | null;
    const top = firstShareSection?.parentElement ? document.createElement('div') : null;
    const sectionMounts: Record<string, HTMLElement> = {};

    if (top && firstShareSection?.parentElement) {
      top.className = styles.topMount;
      firstShareSection.parentElement.insertBefore(top, firstShareSection);
    }

    SECTIONS.forEach((section) => {
      const firstSelector = `img[src$="asagaya-feature-${String(section.number).padStart(2, '0')}-desktop.jpg"]`;
      const firstFigure = main.querySelector(firstSelector)?.closest('figure') as HTMLElement | null;
      if (!firstFigure) return;
      const mount = document.createElement('div');
      mount.dataset.eastokyoSectionShare = section.id;
      const group = section.endNumber !== section.number ? firstFigure.closest('section') as HTMLElement | null : null;
      (group || firstFigure).appendChild(mount);
      sectionMounts[section.id] = mount;
    });

    setMounts({ top, sections: sectionMounts });
    return () => { top?.remove(); Object.values(sectionMounts).forEach((el) => el.remove()); };
  }, []);

  const nativeShare = async (url: string, text: string) => {
    try {
      if (navigator.share) await navigator.share({ title: 'EASTOKYO', text, url });
      else { await navigator.clipboard.writeText(url); setStatus('LIEN COPIÉ'); window.setTimeout(() => setStatus(''), 1600); }
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') setStatus('PARTAGE NON TERMINÉ');
    }
  };

  const copy = async (url: string) => {
    try { await navigator.clipboard.writeText(url); setStatus('LIEN COPIÉ'); window.setTimeout(() => setStatus(''), 1600); }
    catch { setStatus('COPIE IMPOSSIBLE'); }
  };

  const ArticleRail = () => {
    const links = directLinks(STORY_URL, STORY_TEXT);
    return (
      <div className={styles.rail} aria-label="Partager cet article">
        <button className={`${styles.cell} ${styles.lead}`} type="button" onClick={() => nativeShare(STORY_URL, STORY_TEXT)} aria-label="Partager l’article" title="Partager l’article"><Icon name="share"/><span className={styles.leadText}>PARTAGER L’ARTICLE</span></button>
        <button className={styles.cell} type="button" onClick={() => nativeShare(STORY_URL, STORY_TEXT)} aria-label="Partager vers Instagram via votre appareil" title="Instagram"><Icon name="instagram"/></button>
        <button className={styles.cell} type="button" onClick={() => nativeShare(STORY_URL, STORY_TEXT)} aria-label="Partager vers TikTok via votre appareil" title="TikTok"><Icon name="tiktok"/></button>
        <button className={styles.cell} type="button" onClick={() => nativeShare(STORY_URL, STORY_TEXT)} aria-label="Partager vers Pinterest via votre appareil" title="Pinterest"><Icon name="pinterest"/></button>
        <a className={styles.cell} href={links.facebook} target="_blank" rel="noreferrer" aria-label="Partager sur Facebook" title="Facebook"><Icon name="facebook"/></a>
        <a className={styles.cell} href={links.x} target="_blank" rel="noreferrer" aria-label="Partager sur X" title="X"><Icon name="x"/></a>
        <a className={styles.cell} href={links.bluesky} target="_blank" rel="noreferrer" aria-label="Partager sur Bluesky" title="Bluesky"><Icon name="bluesky"/></a>
        <button className={`${styles.cell} ${styles.copy}`} type="button" onClick={() => copy(STORY_URL)} aria-label="Copier le lien EASTOKYO" title="Copier le lien"><Icon name="copy"/></button>
      </div>
    );
  };

  const SectionShare = ({ section }: { section: Section }) => {
    const url = sectionUrl(section);
    const text = `${String(section.number).padStart(2, '0')} · ${section.caption} — EASTOKYO`;
    const range = section.endNumber === section.number ? String(section.number).padStart(2, '0') : `${String(section.number).padStart(2, '0')}–${String(section.endNumber).padStart(2, '0')}`;
    return <button className={styles.sectionShare} type="button" onClick={() => nativeShare(url, text)} aria-label={`Partager les images ${range}`} title={`Partager ${range}`}><Icon name="share"/><span>SHARE {range}</span></button>;
  };

  return <>{mounts.top && createPortal(<ArticleRail />, mounts.top)}{SECTIONS.map((section) => mounts.sections[section.id] ? createPortal(<SectionShare section={section} />, mounts.sections[section.id], section.id) : null)}{status && <div className={styles.toast} role="status">{status}</div>}</>;
}
