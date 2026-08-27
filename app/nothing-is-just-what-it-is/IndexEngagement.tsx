'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import shareStyles from '../the-city-puts-on-a-costume/ShareRailPreview.module.css';
import reactionStyles from '../the-city-puts-on-a-costume/ReactionPreview.module.css';
import type { ReactionType } from '../the-city-puts-on-a-costume/reaction-data';

type Target = 'index-object' | 'index-rayures' | 'index-ceramics';
type State = Record<ReactionType, { count: number; active: boolean }>;
type Moment = { id: Target; article: number; text: string };

const URL = 'https://www.eastokyo.com/nothing-is-just-what-it-is';
const TYPES: ReactionType[] = ['like', 'love', 'wow'];
const MOMENTS: Moment[] = [
  { id: 'index-object', article: 1, text: 'UN VÉLO DEVIENT UN TAUREAU — EASTOKYO' },
  { id: 'index-rayures', article: 3, text: 'PAUL SMITH Y MET SA PATTE — EASTOKYO' },
  { id: 'index-ceramics', article: 4, text: 'PICASSO NE FINISSAIT JAMAIS SON ASSIETTE — EASTOKYO' },
];
const empty = (): State => ({ like:{count:0,active:false}, love:{count:0,active:false}, wow:{count:0,active:false} });

function visitor() {
  const key='eastokyo-reaction-visitor-v1';
  let id=localStorage.getItem(key);
  if(!id){ id=crypto.randomUUID(); localStorage.setItem(key,id); }
  return id;
}

function Icon({name}:{name:string}) {
  if(name==='share') return <svg viewBox="0 0 24 24"><path d="M8.2 12.1 16 4.3M10.4 4.3H16v5.6M14.8 12.7v4.7a2.3 2.3 0 0 1-2.3 2.3H6.6a2.3 2.3 0 0 1-2.3-2.3v-5.9a2.3 2.3 0 0 1 2.3-2.3h4.7"/></svg>;
  if(name==='instagram') return <svg viewBox="0 0 24 24"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>;
  if(name==='tiktok') return <svg viewBox="0 0 24 24"><path d="M14.3 3.2v10.5a4.7 4.7 0 1 1-4-4.6v3a1.8 1.8 0 1 0 1.1 1.7V3.2h2.9Zm0 0c.7 2.5 2.2 4 4.7 4.6v3.1c-1.8-.2-3.4-.9-4.7-2"/></svg>;
  if(name==='pinterest') return <svg viewBox="0 0 24 24"><path d="M12 3.2a8.8 8.8 0 0 0-3.2 17l1.3-5.4c-.3-.7-.5-1.7-.5-2.5 0-2.3 1.3-4 3-4 1.4 0 2.1 1 2.1 2.3 0 1.4-.9 3.5-1.4 5.4-.4 1.6.8 2.9 2.4 2.9 2.9 0 4.8-3.7 4.8-8 0-3.3-2.7-6.1-7.5-6.1-5.5 0-8.9 4.1-8.9 8.7 0 1.6.5 2.8 1.3 3.7.4.4.4.6.3 1.1l-.4 1.6c-.1.5-.5.7-1 .5-2.6-1.1-3.8-4-3.8-7.3C.5 8 4.8 3.2 12 3.2Z"/></svg>;
  if(name==='facebook') return <svg viewBox="0 0 24 24"><path d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.4-4 4.1v2.4H8V13h2.6v8h3Z"/></svg>;
  if(name==='x') return <svg viewBox="0 0 24 24"><path d="M4.3 3.5h4.1l4.5 6 5.2-6h1.7l-6.1 7 6.3 10h-4.1l-4.9-6.6-5.8 6.6H3.5l6.7-7.6-5.9-9.4Zm3.2 1.3 9.1 14.4h1.9L9.4 4.8H7.5Z"/></svg>;
  if(name==='bluesky') return <svg viewBox="0 0 24 24"><path d="M12 10.8c-1.1-2.1-4-6-6.7-7.9C2.7 1 1.7 1.3 1.1 1.6.4 2 .3 3.1.3 3.8c0 .8.4 6.3.7 7.2.9 3 4 4 6.8 3.5-4.8.8-6 3.5-3.4 6.2 4.9 5 6.8-1.1 7.6-3.9.8 2.8 2.1 8.7 7.6 3.9 2.7-2.4.8-5.4-3.4-6.2 2.8.5 5.9-.5 6.8-3.5.3-.9.7-6.4.7-7.2 0-.7-.1-1.8-.8-2.2-.6-.3-1.6-.6-4.2 1.3-2.7 1.9-5.6 5.8-6.7 7.9Z"/></svg>;
  return <svg viewBox="0 0 24 24"><rect x="7.5" y="7.5" width="12" height="12" rx="1.5"/><path d="M16.5 7.5V5.7A1.7 1.7 0 0 0 14.8 4h-9A1.8 1.8 0 0 0 4 5.8v9A1.7 1.7 0 0 0 5.7 16.5h1.8"/></svg>;
}
function RIcon({type}:{type:ReactionType}) {
  if(type==='like') return <svg viewBox="0 0 24 24"><path d="M8.4 10.1 11.7 4c.5-.9 1.7-.9 2.1-.1.4.7.3 1.8.1 2.6l-.7 2.5h5.2c1.1 0 2 .9 2 2 0 .2 0 .4-.1.6l-1.7 6.3c-.3 1.1-1.3 1.9-2.4 1.9H8.4V10.1Z"/><path d="M4.1 10.1h4.3v9.7H4.1V10.1Z"/></svg>;
  if(type==='love') return <svg viewBox="0 0 24 24"><path d="M12 20.4 4.7 13.5C1.8 10.8 3.1 5.8 7 5.1c2-.4 3.8.5 5 2 1.2-1.5 3-2.4 5-2 3.9.7 5.2 5.7 2.3 8.4L12 20.4Z"/></svg>;
  return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="8.7" cy="9" r="1.15"/><circle cx="15.3" cy="9" r="1.15"/><ellipse cx="12" cy="15.1" rx="2.35" ry="3.05"/></svg>;
}
function links(text:string){const u=encodeURIComponent(URL),t=encodeURIComponent(text);return {p:`https://www.pinterest.com/pin/create/button/?url=${u}&description=${t}`,f:`https://www.facebook.com/sharer/sharer.php?u=${u}`,x:`https://twitter.com/intent/tweet?text=${t}&url=${u}`,b:`https://bsky.app/intent/compose?text=${encodeURIComponent(`${text} ${URL}`)}`};}

