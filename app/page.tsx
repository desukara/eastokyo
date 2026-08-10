"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "PORTADA", href: "#latest" },
  { label: "SUMARIO", href: "#contents" },
  { label: "EXPOSICIÓN", href: "#exhibition" },
  { label: "TAUROMAQUIA", href: "#bullfighting" },
  { label: "CUBISMO", href: "#cubism" },
  { label: "ASAGAYA", href: "#asagaya" },
  { label: "ÍNDICE", href: "#picasso-index" },
];

const footerItems = [
  { label: "ACERCA", href: "#about" },
  { label: "SUMARIO", href: "#contents" },
  { label: "ARRIBA", href: "#top" },
];

const contents = [
  { href: "#exhibition", section: "EXPOSICIÓN", title: "PICASSO, CON OJOS NUEVOS.", copy: "Paul Smith cambia la sala y de pronto Picasso vuelve a sentirse vivo." },
  { href: "#bullfighting", section: "TAUROMAQUIA", title: "LA ARENA SE LE METIÓ BAJO LA PIEL.", copy: "Picasso sabía exactamente dónde mirar." },
  { href: "#cubism", section: "CUBISMO", title: "CUANDO EL CUADRO PERDIÓ LA CABEZA.", copy: "¿Un solo ángulo? Por favor. Picasso y Braque tenían otros planes." },
  { href: "#cubism-works", section: "CUBISMO · OBRAS", title: "ESTO PASA CUANDO LA PERSPECTIVA SE ABURRE.", copy: "La realidad no tuvo ninguna oportunidad." },
  { href: "#asagaya", section: "ASAGAYA TANABATA", title: "LA CIUDAD SE DISFRAZA.", copy: "Criaturas de papel se balancean arriba y de pronto toda la ciudad se convierte en fiesta." },
  { href: "#picasso-index", section: "ÍNDICE PICASSO", title: "NO HAY SALIDA FÁCIL.", copy: "De piezas de bicicleta a cerámica, Picasso seguía encontrando nuevas maneras de dejar clara la idea." },
];

const indexStories = [
  { section: "OBJETO", title: "NADA ES SOLO LO QUE PARECE.", copy: "Dos piezas de bicicleta entran al estudio de Picasso. De alguna manera, sale un toro." },
  { section: "RETRATO", title: "LA SIMETRÍA NUNCA FUE EL PUNTO.", copy: "Picasso no corrige la cara. La vuelve más interesante." },
  { section: "RAYAS", title: "PAUL SMITH DEJA SU MARCA.", copy: "Paul Smith convierte una raya normal en parte de la personalidad de la exposición." },
  { section: "CERÁMICA", title: "PICASSO NO DEJÓ EL PLATO LIMPIO.", copy: "Picasso convirtió la mesa en otro estudio." },
];

const asagayaImages = [
  { src: "/images/editorial/la-ciudad-despierta-desktop.png", label: "LA CALLE YA ESTÁ DESPIERTA" },
  { src: "/images/editorial/tokio-no-es-gris-mona-lisa-tanabata.png", label: "HASTA LA MONA LISA APARECIÓ" },
  { src: "/images/editorial/ritmo-urbano-giraffe-desktop.png", label: "MIRA ARRIBA. MUY ARRIBA." },
  { src: "/images/editorial/todo-vivos-desktop.jpg", label: "TODO EL MUNDO ANDA POR AQUÍ" },
  { src: "/images/editorial/tokio-no-es-gris-asagaya-lanterns.png", label: "FAROLILLOS POR TODAS PARTES" },
  { src: "/images/editorial/tokio-en-flor-tanabata-desktop.png", label: "ASAGAYA, LISTO PARA LA FIESTA" },
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
  return <figure className="cubism-slot"><div className="cubism-slot-box"><span>IMAGEN {number}</span></div><figcaption><strong>{number} · {title}</strong></figcaption></figure>;
}

