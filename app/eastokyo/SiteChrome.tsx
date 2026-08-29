"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./site-shell-final.css";

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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    menuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const menu = menuRef.current;
      if (!menu) return;
      const focusable = Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
        .filter((element) => element.getAttribute("aria-hidden") !== "true");
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
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
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
            {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
          <span>ART FROM TOKYO, AND FROM ALL THE OTHER PLACES WHERE MY HEART DECIDES TO WANDER.</span>
        </nav>
        <div className="mag-mobile-bar">
          <Link className="mag-mobile-logo" href="/" onClick={closeMenu}>EASTOKYO</Link>
          <button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-site-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
        </div>
      </header>
      <div ref={menuRef} id="mag-site-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Issue menu" aria-hidden={!menuOpen}>
        <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
        <nav aria-label="Mobile issue navigation">
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{index + 1}</span>{item.label}</Link>
          ))}
        </nav>
        <p>EASTOKYO. NUMBER ONE. FROM TOKYO. WITH BAD MANNERS.</p>
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
          <div className="mag-newsletter"><p>THE EASTOKYO LETTER. DO NOT MISS THE NEXT ONE.</p><strong>NOT YET. BUT SOON. PATIENCE, MON AMI.</strong></div>
        </div>
        <div className="mag-footer-links">
          <nav aria-label="Footer navigation">{footerItems.map((item) => item.href.startsWith("/#") ? <Link key={item.label} href={item.href}>{item.label}</Link> : <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
          <div className="social-placeholder" aria-label="EASTOKYO social media">
            <span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: ".28em" }} aria-label="Bluesky">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" style={{ fill: "currentColor", flex: "0 0 auto" }}>
                <path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026" />
              </svg>
              BLUESKY
            </span>
          </div>
        </div>
        <Link className="mag-footer-wordmark" href="/" aria-label="EASTOKYO home">EASTOKYO</Link>
        <div className="mag-footer-bottom"><p>© 2026 EASTOKYO. TOKYO, JAPAN.</p><p>FROM TOKYO. WITH BAD MANNERS.</p><a href="#top">ONE LAST LOOK, RIGHT AT THE TOP.</a></div>
      </footer>
    </div>
  );
}