export default function IndexEngagement(){
  const [mounts,setMounts]=useState<Record<Target,HTMLElement>>({} as Record<Target,HTMLElement>);
  const [states,setStates]=useState<Record<Target,State>>({'index-object':empty(),'index-rayures':empty(),'index-ceramics':empty()});
  const [vid,setVid]=useState('');
  const [busy,setBusy]=useState<Set<Target>>(new Set());

  useEffect(()=>{
    setVid(visitor());
    const entries=document.querySelector('main#top section[aria-label="Entrées de l’index Picasso"]');
    if(!entries) return;
    const made={} as Record<Target,HTMLElement>;
    MOMENTS.forEach(m=>{const a=entries.querySelector(`article:nth-child(${m.article})`);if(!a?.parentElement)return;const el=document.createElement('div');el.className=shareStyles.momentMount;a.parentElement.insertBefore(el,a.nextSibling);made[m.id]=el;});
    setMounts(made);
    return()=>Object.values(made).forEach(e=>e.remove());
  },[]);

  useEffect(()=>{if(!vid)return;MOMENTS.forEach(async m=>{try{const r=await fetch(`/api/reactions?target=${m.id}&visitorId=${encodeURIComponent(vid)}`,{cache:'no-store'});if(!r.ok)return;const d=await r.json() as {reactions?:State};if(d.reactions)setStates(s=>({...s,[m.id]:d.reactions!}));}catch{}});},[vid]);

  const toggle=async(target:Target,type:ReactionType)=>{if(!vid||busy.has(target))return;const action=states[target][type].active?'remove':'add';setBusy(s=>new Set(s).add(target));try{const r=await fetch('/api/reactions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({target,reaction:type,visitorId:vid,action})});if(r.ok){const d=await r.json() as {reactions?:State};if(d.reactions)setStates(s=>({...s,[target]:d.reactions!}));}}finally{setBusy(s=>{const n=new Set(s);n.delete(target);return n;});}};
  const share=async(text:string)=>{if(navigator.share)await navigator.share({title:'EASTOKYO',text,url:URL});else await navigator.clipboard.writeText(URL);};

  const Rail=({m}:{m:Moment})=>{const l=links(m.text);return <div className={shareStyles.rail} aria-label="Partager cette section">
    <button className={`${shareStyles.cell} ${shareStyles.lead}`} onClick={()=>share(m.text)}><Icon name="share"/><span className={shareStyles.leadText}>PARTAGER CETTE PARTIE</span></button>
    <button className={shareStyles.cell} onClick={()=>share(m.text)} aria-label="Instagram"><Icon name="instagram"/></button><button className={shareStyles.cell} onClick={()=>share(m.text)} aria-label="TikTok"><Icon name="tiktok"/></button>
    <a className={shareStyles.cell} href={l.p} target="_blank" rel="noreferrer"><Icon name="pinterest"/></a><a className={shareStyles.cell} href={l.f} target="_blank" rel="noreferrer"><Icon name="facebook"/></a><a className={shareStyles.cell} href={l.x} target="_blank" rel="noreferrer"><Icon name="x"/></a><a className={shareStyles.cell} href={l.b} target="_blank" rel="noreferrer"><Icon name="bluesky"/></a><button className={`${shareStyles.cell} ${shareStyles.copy}`} onClick={()=>navigator.clipboard.writeText(URL)}><Icon name="copy"/></button>
    <span className={reactionStyles.host}><span className={reactionStyles.cluster}>{TYPES.map(type=>{const v=states[m.id][type];return <button key={type} className={`${reactionStyles.reaction} ${reactionStyles[type]} ${v.active?reactionStyles.active:''}`} disabled={busy.has(m.id)} onClick={()=>toggle(m.id,type)}><span className={reactionStyles.icon}><RIcon type={type}/></span><span className={reactionStyles.count}>{v.count}</span></button>;})}</span></span>
  </div>};

  return <>{MOMENTS.map(m=>mounts[m.id]?createPortal(<Rail m={m}/>,mounts[m.id],m.id):null)}</>;
}
