import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Picasso, Looked at Again.",
  description: "Picasso, through the Eyes of Paul Smith at The National Art Center, Tokyo.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ExhibitionStoryPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>EASTOKYO</Link>
        <div className={styles.issue}>ISSUE 01 · EXHIBITION · 02</div>
      </header>

      <section className={styles.hero} aria-labelledby="story-title">
        <div className={styles.heroPlaceholder}>
          <span>HERO IMAGE RESERVED</span>
          <small>Picasso, through the Eyes of Paul Smith · entrance wall</small>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>EXHIBITION · THE NATIONAL ART CENTER, TOKYO</p>
          <h1 id="story-title">PICASSO, LOOKED AT AGAIN.</h1>
          <p className={styles.deck}>Paul Smith moves the walls around, and Picasso wakes back up in the room.</p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.meta}>EASTOKYO<br />EXHIBITION<br />ISSUE 01<br /><br />BY JAMES SIMMONS (AKA JIMICHANGA)</div>
        <div className={styles.introCopy}>
          <p>This is the overview story for <em>Picasso, through the Eyes of Paul Smith</em>: the rooms, the color, the pacing, the people looking, and what happens when the exhibition design becomes part of the way you see Picasso.</p>
          <p className={styles.draftNote}>DRAFT PAGE · NOT YET PUBLISHED</p>
        </div>
      </section>

      <section className={styles.storyBody}>
        <p className={styles.sectionLabel}>THE STORY</p>
        <div className={styles.bodyCopy}>
          <p className={styles.placeholder}>Article text begins here.</p>
        </div>
      </section>

      <section className={styles.imagePlan} aria-label="Article image plan">
        <p className={styles.sectionLabel}>IMAGE PLAN</p>
        <div className={styles.imageGrid}>
          <div><strong>01</strong><span>Entrance / exhibition-title wall · HERO</span></div>
          <div><strong>02</strong><span>Wide room / installation view</span></div>
          <div><strong>03</strong><span>Visitor engaging with the work</span></div>
          <div><strong>04</strong><span>Paul Smith color / stripe intervention</span></div>
          <div><strong>05</strong><span>Closing room / exit view</span></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/">BACK TO ISSUE ONE</Link>
        <span>EASTOKYO · TOKYO · 2026</span>
      </footer>
    </main>
  );
}
