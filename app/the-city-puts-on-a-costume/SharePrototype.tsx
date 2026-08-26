'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './SharePrototype.module.css';

type ShareContext = 'story' | 'image';

type Mounts = {
  top: HTMLElement | null;
  image: HTMLElement | null;
  bottom: HTMLElement | null;
};

const STORY_URL = 'https://www.eastokyo.com/the-city-puts-on-a-costume';
const STORY_TITLE = 'La ville se déguise.';
const STORY_TEXT = "Le Tanabata d’Asagaya — EASTOKYO";
const IMAGE_URL = 'https://www.eastokyo.com/images/editorial/asagaya-feature-04-desktop.jpg';
const IMAGE_TEXT = '04 · LE PLAFOND DEVIENT UNE DEUXIÈME RUE. — EASTOKYO';

export default function SharePrototype() {
  const [mounts, setMounts] = useState<Mounts>({ top: null, image: null, bottom: null });
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<ShareContext>('story');
  const [status, setStatus] = useState('');
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const main = document.querySelector('.asagayaFestivalShell main#top');
    if (!main) return;

    const meta = Array.from(main.querySelectorAll('div')).find((el) => {
      const text = el.textContent || '';
      return text.includes('TOKYO STORY 04') && text.includes('JAMES SIMMONS') && el.children.length <= 5;
    }) as HTMLElement | undefined;
    const byline = meta?.querySelector('span:last-child') as HTMLElement | null;

    const imageCaption = main
      .querySelector('img[src$="asagaya-feature-04-desktop.jpg"]')
      ?.closest('figure')
      ?.querySelector('figcaption') as HTMLElement | null;

    const footer = main.querySelector('footer');

    const topMount = byline ? document.createElement('span') : null;
    const imageMount = imageCaption ? document.createElement('span') : null;
    const bottomMount = footer ? document.createElement('div') : null;

    if (topMount && byline) byline.appendChild(topMount);
    if (imageMount && imageCaption) imageCaption.appendChild(imageMount);
    if (bottomMount && footer?.parentElement) footer.parentElement.insertBefore(bottomMount, footer);

    setMounts({ top: topMount, image: imageMount, bottom: bottomMount });

    return () => {
      topMount?.remove();
      imageMount?.remove();
      bottomMount?.remove();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [open]);

  const shareText = context === 'image' ? IMAGE_TEXT : STORY_TEXT;
  const panelTitle = context === 'image' ? 'PARTAGER CETTE IMAGE' : 'PARTAGER CETTE HISTOIRE';

  const pinterestUrl = useMemo(() => {
    const params = new URLSearchParams({
      url: STORY_URL,
      media: context === 'image' ? IMAGE_URL : 'https://www.eastokyo.com/images/editorial/asagaya-hero-01-desktop.jpg',
      description: shareText,
    });
    return `https://www.pinterest.com/pin/create/button/?${params.toString()}`;
  }, [context, shareText]);

  const openPanel = (nextContext: ShareContext) => {
    setContext(nextContext);
    setStatus('');
    setOpen(true);
  };

  const nativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: STORY_TITLE, text: shareText, url: STORY_URL });
        setStatus('PARTAGÉ.');
      } else {
        await navigator.clipboard.writeText(`${shareText} ${STORY_URL}`);
        setStatus('LIEN COPIÉ.');
      }
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') setStatus('PARTAGE ANNULÉ.');
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(STORY_URL);
    setStatus('LIEN COPIÉ.');
  };

  const trigger = (label: string, nextContext: ShareContext, className: string) => (
    <button type="button" className={`${styles.trigger} ${className}`} onClick={() => openPanel(nextContext)}>
      {label} <span aria-hidden="true">↗</span>
    </button>
  );

  return (
    <>
      {mounts.top && createPortal(trigger('PARTAGER', 'story', styles.metaTrigger), mounts.top)}
      {mounts.image && createPortal(trigger('PARTAGER L’IMAGE', 'image', styles.imageTrigger), mounts.image)}
      {mounts.bottom && createPortal(<div className={styles.bottomWrap}>{trigger('PARTAGER CETTE HISTOIRE', 'story', styles.bottomTrigger)}</div>, mounts.bottom)}

      {open && (
        <>
          <button className={styles.scrim} aria-label="Fermer le panneau de partage" onClick={() => setOpen(false)} />
          <section className={styles.panel} role="dialog" aria-modal="true" aria-label={panelTitle}>
            <div className={styles.panelHead}>
              <div>
                <p className={styles.eyebrow}>EASTOKYO · ASAGAYA</p>
                <h2 className={styles.panelTitle}>{panelTitle}</h2>
              </div>
              <button ref={closeRef} type="button" className={styles.close} aria-label="Fermer" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className={styles.actions}>
              <button type="button" className={styles.action} onClick={nativeShare}><span>INSTAGRAM · TIKTOK · PLUS</span><span aria-hidden="true">↗</span></button>
              <a className={styles.action} href={pinterestUrl} target="_blank" rel="noreferrer"><span>PINTEREST</span><span aria-hidden="true">↗</span></a>
              <button type="button" className={styles.action} onClick={copyLink}><span>COPIER LE LIEN</span><span aria-hidden="true">＋</span></button>
            </div>
            <p className={styles.note}>Instagram et TikTok passent par le menu de partage de votre appareil lorsqu’il est disponible. Pinterest ouvre directement l’image ou l’histoire sélectionnée.</p>
            {status && <p className={styles.status} role="status">{status}</p>}
          </section>
        </>
      )}
    </>
  );
}
