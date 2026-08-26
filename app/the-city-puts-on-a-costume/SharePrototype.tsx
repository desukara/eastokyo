'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './SharePrototype.module.css';

type ShareImage = {
  number: number;
  url: string;
  label: string;
};

type ShareSection = {
  id: string;
  caption: string;
  images: ShareImage[];
};

type Mounts = {
  top: HTMLElement | null;
  bottom: HTMLElement | null;
  sections: Record<string, HTMLElement>;
};

const STORY_URL = 'https://www.eastokyo.com/the-city-puts-on-a-costume';
const STORY_TITLE = 'La ville se déguise.';
const STORY_TEXT = "Le Tanabata d’Asagaya — EASTOKYO";
const STORY_IMAGE = 'https://www.eastokyo.com/images/editorial/asagaya-hero-01-desktop.jpg';
const SHARE_SLUG = 'asagaya-tanabata';

const sectionImage = (number: number, label: string): ShareImage => ({
  number,
  label,
  url: `https://www.eastokyo.com/images/editorial/asagaya-feature-${String(number).padStart(2, '0')}-desktop.jpg`,
});

const SECTIONS: ShareSection[] = [
  {
    id: 'asagaya-look-up',
    caption: "LA RUE SE MET À REGARDER EN L’AIR.",
    images: [
      sectionImage(2, "LA RUE SE MET À REGARDER EN L’AIR."),
      sectionImage(3, "LÀ-HAUT, RIEN N’ESSAIE D’ÊTRE RAISONNABLE."),
    ],
  },
  {
    id: 'asagaya-second-street',
    caption: 'LE PLAFOND DEVIENT UNE DEUXIÈME RUE.',
    images: [sectionImage(4, 'LE PLAFOND DEVIENT UNE DEUXIÈME RUE.')],
  },
  {
    id: 'asagaya-handmade',
    caption: 'UN FESTIVAL FAIT MAIN.',
    images: [
      sectionImage(5, 'FAIT MAIN. SUSPENDU SANS LA MOINDRE PUDEUR.'),
      sectionImage(6, 'DE LA COULEUR QUI NE SERT À RIEN DU TOUT.'),
      sectionImage(7, "QUELQU’UN A FAIT UN CHAT. ÉVIDEMMENT."),
    ],
  },
  {
    id: 'asagaya-crowd',
    caption: 'LA FOULE FABRIQUE SA PROPRE MÉTÉO.',
    images: [
      sectionImage(8, 'LA FOULE FABRIQUE SA PROPRE MÉTÉO.'),
      sectionImage(9, 'CONTINUEZ À MARCHER. CONTINUEZ À REGARDER EN L’AIR.'),
    ],
  },
  {
    id: 'asagaya-imagination',
    caption: "PENDANT QUELQUES JOURS, L’IMAGINATION DE QUELQU’UN PREND DU VOLUME.",
    images: [sectionImage(10, "PENDANT QUELQUES JOURS, L’IMAGINATION DE QUELQU’UN PREND DU VOLUME.")],
  },
  {
    id: 'asagaya-details',
    caption: "LE FESTIVAL S’INVITE JUSQUE DANS LES DEVANTURES.",
    images: [
      sectionImage(11, 'MÊME LES VITRINES ONT DE LA COMPAGNIE.'),
      sectionImage(12, "LE FESTIVAL S’INVITE JUSQUE DANS LES DEVANTURES."),
    ],
  },
];

function desktopImageSelector(number: number) {
  return `img[src$="asagaya-feature-${String(number).padStart(2, '0')}-desktop.jpg"]`;
}

function sectionShareUrl(section: ShareSection, image: ShareImage) {
  const params = new URLSearchParams({
    image: image.url.replace('https://www.eastokyo.com', ''),
    destination: '/the-city-puts-on-a-costume',
    section: section.id,
    caption: `${String(image.number).padStart(2, '0')} · ${image.label}`,
  });
  return `https://www.eastokyo.com/share/${SHARE_SLUG}?${params.toString()}`;
}

