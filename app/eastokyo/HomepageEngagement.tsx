"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { homepageStoryList, type HomepageStory, type StoryId } from "./engagement-data";

type Mount = {
  key: string;
  kind: "story" | "image";
  host: HTMLElement;
  story: HomepageStory;
  imagePath?: string;
  label?: string;
};

type ShareTarget = {
  story: HomepageStory;
  imagePath?: string;
  label?: string;
};

type HeartResponse = {
  automaticHearts: number;
  persistent: boolean;
};

const LIKED_PREFIX = "eastokyo:liked:";
const VISITOR_KEY = "eastokyo:heart-visitor";

function visitorId() {
  const existing = window.localStorage.getItem(VISITOR_KEY);
  if (existing) return existing;
  const id = typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  window.localStorage.setItem(VISITOR_KEY, id);
  return id;
}

function likedKey(story: StoryId) {
  return `${LIKED_PREFIX}${story}`;
}

function readableCount(value: number) {
  return new Intl.NumberFormat("en-US").format(Math.max(0, value));
}

function editorialImagePath(img: HTMLImageElement) {
  const candidates = [img.getAttribute("src"), img.currentSrc];
  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      const url = new URL(candidate, window.location.origin);
      if (url.pathname === "/_next/image") {
        const original = url.searchParams.get("url");
        if (original?.startsWith("/images/editorial/")) return original;
      }
      if (url.pathname.startsWith("/images/editorial/")) return url.pathname;
    } catch {
      // Ignore malformed candidates and try the next source.
    }
  }
  return undefined;
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.2 4.4 13A4.8 4.8 0 0 1 11.2 6.2L12 7l.8-.8A4.8 4.8 0 1 1 19.6 13L12 20.2Z" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.8 12.7 15.5 9m-6.7 2.3 6.7 3.7M18 10.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM6 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM18 19a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon() {
  return <span className="engagement-brand-letter" aria-hidden="true">f</span>;
}

function XIcon() {
  return <span className="engagement-brand-letter engagement-brand-letter--x" aria-hidden="true">𝕏</span>;
}

function PinterestIcon() {
  return <span className="engagement-brand-letter engagement-brand-letter--p" aria-hidden="true">P</span>;
}

function StoryEngagement({ story, onShare }: { story: HomepageStory; onShare: (target: ShareTarget) => void }) {
  const [liked, setLiked] = useState(false);
  const [automatic, setAutomatic] = useState(0);
  const [persistent, setPersistent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const localLiked = window.localStorage.getItem(likedKey(story.id)) === "1";
    setLiked(localLiked);

    let cancelled = false;
    fetch(`/api/hearts?story=${encodeURIComponent(story.id)}`, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("heart fetch failed"))))
      .then((data: HeartResponse) => {
        if (cancelled) return;
        setPersistent(Boolean(data.persistent));
        setAutomatic(data.persistent ? Number(data.automaticHearts || 0) : localLiked ? 1 : 0);
      })
      .catch(() => {
        if (!cancelled) {
          setPersistent(false);
          setAutomatic(localLiked ? 1 : 0);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [story.id]);

  const total = story.baseHearts + automatic;

  const toggleHeart = async () => {
    if (busy) return;
    const nextLiked = !liked;
    const previousAutomatic = automatic;
    setBusy(true);
    setLiked(nextLiked);
    window.localStorage.setItem(likedKey(story.id), nextLiked ? "1" : "0");
    setAutomatic((value) => Math.max(0, value + (nextLiked ? 1 : -1)));

    try {
      const response = await fetch("/api/hearts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ story: story.id, visitorId: visitorId(), action: nextLiked ? "like" : "unlike" }),
      });
      if (!response.ok) throw new Error("heart update failed");
      const data = (await response.json()) as HeartResponse;
      setPersistent(Boolean(data.persistent));
      if (data.persistent) setAutomatic(Number(data.automaticHearts || 0));
    } catch {
      // Keep the local reaction usable even if the persistence layer is unavailable.
      setPersistent(false);
      setAutomatic(nextLiked ? Math.max(1, previousAutomatic + 1) : Math.max(0, previousAutomatic - 1));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="story-engagement" data-persistent-hearts={persistent ? "true" : "false"}>
      <button className={`story-heart ${liked ? "is-liked" : ""}`} type="button" onClick={toggleHeart} aria-pressed={liked} aria-label={`${liked ? "Remove heart from" : "Heart"} ${story.title}`} disabled={busy}>
        <HeartIcon filled={liked} />
        <span className="story-heart-count">{readableCount(total)}</span>
      </button>
      <span className="story-engagement-rule" aria-hidden="true" />
      <button className="story-share" type="button" onClick={() => onShare({ story })} aria-label={`Share ${story.title}`}>
        <ShareIcon />
        <span>SHARE</span>
      </button>
    </div>
  );
}

function ImageShare({ target, onShare }: { target: ShareTarget; onShare: (target: ShareTarget) => void }) {
  return (
    <button className="image-share-button" type="button" onClick={() => onShare(target)} aria-label={`Share ${target.label || target.story.title}`}>
      <ShareIcon />
      <span>SHARE</span>
    </button>
  );
}

function shareUrl(target: ShareTarget) {
  const url = new URL(`/share/${target.story.shareSlug}`, window.location.origin);
  if (target.imagePath) url.searchParams.set("image", target.imagePath);
  return url.toString();
}

function openPopup(url: string, name: string) {
  const width = 640;
  const height = 620;
  const left = Math.max(0, Math.round((window.screen.width - width) / 2));
  const top = Math.max(0, Math.round((window.screen.height - height) / 2));
  window.open(url, name, `popup=yes,width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`);
}

function ShareSheet({ target, onClose }: { target: ShareTarget | null; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!target) return;
    setCopied(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [target, onClose]);

  if (!target) return null;

  const url = shareUrl(target);
  const title = target.label || target.story.title;
  const text = `${target.story.title} — EASTOKYO`;
  const media = target.imagePath ? new URL(target.imagePath, window.location.origin).toString() : new URL(target.story.shareImage, window.location.origin).toString();

  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const x = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  const pinterest = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(text)}`;
  const email = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${target.story.description}\n\n${url}`)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy this EASTOKYO link:", url);
    }
  };

  const nativeShare = async () => {
    if (!navigator.share) {
      await copy();
      return;
    }
    try {
      await navigator.share({ title, text: target.story.description, url });
      onClose();
    } catch {
      // Cancellation is normal; leave the sheet open.
    }
  };

  return (
    <div className="share-sheet-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <section className="share-sheet" role="dialog" aria-modal="true" aria-labelledby="share-sheet-title">
        <div className="share-sheet-head">
          <div>
            <p>EASTOKYO</p>
            <h2 id="share-sheet-title">SHARE THIS MOMENT.</h2>
          </div>
          <button type="button" className="share-sheet-close" onClick={onClose} aria-label="Close sharing options">×</button>
        </div>
        <p className="share-sheet-story">{target.story.title}</p>
        {target.imagePath && <p className="share-sheet-image-note">THIS PHOTOGRAPH WILL LEAD BACK TO THE STORY.</p>}
        <div className="share-sheet-grid">
          <button type="button" className="share-destination is-facebook" onClick={() => openPopup(facebook, "eastokyo-facebook-share")}><span className="share-destination-icon"><FacebookIcon /></span><span>Facebook</span></button>
          <button type="button" className="share-destination is-x" onClick={() => openPopup(x, "eastokyo-x-share")}><span className="share-destination-icon"><XIcon /></span><span>X</span></button>
          <button type="button" className="share-destination is-pinterest" onClick={() => openPopup(pinterest, "eastokyo-pinterest-share")}><span className="share-destination-icon"><PinterestIcon /></span><span>Pinterest</span></button>
          <button type="button" className="share-destination is-copy" onClick={copy}><span className="share-destination-icon">↗</span><span>{copied ? "Copied" : "Copy link"}</span></button>
          <button type="button" className="share-destination is-email" onClick={() => { window.location.href = email; }}><span className="share-destination-icon">@</span><span>Email</span></button>
          <button type="button" className="share-destination is-more" onClick={nativeShare}><span className="share-destination-icon">•••</span><span>More</span></button>
        </div>
        <p className="share-sheet-foot">Share the story. Keep the source attached.</p>
      </section>
    </div>
  );
}

