"use client";

import { useEffect } from "react";

export default function EastokyoMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".mag-page");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coverMedia = document.querySelector<HTMLElement>("#latest .mag-cover-media");
    const existingCanvas = coverMedia?.querySelector(".ek-bull-dust-canvas");
    const existingDust = coverMedia?.querySelector(".ek-bull-dust");
    existingCanvas?.remove();
    existingDust?.remove();

    let theatre: HTMLDivElement | null = null;
    if (coverMedia && !coverMedia.querySelector(".ek-theatre-light")) {
      theatre = document.createElement("div");
      theatre.className = "ek-theatre-light";
      theatre.setAttribute("aria-hidden", "true");
      Object.assign(theatre.style, {
        position: "absolute",
        inset: "0",
        zIndex: "2",
        pointerEvents: "none",
        background: [
          "radial-gradient(ellipse 31% 34% at 26% 70%, rgba(255,229,186,.14) 0%, rgba(255,218,165,.055) 40%, rgba(0,0,0,0) 74%)",
          "radial-gradient(ellipse 24% 39% at 65% 55%, rgba(255,229,184,.13) 0%, rgba(255,215,158,.05) 43%, rgba(0,0,0,0) 76%)",
          "linear-gradient(to bottom, rgba(3,4,5,.78) 0%, rgba(3,4,5,.54) 18%, rgba(3,4,5,.18) 36%, rgba(0,0,0,0) 55%)",
          "linear-gradient(to top, rgba(15,8,3,.16) 0%, rgba(0,0,0,0) 28%)",
        ].join(","),
      });
      coverMedia.appendChild(theatre);
    }

    let smoke: HTMLDivElement | null = null;
    if (coverMedia && !reduced && !coverMedia.querySelector(".ek-arena-smoke")) {
      smoke = document.createElement("div");
      smoke.className = "ek-arena-smoke";
      smoke.setAttribute("aria-hidden", "true");
      Object.assign(smoke.style, {
        position: "absolute",
        inset: "0",
        overflow: "hidden",
        zIndex: "2",
        pointerEvents: "none",
      });

      const puffCount = 14;
      for (let i = 0; i < puffCount; i += 1) {
        const puff = document.createElement("span");
        const width = 18 + Math.random() * 18;
        const height = 14 + Math.random() * 13;
        const left = -8 + Math.random() * 100;
        const bottom = -12 + Math.random() * 10;
        const blur = 10 + Math.random() * 13;
        const duration = 5600 + Math.random() * 3200;
        const drift = -55 + Math.random() * 110;
        const rise = 150 + Math.random() * 95;
        const scale = 1.75 + Math.random() * .75;
        const peak = .24 + Math.random() * .18;

        Object.assign(puff.style, {
          position: "absolute",
          left: `${left}%`,
          bottom: `${bottom}%`,
          width: `${width}%`,
          height: `${height}%`,
          borderRadius: "50%",
          opacity: "0",
          filter: `blur(${blur}px)`,
          background: "radial-gradient(ellipse at center, rgba(52,46,40,.48) 0%, rgba(86,75,64,.33) 34%, rgba(128,109,90,.16) 58%, rgba(128,109,90,0) 78%)",
          transformOrigin: "50% 70%",
          willChange: "transform, opacity",
        });

        smoke.appendChild(puff);
        const animation = puff.animate(
          [
            { transform: "translate3d(0, 22%, 0) scale(.9)", opacity: 0 },
            { transform: `translate3d(${drift * .18}px, -18%, 0) scale(1.08)`, opacity: peak, offset: .16 },
            { transform: `translate3d(${drift * .62}px, -${rise * .55}%, 0) scale(${1 + (scale - 1) * .55})`, opacity: peak * .72, offset: .58 },
            { transform: `translate3d(${drift}px, -${rise}%, 0) scale(${scale})`, opacity: 0 },
          ],
          {
            duration,
            iterations: Infinity,
            easing: "cubic-bezier(.24,.56,.28,1)",
            delay: -Math.random() * duration,
          },
        );
        animation.play();
      }
      coverMedia.appendChild(smoke);
    }

    const coverImage = coverMedia?.querySelector<HTMLElement>("img");
    if (coverImage) {
      coverImage.style.transition = "transform 14s cubic-bezier(.18,.7,.22,1), filter 1.4s ease";
      coverImage.style.transformOrigin = "42% 58%";
      coverImage.style.filter = "brightness(1.01) contrast(1.06) saturate(.90)";
      requestAnimationFrame(() => {
        coverImage.style.transform = "scale(1.035) translate3d(-.45%, -.15%, 0)";
      });
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

    if (reduced) {
      root.classList.add("ek-motion-reduced");
      if (coverImage) coverImage.style.transform = "none";
      updateActiveNav();
      window.addEventListener("scroll", updateActiveNav, { passive: true });
      window.addEventListener("resize", updateActiveNav);
      return () => {
        window.removeEventListener("scroll", updateActiveNav);
        window.removeEventListener("resize", updateActiveNav);
        theatre?.remove();
        smoke?.remove();
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

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).classList.add("ek-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
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
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(updateScrollMotion); };
    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      theatre?.remove();
      smoke?.remove();
    };
  }, []);

  return null;
}
