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

        <section className={`${styles.storyBeat} ${styles.storyBeatRight}`}>
          <p className={styles.storyBeatLabel}>LOOKING CLOSELY</p>
          <div className={styles.storyBeatCopy}>
            <p>From a distance, some of these works look almost effortless: a few marks, a body, a horn, a horse suddenly in trouble. Move closer and the economy becomes the point. Picasso keeps only what the scene cannot live without.</p>
          </div>
        </section>

        <figure className={`${styles.visualFigure} ${styles.viewerFigure}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-viewer-mobile.png" />
            <img src="/images/editorial/picasso-bull-viewer-desktop.png" alt="A man looking closely at Picasso bullfight art" />
          </picture>
        </figure>

        <section className={styles.storyBeat}>
          <p className={styles.storyBeatLabel}>THE ARENA</p>
          <div className={styles.storyBeatCopy}>
            <p>The bullring gave him a complete theatre: entrance, costume, noise, choreography, panic, applause. Nothing stayed still for long. A beautiful line could become a wound in the next second.</p>
            <p>That tension is what keeps these images alive. They are not polite records of an afternoon out. They feel closer to memory after the adrenaline has burned away — compressed, exaggerated, and impossible to leave alone.</p>
          </div>
        </section>

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

        <section className={`${styles.storyBeat} ${styles.storyBeatRight}`}>
          <p className={styles.storyBeatLabel}>WHAT SURVIVES</p>
          <div className={styles.storyBeatCopy}>
            <p>Years later, the shouting is gone. The dust is gone. We stand in clean rooms and look. Yet the pictures still carry the nervous charge of something that could go wrong at any moment.</p>
          </div>
        </section>

        <figure className={`${styles.visualFigure} ${styles.galleryFigure}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-gallery-mobile.png" />
            <img src="/images/editorial/picasso-bull-gallery-desktop.png" alt="Visitors looking at a group of Picasso bullfight works" />
          </picture>
        </figure>

        <section className={`${styles.storyBeat} ${styles.slideshowBridge}`}>
          <p className={styles.storyBeatLabel}>AGAIN AND AGAIN</p>
          <div className={styles.storyBeatCopy}>
            <p>He never arrived at one definitive bullring and stopped. He kept returning to the same collision of bodies and signs, changing the speed, the pressure, the joke, the danger. Repetition was not repetition at all. It was another way back in.</p>
          </div>
        </section>
      </section>

      <BullfightSlideshow />

      <section className={styles.finalAct}>
        <figure className={`${styles.visualFigure} ${styles.bullHeadFigure}`}>
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-head-mobile.png" />
            <img src="/images/editorial/picasso-bull-head-desktop.png" alt="Bull head sculpture against a vivid red background" />
          </picture>
        </figure>

        <section className={`${styles.storyBeat} ${styles.finalStoryBeat}`}>
          <p className={styles.storyBeatLabel}>THE BULL REMAINS</p>
          <div className={styles.storyBeatCopy}>
            <p>After the riders, the crowds, the paper, the ink and all those returns, there is still the bull. Solid now. Heavy. Almost absurdly present.</p>
            <p>Maybe that is why Picasso never really left the arena. It gave him a form big enough to hold fear and bravado, beauty and cruelty, performance and death without asking any of them to behave. He could walk away from the ring. The ring kept following him.</p>
          </div>
        </section>
      </section>

      <footer className={styles.footer}>
        <span>EASTOKYO · TOKYO, JAPAN</span>
        <Link href="/">BACK TO ISSUE ONE</Link>
      </footer>
    </main>
  );
}
