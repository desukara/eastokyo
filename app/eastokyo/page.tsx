"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "COVER", href: "#latest" },
  { label: "CONTENTS", href: "#contents" },
  { label: "EXHIBITION", href: "#exhibition" },
  { label: "BULLFIGHTING", href: "#bullfighting" },
  { label: "CUBISM", href: "#cubism" },
  { label: "ASAGAYA", href: "#asagaya" },
  { label: "INDEX", href: "#picasso-index" },
];

const footerItems = [
  { label: "ABOUT", href: "#about" },
  { label: "CONTENTS", href: "#contents" },
  { label: "TOP", href: "#top" },
];

const contents = [
  { href: "#exhibition", section: "EXHIBITION", title: "Picasso, through the Eyes of Paul Smith", copy: "Paul Smith reframes Picasso through colour, pattern and exhibition design." },
  { href: "#bullfighting", section: "BULLFIGHTING", title: "The arena never left him", copy: "The bull, the horse and the torero across Picasso’s work." },
  { href: "#cubism", section: "CUBISM", title: "The moment the picture broke open", copy: "How Picasso and Braque dismantled perspective." },
  { href: "#cubism-works", section: "CUBISM · WORKS", title: "Breaking the picture apart", copy: "Four works, four approaches to Cubist form." },
  { href: "#asagaya", section: "ASAGAYA TANABATA", title: "Tokyo is not grey", copy: "Handmade papier-mâché figures and colour fill the festival arcade." },
  { href: "#picasso-index", section: "PICASSO INDEX", title: "Four ways into Picasso", copy: "Objects, portraits, stripes and ceramics." },
];

const indexStories = [
  { section: "OBJECT", title: "A trick of the mind", copy: "A bicycle saddle and handlebar become a bull: Picasso turns a found object into an act of recognition and invention." },
  { section: "PORTRAIT", title: "The face, rearranged", copy: "Portraiture becomes a place for compression, distortion and visual surprise." },
  { section: "STRIPES", title: "Picasso in stripes", copy: "Pattern moves from portraits and clothing into Paul Smith’s exhibition design." },
  { section: "CERAMICS", title: "One-off pieces", copy: "Plates, pitchers, tiles and clay reveal another side of Picasso’s appetite for making." },
];

const asagayaImages = [
  { src: "/images/editorial/la-ciudad-despierta-desktop.png", label: "The city wakes" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "Tanabata Mona Lisa" },
  { src: "/images/editorial/ritmo-urbano-giraffe-desktop.png", label: "Papier-mâché giraffe" },
  { src: "/images/editorial/todo-vivos-desktop.jpg", label: "Handmade figures overhead" },
  { src: "/images/editorial/tokio-no-es-gris-asagaya-lanterns.png", label: "Lanterns over Asagaya" },
  { src: "/images/editorial/tokio-en-flor-tanabata-desktop.png", label: "Tanabata in bloom" },
];

const contentsImage = "/images/editorial/tokio-no-es-gris-asagaya-lanterns.png";
const detailImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=92";

function EditorialImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} />;
}

