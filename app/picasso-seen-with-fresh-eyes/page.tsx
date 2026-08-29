/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Picasso Seen With Fresh Eyes.",
  description: "Paul Smith changes the stage, and suddenly Picasso wakes up.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Picasso Seen With Fresh Eyes.",
    description: "Paul Smith changes the stage, and suddenly Picasso wakes up.",
    url: "/picasso-seen-with-fresh-eyes",
    siteName: "EASTOKYO",
    locale: "en_GB",
    type: "article",
    images: [{ url: "/images/editorial/picasso-man-in-blue-hero-desktop.png", alt: "Portrait of a man, also known under the title Man in Blue, painted by Pablo Picasso in 1902" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Picasso Seen With Fresh Eyes.",
    description: "Paul Smith changes the stage, and suddenly Picasso wakes up.",
    images: ["/images/editorial/picasso-man-in-blue-hero-desktop.png"],
  },
};

const credit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY: JIMICHANGA";
const textPhotoCredit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · TEXT AND PHOTOGRAPHS: JIMICHANGA";

function Caption({ children, creditText = credit }: { children: React.ReactNode; creditText?: string }) {
  return <figcaption className={styles.caption}><span className={styles.captionLead}>{children}</span><span className={styles.credit}>{creditText}</span></figcaption>;
}

