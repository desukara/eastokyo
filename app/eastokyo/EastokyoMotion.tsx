"use client";

import { useEffect } from "react";

export default function EastokyoMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".mag-page");
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      root.classList.add("ek-motion-reduced");
      return;
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
    };
  }, []);

  return null;
}
