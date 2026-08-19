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
  { label: "TOP OF PAGE", href: "#top" },
];

const contents = [
  { href: "#bullfighting", section: "1. COVER ARTICLE", title: "HE KEPT WALKING BACK IN.", copy: "Picasso went back into that arena again and again, because it never stopped giving him something new to feel and to paint." },
  { href: "#exhibition", section: "2. EXHIBITION", title: "PICASSO, LOOKED AT AGAIN.", copy: "Paul Smith moves the walls, and suddenly Picasso wakes up in the room." },
  { href: "#cubism", section: "3. IDEAS", title: "WHEN A SINGLE ANGLE WAS NO LONGER ENOUGH.", copy: "Picasso and Braque decided that an image was not obliged to remain well-behaved and still. Neither were they, by the way, let’s be honest." },
  { href: "#asagaya", section: "4. TOKYO", title: "THE CITY PUTS ON ITS COSTUME.", copy: "Paper creatures float above people’s heads, and the whole street tips into celebration without warning." },
  { href: "#picasso-index", section: "5. INDEX", title: "NOTHING IS EVER QUITE WHAT IT SEEMS TO BE.", copy: "Faces that he reworked until they told the truth. Ceramics transformed into a new canvas. Bicycle parts becoming something entirely different once they had passed through his hands. This man was simply incapable of leaving a good idea alone, gracias a Dios." },
];

type StoryKey = "cover" | "exhibition" | "ideas" | "tokyo" | "index";
type StoryLink = { href: string; label: string; tone: StoryKey; published: boolean };

const storyLinks: Record<StoryKey, StoryLink> = {
  cover: { href: "/he-never-really-left-the-arena", label: "COME INTO THE ARENA WITH ME.", tone: "cover", published: false },
  exhibition: { href: "/picasso-seen-with-fresh-eyes", label: "READ THE REVIEW.", tone: "exhibition", published: false },
  ideas: { href: "/when-one-point-of-view-wasnt-enough", label: "SEE HOW EVERYTHING BREAKS APART.", tone: "ideas", published: false },
  tokyo: { href: "/the-city-puts-on-a-costume", label: "COME SEE ASAGAYA.", tone: "tokyo", published: false },
  index: { href: "/nothing-is-just-what-it-is", label: "START WHEREVER YOU WANT.", tone: "index", published: false },
};

const indexStories = [
  { section: "OBJECT", title: "A BICYCLE BECOMES A BULL.", copy: "Two bicycle parts enter his studio, and one way or another, a bull comes out." },
  { section: "PORTRAIT", title: "SYMMETRY WAS NEVER THE SUBJECT.", copy: "Picasso does not repair the face. He makes it more true, even on days when that truth is not particularly pretty to look at." },
  { section: "STRIPES", title: "PAUL SMITH LEAVES HIS MARK.", copy: "Paul Smith turns a simple stripe into an element of the rhythm of the whole exhibition, a discreet presence, in the background throughout the whole exhibition." },
  { section: "CERAMICS", title: "PICASSO NEVER REALLY FINISHED HIS PLATE.", copy: "He turned the dining table into one more studio, because he never really knew how to stop working and, deep down, he did not really want to." },
];