export default function HomepageEngagement() {
  const pathname = usePathname();
  const [mounts, setMounts] = useState<Mount[]>([]);
  const [shareTarget, setShareTarget] = useState<ShareTarget | null>(null);

  const isHomepage = pathname === "/" || pathname === "/eastokyo";

  useEffect(() => {
    if (!isHomepage) {
      setMounts([]);
      return;
    }

    const createdHosts: HTMLElement[] = [];
    const touchedContainers = new Set<HTMLElement>();
    const nextMounts: Mount[] = [];

    for (const story of homepageStoryList) {
      const cta = document.querySelector<HTMLElement>(story.ctaSelector);
      if (cta?.parentElement) {
        const host = document.createElement("div");
        host.className = "story-engagement-host";
        cta.insertAdjacentElement("afterend", host);
        createdHosts.push(host);
        nextMounts.push({ key: `story-${story.id}`, kind: "story", host, story });
      }

      const seenImages = new Set<string>();
      for (const scopeSelector of story.imageScopes) {
        const scope = document.querySelector<HTMLElement>(scopeSelector);
        if (!scope) continue;
        const images = Array.from(scope.querySelectorAll<HTMLImageElement>("img"));

        images.forEach((img, index) => {
          const imagePath = editorialImagePath(img);
          if (!imagePath || seenImages.has(imagePath)) return;
          seenImages.add(imagePath);

          let container = img.closest<HTMLElement>("figure");
          if (!container && scope.id === "latest") container = scope;
          if (!container || touchedContainers.has(container)) return;

          touchedContainers.add(container);
          container.classList.add("eastokyo-shareable-image");
          const host = document.createElement("div");
          host.className = "image-share-host";
          container.appendChild(host);
          createdHosts.push(host);

          const caption = container.querySelector("figcaption")?.textContent?.trim();
          const label = img.alt?.trim() || caption || `${story.title} image ${index + 1}`;
          nextMounts.push({ key: `image-${story.id}-${imagePath}`, kind: "image", host, story, imagePath, label });
        });
      }
    }

    setMounts(nextMounts);

    return () => {
      touchedContainers.forEach((container) => container.classList.remove("eastokyo-shareable-image"));
      createdHosts.forEach((host) => host.remove());
    };
  }, [isHomepage]);

  const portals = useMemo(
    () => mounts.map((mount) => {
      if (mount.kind === "story") {
        return createPortal(<StoryEngagement story={mount.story} onShare={setShareTarget} />, mount.host, mount.key);
      }
      return createPortal(<ImageShare target={{ story: mount.story, imagePath: mount.imagePath, label: mount.label }} onShare={setShareTarget} />, mount.host, mount.key);
    }),
    [mounts],
  );

  if (!isHomepage) return null;

  return <>{portals}<ShareSheet target={shareTarget} onClose={() => setShareTarget(null)} /></>;
}
