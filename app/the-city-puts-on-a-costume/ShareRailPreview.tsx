'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ShareRailPreview.module.css';

type Moment = { id: 'article' | 'asagaya-handmade' | 'asagaya-crowd'; image?: string; caption: string; anchorImage?: number; placement: 'before' | 'after-group' };
type Mounts = Record<string, HTMLElement>;

const STORY_URL = 'https://www.eastokyo.com/the-city-puts-on-a-costume';
const STORY_TEXT = 'Asagaya Tanabata — EASTOKYO';

const MOMENTS: Moment[] = [
  { id: 'article', caption: STORY_TEXT, anchorImage: 2, placement: 'before' },
  { id: 'asagaya-handmade', image: '/images/editorial/asagaya-feature-05-desktop.jpg', caption: 'A FESTIVAL MADE BY HAND — EASTOKYO', anchorImage: 5, placement: 'after-group' },
  { id: 'asagaya-crowd', image: '/images/editorial/asagaya-feature-08-desktop.jpg', caption: 'THE USEFUL CITY STEPS ASIDE — EASTOKYO', anchorImage: 8, placement: 'after-group' },
];

function shareUrl(moment: Moment) {
  if (moment.id === 'article') return STORY_URL;
  const params = new URLSearchParams({ image: moment.image || '/images/editorial/asagaya-hero-01-desktop.jpg', destination: '/the-city-puts-on-a-costume', section: moment.id, caption: moment.caption });
  return `https://www.eastokyo.com/share/asagaya-tanabata?${params.toString()}`;
}

function directLinks(url: string, text: string) {
  const u = encodeURIComponent(url); const t = encodeURIComponent(text);
  return { pinterest: `https://www.pinterest.com/pin/create/button/?url=${u}&description=${t}`, x: `https://twitter.com/intent/tweet?text=${t}&url=${u}`, facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`, bluesky: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${text} ${url}`)}` };
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
  const [mounts, setMounts] = useState<Mounts>({}); const [status, setStatus] = useState('');
  useEffect(() => { const main=document.querySelector('.asagayaFestivalShell main#top'); if(!main)return; const created:Mounts={}; MOMENTS.forEach((moment)=>{const selector=`img[src$="asagaya-feature-${String(moment.anchorImage).padStart(2,'0')}-desktop.jpg"]`;const figure=main.querySelector(selector)?.closest('figure') as HTMLElement|null;if(!figure)return;const mount=document.createElement('div');mount.className=styles.momentMount;if(moment.id!=='article')mount.dataset.eastokyoShareRail=moment.id;if(moment.placement==='before'){const group=figure.closest('section') as HTMLElement|null;const anchor=group||figure;anchor.parentElement?.insertBefore(mount,anchor);}else{const group=figure.closest('section') as HTMLElement|null;const anchor=group||figure;anchor.parentElement?.insertBefore(mount,anchor.nextSibling);}created[moment.id]=mount;});setMounts(created);return()=>Object.values(created).forEach((el)=>el.remove());},[]);
  const nativeShare=async(url:string,text:string)=>{try{if(navigator.share)await navigator.share({title:'EASTOKYO',text,url});else{await navigator.clipboard.writeText(url);setStatus('LINK COPIED');window.setTimeout(()=>setStatus(''),1600);}}catch(error){if((error as DOMException)?.name!=='AbortError')setStatus('SHARE NOT COMPLETED');}};
  const copy=async(url:string)=>{try{await navigator.clipboard.writeText(url);setStatus('LINK COPIED');window.setTimeout(()=>setStatus(''),1600);}catch{setStatus('COULD NOT COPY');}};
  const Rail=({moment}:{moment:Moment})=>{const url=shareUrl(moment);const text=moment.caption;const links=directLinks(url,text);const article=moment.id==='article';const label=article?'SHARE ARTICLE':'SHARE THIS SECTION';return <div className={styles.rail} aria-label={article?'Share this article':'Share this section'}><button className={`${styles.cell} ${styles.lead}`} type="button" onClick={()=>nativeShare(url,text)} aria-label={label} title={label}><Icon name="share"/><span className={styles.leadText}>{label}</span></button><button className={styles.cell} type="button" onClick={()=>nativeShare(url,text)} aria-label="Share to Instagram using your device" title="Instagram"><Icon name="instagram"/></button><button className={styles.cell} type="button" onClick={()=>nativeShare(url,text)} aria-label="Share to TikTok using your device" title="TikTok"><Icon name="tiktok"/></button><a className={styles.cell} href={links.pinterest} target="_blank" rel="noreferrer" aria-label="Share on Pinterest" title="Pinterest"><Icon name="pinterest"/></a><a className={styles.cell} href={links.facebook} target="_blank" rel="noreferrer" aria-label="Share on Facebook" title="Facebook"><Icon name="facebook"/></a><a className={styles.cell} href={links.x} target="_blank" rel="noreferrer" aria-label="Share on X" title="X"><Icon name="x"/></a><a className={styles.cell} href={links.bluesky} target="_blank" rel="noreferrer" aria-label="Share on Bluesky" title="Bluesky"><Icon name="bluesky"/></a><button className={`${styles.cell} ${styles.copy}`} type="button" onClick={()=>copy(url)} aria-label="Copy EASTOKYO link" title="Copy link"><Icon name="copy"/></button></div>;};
  return <>{MOMENTS.map((moment)=>mounts[moment.id]?createPortal(<Rail moment={moment}/>,mounts[moment.id],moment.id):null)}{status&&<div className={styles.toast} role="status">{status}</div>}</>;
}
