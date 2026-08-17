import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Nothing Is Ever Just What It Seems.",
  description: "Picasso, objects, portraits, stripes, ceramics, and the pleasure of starting in one place and ending somewhere else.",
  alternates: { canonical: "/nothing-is-just-what-it-is" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const entries = [
  {
    number: "01", section: "OBJECT", title: "A BICYCLE BECOMES A BULL.", image: "object",
    alt: "Picasso’s Bull’s Head, assembled from a bicycle seat and handlebars, casting a long shadow on the gallery wall.",
    copy: [
      "Two bicycle parts wander into Picasso’s studio. A seat, a pair of handlebars, nothing especially mysterious. Then he turns them toward each other and suddenly the object is gone. What is standing there instead has horns.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue."
    ],
  },
  {
    number: "02", section: "PORTRAIT", title: "SYMMETRY WAS NEVER THE POINT.", image: "portrait",
    alt: "A fragmented painted portrait with angular facial planes, bold outlines, and a sculptural headdress.",
    copy: [
      "Picasso does not repair the face and return it to us politely. He pushes it around until a second expression starts showing through the first. The portrait stops asking whether it looks correct and starts asking whether it feels true.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      "Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
    ],
  },
  {
    number: "03", section: "STRIPES", title: "PAUL SMITH LEAVES HIS MARK.", image: "stripes",
    alt: "A striped textile installation suspended overhead in layered waves of light and shadow.",
    copy: [
      "A stripe can be decoration, or it can become a rhythm that changes the whole room. In the Tokyo exhibition, Paul Smith lets color and pattern do more than sit behind the work. The walls begin answering back.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis.",
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus."
    ],
  },
  {
    number: "04", section: "CERAMICS", title: "PICASSO NEVER CLEANED HIS PLATE.", image: "ceramics",
    alt: "A gallery wall of ceramic plates, with painted faces and motifs appearing among rows of white plates.",
    copy: [
      "A plate is supposed to hold dinner. Picasso gives it a face. A jug becomes a body. Clay becomes another place to draw, scratch, paint, bend, and start trouble. He treats the table like one more studio because, for him, it was.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue."
    ],
  },
];

function Picture({ name, alt, eager = false }: { name: string; alt: string; eager?: boolean }) {
  return <picture className={styles.picture}><source media="(max-width: 780px)" srcSet={`/images/editorial/index-${name}-mobile.jpg`} /><img src={`/images/editorial/index-${name}-desktop.jpg`} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} decoding="async" /></picture>;
}

export default function PicassoIndexStoryPage() {
  return <main className={styles.page} id="top">
    <header className={styles.folio}><Link className={styles.brand} href="/">EASTOKYO</Link><span className={styles.folioCenter}>INDEX · ISSUE 01</span><span className={styles.folioRight}>TOKYO · SEPTEMBER 2026</span></header>

    <section className={styles.hero} aria-labelledby="index-title">
      <Picture name="hero" alt="" eager />
      <div className={styles.heroShade} aria-hidden="true" />
      <div className={styles.heroNumber} aria-hidden="true">05</div>
      <div className={styles.heroCopy}><p className={styles.kicker}>PICASSO INDEX · START ANYWHERE</p><h1 id="index-title">NOTHING IS EVER<br />JUST WHAT IT<br /><em>SEEMS.</em></h1><p className={styles.deck}>Start with one thing. End somewhere else. That was half the fun.</p></div>
      <div className={styles.heroNote}><span>OBJECT</span><span>PORTRAIT</span><span>STRIPES</span><span>CERAMICS</span></div>
    </section>

    <section className={styles.intro}><p className={styles.introLabel}>THE INDEX</p><div className={styles.introCopy}><p>Picasso could begin almost anywhere. A bicycle seat. A face. A plate. A room painted in stripes. The interesting part was never the starting point. It was what happened after he stopped accepting the first answer.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>This is not a chronology and it is not a list of greatest hits. Think of it as four doors into the same restless habit: looking at something ordinary long enough for it to become something else.</p></div></section>

    <section className={styles.entries} aria-label="Picasso index entries">
      {entries.map((entry) => <article className={styles.entry} key={entry.number}>
        <div className={styles.entryNumber} aria-hidden="true">{entry.number}</div>
        <div className={styles.entryMeta}><p>{entry.section}</p><span>EASTOKYO · INDEX 05</span></div>
        <div className={styles.entryBody}><h2>{entry.title}</h2><div className={styles.entryText}>{entry.copy.map((p,i)=><p key={i}>{p}</p>)}</div></div>
        <figure className={styles.entryFigure}><Picture name={entry.image} alt={entry.alt} /><figcaption>{entry.number} · {entry.section} / PICASSO INDEX</figcaption></figure>
      </article>)}
    </section>

    <section className={styles.closing}>
      <figure className={styles.closingFigure}><Picture name="closing" alt="A museum visitor pauses in front of a gallery wall filled with ceramic plates." /><figcaption>05 · LOOK AGAIN.</figcaption></figure>
      <div className={styles.closingText}><div className={styles.closingRule}>PICASSO · REALITY, REARRANGED</div><p className={styles.closingLead}>The point was never to make the world harder to recognize.</p><p className={styles.closingCopy}>It was to keep looking after recognition had already done its job. One angle was never enough. One material was never enough. One answer was definitely never enough.</p><p className={styles.closingCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum.</p><Link className={styles.backLink} href="/">EASTOKYO · ISSUE 01</Link></div>
    </section>
  </main>;
}
