/* eslint-disable react/no-unescaped-entities */
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
        <p className={styles.standfirst}>An exhibition is never only the work on the wall. It's the room around it, the people moving through it, the city outside, and everything you carried in without knowing it.</p>
        <aside className={styles.introNote}>Paul Smith does not disappear behind Picasso. He changes the conditions around him, and the work starts behaving differently.</aside>
      </section>

      <section className={styles.featureOne}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png" />
            <img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones studies the exhibition installation" loading="lazy" />
          </picture>
          <figcaption className={styles.caption}>LOOKING IS NEVER PASSIVE. YOU BRING YOURSELF INTO THE ROOM.<br />{credit}</figcaption>
        </figure>
      </section>

      <section className={styles.bodyBeat}>
        <div className={styles.beatNo}>01</div>
        <div className={styles.prose}>
          <p>There's a woman walking toward the museum carrying an umbrella, open, held high.</p>
          <p>There is not one cloud in the sky.</p>
          <p>Tokyo is somewhere north of thirty degrees, the pavement is throwing the heat straight back up at me, and the sun has clearly decided it has something to prove. Still, the umbrella looks strange to me for about half a second.</p>
          <p>Then I remember where I am.</p>
          <p>It's a sunbrella.</p>
          <p>I made that word up. And I'm keeping it.</p>
          <p>You see them everywhere in Tokyo in summer, mostly carried by women — umbrellas opened against the sun instead of the rain. They make perfect sense. More sense, frankly, than what I do, which is walk to lunch getting slow-roasted because I'm too stubborn to carry anything unnecessary.</p>
          <p>But I grew up knowing what an umbrella was for.</p>
          <p>Rain. Filed away. Done.</p>
          <p>Except the umbrella never changed. Its possibilities did. The object stayed exactly the same. My imagination was the thing sitting there small and half-asleep.</p>
          <p>Somewhere between that sunbrella and the first rooms of <em>Picasso, through the Eyes of Paul Smith</em> at the National Art Center, Tokyo, I realized this was actually what I'd come to see.</p>
          <p>Not Picasso.</p>
          <p>Or not only Picasso.</p>
          <p>I'd come to see what happens when something we think we already know is allowed to become unfamiliar again.</p>
          <p>That's a hard thing to pull off with Pablo Picasso.</p>
          <p>Picasso walks into a room a few minutes before his paintings do. The name drags a century behind it — Cubism, Guernica, blue periods, rose periods, auction prices, faces where the nose appears to report to a different manager than the eyes.</p>
          <p>Even people who've never studied him already feel like they've met him at a party.</p>
          <p>We know Picasso.</p>
          <p>And that is exactly the problem.</p>
          <p>Because knowing the category is one of the sneakiest ways to stop truly seeing the thing in front of you. It happens in love. It happens with people we've sat across the table from for thirty years. We assume familiarity means understanding. Half the time it just means we stopped looking.</p>
          <p>Recognition is a gift — it lets us move through life without stopping every six seconds to have a spiritual crisis over a coffee cup.</p>
          <p>But certainty is different. Certainty folds its arms and says: <em>I've seen this before. Nothing further required.</em></p>
          <p>Umbrella, rain.</p>
          <p>Picasso, Cubism.</p>
          <p>Museum, art. Outside, life. Nice tidy boxes.</p>
          <p>The world has never once respected our filing system.</p>
        </div>
        <blockquote className={styles.sideQuote}>WE KNOW PICASSO. THEREIN LIES THE PROBLEM.</blockquote>
      </section>

      <section className={styles.harlequin}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png" />
            <img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Picasso works displayed in a gallery installation" loading="lazy" />
          </picture>
          <figcaption className={styles.caption}>THE WALL IS NOT BACKGROUND ANYMORE. IT HAS ENTERED THE CONVERSATION.<br />{credit}</figcaption>
        </figure>
        <div className={styles.harlequinCopy}>
          <p className={styles.sectionKicker}>02 · COLOR ENTERS THE ARGUMENT</p>
          <h2>The wall is not neutral anymore.</h2>
          <div className={styles.prose}>
            <p>Paul Smith does something a little mischievous here.</p>
            <p>He doesn't touch the Picasso. He touches the room around it.</p>
            <p>Color shows up like it was invited to a party it intends to run. Pattern follows. Stripes climb the walls. Take the harlequin painting: a figure already built out of diamonds and color-blocking, hung against a wall that picks up its own rhythm and pushes it back. The costume and the wall start arguing about who gets to be the pattern. Works we thought we knew start talking — across walls, across galleries — refusing to sit inside the anonymous white boxes museums have trained us to expect.</p>
            <p>Smith doesn't alter what Picasso painted. He alters what it's standing next to.</p>
            <p>And the paintings answer back.</p>
            <p>Not literally — nobody's canvas is rearranging its own paint like some <em>Night at the Museum: Málaga Edition.</em> The paint stays put.</p>
            <p>But something moves. We move.</p>
            <p>A painting that felt safely filed away in art history suddenly has a bold new neighbor pressing against it, and you're seeing it fresh. Smith isn't erasing what Picasso meant. He's exposing something that was true the whole time: meaning was never sealed inside that frame to begin with.</p>
            <p>Picasso moves Smith.</p>
            <p>Smith moves the room.</p>
            <p>The room moves us.</p>
            <p>We move what we see.</p>
            <p>Nothing gets to be pure background if you're paying attention.</p>
            <p>Picasso's work sits inside Smith's design. Smith's design sits inside the museum. The museum sits inside Tokyo. And every person who walks through it brings an entire day of their own.</p>
            <p>The heat outside matters. The shirt you put on that morning matters. Something someone said to you ten years ago can rise back up in front of a painting and matter more than it has in a decade.</p>
            <p>One thing nested inside another, inside another.</p>
            <p>Russian dolls, all the way down.</p>
            <p>Once you notice the threads connecting everything, the borders start looking suspicious.</p>
            <p>Where does the artwork actually end?</p>
            <p>At the edge of the canvas? The wall? The room? The person standing in front of it? The museum door?</p>
            <p>Good luck drawing that line.</p>
          </div>
        </div>
      </section>

      <section className={styles.blueAct}>
        <div className={styles.blueInner}>
          <div className={styles.blueCopy}>
            <p className={styles.sectionKicker}>03 · RHYTHM</p>
            <h2>Then the room starts moving.</h2>
            <p>In one gallery, Smith runs stripes floor to ceiling behind the work — his signature, decades removed from Picasso's hand, laid over nothing but the wall.</p>
            <p>Picasso made the work. Smith encounters it decades later. He doesn't alter it — he alters what surrounds it. And something new becomes visible that was always there, just gone quiet.</p>
            <p>That's the proof reinterpretation doesn't have to erase what came before it.</p>
            <p>One reading doesn't kill another. Art doesn't stay alive by being protected from new eyes. It stays alive because new eyes keep arriving.</p>
            <p>The work doesn't become less itself.</p>
            <p>It becomes connected to another life. And then another.</p>
          </div>
          <figure>
            <picture>
              <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png" />
              <img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Picasso exhibition gallery with striped wall treatment" loading="lazy" />
            </picture>
            <figcaption className={styles.caption}>ANOTHER LAYER DOES NOT ERASE THE FIRST ONE. SOMETIMES IT HELPS YOU SEE IT.<br />{credit}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.quiet}>
        <div className={styles.quietCopy}>
          <p className={styles.sectionKicker}>04 · PAY ATTENTION</p>
          <h2>The best part is watching somebody else stop.</h2>
          <div className={styles.prose}>
            <p>There's something beautiful about watching another person stop in front of a work. Not because I know what they're thinking. I don't. That's the point.</p>
            <p>Two people can stand in front of the same painting and encounter completely different things. There's no final answer hiding behind the frame with a gold star on it. There never was.</p>
            <p>Meaning stays alive because the looking stays alive.</p>
            <p>Beauty works the same way. It doesn't always announce itself. Sometimes the first glance gives you nothing. Then you notice a line. A color. A face tucked in the corner. The way the room itself changes what you thought you were looking at.</p>
            <p>The more you understand, the more comes into view. The more that comes into view, the stranger the smallest things become.</p>
            <p>There are worlds inside worlds. A painting can hold a room. A room can hold a city. A city can hold a few million private lives, all brushing against one another.</p>
            <p>This is where "art" starts feeling like too small a word for what's happening.</p>
            <p>Maybe the museum isn't a separate box where art lives. Maybe it's just one of the places we still remember how to look.</p>
            <p>Picasso's gift wasn't some private vision the rest of us don't get. I think it was simpler and harder than that: he just kept looking, long after everyone else in the room had decided what the thing was.</p>
            <p>That's a habit worth stealing.</p>
            <p>Not because every object is secretly profound — not every coffee cup contains the meaning of existence. But because almost anything can become meaningful through connection.</p>
            <p>A bicycle seat. A face. A stripe. A ceramic plate. An umbrella under a sky with no rain in it.</p>
            <p>The object doesn't always change. What changes is how much of it we're capable of seeing.</p>
            <p>Once that happens, the city outside the museum starts looking different too. The door stops being much of a boundary. Tokyo keeps going. Objects keep changing meaning depending on where they are, who's holding them, what they're connected to, and who's paying attention.</p>
            <p>Life keeps composing itself whether we notice or not.</p>
            <p>That may be the masterpiece. Not one isolated picture hanging safely on a wall. The whole thing.</p>
            <p>So here's the dare: find something you're certain you already understand.</p>
            <p>Start there.</p>
          </div>
        </div>
      </section>

      <section className={styles.threshold}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-threshold-gallery-mobile.png" />
            <img src="/images/editorial/picasso-threshold-gallery-desktop.png" alt="A visitor moving through the Picasso exhibition galleries" loading="lazy" />
          </picture>
          <figcaption className={styles.caption}>THE FRAME ENDS. THE LOOKING DOES NOT.<br />{credit}</figcaption>
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
