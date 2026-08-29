"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
        <Link className="mag-footer-wordmark" href="/" aria-label="EASTOKYO home">EASTOKYO</Link>
        <style>{`
          .mag-site-chrome .mag-newsletter-classified {
            border: 2px solid var(--mag-ink, #101820) !important;
            border-radius: 0 !important;
            box-shadow: 5px 5px 0 var(--mag-ink, #101820) !important;
          }
          .mag-site-chrome .mag-newsletter-classified .mag-newsletter-label {
            margin: 0 0 .55rem !important;
            font-size: .66rem !important;
            font-weight: 900 !important;
            line-height: 1.1 !important;
            letter-spacing: .16em !important;
          }
          .mag-site-chrome .mag-newsletter-classified > strong {
            display: block !important;
            max-width: 24ch !important;
            margin: 0 0 1rem !important;
            font-size: clamp(1.25rem, 2.2vw, 2rem) !important;
            line-height: .95 !important;
            letter-spacing: -.025em !important;
          }
          .mag-site-chrome .mag-newsletter-form {
            display: block !important;
            margin: 0 !important;
          }
          .mag-site-chrome .mag-newsletter-form label {
            display: block !important;
            margin: 0 0 .35rem !important;
            font-size: .62rem !important;
            font-weight: 900 !important;
            line-height: 1 !important;
            letter-spacing: .14em !important;
          }
          .mag-site-chrome .mag-newsletter-line {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) auto !important;
            align-items: stretch !important;
            gap: .7rem !important;
          }
          .mag-site-chrome .mag-newsletter-line input {
            min-width: 0 !important;
            height: 2.75rem !important;
            padding: .2rem .1rem !important;
            border: 0 !important;
            border-bottom: 3px solid var(--mag-ink, #101820) !important;
            border-radius: 0 !important;
            outline: none !important;
            background: transparent !important;
            color: var(--mag-ink, #101820) !important;
            -webkit-text-fill-color: currentColor !important;
            font: 800 .86rem/1 var(--font-bienvivos-sans), Arial, sans-serif !important;
            letter-spacing: .04em !important;
          }
          .mag-site-chrome .mag-newsletter-line input::placeholder {
            color: rgba(16, 24, 32, .55) !important;
            opacity: 1 !important;
          }
          .mag-site-chrome .mag-newsletter-line input:focus {
            border-bottom-width: 5px !important;
          }
          .mag-site-chrome .mag-newsletter-line button {
            min-height: 2.75rem !important;
            padding: .6rem .8rem !important;
            border: 2px solid var(--mag-ink, #101820) !important;
            border-radius: 0 !important;
            background: var(--mag-paper, #f3eee4) !important;
            color: var(--mag-ink, #101820) !important;
            box-shadow: 3px 3px 0 var(--mag-ink, #101820) !important;
            font: 900 .62rem/1.05 var(--font-bienvivos-sans), Arial, sans-serif !important;
            letter-spacing: .09em !important;
            text-transform: uppercase !important;
            cursor: pointer !important;
          }
          .mag-site-chrome .mag-newsletter-line button:active {
            transform: translate(2px, 2px) !important;
            box-shadow: 1px 1px 0 var(--mag-ink, #101820) !important;
          }
          .mag-site-chrome .mag-newsletter-form small {
            display: block !important;
            margin-top: .75rem !important;
            font-size: .52rem !important;
            font-weight: 800 !important;
            line-height: 1.25 !important;
            letter-spacing: .11em !important;
          }
          @media (min-width:700px) {
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified {
              padding: .9rem 1.05rem .85rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified::before {
              top: .82rem !important;
              right: 1.05rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified::after {
              right: 1.05rem !important;
              bottom: .82rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-label {
              margin-bottom: .55rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified > strong {
              max-width: 20ch !important;
              font-size: clamp(1.55rem, 2.5vw, 2.35rem) !important;
              line-height: .84 !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-form {
              margin-top: .75rem !important;
              padding-top: .45rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-form label {
              margin-bottom: .28rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-line {
              grid-template-columns: minmax(0, 1fr) minmax(10.5rem, 31%) !important;
              gap: 0 !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-line input {
              height: 2.75rem !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-line button {
              min-height: 2.75rem !important;
              border-left: 1px solid rgba(243, 238, 228, .7) !important;
              border-top: 0 !important;
            }
            .mag-page.mag-site-chrome .mag-footer .mag-newsletter.mag-newsletter-classified .mag-newsletter-form small {
              margin-top: .45rem !important;
            }
          }
          @media (max-width:899px){
          .mag-page.mag-site-chrome .mag-footer .mag-footer-bottom{
            display:grid!important;
            position:static!important;
            visibility:visible!important;
            opacity:1!important;
            width:100%!important;
            height:auto!important;
            min-height:0!important;
            max-height:none!important;
            overflow:visible!important;
            grid-template-columns:1fr!important;
            gap:.42rem!important;
            margin:0!important;
            padding:.75rem 0 0!important;
            border-top:1px solid rgba(247,241,231,.22)!important;
            color:var(--mag-cream,#e7dac5)!important;
            transform:none!important;
            clip:auto!important;
            clip-path:none!important;
          }
          .mag-page.mag-site-chrome .mag-footer .mag-footer-bottom>p{
            display:block!important;
            position:static!important;
            visibility:visible!important;
            opacity:1!important;
            width:100%!important;
            height:auto!important;
            max-height:none!important;
            overflow:visible!important;
            margin:0!important;
            color:var(--mag-cream,#e7dac5)!important;
            -webkit-text-fill-color:currentColor!important;
            font-size:.52rem!important;
            line-height:1.35!important;
            text-align:left!important;
            text-indent:0!important;
            transform:none!important;
          }
          .mag-page.mag-site-chrome .mag-footer .mag-footer-bottom>p::before,
          .mag-page.mag-site-chrome .mag-footer .mag-footer-bottom>p::after{
            display:none!important;
            content:none!important;
          }
          .mag-site-chrome .mag-newsletter-classified {
            padding: 1rem !important;
            box-shadow: 4px 4px 0 var(--mag-ink, #101820) !important;
          }
          .mag-site-chrome .mag-newsletter-classified > strong {
            max-width: 18ch !important;
            font-size: clamp(1.25rem, 6vw, 1.65rem) !important;
          }
          .mag-site-chrome .mag-newsletter-line {
            grid-template-columns: 1fr !important;
            gap: .8rem !important;
          }
          .mag-site-chrome .mag-newsletter-line input,
          .mag-site-chrome .mag-newsletter-line button {
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }`}</style>
        <div className="mag-footer-bottom"><p>© 2026 EASTOKYO. TOKYO, JAPAN.</p><p>FROM TOKYO. WITH BAD MANNERS.</p><a href="#top">ONE LAST LOOK, RIGHT AT THE TOP.</a></div>
      </footer>
    </div>
  );
}