"use client";

import { useEffect } from "react";

type DustParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  stretch: number;
  life: number;
  ttl: number;
  alpha: number;
  phase: number;
  grit: boolean;
};

export default function EastokyoMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".mag-page");
    if (!root) return;

    const coverMedia = document.querySelector<HTMLElement>("#latest .mag-cover-media");
    const oldDust = coverMedia?.querySelector(".ek-bull-dust");
    oldDust?.remove();

    let dustCanvas: HTMLCanvasElement | null = null;
    let dustRaf = 0;
    let dustResize: (() => void) | null = null;

    if (coverMedia && !coverMedia.querySelector(".ek-bull-dust-canvas")) {
      dustCanvas = document.createElement("canvas");
      dustCanvas.className = "ek-bull-dust-canvas";
      dustCanvas.setAttribute("aria-hidden", "true");
      Object.assign(dustCanvas.style, {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        zIndex: "2",
        pointerEvents: "none",
        mixBlendMode: "screen",
      });
      coverMedia.appendChild(dustCanvas);

      const canvas = dustCanvas;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const particles: DustParticle[] = [];
        let cssW = 1;
        let cssH = 1;
        let last = performance.now();
        let spawnCarry = 0;

        const resetParticle = (p: DustParticle, initial = false) => {
          const grit = Math.random() < 0.28;
          const source = Math.random();
          const sourceX = source < 0.55
            ? 0.11 + Math.random() * 0.22
            : 0.31 + Math.random() * 0.22;

          p.x = cssW * sourceX - (initial ? Math.random() * cssW * 0.18 : 0);
          p.y = cssH * (0.79 + Math.random() * 0.105);
          p.vx = cssW * (grit ? 0.42 + Math.random() * 0.46 : 0.17 + Math.random() * 0.32);
          p.vy = -cssH * (grit ? 0.005 + Math.random() * 0.018 : 0.012 + Math.random() * 0.05);
          p.size = grit ? 0.7 + Math.random() * 1.4 : cssW * (0.012 + Math.random() * 0.032);
          p.stretch = grit ? 7 + Math.random() * 15 : 1.7 + Math.random() * 3.2;
          p.ttl = grit ? 0.38 + Math.random() * 0.52 : 0.85 + Math.random() * 1.45;
          p.life = initial ? Math.random() * p.ttl : 0;
          p.alpha = grit ? 0.22 + Math.random() * 0.28 : 0.075 + Math.random() * 0.18;
          p.phase = Math.random() * Math.PI * 2;
          p.grit = grit;
        };

        const seed = () => {
          particles.length = 0;
          const count = Math.min(120, Math.max(72, Math.round(cssW * 0.19)));
          for (let i = 0; i < count; i += 1) {
            const p = {} as DustParticle;
            resetParticle(p, true);
            particles.push(p);
          }
        };

        dustResize = () => {
          const rect = coverMedia.getBoundingClientRect();
          cssW = Math.max(1, rect.width);
          cssH = Math.max(1, rect.height);
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          canvas.width = Math.round(cssW * dpr);
          canvas.height = Math.round(cssH * dpr);
          canvas.style.width = `${cssW}px`;
          canvas.style.height = `${cssH}px`;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          seed();
        };

        dustResize();

        const drawDust = (now: number) => {
          const dt = Math.min(0.035, Math.max(0.001, (now - last) / 1000));
          last = now;
          ctx.clearRect(0, 0, cssW, cssH);

          spawnCarry += dt * 34;
          while (spawnCarry >= 1) {
            spawnCarry -= 1;
            const dead = particles.find(p => p.life >= p.ttl);
            if (dead) resetParticle(dead);
          }

          for (const p of particles) {
            p.life += dt;
            if (p.life >= p.ttl) {
              resetParticle(p);
              continue;
            }

            const age = p.life / p.ttl;
            const gust = 1 + 0.42 * Math.sin(now * 0.0047 + p.phase);
            p.x += p.vx * gust * dt;
            p.y += (p.vy + Math.sin(now * 0.006 + p.phase) * cssH * 0.006) * dt;

            if (p.x > cssW * 1.14 || p.y < cssH * 0.64) {
              resetParticle(p);
              continue;
            }

            const fadeIn = Math.min(1, age / 0.12);
            const fadeOut = Math.min(1, (1 - age) / 0.28);
            const alpha = p.alpha * fadeIn * fadeOut;

            if (p.grit) {
              ctx.save();
              ctx.globalAlpha = alpha;
              ctx.strokeStyle = "rgba(205,176,132,.9)";
              ctx.lineWidth = p.size;
              ctx.lineCap = "round";
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p.x - p.stretch, p.y + p.stretch * 0.06);
              ctx.stroke();
              ctx.restore();
            } else {
              ctx.save();
              ctx.translate(p.x, p.y);
              ctx.rotate(-0.055 + Math.sin(p.phase) * 0.035);
              ctx.scale(p.stretch, 0.72 + Math.sin(p.phase * 1.7) * 0.12);
              ctx.globalAlpha = alpha;
              ctx.fillStyle = "rgba(210,181,139,.82)";
              ctx.shadowColor = "rgba(229,207,170,.45)";
              ctx.shadowBlur = Math.max(3, p.size * 0.42);
              ctx.beginPath();
              ctx.arc(0, 0, p.size, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }

          dustRaf = requestAnimationFrame(drawDust);
        };

        dustRaf = requestAnimationFrame(drawDust);
        window.addEventListener("resize", dustResize, { passive: true });
      }
    }

    const navSections = [
      { selector: "#latest", href: "#latest" },
      { selector: "#contents", href: "#contents" },
      { selector: "#bullfighting", href: "#latest" },
      { selector: "#exhibition", href: "#exhibition" },
      { selector: "#cubism", href: "#cubism" },
      { selector: "#cubism-works", href: "#cubism" },
      { selector: "#asagaya", href: "#asagaya" },
      { selector: "#picasso-index", href: "#picasso-index" },
    ]
      .map(item => ({ ...item, element: document.querySelector<HTMLElement>(item.selector) }))
      .filter((item): item is { selector: string; href: string; element: HTMLElement } => Boolean(item.element));

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".mag-nav-links a, .mag-mobile-menu nav a"));
    let activeHref = "";

    const setActiveNav = (href: string) => {
      if (!href || href === activeHref) return;
      activeHref = href;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === href;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const updateActiveNav = () => {
      const readingLine = window.innerHeight * 0.38;
      let current = navSections[0];

      navSections.forEach(item => {
        const rect = item.element.getBoundingClientRect();
        if (rect.top <= readingLine && rect.bottom > readingLine) current = item;
      });

      if (!current) {
        const passed = navSections.filter(item => item.element.getBoundingClientRect().top <= readingLine);
        current = passed[passed.length - 1] ?? navSections[0];
      }

      if (current) setActiveNav(current.href);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      root.classList.add("ek-motion-reduced");
      updateActiveNav();
      window.addEventListener("scroll", updateActiveNav, { passive: true });
      window.addEventListener("resize", updateActiveNav);
      return () => {
        window.removeEventListener("scroll", updateActiveNav);
        window.removeEventListener("resize", updateActiveNav);
        if (dustRaf) cancelAnimationFrame(dustRaf);
        if (dustResize) window.removeEventListener("resize", dustResize);
        dustCanvas?.remove();
      };
    }

    const revealGroups: Array<{ selector: string; stagger?: number }> = [
      { selector: "#contents .mag-rule-heading, #contents .mag-contents-title, #contents .mag-contents-image", stagger: 90 },
      { selector: "#contents .mag-contents-entry", stagger: 75 },
      { selector: "#bullfighting .mag-feature-heading, #bullfighting .mag-feature-image-primary, #bullfighting .mag-feature-image-detail, #bullfighting .mag-feature-copy, #bullfighting .mag-feature-pullquote", stagger: 90 },
      { selector: "#exhibition .picasso-feature-title, #exhibition .picasso-feature-note", stagger: 90 },
      { selector: "#exhibition .picasso-shot", stagger: 95 },
      { selector: "#cubism .cubism-intro-copy, #cubism .cubism-intro-note", stagger: 100 },
      { selector: "#cubism-works .cubism-spread-head, #cubism-works .cubism-slot, #cubism-works .cubism-spread-foot", stagger: 80 },
      { selector: "#asagaya .mag-photo-head", stagger: 0 },
      { selector: "#asagaya .mag-photo-item", stagger: 85 },
      { selector: "#picasso-index .mag-index-head, #picasso-index .mag-index-feature", stagger: 100 },
      { selector: "#picasso-index .mag-index-row", stagger: 65 },
      { selector: "#about .mag-mini-cover, #about .mag-back-copy", stagger: 130 },
      { selector: ".mag-footer .mag-footer-top, .mag-footer .mag-footer-links, .mag-footer .mag-footer-wordmark, .mag-footer .mag-footer-bottom", stagger: 80 },
    ];

    const targets: Element[] = [];
    revealGroups.forEach(({ selector, stagger = 0 }) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el, index) => {
        el.classList.add("ek-reveal");
        el.style.setProperty("--ek-delay", `${index * stagger}ms`);
        targets.push(el);
      });
    });

    root.classList.add("ek-motion-ready");
    requestAnimationFrame(() => root.classList.add("ek-cover-live"));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("ek-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    targets.forEach(target => observer.observe(target));

    let raf = 0;
    const updateScrollMotion = () => {
      raf = 0;
      const cover = document.querySelector<HTMLElement>("#latest");
      if (cover) {
        const rect = cover.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
        cover.style.setProperty("--ek-cover-shift", `${progress * 3.2}%`);
        cover.style.setProperty("--ek-cover-copy-shift", `${progress * -10}px`);
      }

      const cubism = document.querySelector<HTMLElement>("#cubism");
      if (cubism) {
        const rect = cubism.getBoundingClientRect();
        const vh = Math.max(window.innerHeight, 1);
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        cubism.style.setProperty("--ek-ideas-x", `${5 - progress * 9}vw`);
      }

      updateActiveNav();
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (dustRaf) cancelAnimationFrame(dustRaf);
      if (dustResize) window.removeEventListener("resize", dustResize);
      dustCanvas?.remove();
    };
  }, []);

  return null;
}
