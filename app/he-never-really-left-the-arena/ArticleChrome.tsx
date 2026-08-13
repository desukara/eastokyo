"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./article-chrome.module.css";

const navItems = [
  { label: "COVER", href: "#top" },
  { label: "CONTENTS", href: "/#contents" },
  { label: "EXHIBITION", href: "/#exhibition" },
  { label: "IDEAS", href: "/#cubism" },
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
          <span>ART, PASSION, AND A LITTLE BIT OF TROUBLE. TOKYO.</span>
          <span>NUMBER ONE · SEPTEMBER 2026</span>
          <span>COVER STORY · 01</span>
        </div>
        <div className={styles.mainRow}>
          <Link className={styles.logoLink} href="/" aria-label="EASTOKYO home">
            <img className={styles.logo} src="/eastokyo-wordmark-white.png" alt="EASTOKYO" />
          </Link>
          <nav className={styles.desktopNav} aria-label="Issue navigation">
            {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </nav>
          <button className={styles.menuButton} type="button" aria-expanded={menuOpen} aria-controls="story-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span>{menuOpen ? "CLOSE" : "MENU"}</span><i aria-hidden="true" />
          </button>
        </div>
      </header>
      <div id="story-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`} role="dialog" aria-modal="true" aria-label="Issue menu" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile issue navigation">
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
        </nav>
        <p>EASTOKYO. NUMBER ONE. BORN IN TOKYO. RAISED WITH A LITTLE FIRE IN THE CHEST.</p>
      </div>
    </>
  );
}

export function ArticleFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div><p>EASTOKYO · NUMBER ONE · COVER STORY</p><h2>LOOK TWICE.</h2></div>
        <p className={styles.footerNote}>ART FROM TOKYO, AND FROM EVERY OTHER PLACE MY HEART DECIDES TO WANDER.</p>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/">BACK TO ISSUE ONE</Link>
        <Link href="/#contents">CONTENTS</Link>
        <Link href="#top">TOP</Link>
        <span>SEPTEMBER 2026 · TOKYO, JAPAN</span>
      </div>
      <Link className={styles.footerLogoLink} href="/" aria-label="EASTOKYO home">
        <img className={styles.footerLogo} src="/eastokyo-wordmark-white.png" alt="EASTOKYO" />
      </Link>
      <div className={styles.footerBottom}>
        <span>© 2026 EASTOKYO</span>
        <span>BORN IN TOKYO. RAISED WITH A LITTLE FIRE IN THE CHEST.</span>
      </div>
    </footer>
  );
}
