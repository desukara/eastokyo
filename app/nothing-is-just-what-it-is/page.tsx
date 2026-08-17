import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nothing Is Ever Just What It Seems.",
  description: "Picasso, objects, portraits, stripes, ceramics, and the pleasure of starting in one place and ending somewhere else.",
  alternates: { canonical: "/nothing-is-just-what-it-is" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const entries = [
  {
    number: "01",
    section: "OBJECT",
    title: "A BICYCLE BECOMES A BULL.",
    copy: "Two bicycle parts wander into Picasso’s studio. A seat, a pair of handlebars, nothing especially mysterious. Then he turns them toward each other and suddenly the object is gone. What is standing there instead has horns.",
  },
  {
    number: "02",
    section: "PORTRAIT",
    title: "SYMMETRY WAS NEVER THE POINT.",
    copy: "Picasso does not repair the face and return it to us politely. He pushes it around until a second expression starts showing through the first. The portrait stops asking whether it looks correct and starts asking whether it feels true.",
  },
  {
    number: "03",
    section: "STRIPES",
    title: "PAUL SMITH LEAVES HIS MARK.",
    copy: "A stripe can be decoration, or it can become a rhythm that changes the whole room. In the Tokyo exhibition, Paul Smith lets color and pattern do more than sit behind the work. The walls begin answering back.",
  },
  {
    number: "04",
    section: "CERAMICS",
    title: "PICASSO NEVER CLEANED HIS PLATE.",
    copy: "A plate is supposed to hold dinner. Picasso gives it a face. A jug becomes a body. Clay becomes another place to draw, scratch, paint, bend, and start trouble. He treats the table like one more studio because, for him, it was.",
  },
];

export default function PicassoIndexStoryPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.folio}>
        <Link className={styles.brand} href="/">EASTOKYO</Link>
        <span className={styles.folioCenter}>INDEX · ISSUE 01</span>
        <span className={styles.folioRight}>TOKYO · SEPTEMBER 2026</span>
      </header>

      <section className={styles.hero} aria-labelledby="index-title">
        <picture className={styles.heroMedia} aria-hidden="true">
          <source media="(max-width: 780px)" srcSet="/images/editorial/index-hero-mobile.jpg" />
          <img
            src="/images/editorial/index-hero-desktop.jpg"
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroNumber} aria-hidden="true">05</div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>PICASSO INDEX · START ANYWHERE</p>
          <h1 id="index-title">NOTHING IS EVER<br />JUST WHAT IT<br /><em>SEEMS.</em></h1>
          <p className={styles.deck}>Start with one thing. End somewhere else. That was half the fun.</p>
        </div>
        <div className={styles.heroNote}>
          <span>OBJECT</span>
          <span>PORTRAIT</span>
          <span>STRIPES</span>
          <span>CERAMICS</span>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.introLabel}>THE INDEX</p>
        <div className={styles.introCopy}>
          <p>Picasso could begin almost anywhere. A bicycle seat. A face. A plate. A room painted in stripes. The interesting part was never the starting point. It was what happened after he stopped accepting the first answer.</p>
          <p>This is not a chronology and it is not a list of greatest hits. Think of it as four doors into the same restless habit: looking at something ordinary long enough for it to become something else.</p>
        </div>
      </section>

      <section className={styles.entries} aria-label="Picasso index entries">
        {entries.map((entry) => (
          <article className={styles.entry} key={entry.number}>
            <div className={styles.entryNumber} aria-hidden="true">{entry.number}</div>
            <div className={styles.entryMeta}>
              <p>{entry.section}</p>
              <span>EASTOKYO · INDEX 05</span>
            </div>
            <div className={styles.entryBody}>
              <h2>{entry.title}</h2>
              <p>{entry.copy}</p>
              {entry.number === "01" && (
                <picture style={{ display: "block", width: "100%", marginTop: "2.5rem" }}>
                  <source media="(max-width: 780px)" srcSet="/images/editorial/index-object-mobile.jpg" />
                  <img
                    src="/images/editorial/index-object-desktop.jpg"
                    alt="Picasso’s Bull’s Head, assembled from a bicycle seat and handlebars, casting a long shadow on the gallery wall."
                    loading="lazy"
                    decoding="async"
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </picture>
              )}
              {entry.number === "02" && (
                <picture style={{ display: "block", width: "100%", marginTop: "2.5rem" }}>
                  <source media="(max-width: 780px)" srcSet="/images/editorial/index-portrait-mobile.jpg" />
                  <img
                    src="/images/editorial/index-portrait-desktop.jpg"
                    alt="A fragmented painted portrait with angular facial planes, bold outlines, and a sculptural headdress."
                    loading="lazy"
                    decoding="async"
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                </picture>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.closing}>
        <div className={styles.closingRule}>PICASSO · REALITY, REARRANGED</div>
        <p className={styles.closingLead}>The point was never to make the world harder to recognize.</p>
        <p className={styles.closingCopy}>It was to keep looking after recognition had already done its job. One angle was never enough. One material was never enough. One answer was definitely never enough.</p>
        <Link className={styles.backLink} href="/">EASTOKYO · ISSUE 01</Link>
      </section>
    </main>
  );
}
