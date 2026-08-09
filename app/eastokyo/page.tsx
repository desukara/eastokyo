"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "LATEST", href: "#latest" },
  { label: "FEATURES", href: "#features" },
  { label: "DISPATCHES", href: "#dispatches" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "ABOUT", href: "#about" },
];

const latest = [
  {
    page: "18",
    section: "EXHIBITION",
    title: "Picasso, through another pair of eyes",
    copy: "Four views from Picasso — A Rebel in the History of Art at The National Art Center, Tokyo.",
  },
  {
    page: "22",
    section: "LOOKING CLOSER",
    title: "The art of paying attention",
    copy: "A visitor, a ceramic, a pause: what changes when we stop treating a famous name as a conclusion.",
  },
  {
    page: "26",
    section: "INSTALLATION",
    title: "Picasso in stripes",
    copy: "Paul Smith reframes familiar work with colour, rhythm and an exhibition design that refuses neutrality.",
  },
  {
    page: "30",
    section: "VISUAL NOTE",
    title: "The bull never left him",
    copy: "The bullring returns across Picasso’s life as spectacle, violence, mythology and private memory.",
  },
];

const archiveNotes = [
  { label: "EXHIBITIONS", copy: "Shows worth seeing, revisiting or arguing with." },
  { label: "PLACES", copy: "Galleries, museums, artist-run spaces and rooms that change how art is encountered." },
  { label: "DISPATCHES", copy: "Notes from Tokyo and elsewhere whenever the art gives us a reason to go." },
  { label: "BOOKS · EDITIONS", copy: "Catalogues, artist books, prints, archives and objects that extend the work beyond the wall." },
];

function EditorialImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} />;
}

