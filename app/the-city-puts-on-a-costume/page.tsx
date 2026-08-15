import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The City Puts On Its Costume.",
  description: "Asagaya Tanabata, where an ordinary Tokyo shopping street decides to become something else for a few summer nights.",
  alternates: { canonical: "/the-city-puts-on-a-costume" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const feature = (number: number) => {
  const id = String(number).padStart(2, "0");
  return {
    desktop: `/images/editorial/asagaya-feature-${id}-desktop.jpg`,
    mobile: `/images/editorial/asagaya-feature-${id}-mobile.jpg`,
  };
};

function AsagayaPicture({
  number,
  alt,
  className = "",
  eager = false,
}: {
  number: number;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const image = feature(number);
  return (
    <picture className={`${styles.storyPicture} ${className}`}>
      <source media="(max-width: 700px)" srcSet={image.mobile} />
      <img src={image.desktop} alt={alt} loading={eager ? "eager" : "lazy"} />
    </picture>
  );
}

export default function AsagayaStoryPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.folio}>
        <Link className={styles.brand} href="/">EASTOKYO</Link>
        <span className={styles.folioCenter}>TOKYO · ISSUE 01</span>
        <span className={styles.folioRight}>SEPTEMBER 2026</span>
      </header>

      <section className={styles.hero}>
        <picture className={styles.heroMedia}>
          <source media="(max-width: 700px)" srcSet="/images/editorial/asagaya-hero-01-mobile.jpg" />
          <img
            className={styles.heroImage}
            src="/images/editorial/asagaya-hero-01-desktop.jpg"
            alt="Asagaya Pearl Center decorated for the Tanabata festival"
            fetchPriority="high"
          />
        </picture>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroType}>
          <p className={styles.kicker}>TOKYO · ASAGAYA TANABATA</p>
          <h1>THE CITY<br />PUTS ON ITS<br /><em>COSTUME.</em></h1>
          <p className={styles.heroDeck}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
        </div>
        <span className={styles.issueMark} aria-hidden="true">04</span>
      </section>

      <section className={styles.intro}>
        <div className={styles.meta}>
          <span>EASTOKYO</span>
          <span>TOKYO STORY 04</span>
          <span>BY JAMES SIMMONS<br />(AKA JIMICHANGA)</span>
        </div>
        <div className={styles.introCopy}>
          <p className={styles.drop}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.</p>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>
          <p>Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.</p>
        </div>
      </section>

      <section className={styles.openingDiptych} aria-label="Asagaya festival photographs">
        <figure className={`${styles.photo} ${styles.openingLarge}`}>
          <AsagayaPicture number={2} alt="Handmade Tanabata decorations suspended over Asagaya Pearl Center" />
          <figcaption>02 · THE STREET STARTS LOOKING UP.</figcaption>
        </figure>
        <figure className={`${styles.photo} ${styles.openingSmall}`}>
          <AsagayaPicture number={3} alt="Festival decoration hanging above the Asagaya shopping street" />
          <figcaption>03 · NOTHING UP THERE IS TRYING TO BE SENSIBLE.</figcaption>
        </figure>
      </section>

      <section className={styles.statement}>
        <p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. VIVAMUS SAGITTIS LACUS VEL AUGUE LAOREET.</p>
        <span>CURABITUR BLANDIT TEMPUS PORTTITOR.</span>
      </section>

      <section className={styles.readingSection}>
        <div className={styles.readingCopy}>
          <p className={styles.sectionNo}>01</p>
          <p className={styles.sectionLabel}>THE STREET LOOKS UP</p>
          <h2>You notice the ceiling before anything else.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p>Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.</p>
        </div>
      </section>

      <figure className={`${styles.photo} ${styles.fullBleedPhoto}`}>
        <AsagayaPicture number={4} alt="Crowds walking beneath oversized handmade Tanabata decorations in Asagaya" />
        <figcaption><span>04</span> THE CEILING BECOMES ANOTHER STREET.</figcaption>
      </figure>

      <section className={styles.readingSection}>
        <div className={styles.readingCopy}>
          <p className={styles.sectionNo}>02</p>
          <p className={styles.sectionLabel}>A FESTIVAL MADE BY HAND</p>
          <h2>Polish would ruin it.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p>
        </div>
      </section>

      <section className={styles.staggeredGallery} aria-label="Handmade Asagaya Tanabata decorations">
        <figure className={`${styles.photo} ${styles.staggerA}`}>
          <AsagayaPicture number={5} alt="Colorful handmade festival figure suspended in Asagaya" />
          <figcaption>05 · MADE BY HAND. HUNG WITH CONFIDENCE.</figcaption>
        </figure>
        <figure className={`${styles.photo} ${styles.staggerB}`}>
          <AsagayaPicture number={6} alt="Festival decorations and streamers filling the Asagaya arcade" />
          <figcaption>06 · COLOR WITH ABSOLUTELY NO PRACTICAL PURPOSE.</figcaption>
        </figure>
        <figure className={`${styles.photo} ${styles.staggerC}`}>
          <AsagayaPicture number={7} alt="Black and white cat decoration hanging over the shopping street" />
          <figcaption>07 · SOMEBODY MADE A CAT. OF COURSE THEY DID.</figcaption>
        </figure>
      </section>

      <section className={styles.blueSection}>
        <div className={styles.blueTitle}>
          <p className={styles.sectionNo}>03</p>
          <p className={styles.sectionLabel}>THE USEFUL CITY DISAPPEARS</p>
          <h2>For a little while, nobody is in a hurry to get through.</h2>
        </div>
        <div className={styles.blueColumns}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p>
          <p>Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.</p>
        </div>
      </section>

      <section className={styles.streetSequence} aria-label="The Asagaya festival street">
        <figure className={`${styles.photo} ${styles.streetWide}`}>
          <AsagayaPicture number={8} alt="Festival crowd moving beneath decorations in Asagaya Pearl Center" />
          <figcaption>08 · THE CROWD HAS ITS OWN WEATHER.</figcaption>
        </figure>
        <div className={styles.streetSide}>
          <p className={styles.streetQuote}>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
          <figure className={styles.photo}>
            <AsagayaPicture number={9} alt="Tanabata decorations hanging above shoppers in Asagaya" />
            <figcaption>09 · KEEP WALKING. KEEP LOOKING UP.</figcaption>
          </figure>
        </div>
      </section>

      <figure className={`${styles.photo} ${styles.cinemaPhoto}`}>
        <AsagayaPicture number={10} alt="Long view down Asagaya Pearl Center with a giant lucky cat suspended overhead" />
        <div className={styles.cinemaCaption}>
          <span>10</span>
          <p>LOREM IPSUM DOLOR SIT AMET.</p>
        </div>
      </figure>

      <section className={styles.detailPair} aria-label="Asagaya festival details">
        <figure className={styles.photo}>
          <AsagayaPicture number={11} alt="Large hanging festival figures above lanterns and storefronts in Asagaya" />
          <figcaption>11 · EVEN THE STOREFRONTS HAVE COMPANY.</figcaption>
        </figure>
        <figure className={styles.photo}>
          <AsagayaPicture number={12} alt="Restaurant window with lanterns and metallic Tanabata streamers" />
          <figcaption>12 · THE FESTIVAL GETS ALL THE WAY INTO THE WINDOWS.</figcaption>
        </figure>
      </section>

      <section className={styles.outro}>
        <div className={styles.outroCopy}>
          <p className={styles.sectionNo}>04</p>
          <p className={styles.sectionLabel}>WHAT THE STREET REMEMBERS</p>
          <h2>Then everybody takes the costume down.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Donec sed odio dui.</p>
          <p>Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Etiam porta sem malesuada magna mollis euismod.</p>
          <p className={styles.lastLine}>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <Link href="/">EASTOKYO</Link>
          <p>NUMBER ONE · TOKYO · SEPTEMBER 2026</p>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
