"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "COVER", href: "/#latest" },
  { label: "CONTENTS", href: "/#contents" },
  { label: "EXHIBITION", href: "/#exhibition" },
  { label: "IDEAS", href: "/#cubism" },
  { label: "TOKYO", href: "/#asagaya" },
  { label: "INDEX", href: "/#picasso-index" },
];

const footerItems = [
  { label: "ABOUT", href: "/#about" },
  { label: "CONTENTS", href: "/#contents" },
  { label: "TOP OF PAGE", href: "#top" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mag-page mag-site-chrome" id="site-chrome-top">
      <header className="mag-header">
        <div className="mag-header-rail">
          <p>ART, PASSION AND A LITTLE DISORDER. TOKYO.</p>
          <p>FIRST ISSUE. NUMBER ONE. ALLEZ. LET’S GO.</p>
          <p>SEPTEMBER 1, 2026. LET’S MAKE SOME NOISE.</p>
        </div>
        <nav className="mag-nav" aria-label="Issue navigation">
          <div className="mag-nav-links">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
          <span>ART FROM TOKYO, AND FROM ALL THE OTHER PLACES WHERE MY HEART DECIDES TO WANDER.</span>
        </nav>
        <div className="mag-mobile-bar">
          <a className="mag-mobile-logo" href="/" onClick={closeMenu}>EASTOKYO</a>
          <button
            ref={menuButtonRef}
            type="button"
            className={`mag-menu-button ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mag-site-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>
      <div
        id="mag-site-mobile-menu"
        className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Issue menu"
        aria-hidden={!menuOpen}
      >
        <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
          CLOSE <span aria-hidden="true">×</span>
        </button>
        <nav aria-label="Mobile issue navigation">
          {navItems.map((item, index) => (
            <a key={item.label} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
        <p>EASTOKYO. NUMBER ONE. BORN IN TOKYO. RAISED WITH FIRE IN THE BELLY.</p>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <div className="mag-page mag-site-chrome">
      <footer className="mag-footer">
        <div className="mag-footer-top">
          <div><p className="mag-kicker">EASTOKYO. NUMBER ONE.</p><h2>LOOK TWICE.</h2></div>
          <div className="mag-newsletter">
            <p>THE EASTOKYO LETTER. DO NOT MISS THE NEXT ONE.</p>
            <strong>NOT YET. BUT SOON. PATIENCE, MON AMI.</strong>
          </div>
        </div>
        <div className="mag-footer-links">
          <nav aria-label="Footer navigation">
            {footerItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="social-placeholder" aria-label="EASTOKYO social media">
            <span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span>
          </div>
        </div>
        <a className="mag-footer-wordmark" href="/" aria-label="EASTOKYO home">EASTOKYO</a>
        <div className="mag-footer-bottom">
          <p>© 2026 EASTOKYO. TOKYO, JAPAN.</p>
          <p>BORN IN TOKYO. RAISED WITH FIRE IN THE BELLY.</p>
          <a href="#top">ONE LAST LOOK, RIGHT AT THE TOP.</a>
        </div>
      </footer>
    </div>
  );
}