export default function ExhibitionStoryPage() {
  return <main id="top" className={styles.page}>
    <style>{`@media (min-width:1081px){.${styles.heroMedia}{height:auto!important;aspect-ratio:4/3!important;max-height:none!important;box-shadow:none!important;background:#10233e!important;align-self:center}.${styles.heroMedia} img{object-fit:cover!important;object-position:center 62%!important;transform:scale(1.03);transform-origin:center 62%}.${styles.heroNumber}{display:none!important}.${styles.heroMeta}{top:1rem!important;right:1rem!important}}`}</style>
    <header className={styles.folio}><Link href="/" className={styles.brand}>EASTOKYO</Link><span className={styles.folioCenter}>TOKYO · LOOKING OUTWARD</span><span className={styles.folioRight}>ISSUE 01 · EXHIBITION 02</span></header>

    <section className={styles.hero} aria-labelledby="story-title">
      <div className={styles.heroMedia}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-man-in-blue-hero-mobile.png"/><img src="/images/editorial/picasso-man-in-blue-hero-desktop.png" alt="Portrait of a man, also known under the title Man in Blue, painted by Pablo Picasso in 1902" fetchPriority="high"/></picture><span className={styles.heroNumber} aria-hidden="true">02</span><div className={styles.heroMeta}>THE NATIONAL ART CENTER, TOKYO<br/>SUMMER 2026</div></div>
      <div className={styles.heroCopy}><p className={styles.kicker}>EXHIBITION · PICASSO SEEN BY PAUL SMITH</p><h1 id="story-title" className={styles.title}>PICASSO,<em>VIEWED WITH FRESH EYES.</em></h1><p className={styles.deck}>Paul Smith changes the stage, and suddenly Picasso wakes up.</p><p className={styles.byline}>BY JAMES SIMMONS (AKA JIMICHANGA)<br/>EASTOKYO · ISSUE 01</p></div>
    </section>

    <section className={styles.intro}><div className={styles.introLabel}>01 · LOOK AGAIN</div><p className={styles.standfirst}>An exhibition is more than the art on the wall. There's everything in the room around it too, and above all, the imagination we bring with us.</p><aside className={styles.introNote}>Paul Smith doesn't try to hide in the room behind Pablo Picasso. He transforms the whole space around him, and that's precisely where the art starts speaking to us.</aside></section>

    <section className={styles.featureOne}><figure><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png"/><img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones observes the exhibition installation" loading="lazy"/></picture><Caption>LOOKING IS NOT THE SAME THING AS SEEING. YOU HAVE TO COME WITH EVERYTHING YOU ARE.</Caption></figure></section>

    <section className={styles.bodyBeat}>
      <div className={styles.beatNo}>01</div>
      <div className={`${styles.prose} ${styles.openingA}`}>
        <p>There's an elegant woman walking toward the museum under a blue parasol in the sweltering heat of August. She looks like someone who figured out long ago how to survive a Tokyo summer. I look up: not a single grey cloud. Summer in Tokyo is a lot like an antechamber of hell, with burning asphalt throwing the heat right back at your head, and for a split second that open parasol strikes me as completely bizarre.</p>
        <p>Then I remember where I am. Here, in Japan, an umbrella doesn't necessarily mean what I always thought it did.</p>
        <p>Besides, it isn't even an umbrella. It's what I eventually started calling a sunbrella, a word I probably invented and fully intend to claim all rights to. As soon as the punishing heat arrives you see them pop up and open everywhere in Tokyo, mostly in the hands of delicate women, who seem to have clearly understood for generations that shade is shade, whether you're protecting yourself from rain or from sun. Meanwhile the men march out for lunch and bravely cook on the pavement, as if opening a parasol amounted to surrendering.</p>
        <p>I grew up with a very simple idea of the umbrella: it rains, you open it, end of story. It took moving to Japan for that obvious truth to be cross-examined. And somewhere between that parasol performing a function I'd never known it had, and walking into the first room of <em>Picasso, Through the Eyes of Paul Smith</em> at the National Art Center in Tokyo, it finally occurred to me that pretty much everything we believe we've understood once and for all deserves to be reopened. Not only Picasso. Almost anything, as long as we're willing to go back to it.</p>
      </div>
      <div className={`${styles.prose} ${styles.openingB}`}>
        <p>That's the whole point of the exhibition: to put you back in front of something you thought you already knew, and ask you to look a second time.</p>
        <p>Picasso is a perfect candidate for that, because there's almost too much Picasso to hold in your head at once. Cubism, Guernica, the Blue Period, the Rose Period, auction prices that almost nobody can afford, faces where the nose seems to answer to a completely different department from the eyes. Picasso is one of those names that stopped referring to a person and became a kind of general-knowledge fact, something absorbed by osmosis without ever setting one foot in a museum. Everyone knows Picasso, at least a little.</p>
        <p>And that's where it gets complicated. Knowing something so well that you no longer really see it is a strange trap, and not one confined to art. It happens all the time in relationships too. At first, every detail about the other person is an amazing new discovery. Then familiarity arrives, and that familiarity curdles into "I already know how this sentence ends." We finish the other person's thoughts and call it intimacy, when half the time it actually means we stopped listening. Recognising things isn't the problem. It's essential, nobody can spend their life re-examining everything every five minutes. But certainty is something else. It folds its arms and thinks it already knows everything about everything.</p>
        <p>An umbrella is for rain. Picasso is Cubism. It’s already decided.</p>
        <p>But who decided there should be only one valid angle on anything at all? Maybe it’s because an authoritative answer is reassuring in a world that can be terrifying at times. OK, possibly. Such conclusions are also, quite frankly, fucking boring, and I'd rather keep my eyes open for the versions I haven't seen yet.</p>
      </div>
      <blockquote className={styles.sideQuote}>PICASSO, WE KNOW HIM. RIGHT?</blockquote>
    </section>

    <section className={styles.harlequin}>
      <figure className={styles.harlequinFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png"/><img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Works by Picasso presented in a gallery installation" loading="lazy"/></picture><Caption creditText={textPhotoCredit}>THE WALL ISN’T JUST A BACKDROP. IT’S PART OF THE CONVERSATION.</Caption></figure>
      <div className={styles.harlequinLead}><p className={styles.sectionKicker}>02 · COLOR ENTERS THE ROOM</p><h2>Then the wall stops playing the innocent role.</h2><div className={styles.prose}>
        <p>Paul Smith isn't really trying to reinterpret Picasso. He builds him a stage instead, and lets that stage join the show. Color takes over. Stripes climb the walls, patterns press against other patterns, and nothing stays pleasantly in its place the way a museum trains you to expect. Take the star of the performance, Harlequin: a radiant figure already made of diamonds and bold flat areas, hanging in front of a wall that definitely has something to say about it. The costume and the wallpaper get into a cat fight, and suddenly the lines and colors we assumed we knew yell at each other from one end of the room to the other, pissed about the perfect little frames museums have taught us to believe in.</p>
        <p>Smith doesn't repaint anything. Why should he? He arranges things so the room and the painting draw out of each other something neither could have produced alone. Without anything actually moving, the painting starts living again in your mind. Obviously, the canvas isn't going to crawl through the gallery like some cheap sequel to <em>Night at the Museum</em> filmed in Málaga. It stays perfectly still. It's your soul that moves, and voilà… an image that five minutes earlier looked like an old acquaintance pulled from an art-history textbook gets its life back.</p>
        <p>What Smith brings out was already true, just easy to forget; yet meaning has never stayed politely locked inside its little frame. Nothing in the exhibition is just a background, once you dare to look at it a little sideways. From the paintings on the wall to the walls of the room, then from the room inside the museum to the museum in the middle of Tokyo. After a while you start wondering where anything in life actually stops.</p>
        <p>At the edge of the canvas? Don’t be naive. It carries on well past the edge, long after we've given up trying to draw the lines.</p>
      </div></div>
    </section>

    <section className={styles.blueAct}><div className={styles.blueInner}><div className={styles.blueHead}><p className={styles.sectionKicker}>03 · RHYTHM</p><h2>And then the room speaks for itself.</h2></div><figure className={styles.blueFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png"/><img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Picasso exhibition gallery with striped wall treatment" loading="lazy"/></picture><Caption>ADDING A NEW LAYER DOES NOT ERASE THE FIRST. IT MAKES IT MORE ACCURATE.</Caption></figure><div className={styles.blueText}>
      <p>In one gallery, Smith covers the wall in stripes from floor to ceiling, his artistic signature for decades, light-years from Picasso's gesture. Yes, Picasso made the work. Smith gives it a new place to let loose. It goes far beyond careful lighting or a magnificent backdrop. It’s a stage co-star. From this point the exhibition in no way resembles the one you walked into. Two very different kinds of genius become roommates, each looking at the world in their own way.</p>
      <p>So we see now that no single way of seeing a painting gets to be the one true view. Different views strengthen each other. Art stays fluid like a conversation: new people arrive with their own way of seeing it, and the masterpiece doesn't weaken. It finds another life every time someone looks again.</p>
    </div></div></section>

    <section className={styles.quiet}>
      <div className={styles.quietHead}><p className={styles.sectionKicker}>04 · PAY ATTENTION &amp; SEE</p><h2>The most beautiful thing is watching someone else truly experience the art.</h2><div className={styles.prose}>
        <p>There's a magical moment when the room around you disappears and you suddenly find yourself inside the world the artist planned for you. It's almost a religious experience, minus the wooden pew.</p>
        <p>Two people can stand in front of the exact same painting and walk away with two entirely different versions, without either of them being wrong. A single work can hold any number of true meanings all at once, as long as someone is there to receive them. That's more or less the only condition: as long as curiosity returns, the spark of life never dies.</p>
        <p>Beauty plays the same trick. At first glance, usually nothing amazing happens. Then a bold line catches the light differently, a face looks back at you in what a second earlier looked like nothing special, and suddenly you’re looking with your soul instead of your eyes. The mind itself shifts what you thought was in front of you at the precise moment the art finally reaches you. The longer you stay, the more appears, and the more that appears, the stranger the details become.</p>
        <p>Entire worlds inhabit other worlds here. An exhibition, or a city for that matter, can contain several million private perceptions at once. In that regard, the word "art" really downplays what's actually going on. Maybe that's what a frame is made to do. In the end, perhaps the frame is opening a door toward free expression rather than building a cage around it.</p>
        <p>Picasso's imagination didn't come from privileged access to some restricted area. On the contrary. He just kept looking long after everyone else told him what to think. Managing to do that can be difficult. Keeping it up for sixty years takes a rare kind of brilliance.</p>
        <p>The object in front of you doesn't need to change for you to truly see it. What changes is how much you’re willing to notice. Once that really happens, the city outside the museum is way more beautiful and exciting. Tokyo simply continues outside, everything changing meaning depending on who’s looking and what happens to be beside it that day.</p>
        <p>Life keeps spilling over and rebuilding everywhere, whether we notice it or not. So here's the challenge: find one thing you're absolutely certain you've already figured out, and start again with that exact one thing.</p>
      </div></div>

      <figure className={styles.thresholdFigure}><picture><source media="(max-width: 760px)" srcSet="/images/editorial/picasso-threshold-gallery-mobile.png"/><img src="/images/editorial/picasso-threshold-gallery-desktop.png" alt="A person walks through the Picasso exhibition gallery" loading="lazy"/></picture><Caption>THE FRAME STOPS. ART DOESN’T.</Caption></figure>
    </section>

    <section className={styles.ending}><h2>LOOK AGAIN.<br/>THEN ONE MORE TIME.</h2><p className={styles.endingMeta}>PICASSO · PAUL SMITH<br/>THE NATIONAL ART CENTER, TOKYO<br/>EASTOKYO · ISSUE 01</p></section>
  </main>;
}
