/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Picasso, Looked at Differently.",
  description: "Picasso, Seen by Paul Smith at The National Art Center, Tokyo.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const credit = "PICASSO, SEEN BY PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY BY JIMICHANGA";
const textPhotoCredit = "PICASSO, SEEN BY PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · TEXT AND PHOTOGRAPHY BY JIMICHANGA";

function Caption({ children, creditText = credit }: { children: React.ReactNode; creditText?: string }) {
  return <figcaption className={styles.caption}><span className={styles.captionLead}>{children}</span><span className={styles.credit}>{creditText}</span></figcaption>;
}

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
          <p className={styles.kicker}>EXHIBITION · PICASSO SEEN BY PAUL SMITH</p>
          <h1 id="story-title" className={styles.title}>PICASSO,<em>LOOKED AT DIFFERENTLY.</em></h1>
          <p className={styles.deck}>Paul Smith moves the walls, and Picasso wakes up.</p>
          <p className={styles.byline}>BY JAMES SIMMONS (AKA JIMICHANGA)<br />EASTOKYO · ISSUE 01</p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introLabel}>01 · LOOK AGAIN</div>
        <p className={styles.standfirst}>An exhibition, it is not only the works hung on the walls. It is the whole room that surrounds them, and the preconceived ideas that we bring there without even knowing it.</p>
        <aside className={styles.introNote}>Paul Smith does not fade away behind Picasso. He transforms the room, and the work begins to become real.</aside>
      </section>

      <section className={styles.featureOne}>
        <figure>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png" />
            <img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones studies the exhibition installation" loading="lazy" />
          </picture>
          <Caption>LOOKING IS NEVER ENOUGH. YOU HAVE TO SEE WITH YOUR WHOLE BEING.</Caption>
        </figure>
      </section>

      <section className={styles.bodyBeat}>
        <div className={styles.beatNo}>01</div>
        <div className={`${styles.prose} ${styles.openingA}`}>
          <p>There is a beautiful Japanese woman walking toward the museum, a blue parasol open above her, to stay cool in the furnace of the month of August.</p>
          <p>But looking up toward the sky, not the slightest gray cloud.</p>
          <p>Tokyo is somewhere north of Hell, and in summer, it is almost worse. The sidewalk throws the heat back into my face, and the sun has visibly decided to turn the thermostat all the way up. In short, at that moment, this parasol in full sun seemed completely crazy to me.</p>
          <p>Then I remember that I am in the Far East, where umbrellas are not always simple umbrellas.</p>
          <p>And this lady who was crossing the courtyard was not carrying an umbrella. It was a “sun umbrella.”</p>
          <p>I invented this word and it is going to be a hit. Don’t forget it, I’m the one who had it first. Lol!</p>
          <p>You see them everywhere in Tokyo in summer, these sun umbrellas, carried mostly by women. Umbrellas opened against the sun rather than against the rain, that has existed in Tokyo for centuries. Nothing new under the sun, right? It makes a lot of sense here. More sense, frankly, than what most men do: walk to lunch getting roasted rather than risk appearing less macho.</p>
          <p>I grew up knowing my country’s version of what an umbrella is for.</p>
          <p className={styles.shortBeat}>Rain.</p>
          <p>Until my arrival in Japan, the umbrella never wanted to change. And why should it?</p>
        </div>

        <div className={`${styles.prose} ${styles.openingB}`}>
          <p>Somewhere between this sun umbrella and the first rooms of <em>Picasso, Seen by Paul Smith</em> at the National Art Center in Tokyo, I understood that everything can be reinvented.</p>
          <p>Not only Picasso. Almost everything! Yes, everything.</p>
          <p>This exhibition showed me what happens when we allow something that we think we already know to reveal more to us.</p>
          <p>It is not difficult to succeed at this with Picasso.</p>
          <p>Pablo Picasso, a name that represents more than a century of genius. He embodies what it means to be an artist, and he is recognized everywhere in the world as one of the greatest who ever existed. There are so many things in Picasso! Cubism, Guernica, the blue and rose periods, crazy auction prices, strange faces where the nose does not answer to the same boss as the eyes.</p>
          <p>His fame precedes him and will last another hundred years. Even those who have never studied him have already seen his art somewhere, at a party or in a gallery.</p>
          <p>We all know Picasso.</p>
          <p>And that is exactly the problem.</p>
          <p>Because knowing creates preconceived ideas. It is one of the ways that we, humans, stop seeing beyond the surface. It happens all the time in love. The seduction phase and the honeymoon fade, then familiarity settles in. Boredom and irritation follow. Why? Because adventure is born from new discoveries. From novelty, and from the way experiences make us feel. Then we reach the point where we finish the loved one’s sentences, where we say: “I know you better than you know yourself.” We equate familiarity with understanding, right? Yet, half the time, it simply means that we have stopped trying to understand more. That is why everything ends up seeming tired or boring. Worn out, retired. But in love, in art, in everything... everything is constantly recreating itself. What do we really know about Picasso? What do we understand about ourselves, from every possible angle? This is not to say that familiarity is bad. Recognition is a gift: it allows us to move forward through life without having to reevaluate everything around a coffee every five seconds.</p>
          <p>But certainty crosses its arms and says: I have already seen that, I understand.</p>
          <p>Umbrella, rain.</p>
          <p>Picasso, cubism.</p>
          <p>How could there be only one correct perspective? Because that reassures us in a chaotic world? There is a pretty illusion. It is boring too. I prefer to open my eyes to see clearly and discover another point of view.</p>
        </div>

        <blockquote className={styles.sideQuote}>WE KNOW PICASSO. REALLY?</blockquote>
      </section>

      <section className={styles.harlequin}>
        <figure className={styles.harlequinFigure}>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png" />
            <img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Picasso works displayed in a gallery installation" loading="lazy" />
          </picture>
          <Caption creditText={textPhotoCredit}>THE WALL IS NO LONGER A SIMPLE BACKDROP. IT IS PART OF THE CONVERSATION.</Caption>
        </figure>

        <div className={styles.harlequinLead}>
          <p className={styles.sectionKicker}>02 · COLOR TAKES OVER</p>
          <h2>The wall is no longer a simple innocent spectator.</h2>
          <div className={styles.prose}>
            <p>Paul Smith thinks completely outside the established frameworks.</p>
            <p>He does not even try to redefine Picasso. Instead, he recreates the room around him, and from it brings forth a harmony.</p>
            <p>Color arrives like a guest of honor invited to a big party where patterns mingle with all kinds of shapes. Stripes climb along the walls, patterns spread out, and nothing remains silent. Take the Harlequin painting: an already extraordinary figure, constructed of diamonds and blocks of color, hung on a wall that takes on its own attitude and expresses it. The costume and the wall begin to argue. The colors and lines that we thought we knew begin to speak in their own way, across the walls and galleries. They refuse to remain nicely and timidly inside the predictable frames that museums have accustomed us to.</p>
            <p>Smith does not need to change what Picasso painted, because he lets the rooms and the paintings bring out the best in each other. Then the painting comes to life.</p>
            <p>Not literally, of course. No canvas begins moving all by itself like in some sort of <em>Night at the Museum: Málaga Edition.</em> The painting has nothing magical about it.</p>
            <p>But something magical happens, and it transports us.</p>
            <p>A painting that seemed ordinary in art history books suddenly regains a new boldness, and we see it with fresh eyes. Smith only shows people something that had always been true: meaning does not sit nicely inside a frame, and everything is interconnected.</p>
            <p>Nothing is a simple backdrop if we look differently. Pay attention, and everything works together.</p>
            <p>Everything, from the paintings on the walls, to the walls in the rooms, to the rooms in the museum, to the museum in Tokyo, to the city in the world, and even beyond... all of that is part of the greatest masterpiece: life. Everything is connected, and far more than anyone has yet truly grasped.</p>
          </div>
        </div>

        <div className={styles.harlequinAfter}>
          <div className={styles.movementStack}>
            <p>Worlds within worlds within worlds.</p>
          </div>
          <div className={`${styles.prose} ${styles.harlequinRest}`}>
            <p>Once we begin to see that everything is one, boundaries lose their meaning.</p>
            <p className={styles.questionBeat}>So, where does the work really stop?</p>
            <p>At the edge of the canvas?</p>
            <p>The truth is... nowhere.</p>
          </div>
        </div>
      </section>

      <section className={styles.blueAct}>
        <div className={styles.blueInner}>
          <div className={styles.blueHead}>
            <p className={styles.sectionKicker}>03 · RHYTHM</p>
            <h2>Then the room comes alive.</h2>
          </div>
          <figure className={styles.blueFigure}>
            <picture>
              <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png" />
              <img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Picasso exhibition gallery with striped wall treatment" loading="lazy" />
            </picture>
            <Caption>A NEW LAYER DOES NOT ERASE THE FIRST. IT GIVES IT MORE TRUTH.</Caption>
          </figure>
          <div className={styles.blueText}>
            <p>In one gallery, Smith runs stripes from floor to ceiling behind the works. It is his signature, decades after Picasso.</p>
            <p>Picasso created the art, and Smith took it to another level. How? Well, he gave it a place to shine that went far beyond a simple spotlight, he made it a co star. And after that, the exhibition was never the same again! Two artists, two brilliant ways of seeing the world.</p>
            <p>One reading does not replace the other, it intensifies it. In the same way, art stays alive because new eyes continue to contemplate it.</p>
            <p>Thus, the work does not become less valid. It is neither weak nor frozen. It connects to another life. Then to yet another.</p>
          </div>
        </div>
      </section>

      <section className={styles.quiet}>
        <div className={styles.quietHead}>
          <p className={styles.sectionKicker}>04 · PAY ATTENTION</p>
          <h2>The best moment is seeing someone else stop.</h2>
          <div className={styles.prose}>
            <p>There is something beautiful in that moment when the world around you fades away, and you suddenly find yourself in the universe toward which the artist draws us. It is almost religious.</p>
            <p>Yet, two people can stand in front of exactly the same painting and feel completely different things. There is not one single right way to feel art, because we are all different. And a single painting contains countless realities, countless possible interpretations. None is wrong.</p>
            <p>Everything is true, everything is right, as long as it remains alive. As long as it is seen and felt, it remains alive.</p>
          </div>
        </div>

        <div className={styles.quietMiddle}>
          <div className={styles.prose}>
            <p>Beauty works the same way. Beauty is beautiful. Sometimes, the first look gives nothing, then we notice a line, a curve, under certain lighting, from the right angle. A color or a face becomes clearer, and passion floods the senses. The way the room itself transforms what we thought we were looking at, at the precise moment when the painting truly speaks to the heart.</p>
            <p>The more we understand it, the more it reveals itself. The more it reveals itself, the more the small details become important.</p>
          </div>
          <p className={styles.worlds}>There are worlds inside worlds. A painting, an exhibition or a city can contain millions of private lives, all coexisting at the same time.</p>
          <div className={styles.prose}>
            <p>This is where we begin to see that the word “art” is a word far too small for what is really happening.</p>
            <p>Maybe that is why art cannot be reduced to a simple frame. The little rectangle, the little box, is only the door through which we enter these multiverses.</p>
          </div>
        </div>

        <div className={styles.quietFinal}>
          <div className={`${styles.prose} ${styles.finalMain}`}>
            <p>And Picasso’s gift was not a private vision to which the rest of us would not have access. I believe it was much simpler, and much more difficult than that: he continued to look, after everyone else had already decided what the painting was about.</p>
            <p>It is incredible, because he discovered a secret, and his art gives us clues about what it was.</p>
            <p>Every object is secretly profound, in a certain way. Everything gives us a clue about what it means, and everything means something. Everything is connected, absolutely everything, and Picasso knew it.</p>
            <p>The object does not always change in an obvious way. What changes is our ability to see more of it, if we wake up and really look.</p>
          </div>
          <div className={styles.finalRail}>
            <p>Once that happens, the city outside the museum also begins to look different. The door stops being a boundary. Tokyo continues, again and again. Objects change meaning according to where they are, who holds them, what they are connected to, and who pays attention to them.</p>
            <p>Life continues to pour into itself and out of itself, whether we notice it or not.</p>
            <p>That is life, and life is the true masterpiece. Everything, at the same time, without end.</p>
            <p>So here is the challenge: find something that you are sure you already understand.</p>
            <p className={styles.startThere}>Start there.</p>
          </div>
        </div>

        <figure className={styles.thresholdFigure}>
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/editorial/picasso-threshold-gallery-mobile.png" />
            <img src="/images/editorial/picasso-threshold-gallery-desktop.png" alt="A visitor moving through the Picasso exhibition galleries" loading="lazy" />
          </picture>
          <Caption>THE FRAME STOPS. THE LOOK, IT, CONTINUES.</Caption>
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