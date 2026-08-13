import type { Metadata } from "next";
import BullfightSlideshow from "./BullfightSlideshow";
import { ArticleFooter, ArticleHeader } from "./ArticleChrome";
import EditorialReveal from "./EditorialReveal";
import styles from "./page.module.css";
import signature from "./signature.module.css";

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
    <main className={styles.page} id="top">
      <ArticleHeader />

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
        <div className={styles.meta}>EASTOKYO<br />COVER STORY<br />ISSUE 01</div>
        <p className={styles.deck}>There’s something about the bullring that gave Picasso exactly what every painter is secretly hungry for: real danger, color, and a crowd close enough that you feel them breathing.</p>
      </section>

      <section className={styles.body}>
        <p className={styles.bodyLabel}>THE STORY</p>
        <div className={styles.bodyCopy}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nisl sed enim luctus consequat. Sed feugiat, sem vel malesuada fermentum, justo velit tincidunt neque, at posuere arcu nibh vitae lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; suspendisse potenti. Donec luctus, augue at tristique facilisis, mauris lorem ultrices erat, quis commodo sem justo sed nunc.</p>
          <p>Praesent non libero id erat feugiat luctus. Morbi sed velit vel tortor fermentum tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tempor, justo vitae interdum viverra, mauris augue commodo turpis, sed viverra neque lorem id massa. Curabitur vitae lorem sit amet arcu posuere finibus.</p>
          <p>Aliquam erat volutpat. Quisque porta mauris sed risus ullamcorper, vel feugiat nisl luctus. Donec pretium lectus in dolor gravida, ut elementum elit luctus. Nunc suscipit, erat quis faucibus luctus, neque turpis luctus arcu, at volutpat mauris nulla vel sem.</p>
        </div>
      </section>

      <section className={styles.visualSequence} aria-label="Picasso bullfight exhibition">
        <figure className={`${styles.visualFigure} ${styles.hallwayFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-red-room-mobile.png" /><img src="/images/editorial/picasso-red-room-desktop.png" alt="Red exhibition hallway displaying Picasso works" /></picture>
          <figcaption className={styles.imageCredit}>EXHIBITION VIEW · IMAGE CREDIT TO BE CONFIRMED.</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">01</span>
            <p className={styles.storyBeatLabel}>LOOKING CLOSELY</p>
            <div className={styles.storyBeatCopy}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus felis vitae massa aliquet, sed viverra turpis vulputate. Cras mattis sem sed nibh commodo, a interdum mauris hendrerit. Nam auctor velit vel nunc aliquet, at feugiat nisi posuere. Suspendisse euismod, est sed tincidunt varius, neque augue volutpat ligula, vitae luctus lorem risus id erat.</p>
              <p>Maecenas vulputate urna ut ex consequat, eget convallis velit tincidunt. Pellentesque sed ligula nec urna condimentum consequat. Duis ultricies, risus non feugiat tristique, magna lectus aliquet lectus, vitae pulvinar ipsum augue vel sapien.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.viewerFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-viewer-mobile.png" /><img src="/images/editorial/picasso-bull-viewer-desktop.png" alt="A man looking closely at Picasso bullfight art" /></picture>
          <figcaption className={styles.imageCredit}>LOOKING CLOSELY · EASTOKYO.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">02</span>
            <p className={styles.storyBeatLabel}>THE ARENA</p>
            <div className={styles.storyBeatCopy}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae tortor sit amet erat hendrerit luctus. Sed dignissim urna quis justo tincidunt, et vulputate mi elementum. Nullam tempor, felis sed malesuada tincidunt, lacus nibh tincidunt purus, sed porttitor velit nibh non magna. Duis sed ipsum ut turpis varius efficitur vel et risus.</p>
              <p>Fusce tincidunt ligula quis urna volutpat, vel elementum mauris consequat. Integer quis pretium neque. Morbi posuere, lorem vitae ullamcorper luctus, erat arcu eleifend risus, vel posuere urna orci sit amet justo. Sed sit amet posuere sapien. Ut vestibulum mi id turpis cursus, at laoreet ipsum fermentum. Donec id eros id lectus viverra tincidunt.</p>
              <p>Nam viverra ipsum vel eros commodo, in bibendum augue luctus. Nulla facilisi. Phasellus non ipsum vitae augue porttitor porttitor. Proin et neque vitae sem malesuada tincidunt. Curabitur sit amet turpis sed lectus molestie placerat. Integer tincidunt magna a tincidunt viverra. Vestibulum vel dui non justo tristique hendrerit.</p>
            </div>
          </section>
        </EditorialReveal>

        <EditorialReveal delay="medium">
          <aside className={styles.pullQuote} aria-label="EASTOKYO editorial line">
            <span className={styles.pullQuoteMark}>“</span>
            <p>THE ARENA IS DRAMA WITH NOWHERE LEFT TO LOOK AWAY.</p>
            <span className={styles.pullQuoteCredit}>EASTOKYO · COVER STORY 01</span>
          </aside>
        </EditorialReveal>

        <div className={styles.bullfightPair}>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-feature-mobile.png" /><img src="/images/editorial/bullfight-feature-desktop.png" alt="Picasso bullfight exhibition image" /></picture>
            <figcaption className={styles.imageCredit}>BULLFIGHT STUDY · IMAGE CREDIT TO BE CONFIRMED.</figcaption>
          </figure>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-detail-mobile.png" /><img src="/images/editorial/bullfight-detail-desktop.png" alt="Detail from the Picasso bullfight exhibition" /></picture>
            <figcaption className={styles.imageCredit}>BULLFIGHT DETAIL · IMAGE CREDIT TO BE CONFIRMED.</figcaption>
          </figure>
        </div>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">03</span>
            <p className={styles.storyBeatLabel}>WHAT SURVIVES</p>
            <div className={styles.storyBeatCopy}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a arcu vitae nisl porta varius. Etiam rhoncus, mauris ut interdum faucibus, neque nulla eleifend nulla, ut cursus orci nisl non risus. Pellentesque vel nibh at purus pretium dictum. Vivamus faucibus nisl ut orci malesuada, eget facilisis enim luctus.</p>
              <p>Donec blandit enim at justo hendrerit, quis eleifend ligula luctus. Cras gravida aliquet dolor, sed posuere erat varius sit amet. Integer vitae malesuada lacus. Aliquam quis massa sed eros laoreet tristique. Etiam interdum metus sed metus commodo, at suscipit odio posuere.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.galleryFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-gallery-mobile.png" /><img src="/images/editorial/picasso-bull-gallery-desktop.png" alt="Visitors looking at a group of Picasso bullfight works" /></picture>
          <figcaption className={styles.imageCredit}>THE ROOM LOOKING BACK · EASTOKYO.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${styles.slideshowBridge} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">04</span>
            <p className={styles.storyBeatLabel}>AGAIN AND AGAIN</p>
            <div className={styles.storyBeatCopy}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis, neque sed viverra pretium, nibh tortor dignissim risus, non fermentum tortor mauris eget orci. In hac habitasse platea dictumst. Cras lacinia erat at erat suscipit, non bibendum sapien aliquet.</p>
              <p>Morbi vitae sem vel lorem molestie gravida. Sed sed commodo sapien. Quisque eleifend velit id justo sodales, a pellentesque ligula consequat. Nunc eget nibh sit amet est fermentum feugiat. Donec non eros vitae lacus pellentesque suscipit. Suspendisse quis sem ac tortor malesuada pellentesque.</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <BullfightSlideshow />

      <section className={styles.finalAct}>
        <figure className={`${styles.visualFigure} ${styles.bullHeadFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-head-mobile.png" /><img src="/images/editorial/picasso-bull-head-desktop.png" alt="Bull head sculpture against a vivid red background" /></picture>
          <figcaption className={`${styles.imageCredit} ${styles.bullHeadCredit}`}>THE BULL REMAINS · IMAGE CREDIT TO BE CONFIRMED.</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.finalStoryBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">05</span>
            <p className={styles.storyBeatLabel}>THE BULL REMAINS</p>
            <div className={styles.storyBeatCopy}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices metus at arcu porta, at convallis libero tristique. Sed commodo justo a dolor tristique, at viverra lectus dictum. Proin non purus in sem consequat feugiat. Nam ac nisi vestibulum, placerat turpis sed, efficitur justo.</p>
              <p>Integer dignissim suscipit odio, nec condimentum purus ullamcorper sed. Fusce at nibh et arcu maximus posuere. Vestibulum euismod dui vitae justo vulputate, sed bibendum ipsum ullamcorper. Aenean imperdiet, velit a gravida finibus, augue arcu semper lorem, vel molestie lectus erat vitae orci. Morbi fringilla ante at neque vehicula, vel egestas neque hendrerit.</p>
              <p>Sed vitae urna eget velit eleifend fermentum. Mauris ullamcorper tortor ut arcu interdum, in feugiat lacus faucibus. Etiam eget neque ac arcu dictum feugiat. Nulla facilisi. Donec luctus, nulla ac faucibus pretium, lorem arcu ultricies elit, vitae cursus orci metus sit amet neque. Praesent id lorem vitae lectus gravida fermentum.</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <ArticleFooter />
    </main>
  );
}
