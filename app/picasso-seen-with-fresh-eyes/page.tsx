import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Picasso, Looked at Again.",
  description: "Picasso, through the Eyes of Paul Smith at The National Art Center, Tokyo.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const credit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY BY JIMICHANGA";

export default function ExhibitionStoryPage() {
  return (
    <main id="top" className={styles.page}>
      <header className={styles.folio}>
        <Link href="/" className={styles.brand}>EASTOKYO</Link>
        <span className={styles.folioCenter}>TOKYO · LOOKING OUTWARD</span>
        <span className={styles.folioRight}>ISSUE 01 · EXHIBITION 02</span>
      </header>

      <section className={styles.hero} aria-labelledby="story-title">
        <div className={styles.heroMedia}>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-man-in-blue-hero-mobile.png" />
            <img src="/images/editorial/picasso-man-in-blue-hero-desktop.png" alt="Portrait of a Man, also known as Man in Blue, painted by Pablo Picasso in 1902" fetchPriority="high" />
          </picture>
          <span className={styles.heroNumber} aria-hidden="true">02</span>
          <div className={styles.heroMeta}>THE NATIONAL ART CENTER, TOKYO<br />SUMMER 2026</div>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>EXHIBITION · PICASSO THROUGH THE EYES OF PAUL SMITH</p>
          <h1 id="story-title" className={styles.title}>PICASSO,<em>LOOKED AT AGAIN.</em></h1>
          <p className={styles.deck}>Paul Smith moves the walls around, and Picasso wakes back up in the room.</p>
          <p className={styles.byline}>BY JAMES SIMMONS (AKA JIMICHANGA)<br />EASTOKYO · ISSUE 01</p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introLabel}>01 · LOOK AGAIN</div>
        <p className={styles.standfirst}>An exhibition is never only the work on the wall. It is also the distance between things, the color around them, and the people who stop.</p>
        <aside className={styles.introNote}>Paul Smith does not disappear behind Picasso. He changes the temperature of the room around him.</aside>
      </section>

      <section className={styles.featureOne}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png" />
            <img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones studies the exhibition installation" loading="lazy" />
          </picture>
          <figcaption className={styles.caption}>01 · LOOKING · {credit}</figcaption>
        </figure>
      </section>

      <section className={styles.bodyBeat}>
        <div className={styles.beatNo}>01</div>
        <div className={styles.prose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
        <blockquote className={styles.sideQuote}>The room starts speaking before the labels do.</blockquote>
      </section>

      <section className={styles.harlequin}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png" />
            <img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Picasso works displayed in a gallery installation" loading="lazy" />
          </picture>
          <figcaption className={styles.caption}>02 · HARLEQUIN · {credit}</figcaption>
        </figure>
        <div className={styles.harlequinCopy}>
          <p className={styles.sectionKicker}>02 · COLOR ENTERS THE ARGUMENT</p>
          <h2>The wall is not neutral anymore.</h2>
          <div className={styles.prose}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
          </div>
        </div>
      </section>

      <section className={styles.blueAct}>
        <div className={styles.blueInner}>
          <div className={styles.blueCopy}>
            <p className={styles.sectionKicker}>03 · RHYTHM</p>
            <h2>Then the room starts moving.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.</p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png" />
              <img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Picasso exhibition gallery with striped wall treatment" loading="lazy" />
            </picture>
            <figcaption className={styles.caption}>03 · STRIPES · {credit}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.quiet}>
        <div className={styles.quietCopy}>
          <p className={styles.sectionKicker}>04 · PAY ATTENTION</p>
          <h2>The best part is watching somebody else stop.</h2>
          <div className={styles.prose}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          </div>
        </div>
      </section>

      <section className={styles.threshold}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-threshold-gallery-mobile.png" />
            <img src="/images/editorial/picasso-threshold-gallery-desktop.png" alt="A visitor moving through the Picasso exhibition galleries" loading="lazy" />
          </picture>
          <figcaption className={styles.caption}>04 · THRESHOLD · {credit}</figcaption>
        </figure>
      </section>

      <section className={styles.ending}>
        <h2>LOOK AGAIN.<br />THEN AGAIN.</h2>
        <div className={styles.endingMeta}>PICASSO · PAUL SMITH<br />THE NATIONAL ART CENTER, TOKYO<br />EASTOKYO · ISSUE 01</div>
      </section>

      <footer className={styles.footer}>
        <Link href="/">EASTOKYO</Link>
        <span><a href="#top">BACK TO TOP ↑</a></span>
      </footer>
    </main>
  );
}