function PicassoPicture({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return <picture className="picasso-picture"><source media="(max-width: 640px)" srcSet={mobile} /><img src={desktop} alt={alt} loading="lazy" /></picture>;
}

function ImageSlot({ number, title }: { number: string; title: string }) {
  return <figure className="cubism-slot"><div className="cubism-slot-box"><span>IMAGE {number}</span></div><figcaption><strong>{number} · {title}</strong><span>PICASSO · CUBISM</span></figcaption></figure>;
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
      <nav className="mag-nav" aria-label="Issue navigation"><div className="mag-nav-links">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</div><span>ART · TOKYO AND BEYOND</span></nav>
      <div className="mag-mobile-bar"><a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a><button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen(o => !o)}><span /><span /></button></div>
    </header>

    <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Issue menu" aria-hidden={!menuOpen}>
      <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
      <nav aria-label="Mobile issue navigation">{navItems.map((i, n) => <a key={i.label} href={i.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{n + 1}</span>{i.label}</a>)}</nav>
      <p>EASTOKYO · Nº 01 · Independent art magazine.</p>
    </div>

    <main id="contenido">
      <section className="mag-cover" id="latest" aria-labelledby="cover-title">
        <picture className="mag-cover-media mag-media"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" /><img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" /></picture>
        <div className="mag-cover-shade" aria-hidden="true" />
        <div className="mag-cover-grid">
          <div className="mag-cover-topline"><p>EASTOKYO · INDEPENDENT ART MAGAZINE</p><p>PICASSO · TOKYO · Nº 01</p></div>
          <div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
          <div className="mag-cover-story"><p className="mag-kicker">PICASSO · BULLFIGHTING · COVER STORY</p><h1 id="cover-title">The bull <em>never left him</em></h1><p><strong>Picasso, through the Eyes of Paul Smith · The National Art Center, Tokyo.</strong> Bullfighting followed Picasso from childhood to his final years. In the arena he found spectacle, violence, ritual and a recurring theatre for the images that obsessed him.</p><a href="#bullfighting">READ THE COVER STORY ↓</a></div>
          <div className="mag-cover-lines" aria-label="Featured stories in this issue">
            <article className="mag-cover-line"><div><small>EXHIBITION</small><p>Picasso, through the Eyes of Paul Smith.</p></div></article>
            <article className="mag-cover-line"><div><small>CUBISM</small><p>Breaking the picture apart.</p></div></article>
            <article className="mag-cover-line"><div><small>ASAGAYA TANABATA</small><p>Tokyo is not grey.</p></div></article>
          </div>
        </div>
        <p className="mag-cover-vertical">Nº 01 · SEPTEMBER 2026 · ¥1,200</p><div className="mag-cover-barcode" aria-hidden="true" />
      </section>

      <section className="mag-section mag-contents" id="contents" aria-labelledby="contents-title">
        <div className="mag-rule-heading"><h2>EASTOKYO Nº 01 · CONTENTS</h2></div>
        <div className="mag-contents-grid">
          <div className="mag-contents-title"><p className="mag-kicker">IN THIS ISSUE</p><h2 id="contents-title">Picasso in Tokyo — and Asagaya in full colour.</h2></div>
          <figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Festival decorations in Asagaya" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">ASAGAYA · EASTOKYO</figcaption></figure>
          <div className="mag-contents-list">{contents.map(s => <article className="mag-contents-entry" key={s.href}><a href={s.href}><small>{s.section}</small><h3>{s.title}</h3><p>{s.copy}</p></a></article>)}</div>
        </div>
      </section>

      <section className="mag-section mag-front picasso-feature" id="exhibition" aria-labelledby="front-title">
        <div className="mag-rule-heading"><h2>EXHIBITION · THE NATIONAL ART CENTER, TOKYO</h2></div>
        <div className="picasso-feature-intro">
          <div className="picasso-feature-title"><p className="mag-kicker">REVIEW · PICASSO IN TOKYO</p><h3 id="front-title">Picasso, through the Eyes of Paul Smith.</h3><p className="mag-deck">Paul Smith takes Picasso out of the neutral white cube and puts colour, pattern and surprise back into the act of looking.</p></div>
          <aside className="picasso-feature-note"><strong>PICASSO, REHUNG</strong><p>The exhibition moves loosely through Picasso’s career while Smith’s art direction changes the atmosphere around the work—from saturated colour to stripes, theatrical rooms and unexpected visual collisions.</p></aside>
        </div>
        <div className="picasso-gallery">
          <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>01 · PICASSO × PAUL SMITH</span><span>THE NATIONAL ART CENTER, TOKYO</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>02 · THE ART OF PAYING ATTENTION</span><span>EASTOKYO · EXHIBITION</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>03 · PICASSO IN STRIPES</span><span>EXHIBITION VIEW</span></figcaption></figure>
        </div>
        <div className="picasso-gallery-secondary">
          <figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>04 · PORTRAIT</span><span>PICASSO · TOKYO</span></figcaption></figure>
          <div className="picasso-feature-outro"><div className="picasso-meta">PICASSO × PAUL SMITH<br />THE NATIONAL ART CENTER, TOKYO<br />10 JUNE — 21 SEPTEMBER 2026</div><p>The strongest moments come when the installation stops behaving like a frame and starts behaving like an argument. Smith does not try to explain Picasso away; he changes the conditions in which we meet him.</p></div>
        </div>
      </section>

      <section className="mag-section mag-feature" id="bullfighting" aria-labelledby="bullfighting-title">
        <div className="mag-feature-grid">
          <header className="mag-feature-heading"><p className="mag-kicker">PICASSO · BULLFIGHTING</p><h2 id="bullfighting-title">The arena never left him</h2></header>
          <figure className="mag-feature-image-primary mag-media"><EditorialImage src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=95" alt="Picasso bullfighting artwork" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PICASSO · BULLFIGHTING</figcaption></figure>
          <figure className="mag-feature-image-detail mag-media"><EditorialImage src={detailImage} alt="Picasso bullfighting detail" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">THE BULL · THE HORSE · THE TORERO</figcaption></figure>
          <div className="mag-feature-copy"><p className="mag-deck">From childhood onward, bullfighting returned again and again in Picasso’s work—not as folklore, but as image, ritual and obsession.</p><p className="mag-feature-columns">The exhibition gives the bullring its own charged space. Picasso was drawn to the instant when spectacle becomes violence: the charging bull, the wounded horse, the fallen torero. Across decades, the arena becomes something larger than a subject. It is a theatre in which death, sexuality, sacrifice and the sacred collide.</p></div>
          <blockquote className="mag-feature-pullquote">“The bullring becomes a theatre where spectacle, violence and myth are impossible to separate.”<span>EASTOKYO · PICASSO</span></blockquote>
        </div>
      </section>

      <section className="cubism-intro" id="cubism" aria-labelledby="cubism-title">
        <div className="cubism-intro-word" aria-hidden="true">CUBISM</div>
        <div className="cubism-intro-copy">
          <p className="mag-kicker">CUBISM · PAINTING</p>
          <h2 id="cubism-title">The moment the picture broke open.</h2>
          <p>Around 1907, Picasso began dismantling the assumptions that had governed painting for centuries. Perspective fractured. Bodies and objects became planes. In close exchange with Georges Braque, he developed a new visual language that moved between painting, sculpture and papiers collés—and changed what a picture could be.</p>
        </div>
        <div className="cubism-intro-note"><span>1907 →</span><p>Perspective breaks.<br />The picture becomes construction.</p></div>
      </section>

      <section className="cubism-spread" id="cubism-works" aria-labelledby="cubism-spread-title">
        <div className="cubism-spread-head">
          <div><p className="mag-kicker">CUBISM · FOUR WORKS</p><h2 id="cubism-spread-title">Breaking the picture apart.</h2></div>
          <p>Cubism begins with a refusal: the refusal to let painting remain a single, stable view of the world. Four works carry this section, each with its own scale and shape.</p>
        </div>
        <div className="cubism-slot-grid">
          <ImageSlot number="01" title="LE CUBISME · 1907–1914" />
          <ImageSlot number="02" title="OWL · GEOMETRIC COMPOSITION" />
          <ImageSlot number="03" title="SEATED FIGURE" />
          <ImageSlot number="04" title="PORTRAIT" />
        </div>
        <div className="cubism-spread-foot"><p>Objects and bodies no longer sit obediently inside perspective. Picasso breaks them into planes, turns them through space and rebuilds them across the surface.</p><div>PICASSO · CUBISM<br />PAINTING · SCULPTURE · PAPIERS COLLÉS<br />EASTOKYO · Nº 01</div></div>
      </section>

      <section className="mag-section mag-photo" id="asagaya" aria-labelledby="photo-title">
        <div className="mag-photo-head"><p className="mag-kicker">ASAGAYA TANABATA · FESTIVAL</p><h2 id="photo-title">Tokyo is not grey</h2><p>Inside the Asagaya Tanabata Matsuri, where handmade papier-mâché figures and colour take over the shopping arcade.</p></div>
        <div className="mag-photo-grid" aria-label="Asagaya Tanabata visual story">{asagayaImages.map((image, index) => <figure className="mag-photo-item" key={image.src}><div className="mag-media"><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"} /></div><figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption></figure>)}</div>
      </section>

      <section className="mag-section mag-index" id="picasso-index" aria-labelledby="show-title">
        <div className="mag-index-head"><div><p className="mag-kicker">PICASSO INDEX</p><h2 id="show-title">Four ways into Picasso.</h2></div><p>Objects, portraits, pattern and clay—four details that open onto different parts of Picasso’s work and the Tokyo exhibition.</p></div>
        <figure className="mag-index-feature mag-media"><picture className="mag-index-picture"><source media="(max-width: 640px)" srcSet="https://raw.githubusercontent.com/desukara/bienvivos/main/public/images/editorial/picasso-index-hero-mobile.png" /><img src="https://raw.githubusercontent.com/desukara/bienvivos/main/public/images/editorial/picasso-index-hero-desktop.png" alt="Picasso exhibition view in Tokyo" loading="lazy" /></picture><figcaption><span className="mag-kicker">PICASSO · TOKYO</span><strong>One exhibition, many entrances.</strong></figcaption></figure>
        <div className="mag-index-list">{indexStories.map(s => <article className="mag-index-row" key={s.section}><div><small>{s.section}</small><h3>{s.title}</h3></div><p>{s.copy}</p></article>)}</div>
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
      <div className="mag-footer-links"><nav aria-label="Footer navigation">{footerItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</nav><div className="social-placeholder" aria-label="Social media coming soon"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div>
      <a className="mag-footer-wordmark" href="#top" aria-label="Back to top">EASTOKYO</a>
      <div className="mag-footer-bottom"><p>© 2026 EASTOKYO</p><p>MADE IN TOKYO · LOOKING OUTWARD</p><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </div>;
}
