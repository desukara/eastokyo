"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./site-shell-final.css";

const navItems = [
  { label: "COVER", href: "/he-never-really-left-the-arena" },
  { label: "CONTENTS", href: "/#contents" },
  { label: "EXHIBITION", href: "/picasso-seen-with-fresh-eyes" },
  { label: "IDEAS", href: "/when-one-point-of-view-wasnt-enough" },
  { label: "TOKYO", href: "/the-city-puts-on-a-costume" },
  { label: "INDEX", href: "/nothing-is-just-what-it-is" },
];

const footerItems = [
  { label: "ABOUT", href: "/#about" },
  { label: "CONTENTS", href: "/#contents" },
  { label: "TOP OF PAGE", href: "#top" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
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
    <div className={`mag-page mag-site-chrome ${isHomepage ? "is-homepage" : "is-inner-page"}`} id="site-chrome-top">
      <style>{`
        .mag-site-chrome .mag-desktop-wordmark { display: none !important; }
        @media (min-width:900px) {
          .mag-site-chrome.is-inner-page .mag-nav { position: relative !important; padding-left: 11.5rem !important; }
          .mag-site-chrome.is-inner-page .mag-desktop-wordmark {
            display: flex !important;
            position: absolute !important;
            left: 1.2rem !important;
            top: 50% !important;
            width: 8.8rem !important;
            height: 2rem !important;
            align-items: center !important;
            transform: translateY(-50%) !important;
            z-index: 2 !important;
          }
          .mag-site-chrome.is-inner-page .mag-desktop-wordmark img {
            display: block !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: left center !important;
          }
        }
        @media (max-width:899px) {
          .mag-site-chrome .mag-mobile-logo {
            display: block !important;
            width: clamp(10.5rem, 43vw, 13rem) !important;
            height: 2.65rem !important;
            flex: 0 0 auto !important;
            margin: 0 !important;
            padding: 0 !important;
            background: none !important;
            font-size: 0 !important;
            line-height: 0 !important;
            text-indent: 0 !important;
            overflow: visible !important;
          }
          .mag-site-chrome .mag-mobile-logo img {
            display: block !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: left center !important;
            filter: brightness(0) !important;
          }
        }
      `}</style>
      <header className="mag-header">
        <div className="mag-header-rail">
          <p>ART, PASSION AND A LITTLE DISORDER. TOKYO.</p>
          <p>FIRST ISSUE. NUMBER ONE. ALLEZ. LET’S GO.</p>
          <p>SEPTEMBER 1, 2026. LET’S MAKE SOME NOISE.</p>
        </div>
        <nav className="mag-nav" aria-label="Issue navigation">
          <Link className="mag-desktop-wordmark" href="/" aria-label="EASTOKYO home"><img src="/eastokyo-wordmark-white.png" alt="" /></Link>
          <div className="mag-nav-links">
            {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
          <span>ART FROM TOKYO, AND FROM ALL THE OTHER PLACES WHERE MY HEART DECIDES TO WANDER.</span>
        </nav>
        <div className="mag-mobile-bar">
          <Link className="mag-mobile-logo" href="/" onClick={closeMenu} aria-label="EASTOKYO home"><img src="/eastokyo-wordmark-white.png" alt="" /></Link>
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
          <div className="mag-newsletter mag-newsletter-classified">
            <p className="mag-newsletter-label">THE EASTOKYO LETTER.</p>
            <strong>ART. TOKYO. EXHIBITIONS. PEOPLE MAKING TROUBLE.</strong>
            <form className="mag-newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="eastokyo-newsletter-email">YOUR EMAIL:</label>
              <div className="mag-newsletter-line">
                <input id="eastokyo-newsletter-email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="YOU@EXAMPLE.COM" aria-label="Email address" />
                <button type="submit">PUT MY NAME ON THE LIST.</button>
              </div>
              <small>OCCASIONAL. NO NONSENSE. UNSUBSCRIBE WHENEVER YOU LIKE.</small>
            </form>
          </div>
        </div>
        <div className="mag-footer-links">
          <nav aria-label="Footer navigation">{footerItems.map((item) => item.href.startsWith("/#") ? <Link key={item.label} href={item.href}>{item.label}</Link> : <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
          <div className="social-placeholder" aria-label="EASTOKYO social media"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span><span>BLUESKY</span></div>
        </div>
        <p className="mag-creator-credit">FOUNDER &amp; EDITOR: JAMES SIMMONS</p>
        <p className="mag-editorial-contact">EDITORIAL CONTACT: <a href="mailto:editor@eastokyo.com">editor@eastokyo.com</a></p>
        <Link className="mag-footer-wordmark" href="/" aria-label="EASTOKYO home">EASTOKYO</Link>
        <div className="mag-footer-bottom"><p>© 2026 EASTOKYO. TOKYO, JAPAN.</p><p>FROM TOKYO. WITH BAD MANNERS.</p><a href="#top">ONE LAST LOOK, RIGHT AT THE TOP.</a></div>
      </footer>
    </div>
  );
}