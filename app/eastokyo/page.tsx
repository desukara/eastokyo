"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "COVER", href: "#latest" },
  { label: "CONTENTS", href: "#contents" },
  { label: "EXHIBITION", href: "#exhibition" },
  { label: "FROM THE SHOW", href: "#from-the-show" },
  { label: "PHOTO", href: "#photo-essay" },
];

const contents = [
  { page: "08", section: "LEAD", title: "The bull never left him", copy: "Picasso, bullfighting and the image that followed him for a lifetime." },
  { page: "18", section: "EXHIBITION", title: "Picasso, through the Eyes of Paul Smith", copy: "A review of the exhibition at The National Art Center, Tokyo." },
  { page: "30", section: "FROM THE SHOW", title: "Picasso in stripes", copy: "Colour, pattern and the exhibition design surrounding the work." },
  { page: "42", section: "CUBISM", title: "The moment the picture broke open", copy: "Picasso, Braque and the radical new language that changed painting." },
  { page: "56", section: "PHOTO", title: "Tokyo is not grey", copy: "Colour found when the city thinks nobody is looking." },
];

const showStories = [
  { page: "64", section: "OBJECT", title: "A trick of the mind", copy: "A bicycle saddle and handlebar become a bull: Picasso’s most famous transformation of a found object.", image: "/images/editorial/index-koenji-thumb.jpg" },
  { page: "68", section: "BLUE PERIOD", title: "Blue melancholy", copy: "Grief, poverty and the near-monochrome language Picasso developed at the beginning of the century.", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=88" },
  { page: "72", section: "STRIPES", title: "Picasso in stripes", copy: "The motif runs through portraits, clothing and the exhibition itself, sharpened by Paul Smith’s eye for pattern.", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=88" },
  { page: "76", section: "CERAMICS", title: "One-off pieces", copy: "Plates, pitchers, tiles and clay: another side of Picasso’s appetite for making.", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=88" },
];

const photoEssayImages = [
  { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=92", label: "Two people, one city in motion" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "Tanabata Mona Lisa" },
  { src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=90", label: "The city wakes" },
  { src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=90", label: "Urban rhythm" },
  { src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=90", label: "A paper pig watches the street" },
  { src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=90", label: "Tokyo in bloom" },
];

const contentsImage = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2000&q=94";
const detailImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=92";
const indexFeatureImage = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2200&q=94";

function EditorialImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} />;
}

function PicassoPicture({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return <picture className="picasso-picture"><source media="(max-width: 640px)" srcSet={mobile} /><img src={desktop} alt={alt} loading="lazy" /></picture>;
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
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
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

  return <div className="mag-page" id="top">
    <a className="mag-skip-link" href="#contenido">Skip to content</a>
    <header className="mag-header">
      <div className="mag-header-rail"><p>INDEPENDENT ART MAGAZINE · TOKYO</p><p>INAUGURAL ISSUE · Nº 01</p><p>01 SEPTEMBER 2026</p></div>
      <nav className="mag-nav" aria-label="Main navigation"><div className="mag-nav-links">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</div><span>ART · TOKYO AND BEYOND</span></nav>
      <div className="mag-mobile-bar"><a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a><button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen(o => !o)}><span /><span /></button></div>
    </header>

    <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Main menu" aria-hidden={!menuOpen}>
      <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
      <nav aria-label="Mobile navigation">{navItems.map((i, n) => <a key={i.label} href={i.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{n + 1}</span>{i.label}</a>)}</nav>
      <p>Independent art magazine · Tokyo.</p>
    </div>

    <main id="contenido">
      <section className="mag-cover" id="latest" aria-labelledby="cover-title">
        <picture className="mag-cover-media mag-media" aria-hidden="true"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" /><img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" /></picture>
        <div className="mag-cover-shade" aria-hidden="true" />
        <div className="mag-cover-grid">
          <div className="mag-cover-topline"><p>EASTOKYO · INDEPENDENT ART MAGAZINE</p><p>PICASSO · TOKYO · Nº 01</p></div>
          <div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
          <div className="mag-cover-story"><p className="mag-kicker">PICASSO · BULLFIGHTING · P. 08</p><h1 id="cover-title">The bull <em>never left him</em></h1><p><strong>Picasso, through the Eyes of Paul Smith · The National Art Center, Tokyo.</strong> Bullfighting followed Picasso from childhood to his final years. In the arena he found spectacle, violence, ritual and a recurring theatre for the images that obsessed him.</p><a href="#exhibition">ENTER THE EXHIBITION ↓</a></div>
          <div className="mag-cover-lines" aria-label="Featured stories in this issue"><article className="mag-cover-line"><b>18</b><div><small>EXHIBITION</small><p>Picasso, through the Eyes of Paul Smith.</p></div></article><article className="mag-cover-line"><b>30</b><div><small>FROM THE SHOW</small><p>Picasso in stripes.</p></div></article><article className="mag-cover-line"><b>56</b><div><small>PHOTO ESSAY</small><p>Tokyo is not grey. It never was.</p></div></article></div>
        </div>
        <p className="mag-cover-vertical">Nº 01 · SEPTEMBER 2026 · ¥1,200</p><div className="mag-cover-barcode" aria-hidden="true" />
      </section>

      <section className="mag-section mag-contents" id="contents" aria-labelledby="contents-title">
        <div className="mag-rule-heading"><h2>ISSUE Nº 01 · CONTENTS</h2></div>
        <div className="mag-contents-grid">
          <div className="mag-contents-title"><p className="mag-kicker">IN THIS ISSUE</p><h2 id="contents-title">Picasso in Tokyo — and the colour around us.</h2></div>
          <figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Tokyo in motion and colour" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">TOKYO · EASTOKYO</figcaption></figure>
          <div className="mag-contents-list">{contents.map(s => <article className="mag-contents-entry" key={s.page}><strong>{s.page}</strong><div><small>{s.section}</small><h3>{s.title}</h3><p>{s.copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className="mag-section mag-front picasso-feature" id="exhibition" aria-labelledby="front-title">
        <div className="mag-rule-heading"><h2>EXHIBITION · THE NATIONAL ART CENTER, TOKYO</h2></div>
        <div className="picasso-feature-intro">
          <div className="picasso-feature-title"><p className="mag-kicker">REVIEW · PICASSO IN TOKYO · P. 18</p><h3 id="front-title">Picasso, through the Eyes of Paul Smith.</h3><p className="mag-deck">Paul Smith takes Picasso out of the neutral white cube and puts colour, pattern and surprise back into the act of looking.</p></div>
          <aside className="picasso-feature-note"><strong>PICASSO, REHUNG</strong><p>The exhibition moves loosely through Picasso’s career while Smith’s art direction changes the atmosphere around the work—from saturated colour to stripes, theatrical rooms and unexpected visual collisions.</p></aside>
        </div>
        <div className="picasso-gallery">
          <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>01 · PICASSO × PAUL SMITH</span><span>THE NATIONAL ART CENTER, TOKYO</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>02 · THE ART OF PAYING ATTENTION</span><span>EASTOKYO / P.18</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>03 · PICASSO IN STRIPES</span><span>EXHIBITION VIEW</span></figcaption></figure>
        </div>
        <div className="picasso-gallery-secondary">
          <figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>04 · PORTRAIT</span><span>PICASSO / TOKYO</span></figcaption></figure>
          <div className="picasso-feature-outro"><div className="picasso-meta">PICASSO × PAUL SMITH<br />THE NATIONAL ART CENTER, TOKYO<br />10 JUNE — 21 SEPTEMBER 2026</div><p>The strongest moments come when the installation stops behaving like a frame and starts behaving like an argument. Smith does not try to explain Picasso away; he changes the conditions in which we meet him.</p></div>
        </div>
      </section>

      <section className="mag-section mag-feature" aria-labelledby="bullfighting-title">
        <div className="mag-feature-grid">
          <header className="mag-feature-heading"><p className="mag-kicker">PICASSO · BULLFIGHTING · P. 26</p><h2 id="bullfighting-title">The arena never left him</h2><span className="mag-page-number">26</span></header>
          <figure className="mag-feature-image-primary mag-media"><EditorialImage src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=95" alt="Temporary image placeholder for the bullfighting feature" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PICASSO · BULLFIGHTING / P. 26</figcaption></figure>
          <figure className="mag-feature-image-detail mag-media"><EditorialImage src={detailImage} alt="Temporary image placeholder for the bullfighting feature" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">THE BULL · THE HORSE · THE TORERO</figcaption></figure>
          <div className="mag-feature-copy"><p className="mag-deck">From childhood onward, bullfighting returned again and again in Picasso’s work—not as folklore, but as image, ritual and obsession.</p><p className="mag-feature-columns">The exhibition gives the bullring its own charged space. Picasso was drawn to the instant when spectacle becomes violence: the charging bull, the wounded horse, the fallen torero. Across decades, the arena becomes something larger than a subject. It is a theatre in which death, sexuality, sacrifice and the sacred collide.</p></div>
          <blockquote className="mag-feature-pullquote">“The bullring becomes a theatre where spectacle, violence and myth are impossible to separate.”<span>EASTOKYO · PICASSO</span></blockquote>
        </div>
      </section>

      <section className="mag-passion-strip" aria-label="Editorial interlude"><p>Look. Turn. Return. <em>See it again.</em></p></section>

      <section className="mag-section mag-night" aria-labelledby="cubism-title">
        <div className="mag-night-sideword" aria-hidden="true">CUBISM</div>
        <div className="mag-night-grid">
          <header className="mag-night-heading"><p className="mag-kicker">CUBISM · PAINTING · P. 42</p><h2 id="cubism-title">The moment the picture broke open.</h2><p>Around 1907, Picasso began dismantling the assumptions that had governed painting for centuries. Perspective fractured. Bodies and objects became planes. In close exchange with Georges Braque, he developed a new visual language that moved between painting, sculpture and papiers collés—and changed what a picture could be.</p></header>
          <figure className="mag-night-image-main mag-media"><EditorialImage src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=94" alt="Temporary image placeholder for Picasso Cubist paintings" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 58vw" /><figcaption className="mag-credit">PICASSO · CUBISM / P. 42</figcaption></figure>
          <figure className="mag-night-image-small mag-media"><EditorialImage src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1500&q=92" alt="Temporary image placeholder for Picasso Cubist paintings" sizes="(max-width: 640px) 84vw, 36vw" /><figcaption className="mag-credit">PAINTING · PLANES · MULTIPLE VIEWPOINTS</figcaption></figure>
        </div>
      </section>

      <section className="mag-section mag-index" id="from-the-show" aria-labelledby="show-title">
        <div className="mag-index-head"><div><p className="mag-kicker">FROM THE EXHIBITION</p><h2 id="show-title">Four ways into Picasso.</h2></div><p>Smaller stories from the exhibition: a found object, a colour, a pattern, a material. Each can later open into its own page.</p></div>
        <figure className="mag-index-feature mag-media"><EditorialImage src={indexFeatureImage} alt="Tokyo glowing with colour and movement after dark" sizes="(max-width: 640px) 100vw, 92vw" /><figcaption><span className="mag-kicker">PICASSO · TOKYO · P. 64–76</span><strong>One exhibition, many entrances.</strong></figcaption></figure>
        <div className="mag-index-list">{showStories.map(s => <article className="mag-index-row" key={s.page}><strong>{s.page}</strong><div><small>{s.section}</small><h3>{s.title}</h3></div><p>{s.copy}</p><div className="mag-index-thumb mag-media" aria-hidden="true"><EditorialImage src={s.image} alt="" sizes="112px" /></div></article>)}</div>
      </section>

      <section className="mag-section mag-photo" id="photo-essay" aria-labelledby="photo-title">
        <div className="mag-photo-head"><p className="mag-kicker">PHOTO ESSAY · P. 56</p><h2 id="photo-title">Tokyo is not grey</h2><p>Color found, color invented, color that appears when the city thinks nobody is looking.</p></div>
        <div className="mag-photo-grid" aria-label="Tokyo photo essay">{photoEssayImages.map((image, index) => <figure className="mag-photo-item" key={image.src}><div className="mag-media"><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"} /></div><figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption></figure>)}</div>
      </section>

      <section className="mag-back-cover" id="about" aria-labelledby="about-title">
        <div className="mag-back-inner">
          <div className="mag-mini-cover" aria-label="Preview of EASTOKYO inaugural issue"><EditorialImage src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" sizes="(max-width: 640px) 70vw, 20rem" /><strong>EASTOKYO</strong><h3>The bull never left him</h3><p>Nº 01 · SEPTEMBER 2026</p></div>
          <div className="mag-back-copy"><p className="mag-kicker">EASTOKYO Nº 01</p><h2 id="about-title">Art, from Tokyo and elsewhere.</h2><p>EASTOKYO is an independent art magazine based in Tokyo.</p><span className="mag-back-date">01 · 09 · 2026 · INAUGURAL ISSUE</span></div>
        </div>
      </section>
    </main>

    <footer className="mag-footer">
      <div className="mag-footer-top"><div><p className="mag-kicker">EASTOKYO · Nº 01</p><h2>Keep looking.</h2></div><div className="mag-newsletter"><p>THE EASTOKYO LETTER</p><strong>Coming soon.</strong></div></div>
      <div className="mag-footer-links"><nav aria-label="Footer navigation">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</nav><div className="social-placeholder" aria-label="Social media coming soon"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div>
      <a className="mag-footer-wordmark" href="#top" aria-label="Back to top">EASTOKYO</a>
      <div className="mag-footer-bottom"><p>© 2026 EASTOKYO</p><p>MADE IN TOKYO · LOOKING OUTWARD</p><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </div>;
}