export default function BienVivosHome() {
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

  return <div className="mag-page bienvivos-page" id="top">
    <a className="mag-skip-link" href="#contenido">Saltar al contenido</a>
    <header className="mag-header">
      <div className="mag-header-rail"><p>ARTE, PASIÓN Y PROBLEMAS · TOKIO</p><p>PRIMER NÚMERO · Nº 01 · AQUÍ VAMOS</p><p>01 SEPTIEMBRE 2026 · VAMOS A ARMARLA</p></div>
      <nav className="mag-nav" aria-label="Navegación de la edición"><div className="mag-nav-links">{navItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</div><span>ARTE · TOKIO Y MÁS ALLÁ</span></nav>
      <div className="mag-mobile-bar"><a className="mag-mobile-logo" href="#top" onClick={closeMenu}>BIEN VIVOS</a><button ref={menuButtonRef} type="button" className={`mag-menu-button ${menuOpen ? "is-open" : ""}`} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mag-mobile-menu" onClick={() => setMenuOpen(o => !o)}><span /><span /></button></div>
    </header>

    <div id="mag-mobile-menu" className={`mag-mobile-menu ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menú de la edición" aria-hidden={!menuOpen}>
      <button ref={menuCloseRef} type="button" className="mag-mobile-menu-close" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>CERRAR <span aria-hidden="true">×</span></button>
      <nav aria-label="Navegación móvil">{navItems.map((i, n) => <a key={i.label} href={i.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>0{n + 1}</span>{i.label}</a>)}</nav>
      <p>BIEN VIVOS · Nº 01 · HECHO EN TOKIO.</p>
    </div>

    <main id="contenido">
      <section className="mag-cover" id="latest" aria-labelledby="cover-title">
        <picture className="mag-cover-media mag-media"><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" /><img src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" fetchPriority="high" /></picture>
        <div className="mag-cover-shade" aria-hidden="true" />
        <div className="mag-cover-grid">
          <div className="mag-cover-topline"><p>BIEN VIVOS · BELLEZA, CAOS Y BUEN GUSTO</p><p>PICASSO · TOKIO · NADA TRANQUILO</p></div>
          <div className="mag-cover-masthead" aria-hidden="true">BIEN VIVOS</div>
          <div className="mag-cover-story"><p className="mag-kicker">PICASSO · LA ARENA DENTRO DE SU CABEZA</p><h1 id="cover-title">NUNCA SALIÓ DEL TODO DE LA ARENA</h1><p><strong>PICASSO, PAUL SMITH Y UNA IDEA MUY BUENA · TOKIO</strong> La arena le dio a Picasso todo lo que un artista podía pedir: peligro, color y absolutamente ninguna posibilidad de aburrirse.</p><a href="#bullfighting">ENTRA EN LA ARENA ↓</a></div>
          <div className="mag-cover-lines" aria-label="Historias destacadas de este número">
            <article className="mag-cover-line"><div><small>EXPOSICIÓN</small><p>PAUL SMITH SUBE EL COLOR.</p></div></article>
            <article className="mag-cover-line"><div><small>CUBISMO</small><p>ROMPIENDO EL ARTE EN PEDAZOS.</p></div></article>
            <article className="mag-cover-line"><div><small>ASAGAYA TANABATA</small><p>TOKIO, A TODO VOLUMEN.</p></div></article>
          </div>
        </div>
        <p className="mag-cover-vertical">TOKIO · Nº 01 · SEPTIEMBRE 2026 · ¥1,200</p><div className="mag-cover-barcode" aria-hidden="true" />
      </section>

      <section className="mag-section mag-contents" id="contents" aria-labelledby="contents-title">
        <div className="mag-rule-heading"><h2>BIEN VIVOS Nº 01 · SUMARIO</h2></div>
        <div className="mag-contents-grid">
          <div className="mag-contents-title"><p className="mag-kicker">AQUÍ EMPIEZA LO BUENO</p><h2 id="contents-title">TOKIO RECIBE A PICASSO. ASAGAYA SUBE EL VOLUMEN.</h2></div>
          <figure className="mag-contents-image mag-media"><EditorialImage src={contentsImage} alt="Decoraciones del festival Tanabata en Asagaya" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 34vw" /><figcaption className="mag-credit">ASAGAYA · BIEN VIVOS</figcaption></figure>
          <div className="mag-contents-list">{contents.map(s => <article className="mag-contents-entry" key={s.href}><a href={s.href}><small>{s.section}</small><h3>{s.title}</h3><p>{s.copy}</p></a></article>)}</div>
        </div>
      </section>

      <section className="mag-section mag-front picasso-feature" id="exhibition" aria-labelledby="front-title">
        <div className="mag-rule-heading"><h2>EXPOSICIÓN · THE NATIONAL ART CENTER, TOKIO</h2></div>
        <div className="picasso-feature-intro">
          <div className="picasso-feature-title"><p className="mag-kicker">RESEÑA · TOKIO CONOCE A PICASSO</p><h3 id="front-title">PAUL SMITH LE DA A PICASSO UN ESCENARIO NUEVO.</h3><p className="mag-deck">Por fin Picasso tiene dónde volverse loco.</p></div>
          <aside className="picasso-feature-note"><strong>PICASSO, SIN CORREA</strong><p>Picasso recorre las salas. Pero las salas siguen cambiando las reglas.</p></aside>
        </div>
        <div className="picasso-gallery">
          <figure className="picasso-shot picasso-shot-1"><PicassoPicture desktop="/images/editorial/picasso-paul-smith-desktop.png" mobile="/images/editorial/picasso-paul-smith-mobile.png" alt="Visitante observando cerámicas de Picasso en la exposición de Paul Smith en The National Art Center, Tokio" /><figcaption><span>01 · PICASSO, REMEZCLADO</span><span>TOKIO, JAPÓN · THE NATIONAL ART CENTER</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-2"><PicassoPicture desktop="/images/editorial/picasso-paying-attention-desktop.png" mobile="/images/editorial/picasso-paying-attention-mobile.jpg" alt="Visitante mirando de cerca una obra de Picasso en Tokio" /><figcaption><span>02 · ATENCIÓN. ALGO SE TRAE ENTRE MANOS.</span><span>BIEN VIVOS · PICASSO EN TOKIO</span></figcaption></figure>
          <figure className="picasso-shot picasso-shot-3"><PicassoPicture desktop="/images/editorial/picasso-striped-installation-desktop.jpg" mobile="/images/editorial/picasso-striped-installation-mobile.jpg" alt="Instalación de rayas azules y blancas en la exposición de Picasso" /><figcaption><span>03 · PAUL SMITH TRAZA LAS LÍNEAS</span><span>LAS PAREDES TAMBIÉN TRABAJAN</span></figcaption></figure>
        </div>
        <div className="picasso-gallery-secondary">
          <figure className="picasso-shot picasso-shot-4"><PicassoPicture desktop="/images/editorial/picasso-portrait-desktop.png" mobile="/images/editorial/picasso-portrait-mobile.png" alt="Retrato de Picasso expuesto en Tokio" /><figcaption><span>04 · PICASSO JUEGA CON LA CARA</span><span>PICASSO · CARA A CARA</span></figcaption></figure>
          <div className="picasso-feature-outro"><div className="picasso-meta">PICASSO × PAUL SMITH<br />THE NATIONAL ART CENTER · TOKIO, JAPÓN<br />VERANO 2026</div><p>Olvida las paredes educadas. Las mejores salas aquí tienen mucho que decir y Picasso busca opiniones.</p></div>
        </div>
      </section>

      <section className="mag-section mag-feature" id="bullfighting" aria-labelledby="bullfighting-title">
        <div className="mag-feature-grid">
          <header className="mag-feature-heading"><p className="mag-kicker">PICASSO · DENTRO DE LA ARENA</p><h2 id="bullfighting-title">VOLVÍA UNA Y OTRA VEZ POR EL PELIGRO.</h2></header>
          <figure className="mag-feature-image-primary mag-media"><EditorialImage src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=95" alt="Obra de Picasso sobre tauromaquia" sizes="(max-width: 640px) 100vw, (max-width: 899px) 58vw, 50vw" /><figcaption className="mag-credit">PICASSO · TAUROMAQUIA</figcaption></figure>
          <figure className="mag-feature-image-detail mag-media"><EditorialImage src={detailImage} alt="Detalle de una obra de Picasso sobre tauromaquia" sizes="(max-width: 640px) 100vw, (max-width: 899px) 42vw, 28vw" /><figcaption className="mag-credit">EL TORO · EL CABALLO · EL TORERO</figcaption></figure>
          <div className="mag-feature-copy"><p className="mag-deck">Picasso volvió a la tauromaquia una y otra vez. Porque la arena todavía tenía algo que decir.</p><p className="mag-feature-columns">En la plaza, Picasso encontró todo el lío humano. Más o menos.</p></div>
          <blockquote className="mag-feature-pullquote">“La arena es drama sin ningún lugar donde esconderse.”<span>BIEN VIVOS · SIN DISTANCIA SEGURA</span></blockquote>
        </div>
      </section>

      <section className="cubism-intro" id="cubism" aria-labelledby="cubism-title">
        <div className="cubism-intro-word" aria-hidden="true">CUBISMO</div>
        <div className="cubism-intro-copy">
          <p className="mag-kicker">CUBISMO · ARTE DESARMADO</p>
          <h2 id="cubism-title">CUANDO LO IRREAL ES MÁS REAL</h2>
          <p>Tomaron una sola vista de la realidad, la rompieron y volvieron con más perspectiva. Picasso y Braque renunciaron a un único punto de vista perfecto. La realidad siempre ha sido más interesante que eso. La imagen se volvió menos obvia y, de alguna manera, más viva. El cubismo te obliga a ganarte la imagen. ¿Loco? Tal vez. ¿Aburrido? Ni de lejos.</p>
        </div>
        <div className="cubism-intro-note"><span>1907 →</span><p>La perspectiva se rompe.<br />El cuadro se convierte en construcción.</p></div>
      </section>

      <section className="cubism-spread" id="cubism-works" aria-labelledby="cubism-spread-title">
        <div className="cubism-spread-head">
          <div><p className="mag-kicker">CUBISMO · CUATRO OBRAS</p><h2 id="cubism-spread-title">La misma revolución, desde otros ángulos.</h2></div>
          <p>El cubismo empieza con un rechazo: negarse a que la pintura siga siendo una sola vista estable del mundo. Cuatro obras llevan esta sección, cada una con su propia escala y forma.</p>
        </div>
        <div className="cubism-slot-grid">
          <ImageSlot number="01" title="LE CUBISME · ¿UNA SOLA VISTA? YA NO." />
          <ImageSlot number="02" title="BÚHO · PICASSO · VISIÓN NOCTURNA" />
          <ImageSlot number="03" title="PICASSO · QUIETO, MÁS O MENOS" />
          <ImageSlot number="04" title="RETRATO · PICASSO · A PRIMERA VISTA" />
        </div>
        <div className="cubism-spread-foot"><p>Los objetos y los cuerpos ya no se quedan obedientemente dentro de la perspectiva. Picasso los rompe en planos, los gira en el espacio y los reconstruye sobre la superficie.</p><div>PICASSO · REALIDAD, REARMADA<br />PINTURA · ESCULTURA · PAPEL · SIN LÍMITES<br />BIEN VIVOS · Nº 01 · NADA SE QUEDA SIMPLE</div></div>
      </section>

      <section className="mag-section mag-photo" id="asagaya" aria-labelledby="photo-title">
        <div className="mag-photo-head"><p className="mag-kicker">ASAGAYA TANABATA · LAS CALLES COBRAN VIDA</p><h2 id="photo-title">LA CIUDAD LO DA TODO.</h2><p>Criaturas de papel haciendo lo que les da la gana.</p></div>
        <div className="mag-photo-grid" aria-label="Historia visual de Asagaya Tanabata">{asagayaImages.map((image, index) => <figure className="mag-photo-item" key={image.src}><div className="mag-media"><EditorialImage src={image.src} alt={image.label} sizes={index === 0 || index === 5 ? "(max-width: 640px) 86vw, 70vw" : "(max-width: 640px) 86vw, 28vw"} /></div><figcaption><span>0{index + 1}</span><span>{image.label}</span></figcaption></figure>)}</div>
      </section>

      <section className="mag-section mag-index" id="picasso-index" aria-labelledby="show-title">
        <div className="mag-index-head"><div><p className="mag-kicker">ÍNDICE PICASSO · EMPIEZA DONDE QUIERAS</p><h2 id="show-title">EMPIEZA CON UNA COSA. TERMINA EN OTRO LUGAR.</h2></div><p>Picasso podía empezar con casi cualquier cosa. La gracia era ver dónde terminaba.</p></div>
        <figure className="mag-index-feature mag-media"><picture className="mag-index-picture"><source media="(max-width: 640px)" srcSet="https://raw.githubusercontent.com/desukara/bienvivos/main/public/images/editorial/picasso-index-hero-mobile.png" /><img src="https://raw.githubusercontent.com/desukara/bienvivos/main/public/images/editorial/picasso-index-hero-desktop.png" alt="Vista de la exposición de Picasso en Tokio" loading="lazy" /></picture><figcaption><span className="mag-kicker">PICASSO · TOKIO · A VER DÓNDE LLEGA</span><strong>UNA SALA LLEVA A OTRA.</strong></figcaption></figure>
        <div className="mag-index-list">{indexStories.map(s => <article className="mag-index-row" key={s.section}><div><small>{s.section}</small><h3>{s.title}</h3></div><p>{s.copy}</p></article>)}</div>
      </section>

      <section className="mag-back-cover" id="about" aria-labelledby="about-title">
        <div className="mag-back-inner">
          <div className="mag-mini-cover" aria-label="Vista previa del primer número de Bien Vivos"><EditorialImage src="/images/editorial/picasso-bullfight-01-desktop.png" alt="" sizes="(max-width: 640px) 70vw, 20rem" /><strong>BIEN VIVOS</strong><h3>NUNCA SALIÓ DEL TODO DE LA ARENA.</h3><p>Nº 01 · TOKIO · SEPTIEMBRE 2026</p></div>
          <div className="mag-back-copy"><p className="mag-kicker">BIEN VIVOS · Nº 01 · HECHO EN TOKIO</p><h2 id="about-title">ARTE DESDE TOKIO, MIRANDO A TODAS PARTES.</h2><p>BIEN VIVOS es una revista independiente de arte para gente a la que le gusta el arte vivo.</p><span className="mag-back-date">01 · 09 · 2026 · Nº 01 · ESTO ACABA DE EMPEZAR</span></div>
        </div>
      </section>
    </main>

    <footer className="mag-footer">
      <div className="mag-footer-top"><div><p className="mag-kicker">BIEN VIVOS · Nº 01</p><h2>MIRA OTRA VEZ.</h2></div><div className="mag-newsletter"><p>LA CARTA DE BIEN VIVOS · NO TE PIERDAS LA PRÓXIMA</p><strong>TODAVÍA NO. PERO PRONTO.</strong></div></div>
      <div className="mag-footer-links"><nav aria-label="Navegación del pie">{footerItems.map(i => <a key={i.label} href={i.href}>{i.label}</a>)}</nav><div className="social-placeholder" aria-label="Redes sociales próximamente"><span>INSTAGRAM</span><span>TIKTOK</span><span>PINTEREST</span></div></div>
      <a className="mag-footer-wordmark" href="#top" aria-label="Volver arriba">BIEN VIVOS</a>
      <div className="mag-footer-bottom"><p>© 2026 BIEN VIVOS · TOKIO, JAPÓN</p><p>HECHO EN TOKIO · LISTOS PARA MÁS</p><a href="#top">OTRA MIRADA ↑</a></div>
    </footer>
  </div>;
}