function PicassoPicture({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return (
    <picture className="picasso-picture">
      <source media="(max-width: 640px)" srcSet={mobile} />
      <img src={desktop} alt={alt} loading="lazy" />
    </picture>
  );
}

export default function EastokyoHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const main = document.querySelector<HTMLElement>("main");
    const footer = document.querySelector<HTMLElement>("footer");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    menuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="mag-page" id="top">
      <a className="mag-skip-link" href="#contenido">Skip to content</a>
      <header className="mag-header">
        <div className="mag-header-rail">
          <p>INDEPENDENT ART MAGAZINE · BASED IN TOKYO</p>
          <p>INAUGURAL ISSUE · Nº 01</p>
          <p>01 SEPTEMBER 2026</p>
        </div>
        <nav className="mag-nav" aria-label="Main navigation">
          <div className="mag-nav-links">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div>
          <span>ART · WHEREVER IT IS WORTH LOOKING</span>
        </nav>
        <div className="mag-mobile-bar">
          <a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a>
          <button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </header>

      <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Main menu" aria-hidden={!menuOpen}>
        <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
        <nav aria-label="Mobile navigation">{navItems.map((item, index) => <a key={item.label} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{index + 1}</span>{item.label}</a>)}</nav>
        <p>Independent art magazine · based in Tokyo.</p>
      </div>

      <main id="contenido">
        <section className="mag-cover" id="latest" aria-labelledby="cover-title">
          <picture className="mag-cover-media mag-media" aria-hidden="true">
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" />
            <img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" />
          </picture>
          <div className="mag-cover-shade" aria-hidden="true" />
          <div className="mag-cover-grid">
            <div className="mag-cover-topline"><p>EASTOKYO · INDEPENDENT ART MAGAZINE</p><p>BASED IN TOKYO · LOOKING OUTWARD</p></div>
            <div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
            <div className="mag-cover-story">
              <p className="mag-kicker">FEATURE · PICASSO IN TOKYO · P. 18</p>
              <h1 id="cover-title">The bull <em>never left him</em></h1>
              <p><strong>Picasso, through the Eyes of Paul Smith · The National Art Center, Tokyo.</strong> Picasso returned to the bullring throughout his life. In Tokyo, the exhibition follows that obsession into his art—where the bull becomes spectacle, violence, myth and something much more personal.</p>
              <a href="#features">ENTER THE EXHIBITION ↓</a>
            </div>
            <div className="mag-cover-lines" aria-label="Featured stories in this issue">
              <article className="mag-cover-line"><b>18</b><div><small>EXHIBITION</small><p>Picasso, through another pair of eyes.</p></div></article>
              <article className="mag-cover-line"><b>22</b><div><small>LOOKING CLOSER</small><p>The art of paying attention.</p></div></article>
              <article className="mag-cover-line"><b>30</b><div><small>VISUAL NOTE</small><p>The bull, the arena and a lifelong obsession.</p></div></article>
            </div>
          </div>
          <p className="mag-cover-vertical">Nº 01 · SEPTEMBER 2026 · ¥1,200</p>
          <div className="mag-cover-barcode" aria-hidden="true" />
        </section>

        <section className="mag-section mag-contents" aria-labelledby="latest-title">
          <div className="mag-rule-heading"><h2>LATEST · ISSUE Nº 01</h2></div>
          <div className="mag-contents-grid">
            <div className="mag-contents-title"><p className="mag-kicker">WHAT WE ARE LOOKING AT</p><h2 id="latest-title">Follow the work, not a checklist.</h2></div>
            <figure className="mag-contents-image mag-media">
              <EditorialImage src="/images/editorial/picasso-paying-attention-desktop.png" alt="A visitor looking closely at a work by Picasso in Tokyo" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" />
              <figcaption className="mag-credit">LOOKING CLOSER · EASTOKYO / TOKYO</figcaption>
            </figure>
            <div className="mag-contents-list">{latest.map((story) => <article className="mag-contents-entry" key={story.page}><strong>{story.page}</strong><div><small>{story.section}</small><h3>{story.title}</h3><p>{story.copy}</p></div></article>)}</div>
          </div>
        </section>

        <section className="mag-section mag-front picasso-feature" id="features" aria-labelledby="front-title">
          <div className="mag-rule-heading"><h2>FEATURES · LOOKING CLOSER</h2></div>
          <div className="picasso-feature-intro">
            <div className="picasso-feature-title"><p className="mag-kicker">EXHIBITION · PICASSO IN TOKYO · P. 18</p><h3 id="front-title">Picasso, through another pair of eyes.</h3><p className="mag-deck">At The National Art Center, Tokyo, Picasso meets Paul Smith’s instinct for colour, pattern and surprise.</p></div>
            <aside className="picasso-feature-note"><strong>ONE EXHIBITION · FOUR MOMENTS</strong><p>Rather than treating a famous artist as settled history, the installation gives familiar work another context and another pace.</p></aside>
          </div>
          <div className="picasso-gallery">
            <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>01 · PICASSO × PAUL SMITH</span><span>THE NATIONAL ART CENTER, TOKYO</span></figcaption></figure>
            <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>02 · THE ART OF PAYING ATTENTION</span><span>EASTOKYO / P.18</span></figcaption></figure>
            <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>03 · PICASSO IN STRIPES</span><span>EXHIBITION VIEW</span></figcaption></figure>
          </div>
          <div className="picasso-gallery-secondary">
            <figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>04 · PORTRAIT</span><span>PICASSO / TOKYO</span></figcaption></figure>
            <div className="picasso-feature-outro"><div className="picasso-meta">PICASSO × PAUL SMITH<br />THE NATIONAL ART CENTER, TOKYO<br />EASTOKYO · FEATURE · P.18</div><p>The result is less a lesson than an invitation: slow down, notice the collisions, and see familiar work with fresh eyes. EASTOKYO begins there—with the pleasure of looking again.</p></div>
          </div>
        </section>

        <section className="mag-section mag-index" id="dispatches" aria-labelledby="dispatches-title">
          <div className="mag-index-head">
            <div><p className="mag-kicker">DISPATCHES</p><h2 id="dispatches-title">From Tokyo, outward.</h2></div>
            <p>Exhibitions, galleries, fairs, festivals, books, archives, installations and unexpected places. A dispatch begins wherever the art gives us a reason to look closer.</p>
          </div>
          <figure className="mag-index-feature mag-media">
            <EditorialImage src="/images/editorial/picasso-striped-installation-desktop.jpg" alt="Striped exhibition installation surrounding works by Picasso" sizes="(max-width: 640px) 100vw, 92vw" />
            <figcaption><span className="mag-kicker">NO FIXED BEATS</span><strong>The subject changes. The standard does not.</strong></figcaption>
          </figure>
        </section>

        <section className="mag-section mag-contents" id="archive" aria-labelledby="archive-title">
          <div className="mag-rule-heading"><h2>ARCHIVE · BUILT BY CURIOSITY</h2></div>
          <div className="mag-contents-grid">
            <div className="mag-contents-title"><p className="mag-kicker">FIND IT LATER</p><h2 id="archive-title">An archive without departments.</h2></div>
            <figure className="mag-contents-image mag-media"><EditorialImage src="/images/editorial/picasso-portrait-desktop.png" alt="Portrait work by Picasso displayed in Tokyo" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">ART · PLACE · DATE · IDEA</figcaption></figure>
            <div className="mag-contents-list">{archiveNotes.map((note, index) => <article className="mag-contents-entry" key={note.label}><strong>0{index + 1}</strong><div><small>TAG</small><h3>{note.label}</h3><p>{note.copy}</p></div></article>)}</div>
          </div>
        </section>

        <section className="mag-back-cover" id="about" aria-labelledby="about-title">
          <div className="mag-back-inner">
            <div className="mag-mini-cover" aria-label="Preview of EASTOKYO inaugural issue"><EditorialImage src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" sizes="(max-width: 640px) 70vw, 20rem" /><strong>EASTOKYO</strong><h3>The bull never left him</h3><p>Nº 01 · SEPTEMBER 2026</p></div>
            <div className="mag-back-copy"><p className="mag-kicker">ABOUT EASTOKYO</p><h2 id="about-title">An art magazine based in Tokyo.</h2><p>We follow art wherever it gives us a reason to look closer. No fixed departments and no obligation to fill a category: just exhibitions, places, images, objects, ideas and the stories that stay with us.</p><span className="mag-back-date">TOKYO · AND WHEREVER THE WORK TAKES US</span></div>
          </div>
        </section>
      </main>

      <footer className="mag-footer">
        <div className="mag-footer-top"><div><p className="mag-kicker">INDEPENDENT ART MAGAZINE</p><h2>Keep looking.</h2></div><div className="mag-newsletter"><p>THE EASTOKYO LETTER</p><strong>Coming soon: art worth opening slowly.</strong></div></div>
        <div className="mag-footer-links"><nav aria-label="Footer navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><div className="social-placeholder" aria-label="Social media coming soon"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div>
        <a className="mag-footer-wordmark" href="#top" aria-label="Back to top">EASTOKYO</a>
        <div className="mag-footer-bottom"><p>© 2026 EASTOKYO</p><p>MADE IN TOKYO · LOOKING OUTWARD</p><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  );
}
