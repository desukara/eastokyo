import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nothing Is Ever Just What It Seems.",
  description: "Picasso, objects, portraits, stripes, ceramics, and the pleasure of starting in one place and ending somewhere else.",
  alternates: { canonical: "/nothing-is-just-what-it-is" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

function IndexPicture({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  return (
    <picture className={styles.picture}>
      <source media="(max-width: 780px)" srcSet={`/images/editorial/${name}-mobile.jpg`} />
      <img src={`/images/editorial/${name}-desktop.jpg`} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" />
    </picture>
  );
}

export default function PicassoIndexStoryPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.folio}>
        <Link className={styles.brand} href="/">EASTOKYO</Link>
        <span className={styles.folioCenter}>INDEX · ISSUE 01</span>
        <span className={styles.folioRight}>TOKYO · SEPTEMBER 2026</span>
      </header>

      <section className={styles.hero} aria-labelledby="index-title">
        <IndexPicture name="index-hero" alt="" priority />
        <div className={styles.heroShade} aria-hidden="true" />
        <span className={styles.heroNumber} aria-hidden="true">05</span>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>PICASSO INDEX · START ANYWHERE</p>
          <h1 id="index-title">NOTHING IS EVER<br />JUST WHAT IT<br /><em>SEEMS.</em></h1>
          <p className={styles.deck}>Start with one thing. End somewhere else. That was half the fun.</p>
        </div>
        <div className={styles.heroNote}><span>OBJECT</span><span>PORTRAIT</span><span>STRIPES</span><span>CERAMICS</span></div>
      </section>

      <section className={styles.intro}>
        <p className={styles.introLabel}>THE INDEX</p>
        <div className={styles.introCopy}>
          <p>Picasso could begin almost anywhere. A bicycle seat. A face. A plate. A room painted in stripes. The interesting part was never the starting point. It was what happened after he stopped accepting the first answer.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.</p>
          <p>This is not a chronology and it is not a list of greatest hits. Think of it as four doors into the same restless habit: looking at something ordinary long enough for it to become something else.</p>
        </div>
      </section>

      <section className={styles.objectChapter}>
        <div className={styles.chapterHead}>
          <span className={styles.chapterNo}>01</span>
          <div><p>OBJECT</p><span>EASTOKYO · INDEX 05</span></div>
        </div>
        <div className={styles.objectGrid}>
          <div className={styles.objectCopy}>
            <h2>A BICYCLE BECOMES A BULL.</h2>
            <p>Two bicycle parts wander into Picasso’s studio. A seat, a pair of handlebars, nothing especially mysterious. Then he turns them toward each other and suddenly the object is gone. What is standing there instead has horns.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.</p>
          </div>
          <figure className={styles.objectFigure}>
            <IndexPicture name="index-object" alt="Picasso’s Bull’s Head, assembled from a bicycle seat and handlebars, casting a long shadow on the gallery wall." />
            <figcaption>01 · FOUND OBJECT / BULL&apos;S HEAD</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.portraitChapter}>
        <figure className={styles.portraitFigure}>
          <IndexPicture name="index-portrait" alt="A fragmented painted portrait with angular facial planes, bold outlines, and a sculptural headdress." />
          <figcaption>02 · PORTRAIT / MORE THAN ONE FACE</figcaption>
        </figure>
        <div className={styles.portraitCopy}>
          <div className={styles.chapterHeadLight}><span className={styles.chapterNo}>02</span><div><p>PORTRAIT</p><span>EASTOKYO · INDEX 05</span></div></div>
          <h2>SYMMETRY WAS NEVER THE POINT.</h2>
          <p>Picasso does not repair the face and return it to us politely. He pushes it around until a second expression starts showing through the first. The portrait stops asking whether it looks correct and starts asking whether it feels true.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <blockquote>THE FACE ISN&apos;T BROKEN. IT&apos;S BUSY.</blockquote>
        </div>
      </section>

      <section className={styles.stripesChapter}>
        <div className={styles.stripesLead}>
          <div className={styles.chapterHead}><span className={styles.chapterNo}>03</span><div><p>STRIPES</p><span>EASTOKYO · INDEX 05</span></div></div>
          <h2>PAUL SMITH LEAVES HIS MARK.</h2>
          <p>A stripe can be decoration, or it can become a rhythm that changes the whole room. In the Tokyo exhibition, Paul Smith lets color and pattern do more than sit behind the work. The walls begin answering back.</p>
        </div>
        <figure className={styles.stripesFigure}>
          <IndexPicture name="index-stripes" alt="A striped textile installation suspended overhead in layered waves of light and shadow." />
          <figcaption>03 · COLOR / RHYTHM / INTERRUPTION</figcaption>
        </figure>
        <div className={styles.stripesTail}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.</p>
        </div>
      </section>

      <section className={styles.ceramicsChapter}>
        <div className={styles.ceramicsCopy}>
          <div className={styles.chapterHead}><span className={styles.chapterNo}>04</span><div><p>CERAMICS</p><span>EASTOKYO · INDEX 05</span></div></div>
          <h2>PICASSO NEVER CLEANED HIS PLATE.</h2>
          <p>A plate is supposed to hold dinner. Picasso gives it a face. A jug becomes a body. Clay becomes another place to draw, scratch, paint, bend, and start trouble. He treats the table like one more studio because, for him, it was.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <figure className={styles.ceramicsFigure}>
          <IndexPicture name="index-ceramics" alt="A gallery wall of ceramic plates, with painted faces and motifs appearing among rows of white plates." />
          <figcaption>04 · CERAMICS / THE TABLE BECOMES A STUDIO</figcaption>
        </figure>
      </section>

      <section className={styles.interlude}>
        <p>ONE MATERIAL WAS NEVER GOING TO BE ENOUGH.</p>
        <span>OBJECT · FACE · COLOR · CLAY</span>
      </section>

      <section className={styles.closing}>
        <figure className={styles.closingFigure}>
          <IndexPicture name="index-closing" alt="A museum visitor pauses in front of a gallery wall filled with ceramic plates." />
          <figcaption>05 · LOOK AGAIN.</figcaption>
        </figure>
        <div className={styles.closingText}>
          <div className={styles.closingRule}>PICASSO · REALITY, REARRANGED</div>
          <p className={styles.closingLead}>The point was never to make the world harder to recognize.</p>
          <p className={styles.closingCopy}>It was to keep looking after recognition had already done its job. One angle was never enough. One material was never enough. One answer was definitely never enough.</p>
          <p className={styles.closingCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <Link className={styles.backLink} href="/">EASTOKYO · ISSUE 01</Link>
        </div>
      </section>
    </main>
  );
}
