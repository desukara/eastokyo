"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "COVER", href: "#latest" },
  { label: "CONTENTS", href: "#contents" },
  { label: "EXHIBITION", href: "#exhibition" },
  { label: "IDEAS", href: "#cubism" },
  { label: "TOKYO", href: "#asagaya" },
  { label: "INDEX", href: "#picasso-index" },
];

const footerItems = [
  { label: "ABOUT", href: "#about" },
  { label: "CONTENTS", href: "#contents" },
  { label: "TOP", href: "#top" },
];

const contents = [
  { href: "#bullfighting", section: "1. COVER STORY", title: "HE KEPT WALKING BACK IN.", copy: "Picasso returned to the bullring so many times because the arena always gave him something new to look at." },
  { href: "#exhibition", section: "2. EXHIBITION", title: "PICASSO, LOOKED AT AGAIN. WITHOUT THE WHITE-GLOVE HUSH.", copy: "Paul Smith moves the walls around and Picasso wakes up in the room." },
  { href: "#cubism", section: "3. IDEAS", title: "WHEN ONE ANGLE STOPPED BEING ENOUGH.", copy: "Picasso and Braque decided a picture did not have to sit still and behave. Neither did they." },
  { href: "#asagaya", section: "4. TOKYO", title: "THE CITY PUTS ON ITS COSTUME.", copy: "Paper creatures sway overhead and the street tips into celebration." },
  { href: "#picasso-index", section: "5. INDEX", title: "NOTHING IS EVER JUST WHAT IT LOOKS LIKE.", copy: "Faces. Ceramics. Bicycle parts. Things Picasso could not leave alone." },
];

type StoryKey = "cover" | "exhibition" | "ideas" | "tokyo" | "index";
type StoryLink = { href: string; label: string; tone: StoryKey; published: boolean };

const storyLinks: Record<StoryKey, StoryLink> = {
  cover: { href: "/he-never-really-left-the-arena", label: "ENTER THE ARENA →", tone: "cover", published: false },
  exhibition: { href: "/picasso-seen-with-fresh-eyes", label: "READ THE REVIEW →", tone: "exhibition", published: false },
  ideas: { href: "/when-one-point-of-view-wasnt-enough", label: "BREAK IT APART →", tone: "ideas", published: false },
  tokyo: { href: "/the-city-puts-on-a-costume", label: "GO TO ASAGAYA →", tone: "tokyo", published: false },
  index: { href: "/nothing-is-just-what-it-is", label: "START ANYWHERE →", tone: "index", published: false },
};

const indexStories = [
  { section: "OBJECT", title: "A BICYCLE BECOMES A BULL.", copy: "Two bicycle parts wander into Picasso's studio. A bull walks out." },
  { section: "PORTRAIT", title: "SYMMETRY WAS NEVER THE POINT.", copy: "Picasso doesn't fix the face. He makes it more honest." },
  { section: "STRIPES", title: "PAUL SMITH LEAVES HIS MARK.", copy: "Paul Smith turns an ordinary stripe into part of the show's own heartbeat." },
  { section: "CERAMICS", title: "PICASSO NEVER CLEANED HIS PLATE.", copy: "Picasso turned the dinner table into another studio." },
];

const asagayaImages = [
  { src: "/images/editorial/la-ciudad-despierta-desktop.png", label: "THE STREET IS ALREADY AWAKE" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "EVEN THE MONA LISA SHOWED UP" },
  { src: "/images/editorial/ritmo-urbano-giraffe-desktop.png", label: "LOOK UP. NO, HIGHER THAN THAT." },
  { src: "/images/editorial/todo-vivos-desktop.jpg", label: "EVERYONE'S OUT AND EVERYONE'S TALKING" },
  { src: "/images/editorial/tokio-no-es-gris-asagaya-lanterns.png", label: "LANTERNS WHEREVER YOU TURN" },
  { src: "/images/editorial/tokio-en-flor-tanabata-desktop.png", label: "ASAGAYA READY FOR THE FESTIVAL" },
];

const contentsImage = "/images/editorial/tokio-no-es-gris-asagaya-lanterns.png";

function EditorialImage({ src, alt, sizes, priority = false }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={88} />;
}

