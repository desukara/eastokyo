"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "LATEST", href: "#latest" },
  { label: "EXHIBITION", href: "#exhibition" },
  { label: "FROM THE SHOW", href: "#from-the-show" },
  { label: "PHOTO ESSAY", href: "#photo-essay" },
  { label: "ABOUT", href: "#about" },
];

const exhibitionStories = [
  {
    page: "22",
    section: "OBJECT",
    title: "A trick of the mind",
    copy: "A bicycle saddle and handlebar become a bull: one of Picasso’s simplest transformations, and one of his most enduring.",
    image: "/images/editorial/picasso-paying-attention-desktop.png",
  },
  {
    page: "26",
    section: "INSTALLATION",
    title: "Picasso in stripes",
    copy: "Paul Smith’s exhibition design puts colour and pattern into direct conversation with Picasso’s own recurring fascination with stripes.",
    image: "/images/editorial/picasso-striped-installation-desktop.jpg",
  },
  {
    page: "30",
    section: "CERAMICS",
    title: "One-off pieces",
    copy: "Plates, pitchers, fragments and clay: Picasso’s years in Vallauris reveal an artist as interested in making as in painting.",
    image: "/images/editorial/picasso-paul-smith-desktop.png",
  },
  {
    page: "34",
    section: "IMAGE",
    title: "The striped shirt becomes Picasso",
    copy: "Photography helped turn the sailor shirt into part of Picasso’s public image—and eventually into shorthand for the artist himself.",
    image: "/images/editorial/picasso-portrait-desktop.png",
  },
];

