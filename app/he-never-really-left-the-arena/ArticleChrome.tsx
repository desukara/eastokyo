"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./article-chrome.module.css";

const navItems = [
  { label: "COUVERTURE", href: "#top" },
  { label: "SOMMAIRE", href: "/#contents" },
  { label: "EXPOSITION", href: "/#exhibition" },
  { label: "IDÉES", href: "/#cubism" },
  { label: "TOKYO", href: "/#asagaya" },
  { label: "INDEX", href: "/#picasso-index" },
];

export function ArticleHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      </div>
      <header className={styles.header}>
        <div className={styles.rail}>
          <span>ART, PASSION ET UN PEU DE DÉSORDRE. TOKYO.</span>
          <span>NUMÉRO UN · SEPTEMBRE 2026</span>
          <span>GRAND FORMAT · 01</span>
        </div>
        <div className={styles.mainRow}>
          <Link className={styles.logoLink} href="/" aria-label="Accueil EASTOKYO">
            <img className={styles.logo} src="/eastokyo-wordmark-white.png" alt="EASTOKYO" />
          </Link>
          <nav className={styles.desktopNav} aria-label="Navigation du numéro">
            {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </nav>
          <button className={styles.menuButton} type="button" aria-expanded={menuOpen} aria-controls="story-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span>{menuOpen ? "FERMER" : "MENU"}</span><i aria-hidden="true" />
          </button>
        </div>
      </header>
      <div id="story-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`} role="dialog" aria-modal="true" aria-label="Menu du numéro" aria-hidden={!menuOpen}>
        <nav aria-label="Navigation mobile du numéro">
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
        </nav>
        <p>EASTOKYO. NUMÉRO UN. NÉ À TOKYO. ÉLEVÉ AVEC UN PEU DE FEU DANS LA POITRINE.</p>
      </div>
    </>
  );
}

export function ArticleFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div><p>EASTOKYO · NUMÉRO UN · GRAND FORMAT</p><h2>REGARDEZ DEUX FOIS.</h2></div>
        <p className={styles.footerNote}>DE L’ART DE TOKYO, ET DE TOUS LES ENDROITS OÙ MON CŒUR DÉCIDE D’ALLER TRAÎNER.</p>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/">RETOUR AU NUMÉRO UN</Link>
        <Link href="/#contents">SOMMAIRE</Link>
        <Link href="#top">HAUT DE PAGE</Link>
        <span>SEPTEMBRE 2026 · TOKYO, JAPON</span>
      </div>
      <Link className={styles.footerLogoLink} href="/" aria-label="Accueil EASTOKYO">
        <img className={styles.footerLogo} src="/eastokyo-wordmark-white.png" alt="EASTOKYO" />
      </Link>
      <div className={styles.footerBottom}>
        <span>© 2026 EASTOKYO</span>
        <span>NÉ À TOKYO. ÉLEVÉ AVEC UN PEU DE FEU DANS LA POITRINE.</span>
      </div>
    </footer>
  );
}