function PicassoPicture({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return <picture className="picasso-picture"><source media="(max-width: 640px)" srcSet={mobile} /><img src={desktop} alt={alt} loading="lazy" /></picture>;
}

function ImageSlot({ number, title }: { number: string; title: string }) {
  return <figure className="cubism-slot"><div className="cubism-slot-box"><span>IMAGE {number}</span></div><figcaption><strong>{title}</strong></figcaption></figure>;
}

function StoryCta({ story }: { story: StoryKey }) {
  const item = storyLinks[story];
  const content = <><span className="story-cta__action">{item.label}</span><span className="story-cta__status">{item.published ? "READ NOW" : "COMING SOON"}</span></>;

  if (item.published) {
    return <a className={`story-cta story-cta--${item.tone} is-live`} href={item.href}>{content}</a>;
  }

  return <span className={`story-cta story-cta--${item.tone} is-disabled`} aria-label={`${item.label.replace("→", "").trim()}. Coming soon.`}>{content}</span>;
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
      <div className="mag-header-rail"><p>ART, PASSION & TROUBLE. TOKYO</p><p>FIRST ISSUE. Nº 01. HERE WE GO</p><p>01 SEPTEMBER 2026. LET'S MAKE A SCENE</p></div>
      <nav className="mag-nav" aria-label="Issue navigation"><div className="mag-nav-links">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</div><span>ART. TOKYO AND BEYOND</span></nav>
      <div className="mag-mobile-bar"><a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a><button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen(o => !o)}><span /><span /></button></div>
    </header>

    <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Issue menu" aria-hidden={!menuOpen}>
      <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
      <nav aria-label="Mobile issue navigation">{navItems.map((i, n) => <a key={i.label} href={i.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{n + 1}</span>{i.label}</a>)}</nav>
      <p>EASTOKYO. Nº 01. BORN IN TOKYO. RAISED ON NERVE</p>
    </div>

    <main id="contenido">
      <section className="mag-cover" id="latest" aria-labelledby="cover-title">
        <picture className="mag-cover-media mag-media"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" /><img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" /></picture>
        <div className="mag-cover-shade" aria-hidden="true" />
        <div className="mag-cover-grid">
          <div className="mag-cover-topline"><p>EASTOKYO. BEAUTY, NOISE AND GOOD TASTE</p><p>PICASSO. TOKYO. NOBODY ASKED FOR QUIET</p></div>
          <div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
          <div className="mag-cover-story"><p className="mag-kicker">PICASSO. THE ARENA HE COULD NEVER QUIT</p><h1 id="cover-title">HE KEPT WALKING BACK IN.</h1><p><strong>PICASSO. INTO THE ARENA</strong> The arena gave Picasso what every painter secretly wants. Danger. Color. A crowd that never lets you look away.</p><StoryCta story="cover" /></div>
          <div className="mag-cover-lines" aria-label="Featured stories in this issue">
            <article className="mag-cover-line"><div><small>EXHIBITION</small><p>PICASSO, LOOKED AT AGAIN. WITHOUT THE WHITE-GLOVE HUSH.</p></div></article>
            <article className="mag-cover-line"><div><small>IDEAS</small><p>WHEN ONE ANGLE STOPPED BEING ENOUGH.</p></div></article>
            <article className="mag-cover-line"><div><small>TOKYO</small><p>THE CITY PUTS ON ITS COSTUME.</p></div></article>
          </div>
        </div>
        <p className="mag-cover-vertical">TOKYO. Nº 01. SEPTEMBER 2026</p><div className="mag-cover-barcode" aria-hidden="true" />
      </section>

      <section className="mag-section mag-contents" id="contents" aria-labelledby="contents-title">
        <div className="mag-rule-heading"><h2>EASTOKYO Nº 01. CONTENTS</h2></div>
        <div className="mag-contents-grid">
          <div className="mag-contents-title"><p className="mag-kicker">THIS IS WHERE IT GETS GOOD.</p><h2 id="contents-title">FIVE STORIES. ONE ISSUE. LOOK TWICE.</h2></div>
          <figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Festival decorations in Asagaya" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">ASAGAYA. EASTOKYO</figcaption></figure>
          <div className="mag-contents-list">{contents.map(s => <article className="mag-contents-entry" key={s.href}><a href={s.href}><small>{s.section}</small><h3>{s.title}</h3><p>{s.copy}</p></a></article>)}</div>
        </div>
      </section>

      <section className="mag-section mag-feature" id="bullfighting" aria-labelledby="bullfighting-title">
        <div className="mag-feature-grid">
          <header className="mag-feature-heading"><p className="mag-kicker">COVER STORY. PICASSO. INTO THE ARENA</p><h2 id="bullfighting-title">HE KEPT WALKING BACK IN.</h2></header>
          <figure className="mag-feature-image-primary mag-media"><EditorialImage src="/images/editorial/bullfight-feature-desktop.png" alt="Picasso bullfighting artwork" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PICASSO. BULLFIGHTING</figcaption></figure>
          <figure className="mag-feature-image-detail mag-media"><EditorialImage src="/images/editorial/bullfight-detail-desktop.png" alt="Picasso bullfighting detail" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">THE BULL. THE HORSE. THE MAN WHO WON'T FLINCH</figcaption></figure>
          <div className="mag-feature-copy"><p className="mag-deck">The arena got under his skin early and stayed there. Every time Picasso returned to bullfighting he found something the arena hadn't shown him yet.</p><p className="mag-feature-columns">In that ring Picasso watched the whole human animal come loose. Fear included.</p></div>
          <aside className="mag-feature-pullquote" aria-label="EASTOKYO editorial line">The arena is drama with nowhere to look away.<span>EASTOKYO. EDITORIAL LINE</span></aside>
        </div>
      </section>

      <section className="mag-section mag-front picasso-feature" id="exhibition" aria-labelledby="front-title">
        <div className="mag-rule-heading"><h2>EXHIBITION. THE NATIONAL ART CENTER, TOKYO</h2></div>
        <div className="picasso-feature-intro">
          <div className="picasso-feature-title"><p className="mag-kicker">REVIEW. TOKYO MEETS PICASSO</p><h3 id="front-title">PICASSO, LOOKED AT AGAIN. WITHOUT THE WHITE-GLOVE HUSH.</h3><p className="mag-deck">Paul Smith moves the walls around and Picasso wakes up in the room.</p><StoryCta story="exhibition" /></div>
          <aside className="picasso-feature-note"><strong>PICASSO, ROOM BY ROOM</strong><p>Picasso moves from room to room as each one changes the way the next work hits you.</p></aside>
        </div>
        <div className="picasso-gallery">
          <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>PICASSO, REMIXED</span><span>TOKYO, JAPAN. THE NATIONAL ART CENTER</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>A STRIPED SHIRT STOPS FOR PICASSO.</span><span>EASTOKYO. PICASSO IN TOKYO</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>PAUL SMITH DRAWS THE LINES</span><span>THE WALLS TALK BACK TOO</span></figcaption></figure>
        </div>
        <div className="picasso-gallery-secondary">
          <figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>PICASSO TAKES THE FACE APART</span><span>PICASSO. FACE TO FACE</span></figcaption></figure>
          <div className="picasso-feature-outro"><div className="picasso-meta">PICASSO × PAUL SMITH<br />THE NATIONAL ART CENTER. TOKYO, JAPAN<br />SUMMER 2026</div><p>Forget polite walls. This show argues with you and Picasso is happy to argue back.</p></div>
        </div>
      </section>

      <section className="cubism-intro" id="cubism" aria-labelledby="cubism-title">
        <div className="cubism-intro-word" aria-hidden="true">IDEAS</div>
        <div className="cubism-intro-copy">
          <p className="mag-kicker">IDEAS. CUBISM. ART TAKEN APART ON PURPOSE</p>
          <h2 id="cubism-title">WHEN ONE ANGLE STOPPED BEING ENOUGH.</h2>
          <p>Picasso and Braque took a single view of the world and cracked it open. They wanted more life in the picture than one calm angle could hold. What came back was harder to read at first. Then it got under your skin. Cubism will not just hand you the image. You have to go find it yourself.</p>
          <StoryCta story="ideas" />
        </div>
        <div className="cubism-intro-note"><span>1907 →</span><p>Perspective breaks apart, and the picture stops being a window and becomes something built.</p></div>
      </section>

      <section className="cubism-spread" id="cubism-works" aria-labelledby="cubism-spread-title">
        <div className="cubism-spread-head">
          <div><p className="mag-kicker">IDEAS. CUBISM. FOUR WORKS</p><h2 id="cubism-spread-title">Same rebellion. Four different angles of attack.</h2></div>
          <p>Cubism starts with a refusal to let painting behave like one fixed view of the world, and these four works show how far that refusal could go.</p>
        </div>
        <div className="cubism-slot-grid">
          <ImageSlot number="01" title="LE CUBISME. ONE VIEW? NOT ANYMORE." />
          <ImageSlot number="02" title="OWL. PICASSO. EYES OPEN IN THE DARK" />
          <ImageSlot number="03" title="PICASSO. STILL, BUT BARELY" />
          <ImageSlot number="04" title="PORTRAIT. PICASSO. THE TRUTH OF A FACE" />
        </div>
        <div className="cubism-spread-foot"><p>Objects and bodies stop behaving inside perspective. Picasso breaks them into planes. He turns them through space and rebuilds them across the surface piece by piece.</p><div>ONE VIEW COULD NEVER HOLD ALL OF IT. THAT WAS THE WHOLE POINT.</div></div>
      </section>

      <section className="mag-section mag-photo" id="asagaya" aria-labelledby="photo-title">
        <div className="mag-photo-head"><p className="mag-kicker">TOKYO. ASAGAYA TANABATA</p><h2 id="photo-title">THE CITY PUTS ON ITS COSTUME.</h2><p>Paper creatures sway overhead and the street tips into celebration.</p><StoryCta story="tokyo" /></div>
        <div className="mag-photo-grid" aria-label="Asagaya Tanabata visual story">{asagayaImages.map((image, index) => <figure className="mag-photo-item" key={image.src}><div className="mag-media"><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"} /></div><figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption></figure>)}</div>
      </section>

      <section className="mag-section mag-index" id="picasso-index" aria-labelledby="show-title">
        <div className="mag-index-head"><div><p className="mag-kicker">INDEX. PICASSO. START ANYWHERE</p><h2 id="show-title">NOTHING IS EVER JUST WHAT IT LOOKS LIKE.</h2><StoryCta story="index" /></div><p>Faces. Ceramics. Bicycle parts. Things Picasso could not leave alone.</p></div>
        <figure className="mag-index-feature mag-media"><picture className="mag-index-picture"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-index-hero-mobile.png" /><img src="/images/editorial/picasso-index-hero-desktop.png" alt="Picasso exhibition view in Tokyo" loading="lazy" /></picture></figure>
        <div className="mag-index-list">{indexStories.map(s => <article className="mag-index-row" key={s.section}><div><small>{s.section}</small><h3>{s.title}</h3></div><p>{s.copy}</p></article>)}</div>
      </section>

      <section className="mag-back-cover" id="about" aria-labelledby="about-title">
        <div className="mag-back-inner">
          <div className="mag-mini-cover" aria-label="Preview of EASTOKYO inaugural issue"><EditorialImage src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" sizes="(max-width: 640px) 70vw, 20rem" /><strong>EASTOKYO</strong><h3>HE KEPT WALKING BACK IN.</h3><p>Nº 01. TOKYO. SEPTEMBER 2026</p></div>
          <div className="mag-back-copy"><p className="mag-kicker">EASTOKYO. Nº 01. BORN IN TOKYO. RAISED ON NERVE</p><h2 id="about-title">ART FROM TOKYO. LOOKING EVERYWHERE ELSE TOO.</h2><p>EASTOKYO is an independent art magazine for people who need their art to have a pulse.</p><span className="mag-back-date">Nº 01. JUST GETTING STARTED</span></div>
        </div>
      </section>
    </main>

    <footer className="mag-footer">
      <div className="mag-footer-top"><div><p className="mag-kicker">EASTOKYO. Nº 01</p><h2>LOOK TWICE.</h2></div><div className="mag-newsletter"><p>THE EASTOKYO LETTER. DON'T MISS THE NEXT ONE</p><strong>NOT YET. BUT SOON.</strong></div></div>
      <div className="mag-footer-links"><nav aria-label="Footer navigation">{footerItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</nav><div className="social-placeholder" aria-label="Social media coming soon"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div>
      <a className="mag-footer-wordmark" href="#top" aria-label="Back to top">EASTOKYO</a>
      <div className="mag-footer-bottom"><p>© 2026 EASTOKYO. TOKYO, JAPAN</p><p>BORN IN TOKYO. RAISED ON NERVE. READY FOR MORE</p><a href="#top">ONE MORE LOOK ↑</a></div>
    </footer>
  </div>;
}