const photoEssayImages = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=92", label: "Two people, one city in motion" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "Tanabata Mona Lisa" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=90", label: "The city wakes" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=90", label: "Urban rhythm" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=90", label: "A paper pig watches the street" },
  { src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=90", label: "Tokyo in bloom" },
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
          <p>INDEPENDENT ART MAGAZINE · TOKYO</p>
          <p>INAUGURAL ISSUE · Nº 01</p>
          <p>SEPTEMBER 2026</p>
        </div>
        <nav className="mag-nav" aria-label="Main navigation">
          <div className="mag-nav-links">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div>
          <span>ART · TOKYO AND ELSEWHERE</span>
        </nav>
        <div className="mag-mobile-bar">
          <a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a>
          <button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        </div>
      </header>

      <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Main menu" aria-hidden={!menuOpen}>
        <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
        <nav aria-label="Mobile navigation">{navItems.map((item, index) => <a key={item.label} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{index + 1}</span>{item.label}</a>)}</nav>
        <p>Independent art magazine · Tokyo.</p>
      </div>

      <main id="contenido">
        <section className="mag-cover" id="latest" aria-labelledby="cover-title">
          <picture className="mag-cover-media mag-media" aria-hidden="true">
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" />
            <img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" />
          </picture>
          <div className="mag-cover-shade" aria-hidden="true" />
          <div className="mag-cover-grid">
            <div className="mag-cover-topline"><p>EASTOKYO · Nº 01</p><p>PICASSO IN TOKYO</p></div>
            <div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
            <div className="mag-cover-story">
              <p className="mag-kicker">COVER STORY · BULLFIGHTING · P. 18</p>
              <h1 id="cover-title">The bull <em>never left him</em></h1>
              <p>From childhood drawings to the last great matador figures, bullfighting stayed with Picasso. In the ring he found spectacle, violence, sexuality, ritual and death—an image he returned to for almost an entire life.</p>
              <a href="#exhibition">READ THE EXHIBITION ↓</a>
            </div>
            <div className="mag-cover-lines" aria-label="Stories in this issue">
              <article className="mag-cover-line"><b>18</b><div><small>COVER STORY</small><p>The bull never left him.</p></div></article>
              <article className="mag-cover-line"><b>22</b><div><small>EXHIBITION</small><p>Picasso, through the eyes of Paul Smith.</p></div></article>
              <article className="mag-cover-line"><b>56</b><div><small>PHOTO ESSAY</small><p>Tokyo is not grey.</p></div></article>
            </div>
          </div>
          <p className="mag-cover-vertical">Nº 01 · SEPTEMBER 2026 · TOKYO</p>
          <div className="mag-cover-barcode" aria-hidden="true" />
        </section>

        <section className="mag-section mag-front picasso-feature" id="exhibition" aria-labelledby="exhibition-title">
          <div className="mag-rule-heading"><h2>EXHIBITION · THE NATIONAL ART CENTER, TOKYO</h2></div>
          <div className="picasso-feature-intro">
            <div className="picasso-feature-title">
              <p className="mag-kicker">ON VIEW · 10 JUNE—21 SEPTEMBER 2026</p>
              <h3 id="exhibition-title">Picasso, through the eyes of Paul Smith.</h3>
              <p className="mag-deck">A chronological Picasso exhibition that refuses the neutral white box—and is better for it.</p>
            </div>
            <aside className="picasso-feature-note">
              <strong>THE REVIEW</strong>
              <p>Paul Smith’s colour, pattern and visual wit do more than decorate the rooms. They keep a familiar artist from arriving pre-explained.</p>
            </aside>
          </div>
          <div className="picasso-gallery">
            <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>01 · PICASSO × PAUL SMITH</span><span>THE NATIONAL ART CENTER, TOKYO</span></figcaption></figure>
            <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>02 · LOOKING AGAIN</span><span>EASTOKYO / TOKYO</span></figcaption></figure>
            <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>03 · PICASSO IN STRIPES</span><span>EXHIBITION VIEW</span></figcaption></figure>
          </div>
          <div className="picasso-gallery-secondary">
            <figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>04 · PORTRAIT</span><span>PICASSO / TOKYO</span></figcaption></figure>
            <div className="picasso-feature-outro">
              <div className="picasso-meta">PICASSO, THROUGH THE EYES OF PAUL SMITH<br />THE NATIONAL ART CENTER, TOKYO<br />10 JUNE—21 SEPTEMBER 2026</div>
              <p>The exhibition moves loosely through Picasso’s career, but the pleasure is in the interruptions. Smith’s rooms make colour, stripes, objects and visual jokes part of the encounter, giving the work just enough friction to feel newly visible.</p>
            </div>
          </div>
        </section>

        <section className="mag-section mag-index" id="from-the-show" aria-labelledby="from-show-title">
          <div className="mag-index-head">
            <div><p className="mag-kicker">FROM THE EXHIBITION</p><h2 id="from-show-title">Four ways into Picasso.</h2></div>
            <p>Small stories from a very large exhibition: an object that becomes a bull, a room built from stripes, clay made unruly, and the image Picasso made of himself.</p>
          </div>
          <figure className="mag-index-feature mag-media">
            <EditorialImage src="/images/editorial/picasso-striped-installation-desktop.jpg" alt="Striped installation surrounding works by Picasso" sizes="(max-width: 640px) 100vw, 92vw" />
            <figcaption><span className="mag-kicker">INSTALLATION · P. 26</span><strong>Picasso in stripes.</strong></figcaption>
          </figure>
          <div className="mag-index-list">
            {exhibitionStories.map((story) => (
              <article className="mag-index-row" key={story.page}>
                <strong>{story.page}</strong>
                <div><small>{story.section}</small><h3>{story.title}</h3></div>
                <p>{story.copy}</p>
                <div className="mag-index-thumb mag-media" aria-hidden="true"><EditorialImage src={story.image} alt="" sizes="112px" /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="mag-section mag-photo" id="photo-essay" aria-labelledby="photo-title">
          <div className="mag-photo-head">
            <p className="mag-kicker">PHOTO ESSAY · P. 56</p>
            <h2 id="photo-title">Tokyo is not grey</h2>
            <p>Colour found, colour invented, colour that appears when the city thinks nobody is looking.</p>
          </div>
          <div className="mag-photo-grid" aria-label="Tokyo photo essay">
            {photoEssayImages.map((image, index) => (
              <figure className="mag-photo-item" key={image.src}>
                <div className="mag-media"><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"} /></div>
                <figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mag-back-cover" id="about" aria-labelledby="about-title">
          <div className="mag-back-inner">
            <div className="mag-mini-cover" aria-label="Preview of EASTOKYO inaugural issue"><EditorialImage src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" sizes="(max-width: 640px) 70vw, 20rem" /><strong>EASTOKYO</strong><h3>The bull never left him</h3><p>Nº 01 · SEPTEMBER 2026</p></div>
            <div className="mag-back-copy">
              <p className="mag-kicker">ABOUT EASTOKYO</p>
              <h2 id="about-title">An independent art magazine from Tokyo.</h2>
              <p>Exhibitions, images, objects and places in Tokyo and elsewhere.</p>
              <span className="mag-back-date">ISSUE Nº 01 · SEPTEMBER 2026</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="mag-footer">
        <div className="mag-footer-top"><div><p className="mag-kicker">EASTOKYO</p><h2>Keep looking.</h2></div><div className="mag-newsletter"><p>THE EASTOKYO LETTER</p><strong>Coming soon.</strong></div></div>
        <div className="mag-footer-links"><nav aria-label="Footer navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><div className="social-placeholder" aria-label="Social media coming soon"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div>
        <a className="mag-footer-wordmark" href="#top" aria-label="Back to top">EASTOKYO</a>
        <div className="mag-footer-bottom"><p>© 2026 EASTOKYO</p><p>MADE IN TOKYO</p><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  );
}