export default function SharePrototype() {
  const [mounts, setMounts] = useState<Mounts>({ top: null, bottom: null, sections: {} });
  const [open, setOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [selectedImageNumber, setSelectedImageNumber] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const activeSection = activeSectionId ? SECTIONS.find((section) => section.id === activeSectionId) ?? null : null;
  const activeImage = activeSection
    ? activeSection.images.find((image) => image.number === selectedImageNumber) ?? activeSection.images[0]
    : null;
  const shareUrl = activeSection && activeImage ? sectionShareUrl(activeSection, activeImage) : STORY_URL;
  const shareText = activeSection && activeImage
    ? `${String(activeImage.number).padStart(2, '0')} · ${activeImage.label} — EASTOKYO`
    : STORY_TEXT;
  const shareImage = activeImage?.url ?? STORY_IMAGE;
  const panelTitle = activeSection ? 'PARTAGER CETTE SECTION' : 'PARTAGER L’ARTICLE';

  useEffect(() => {
    const main = document.querySelector('.asagayaFestivalShell main#top');
    if (!main) return;

    const meta = Array.from(main.querySelectorAll('div')).find((el) => {
      const text = el.textContent || '';
      return text.includes('TOKYO STORY 04') && text.includes('JAMES SIMMONS') && el.children.length <= 5;
    }) as HTMLElement | undefined;
    const byline = meta?.querySelector('span:last-child') as HTMLElement | null;
    const footer = main.querySelector('footer');

    const topMount = byline ? document.createElement('span') : null;
    const bottomMount = footer ? document.createElement('div') : null;
    const sectionMounts: Record<string, HTMLElement> = {};
    const changedIds: Array<{ element: HTMLElement; previous: string }> = [];

    if (topMount && byline) byline.appendChild(topMount);
    if (bottomMount && footer?.parentElement) footer.parentElement.insertBefore(bottomMount, footer);

    SECTIONS.forEach((section) => {
      const firstFigure = main.querySelector(desktopImageSelector(section.images[0].number))?.closest('figure') as HTMLElement | null;
      if (!firstFigure) return;

      const groupTarget = section.images.length > 1 ? (firstFigure.closest('section') as HTMLElement | null) ?? firstFigure : firstFigure;
      changedIds.push({ element: groupTarget, previous: groupTarget.id });
      groupTarget.id = section.id;

      const mount = document.createElement('div');
      mount.dataset.eastokyoShareSection = section.id;
      firstFigure.appendChild(mount);
      sectionMounts[section.id] = mount;
    });

    setMounts({ top: topMount, bottom: bottomMount, sections: sectionMounts });

    const hash = window.location.hash.slice(1);
    if (hash && SECTIONS.some((section) => section.id === hash)) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ block: 'start' }));
      });
    }

    return () => {
      topMount?.remove();
      bottomMount?.remove();
      Object.values(sectionMounts).forEach((mount) => mount.remove());
      changedIds.forEach(({ element, previous }) => {
        if (previous) element.id = previous;
        else element.removeAttribute('id');
      });
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [open]);

  const openStory = () => {
    setActiveSectionId(null);
    setSelectedImageNumber(null);
    setStatus('');
    setOpen(true);
  };

  const openSection = (section: ShareSection) => {
    setActiveSectionId(section.id);
    setSelectedImageNumber(section.images[0].number);
    setStatus('');
    setOpen(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setStatus('LIEN COPIÉ.');
    } catch {
      setStatus('IMPOSSIBLE DE COPIER LE LIEN.');
    }
  };

  const nativeShare = async () => {
    const basePayload = { title: activeSection ? activeSection.caption : STORY_TITLE, text: shareText, url: shareUrl };
    try {
      if (!navigator.share) {
        await copyLink();
        return;
      }

      if (activeImage && navigator.canShare) {
        try {
          const response = await fetch(activeImage.url);
          if (response.ok) {
            const blob = await response.blob();
            const file = new File([blob], `eastokyo-asagaya-${String(activeImage.number).padStart(2, '0')}.jpg`, {
              type: blob.type || 'image/jpeg',
            });
            const filePayload = { ...basePayload, files: [file] };
            if (navigator.canShare(filePayload)) {
              await navigator.share(filePayload);
              setStatus('PARTAGÉ.');
              return;
            }
          }
        } catch {
          // Fall through to URL + text sharing. Some browsers support Web Share but not file sharing.
        }
      }

      await navigator.share(basePayload);
      setStatus('PARTAGÉ.');
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') setStatus('PARTAGE NON TERMINÉ.');
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(shareImage)}&description=${encodedText}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  const blueskyUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const redditUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`;

  const storyTrigger = (label: string, className: string) => (
    <button type="button" className={`${styles.trigger} ${className}`} onClick={openStory}>
      <span>{label}</span><span className={styles.arrow} aria-hidden="true">↗</span>
    </button>
  );

  const sectionTrigger = (section: ShareSection) => (
    <button type="button" className={`${styles.trigger} ${styles.sectionTrigger}`} onClick={() => openSection(section)}>
      <span>PARTAGER LA SECTION</span><span className={styles.arrow} aria-hidden="true">↗</span>
    </button>
  );

  return (
    <>
      {mounts.top && createPortal(storyTrigger('PARTAGER L’ARTICLE', styles.metaTrigger), mounts.top)}
      {SECTIONS.map((section) => mounts.sections[section.id]
        ? createPortal(sectionTrigger(section), mounts.sections[section.id], section.id)
        : null)}
      {mounts.bottom && createPortal(
        <div className={styles.bottomWrap}>{storyTrigger('PARTAGER L’ARTICLE', styles.bottomTrigger)}</div>,
        mounts.bottom,
      )}

      {open && (
        <>
          <button className={styles.scrim} aria-label="Fermer le panneau de partage" onClick={() => setOpen(false)} />
          <section ref={panelRef} className={styles.panel} role="dialog" aria-modal="true" aria-label={panelTitle}>
            <div className={styles.panelHead}>
              <div>
                <p className={styles.eyebrow}>EASTOKYO · ASAGAYA · SHARE</p>
                <h2 className={styles.panelTitle}>{panelTitle}</h2>
              </div>
              <button ref={closeRef} type="button" className={styles.close} aria-label="Fermer" onClick={() => setOpen(false)}>×</button>
            </div>

            {activeSection && activeImage && (
              <div className={styles.sharePreview}>
                <img src={activeImage.url} alt="" />
                <div>
                  <p className={styles.previewNumber}>{String(activeImage.number).padStart(2, '0')}</p>
                  <p className={styles.previewCaption}>{activeImage.label}</p>
                  <p className={styles.previewPromise}>IMAGE + SECTION + LIEN EASTOKYO</p>
                </div>
              </div>
            )}

            {activeSection && activeSection.images.length > 1 && (
              <div className={styles.imageChooser} aria-label="Choisir l’image de partage">
                <p>CHOISIR L’IMAGE</p>
                <div>
                  {activeSection.images.map((image) => (
                    <button
                      key={image.number}
                      type="button"
                      className={image.number === activeImage?.number ? styles.imageChoiceActive : styles.imageChoice}
                      aria-pressed={image.number === activeImage?.number}
                      onClick={() => setSelectedImageNumber(image.number)}
                    >
                      <img src={image.url} alt="" />
                      <span>{String(image.number).padStart(2, '0')}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!activeSection && (
              <div className={styles.storyPreview}>
                <p>LA VILLE SE DÉGUISE.</p>
                <span>L’article complet · EASTOKYO</span>
              </div>
            )}

            <button type="button" className={styles.nativeAction} onClick={nativeShare}>
              <span>
                <strong>PARTAGER VERS LES APPS</strong>
                <small>Instagram · TikTok · Messages · et les apps de votre appareil</small>
              </span>
              <span aria-hidden="true">↗</span>
            </button>

            <div className={styles.networkGrid} aria-label="Réseaux de partage direct">
              <a href={pinterestUrl} target="_blank" rel="noreferrer">PINTEREST ↗</a>
              <a href={xUrl} target="_blank" rel="noreferrer">X ↗</a>
              <a href={blueskyUrl} target="_blank" rel="noreferrer">BLUESKY ↗</a>
              <a href={facebookUrl} target="_blank" rel="noreferrer">FACEBOOK ↗</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
              <a href={redditUrl} target="_blank" rel="noreferrer">REDDIT ↗</a>
            </div>

            <button type="button" className={styles.copyAction} onClick={copyLink}>
              <span>COPIER LE LIEN EASTOKYO</span><span aria-hidden="true">＋</span>
            </button>

            <p className={styles.note}>
              {activeSection
                ? 'Le visuel choisi accompagne le partage quand l’appareil le permet. Le lien ouvre toujours cette section dans l’article, jamais un fichier image isolé.'
                : 'Ce partage ouvre l’article complet avec son image et ses métadonnées EASTOKYO.'}
            </p>
            {status && <p className={styles.status} role="status">{status}</p>}
          </section>
        </>
      )}
    </>
  );
}