const asagayaImages = [
  { src: "/images/editorial/la-ciudad-despierta-desktop.png", label: "THE STREET IS ALREADY AWAKE, AND IT CERTAINLY IS NOT GOING TO WAIT FOR YOU." },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "EVEN THE MONA LISA MADE THE TRIP." },
  { src: "/images/editorial/ritmo-urbano-giraffe-desktop.png", label: "LOOK UP. NO, HIGHER. EVEN HIGHER." },
  { src: "/images/editorial/todo-vivos-desktop.jpg", label: "EVERYONE IS OUTSIDE." },
  { src: "/images/editorial/tokio-no-es-gris-asagaya-lanterns.png", label: "LANTERNS EVERYWHERE YOU TURN YOUR HEAD." },
  { src: "/images/editorial/tokio-en-flor-tanabata-desktop.png", label: "ASAGAYA, DRESSED TO THE NINES FOR THE FESTIVAL." },
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
  const content = <><span className="story-cta__action">{item.label}</span><span className="story-cta__status">{item.published ? "READ NOW" : "SOON"}</span></>;
  if (item.published) return <a className={`story-cta story-cta--${item.tone} is-live`} href={item.href}>{content}</a>;
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
    main?.setAttribute("inert", ""); footer?.setAttribute("inert", ""); menuCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = previousOverflow; main?.removeAttribute("inert"); footer?.removeAttribute("inert"); window.removeEventListener("keydown", handleKeyDown); menuButton?.focus(); };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);

  return <div className="mag-page" id="top">
    <a className="mag-skip-link" href="#contenido">Go to content</a>
    <header className="mag-header">
      <div className="mag-header-rail"><p>ART, PASSION AND A LITTLE DISORDER. TOKYO.</p><p>FIRST ISSUE. NUMBER ONE. AQUÍ VAMOS. LET’S GO.</p><p>SEPTEMBER 1, 2026. LET’S MAKE SOME NOISE.</p></div>
      <nav className="mag-nav" aria-label="Issue navigation"><div className="mag-nav-links">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</div><span>ART FROM TOKYO, AND FROM ALL THE OTHER PLACES WHERE MY HEART DECIDES TO WANDER.</span></nav>
      <div className="mag-mobile-bar"><a className="mag-mobile-logo" href="#top" onClick={closeMenu}>EASTOKYO</a><button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen(o => !o)}><span /><span /></button></div>
    </header>
    <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Issue menu" aria-hidden={!menuOpen}>
      <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CLOSE <span aria-hidden="true">×</span></button>
      <nav aria-label="Mobile issue navigation">{navItems.map((i, n) => <a key={i.label} href={i.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{n + 1}</span>{i.label}</a>)}</nav>
      <p>EASTOKYO. NUMBER ONE. BORN IN TOKYO. RAISED WITH FIRE IN THE BELLY.</p>
    </div>
    <main id="contenido">
      <section className="mag-cover" id="latest" aria-labelledby="cover-title">
        <picture className="mag-cover-media mag-media"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" /><img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" /></picture><div className="mag-cover-shade" aria-hidden="true" />
        <div className="mag-cover-grid"><div className="mag-cover-topline"><p>EASTOKYO. BEAUTY, NOISE AND GOOD TASTE.</p><p>PICASSO. TOKYO. THEY WERE ASKING HIM FOR CALM. FORTUNATELY, HE HAD FAR TOO MANY THINGS TO SAY.</p></div><div className="mag-cover-masthead" aria-hidden="true">EASTOKYO</div>
          <div className="mag-cover-story"><p className="mag-kicker">PICASSO AND THE ARENA HE NEVER REALLY LEFT.</p><h1 id="cover-title">HE KEPT WALKING BACK IN.</h1><p>There is something in the arenas that gave Picasso exactly what every painter secretly looks for: real danger, color, and a crowd close enough that you can feel it breathing, watching us, challenging us to look away. Once that kind of electricity gets into your blood, amigo, you do not detach yourself from it like that. You go back there. All his life, he went back there, and I think I understand why.</p><StoryCta story="cover" /></div>
          <div className="mag-cover-lines" aria-label="Featured stories in this issue"><article className="mag-cover-line"><div><small>EXHIBITION</small><p>PICASSO, LOOKED AT AGAIN.</p></div></article><article className="mag-cover-line"><div><small>IDEAS</small><p>THE MOMENT WHEN A SINGLE ANGLE SIMPLY WAS NO LONGER ENOUGH TO CONTAIN EVERYTHING HE HAD TO SAY.</p></div></article><article className="mag-cover-line"><div><small>TOKYO</small><p>THE CITY PUTS ON ITS COSTUME, AND IT DOES NOT APOLOGIZE FOR IT FOR A SECOND.</p></div></article></div>
        </div><p className="mag-cover-vertical">TOKYO. NUMBER ONE. SEPTEMBER 2026.</p><div className="mag-cover-barcode" aria-hidden="true" />
      </section>
      <section className="mag-section mag-contents" id="contents" aria-labelledby="contents-title"><div className="mag-rule-heading"><h2>EASTOKYO. NUMBER ONE. CONTENTS.</h2></div><div className="mag-contents-grid"><div className="mag-contents-title"><p className="mag-kicker">THIS IS WHERE THE RHYTHM REALLY SPEEDS UP.</p><h2 id="contents-title">FIVE STORIES. ONE ISSUE. LOOK TWICE.</h2></div><figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Festival decorations in Asagaya" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">ASAGAYA. EASTOKYO.</figcaption></figure><div className="mag-contents-list">{contents.map(s => <article className="mag-contents-entry" key={s.href}><a href={s.href}><small>{s.section}</small><h3>{s.title}</h3><p>{s.copy}</p></a></article>)}</div></div></section>
      <section className="mag-section mag-feature" id="bullfighting" aria-labelledby="bullfighting-title"><div className="mag-feature-grid"><header className="mag-feature-heading"><p className="mag-kicker">COVER ARTICLE. PICASSO, IN THE ARENA.</p><h2 id="bullfighting-title">HE KEPT WALKING BACK IN.</h2></header><figure className="mag-feature-image-primary mag-media"><EditorialImage src="/images/editorial/bullfight-feature-desktop.png" alt="Picasso bullfighting artwork" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PICASSO AND THE BULLFIGHT.</figcaption></figure><figure className="mag-feature-image-detail mag-media"><EditorialImage src="/images/editorial/bullfight-detail-desktop.png" alt="Picasso bullfighting detail" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">THE BULL, THE HORSE, THE MAN.</figcaption></figure><div className="mag-feature-copy"><p className="mag-deck">That arena grabbed hold of him very early, and it never really let him go. Every time Picasso went back there, it showed him something it had never shown him before: another shade of fear, grace or violence. And he took all of that and put it directly onto the canvas, before the sensation could fade.</p><p className="mag-feature-columns">In that arena, you see the entire animal part of a human being break free, with the fear and everything else, without restraint and with nowhere to hide it. That is why he loved that place. Places like that, there are not many. When you find one, you do not waste it, and above all you do not turn your back on it.</p></div><aside className="mag-feature-pullquote" aria-label="EASTOKYO editorial line">A DRAMA YOU CANNOT ESCAPE WITH YOUR EYES.<span>EASTOKYO EDITORIAL LINE.</span></aside></div></section>
      <section className="mag-section mag-front picasso-feature" id="exhibition" aria-labelledby="front-title"><div className="mag-rule-heading"><h2>EXHIBITION. THE NATIONAL ART CENTER, TOKYO.</h2></div><div className="picasso-feature-intro"><div className="picasso-feature-title"><p className="mag-kicker">REVIEW. TOKYO MEETS PICASSO.</p><h3 id="front-title">PICASSO, LOOKED AT AGAIN.</h3><p className="mag-deck">Paul Smith moves the walls, and Picasso wakes up in that room after years of waiting for someone, anyone, to finally open the door.</p><StoryCta story="exhibition" /></div><aside className="picasso-feature-note"><strong>PICASSO, ROOM AFTER ROOM.</strong><p>You move forward with him from one room to another, and you feel something happening. Each space quietly changes the way the next work reaches us, until you find yourself, right at the very end, facing something that stops you cold.</p></aside></div><div className="picasso-gallery"><figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitor studying Picasso ceramics in the Paul Smith exhibition at The National Art Center, Tokyo" /><figcaption><span>PICASSO, REMIXED.</span><span>TOKYO, JAPAN. THE NATIONAL ART CENTER.</span></figcaption></figure><figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitor looking closely at a Picasso work in Tokyo" /><figcaption><span>A VISITOR STOPS TO LOOK AT PICASSO CLOSELY.</span><span>EASTOKYO. PICASSO IN TOKYO.</span></figcaption></figure><figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Blue and white striped installation in the Picasso exhibition" /><figcaption><span>PAUL SMITH, IN STRIPES.</span><span></span></figcaption></figure></div><div className="picasso-gallery-secondary"><figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Picasso portrait work displayed at the Tokyo exhibition" /><figcaption><span>PICASSO TAKES THE FACE APART, PIECE BY PIECE, WITHOUT CHEATING.</span><span>FACE TO FACE.</span></figcaption></figure><div className="picasso-feature-outro"><div className="picasso-meta">PICASSO AND PAUL SMITH.<br />THE NATIONAL ART CENTER, TOKYO, JAPAN.<br />SUMMER 2026.</div><p>Forget the quietly silent gallery walls, amigo. This exhibition has a quick wit, and Picasso does not hold back from answering it.</p><div className="picasso-outro-wordbox">PICASSO OWNS THE ROOM.<span className="picasso-outro-aside">UN POCO LOCO.</span></div></div></div></section>
      <section className="cubism-intro" id="cubism" aria-labelledby="cubism-title"><div className="cubism-intro-word" aria-hidden="true">IDEAS</div><div className="cubism-intro-copy"><p className="mag-kicker">IDEAS. CUBISM. ART TAKEN APART ON PURPOSE.</p><h2 id="cubism-title">A SINGLE ANGLE WAS NO LONGER ENOUGH.</h2><p>Picasso and Braque took a single, very docile vision of the world and opened it up completely, because one calm angle could never contain all the life they wanted to put into an image. At first, the result was not necessarily easy to look at. Truly honest things rarely are. But it gets under your skin and stays there long after you have looked away. Cubism forces you to do part of the work yourself. The image opens up piece by piece, and that is exactly how it should work.</p><StoryCta story="ideas" /></div><div className="cubism-intro-note"><span>1907.</span><p>The year when perspective splits in two and an image stops pretending to be a window onto the world. It becomes a constructed thing, with its own weight and its own beat.</p></div></section>
      <section className="cubism-spread" id="cubism-works" aria-labelledby="cubism-spread-title"><div className="cubism-spread-head"><div><p className="mag-kicker">IDEAS. CUBISM. FOUR WORKS.</p><h2 id="cubism-spread-title">Same rebellion, four different angles of attack.</h2></div><p>Cubism begins by refusing to let a painting remain still or imprisoned by a single point of view on the world, and these four works show how far Picasso and Braque were prepared to push that idea.</p></div><div className="cubism-slot-grid"><ImageSlot number="01" title="CUBISM. A SINGLE POINT OF VIEW? NEVER AGAIN." /><ImageSlot number="02" title="OWL. EYES WIDE OPEN IN THE DARK, WATCHING EVERYTHING." /><ImageSlot number="03" title="STILL LIFE, BUT BARELY STILL ANYMORE." /><ImageSlot number="04" title="PORTRAIT. THE TRUTH OF A FACE." /></div><div className="cubism-spread-foot"><p>Here, objects and bodies stop obeying perspective. Picasso breaks them into planes, turns them through space, then rebuilds them piece by piece across the surface.</p><div>A SINGLE POINT OF VIEW COULD NEVER HAVE CONTAINED EVERYTHING. THAT WAS ALREADY THE WHOLE POINT, AND IT STILL IS.</div></div></section>
      <section className="mag-section mag-photo" id="asagaya" aria-labelledby="photo-title"><div className="mag-photo-head"><p className="mag-kicker">TOKYO. TANABATA IN ASAGAYA.</p><h2 id="photo-title">THE CITY PUTS ON ITS COSTUME.</h2><p>Paper creatures float above people’s heads, and the street tips into celebration without asking anyone’s permission.</p><StoryCta story="tokyo" /></div><div className="mag-photo-grid" aria-label="Asagaya Tanabata visual story">{asagayaImages.map((image, index) => <figure className="mag-photo-item" key={image.src}><div className="mag-media"><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"} /></div><figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption></figure>)}</div></section>
      <section className="mag-section mag-index" id="picasso-index" aria-labelledby="show-title"><div className="mag-index-head"><div><p className="mag-kicker">INDEX. PICASSO. START WHEREVER YOU WANT.</p><h2 id="show-title">NOTHING IS EVER QUITE WHAT IT SEEMS TO BE.</h2><StoryCta story="index" /></div><p>Faces taken apart and then rebuilt. Ceramics crossed through by the same nervous energy as his paintings. Bicycle parts that, suddenly, look less like machinery than sculpture. Picasso had the gift of making the ordinary seem freshly invented, and that is exactly why we keep coming back to it.</p></div><figure className="mag-index-feature mag-media"><picture className="mag-index-picture"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-index-hero-mobile.png" /><img src="/images/editorial/picasso-index-hero-desktop.png" alt="Picasso exhibition view in Tokyo" loading="lazy" /></picture></figure><div className="mag-index-list">{indexStories.map(s => <article className="mag-index-row" key={s.section}><div><small>{s.section}</small><h3>{s.title}</h3></div><p>{s.copy}</p></article>)}</div></section>
      <section className="mag-back-cover" id="about" aria-labelledby="about-title"><div className="mag-back-inner"><div className="mag-mini-cover" aria-label="Preview of EASTOKYO inaugural issue"><EditorialImage src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" sizes="(max-width: 640px) 70vw, 20rem" /><strong>EASTOKYO</strong><h3>HE KEPT WALKING BACK IN.</h3><p>NUMBER ONE. TOKYO. SEPTEMBER 2026.</p></div><div className="mag-back-copy"><p className="mag-kicker">EASTOKYO. NUMBER ONE.</p><h2 id="about-title">TOKYO ART. EYES OPEN.</h2><p>EASTOKYO is an independent art magazine for those who need art to truly have a pulse, not something you choose to go with the sofa, but something you can almost feel moving when you hold the pages in your hands.</p><span className="mag-back-date">NUMBER ONE. WE ARE ONLY JUST GETTING STARTED, AND WE ARE NOT GOING TO SLOW DOWN FOR ANYONE.</span></div></div></section>
    </main>
    <footer className="mag-footer"><div className="mag-footer-top"><div><p className="mag-kicker">EASTOKYO. NUMBER ONE.</p><h2>LOOK TWICE.</h2></div><div className="mag-newsletter"><p>THE EASTOKYO LETTER. DO NOT MISS THE NEXT ONE.</p><strong>NOT YET. BUT SOON. WE PROMISE YOU, AND WE REALLY MEAN IT.</strong></div></div><div className="mag-footer-links"><nav aria-label="Footer navigation">{footerItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</nav><div className="social-placeholder" aria-label="Social media coming soon"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div><a className="mag-footer-wordmark" href="#top" aria-label="Back to top">EASTOKYO</a><div className="mag-footer-bottom"><p>© 2026 EASTOKYO. TOKYO, JAPAN.</p><p>BORN IN TOKYO. RAISED WITH FIRE IN THE BELLY.</p><a href="#top">ONE LAST LOOK, RIGHT AT THE TOP.</a></div></footer>
  </div>;
}