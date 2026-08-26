'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ShareRailPreview.module.css';

type Section = { id: string; number: number; image: string; caption: string };
type Mounts = { top: HTMLElement | null; bottom: HTMLElement | null; sections: Record<string, HTMLElement> };

const STORY_URL = 'https://www.eastokyo.com/the-city-puts-on-a-costume';
const STORY_TEXT = 'Le Tanabata d’Asagaya — EASTOKYO';

const SECTIONS: Section[] = [
  { id: 'asagaya-look-up', number: 2, image: '/images/editorial/asagaya-feature-02-desktop.jpg', caption: 'LA RUE SE MET À REGARDER EN L’AIR.' },
  { id: 'asagaya-second-street', number: 4, image: '/images/editorial/asagaya-feature-04-desktop.jpg', caption: 'LE PLAFOND DEVIENT UNE DEUXIÈME RUE.' },
  { id: 'asagaya-handmade', number: 5, image: '/images/editorial/asagaya-feature-05-desktop.jpg', caption: 'UN FESTIVAL FAIT MAIN.' },
  { id: 'asagaya-crowd', number: 8, image: '/images/editorial/asagaya-feature-08-desktop.jpg', caption: 'LA FOULE FABRIQUE SA PROPRE MÉTÉO.' },
  { id: 'asagaya-imagination', number: 10, image: '/images/editorial/asagaya-feature-10-desktop.jpg', caption: 'PENDANT QUELQUES JOURS, L’IMAGINATION DE QUELQU’UN PREND DU VOLUME.' },
  { id: 'asagaya-details', number: 11, image: '/images/editorial/asagaya-feature-11-desktop.jpg', caption: 'LE FESTIVAL S’INVITE JUSQUE DANS LES DEVANTURES.' },
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

function directLinks(url: string, text: string, image?: string) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text);
  return {
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent(image ? `https://www.eastokyo.com${image}` : '')}&description=${t}`,
    x: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
  };
}

export default function ShareRailPreview() {
  const [mounts, setMounts] = useState<Mounts>({ top: null, bottom: null, sections: {} });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const main = document.querySelector('.asagayaFestivalShell main#top');
    if (!main) return;

    const meta = Array.from(main.querySelectorAll('div')).find((el) => {
      const text = el.textContent || '';
      return text.includes('TOKYO STORY 04') && text.includes('JAMES SIMMONS') && el.children.length <= 5;
    }) as HTMLElement | undefined;
    const byline = meta?.querySelector('span:last-child') as HTMLElement | null;
    const footer = main.querySelector('footer');
    const top = byline ? document.createElement('span') : null;
    const bottom = footer ? document.createElement('div') : null;
    const sectionMounts: Record<string, HTMLElement> = {};

    if (top && byline) byline.appendChild(top);
    if (bottom && footer?.parentElement) footer.parentElement.insertBefore(bottom, footer);

    SECTIONS.forEach((section) => {
      const selector = `img[src$="asagaya-feature-${String(section.number).padStart(2, '0')}-desktop.jpg"]`;
      const figure = main.querySelector(selector)?.closest('figure') as HTMLElement | null;
      if (!figure) return;
      const mount = document.createElement('div');
      mount.dataset.eastokyoShareRail = section.id;
      figure.appendChild(mount);
      sectionMounts[section.id] = mount;
    });

    setMounts({ top, bottom, sections: sectionMounts });
    return () => {
      top?.remove();
      bottom?.remove();
      Object.values(sectionMounts).forEach((el) => el.remove());
    };
  }, []);

  const nativeShare = async (url: string, text: string) => {
    try {
      if (navigator.share) await navigator.share({ title: 'EASTOKYO', text, url });
      else {
        await navigator.clipboard.writeText(url);
        setStatus('LIEN COPIÉ');
      }
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') setStatus('PARTAGE NON TERMINÉ');
    }
  };

  const copy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setStatus('LIEN COPIÉ');
      window.setTimeout(() => setStatus(''), 1600);
    } catch {
      setStatus('COPIE IMPOSSIBLE');
    }
  };

  const Rail = ({ section }: { section?: Section }) => {
    const url = section ? sectionUrl(section) : STORY_URL;
    const text = section ? `${String(section.number).padStart(2, '0')} · ${section.caption} — EASTOKYO` : STORY_TEXT;
    const links = directLinks(url, text, section?.image);
    const label = section ? 'PARTAGER' : 'PARTAGER L’ARTICLE';
    return (
      <div className={styles.rail} aria-label={section ? 'Partager cette section' : 'Partager cet article'}>
        <button className={`${styles.cell} ${styles.lead}`} type="button" onClick={() => nativeShare(url, text)} aria-label={label} title={label}>
          <span className={styles.shareMark}>↗</span><span className={styles.leadText}>{label}</span>
        </button>
        <button className={styles.cell} type="button" onClick={() => nativeShare(url, text)} aria-label="Partager vers Instagram via votre appareil" title="Instagram / apps"><span className={styles.ig}>◎</span></button>
        <button className={styles.cell} type="button" onClick={() => nativeShare(url, text)} aria-label="Partager vers TikTok via votre appareil" title="TikTok / apps"><span className={styles.tk}>♪</span></button>
        <a className={styles.cell} href={links.pinterest} target="_blank" rel="noreferrer" aria-label="Partager sur Pinterest" title="Pinterest"><span className={styles.pinterest}>P</span></a>
        <a className={styles.cell} href={links.x} target="_blank" rel="noreferrer" aria-label="Partager sur X" title="X"><span className={styles.x}>𝕏</span></a>
        <a className={styles.cell} href={links.facebook} target="_blank" rel="noreferrer" aria-label="Partager sur Facebook" title="Facebook"><span className={styles.facebook}>f</span></a>
        <a className={styles.cell} href={links.linkedin} target="_blank" rel="noreferrer" aria-label="Partager sur LinkedIn" title="LinkedIn"><span className={styles.linkedin}>in</span></a>
        <button className={styles.cell} type="button" onClick={() => copy(url)} aria-label="Copier le lien EASTOKYO" title="Copier le lien"><span className={styles.copy}>⧉</span></button>
      </div>
    );
  };

  return (
    <>
      {mounts.top && createPortal(<Rail />, mounts.top)}
      {SECTIONS.map((section) => mounts.sections[section.id] ? createPortal(<Rail section={section} />, mounts.sections[section.id], section.id) : null)}
      {mounts.bottom && createPortal(<div className={styles.bottom}><Rail /></div>, mounts.bottom)}
      {status && <div className={styles.toast} role="status">{status}</div>}
    </>
  );
}
