import type { Metadata } from "next";
import Link from "next/link";
import BullfightSlideshow from "./BullfightSlideshow";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "He Kept Walking Back In.",
  description: "Picasso and the arena he never really left.",
  alternates: { canonical: "/he-never-really-left-the-arena" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CoverStoryPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">EASTOKYO</Link>
        <div className={styles.issue}>NUMBER ONE · COVER STORY · SEPTEMBER 2026</div>
      </header>

      <section className={styles.hero}>
        <picture>
          <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" />
          <img className={styles.heroImage} src="/images/editorial/picasso-bullfight-01-desktop.png" alt="Picasso bullfight artwork" />
        </picture>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>PICASSO AND THE ARENA HE NEVER LEFT.</p>
          <h1 className={styles.title}>HE KEPT WALKING BACK IN.</h1>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.meta}>
          EASTOKYO<br />
          COVER STORY<br />
          ISSUE 01
        </div>
        <p className={styles.deck}>There’s something about the bullring that gave Picasso exactly what every painter is secretly hungry for: real danger, color, and a crowd close enough that you feel them breathing.</p>
      </section>

      <section className={styles.body}>
        <p className={styles.bodyLabel}>THE STORY</p>
        <div className={styles.bodyCopy}>
          <p>Once that kind of electricity gets into your blood, amigo, you don’t just walk away from it. You go looking for it again. He did, his whole life, and I think I understand why.</p>
        </div>
      </section>

      <section className={styles.visualSequence} aria-label="Picasso bullfight exhibition">
        <figure className={`${styles.visualFigure} ${styles.hallwayFigure}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-red-room-mobile.png" />
            <img src="/images/editorial/picasso-red-room-desktop.png" alt="Red exhibition hallway displaying Picasso works" />
          </picture>
        </figure>

        <figure className={`${styles.visualFigure} ${styles.viewerFigure}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-viewer-mobile.png" />
            <img src="/images/editorial/picasso-bull-viewer-desktop.png" alt="A man looking closely at Picasso bullfight art" />
          </picture>
        </figure>

        <div className={styles.bullfightPair}>
          <figure className={styles.visualFigure}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-feature-mobile.png" />
              <img src="/images/editorial/bullfight-feature-desktop.png" alt="Picasso bullfight exhibition image" />
            </picture>
          </figure>

          <figure className={styles.visualFigure}>
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-detail-mobile.png" />
              <img src="/images/editorial/bullfight-detail-desktop.png" alt="Detail from the Picasso bullfight exhibition" />
            </picture>
          </figure>
        </div>

        <figure className={`${styles.visualFigure} ${styles.galleryFigure}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-gallery-mobile.png" />
            <img src="/images/editorial/picasso-bull-gallery-desktop.png" alt="Visitors looking at a group of Picasso bullfight works" />
          </picture>
        </figure>
      </section>

      <BullfightSlideshow />

      <footer className={styles.footer}>
        <span>EASTOKYO · TOKYO, JAPAN</span>
        <Link href="/">BACK TO ISSUE ONE</Link>
      </footer>
    </main>
  );
}
