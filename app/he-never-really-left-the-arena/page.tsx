import type { Metadata } from "next";
import BullfightSlideshow from "./BullfightSlideshow";
import { ArticleFooter, ArticleHeader } from "./ArticleChrome";
import EditorialReveal from "./EditorialReveal";
import styles from "./page.module.css";
import signature from "./signature.module.css";
import heroPolish from "./hero-polish.module.css";

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
        <div className={`${styles.heroShade} ${heroPolish.shade}`} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <h1 className={`${styles.title} ${heroPolish.title}`}>HE KEPT WALKING BACK IN.</h1>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.meta}>EASTOKYO<br />COVER STORY<br />ISSUE 01<br /><br />BY JAMES SIMMONS (AKA JIMICHANGA)</div>
        <p className={styles.deck}>Picasso spent his whole life going back to that ring. Maybe the real question was never about the bull. It was why some things won&apos;t let us go.</p>
      </section>

      <section className={styles.body}>
        <p className={styles.bodyLabel}>THE STORY</p>
        <div className={styles.bodyCopy}>
          <p><em>En serio</em>, you think you know Pablo Picasso, but we need to talk about how this man completely shattered the rules of reality through the raw, bloody drama of the bullfight. There’s something about a bullring, infernal heat coming off the sand, choking on dust, the crazy crowd leaning forward as one unified heartbeat, that just grabs you and won&apos;t let go. Pablo Picasso, mi amigos, knew this better than anybody who ever picked up a paintbrush. He was just a kid in Málaga when his obsession began, the smell of that arena, colors of the capes dancing somewhere behind his eyes after the sun went down. That obsession never let him go, not for sixty years. It shows up later in his drawings, paintings, prints, his little ceramic pieces, and books. Bulls and matadors walking in and out of his whole life&apos;s work, so much so that the Museu Picasso (Barcelona, Spain) itself says bullfighting is one of the great obsessions of his career. I personally wanna say that’s an understatement. No offense to Museu Picasso.</p>
          <p>But am I going too far? Maybe he was just nostalgic about Spain. Ay pobrecito… just nostalgia? Or maybe it was that Spain never really left him. Umm, ok, maybe so. But that doesn&apos;t explain fifty, sixty years of coming back to the same ring, especially from a man who flipped everything else in painting upside down and inside out. This is the man who desecrated traditional perspectives and folded them like a dirty napkin, who turned painting into sculpture, could look at a bicycle seat and see a bull&apos;s head, who never stopped reinventing himself or creating worlds from whatever he could find, not for one single moment. Someone with that kind of hunger and restless imagination has every reason to leave boring in the dust.</p>
          <p>And still, otra vez, the bull kept coming back. Heavy, black, head down low ready to strike, never scared, dragging the horse and the torero and the crowd and that long monstrous breath before the horn pierces. Picasso reinvented himself all the time too, and somehow, somehow, the arena changed with him.</p>
        </div>
      </section>

      <section className={styles.visualSequence} aria-label="Picasso bullfight exhibition">
        <figure className={`${styles.visualFigure} ${styles.hallwayFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-red-room-mobile.png" /><img src="/images/editorial/picasso-red-room-desktop.png" alt="Red exhibition hallway displaying Picasso works" /></picture>
          <figcaption className={styles.imageCredit}>EXHIBITION VIEW · PHOTOGRAPHY BY JIMICHANGA.</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">01</span>
            <p className={styles.storyBeatLabel}>LOOKING CLOSELY</p>
            <div className={styles.storyBeatCopy}>
              <p>That’s when you see it, the corrida gives a painter everything, the silk, shiny gold catching the light, that dark beast strutting across a bright open arena while some guy tries to not piss his pants with a thousand pounds of mad cow charging straight at him. But if you look at Picasso&apos;s bullfights a little closer, something becomes obvious. You have to stop watching the ring and start watching the people watching the ring. The tilt of somebody&apos;s head or a whole grandstand leaning forward at the exact same moment.</p>
              <p>A bullfight has always needed people watching, even though the whole thing happens inside that little circle of sand, the real drama of it lives somewhere else, out there in all those eyes surrounding it. Picasso watched the ring, the crowd watched the bull, and Picasso turned all of it, every bit of that grand chaos, into something that, even decades later, stops a total stranger cold in front of a canvas. And now, we’re watching that person too.</p>
              <p>There&apos;s a little arena somewhere inside almost every corner of our lives, mi gente, at the office, in love, online, sitting at the family table. Sometimes we take a risk exactly because people are watching. Then, other times we run from that same risk for some reason. That flutter in your chest, half of you wanting every eye in the room on you, the other half praying you could just blend into the crowd and disappear.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.viewerFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-viewer-mobile.png" /><img src="/images/editorial/picasso-bull-viewer-desktop.png" alt="A man looking closely at Picasso bullfight art" /></picture>
          <figcaption className={styles.imageCredit}>LOOKING CLOSELY · PHOTOGRAPHY BY JIMICHANGA.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">02</span>
            <p className={styles.storyBeatLabel}>THE ARENA</p>
            <div className={styles.storyBeatCopy}>
              <p>By the 1930s, the arena Picasso carried around inside him turned darker and more mysterious. September nineteenth, 1933, up at Boisgeloup, he painted <em>Corrida: la mort du torero</em>, oil on wood, tiny little thing, thirty one by forty centimeters, small enough to hold in your two hands and still carrying something enormous inside it. Thirteen days before that, in the same quiet studio, he&apos;d already painted <em>Corrida: la mort de la femme torero</em>. Death had walked into the ring, papi, and it was not leaving quietly.</p>
              <p>A year later he goes back again, the 1934 <em>Corrida</em>, part of this intense run of bullfight paintings the Thyssen museum puts right there among the Boisgeloup works from that summer, all of them circling around that violent meeting of bull, horse, and man. The museum calls this body of work something reaching far beyond physical violence, toward a kind of parable about love and death, and okay, that reading helps, it&apos;s useful, but don&apos;t let it close the book for you, because the arena won’t let you define it so easily.</p>
              <p>The torero looks like he’s not even afraid, chin up, cape snapping in the light, and then suddenly he doesn&apos;t seem so sure. The bull is powerful even while it&apos;s walking straight into a death that got decided long before it ever stepped foot in that ring, muscle and dust and blood all soaking up that same sun. The horse belongs to the whole dramatic ceremony and just as easily becomes one of its victims. Power flips over on itself right there in front of everybody, the whole plan falls apart at the seams, and the arena reminds every single person watching that underneath all that proud ceremony, it&apos;s just mortal flesh, breath and heartbeat, nothing more, nothing less. Sooner or later, corazón, every life runs into a bull that refuses to be controlled, some version of that horn coming in fast and strong just when you were so sure you had every angle figured out.</p>
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
            <picture><source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-feature-mobile.png" /><img src="/images/editorial/bullfight-feature-desktop.png" alt="Corrida (Bullfight), Pablo Picasso, 1934" /></picture>
            <figcaption className={styles.imageCredit}>CORRIDA (BULLFIGHT) · PABLO PICASSO · 1934</figcaption>
          </figure>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 640px)" srcSet="/images/editorial/bullfight-detail-mobile.png" /><img src="/images/editorial/bullfight-detail-desktop.png" alt="Corrida: la mort du torero, Pablo Picasso, 1933" /></picture>
            <figcaption className={styles.imageCredit}>CORRIDA: LA MORT DU TORERO · PABLO PICASSO · 1933</figcaption>
          </figure>
        </div>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">03</span>
            <p className={styles.storyBeatLabel}>WHAT SURVIVES</p>
            <div className={styles.storyBeatCopy}>
              <p>Here&apos;s the other thing about those thirties paintings. The bull and horse, all that bodily violence, that feeling of somebody watching, all of it was already living inside Picasso&apos;s visual language way before <em>Guernica</em> ever happened. The Thyssen puts these 1933 to 1935 bullfight works right there on the road toward that 1937 painting, especially those brutal moments between bull and horse. Now that doesn&apos;t mean the bull can be defined by one simple meaning forever, and it sure don&apos;t mean you can just decode <em>Guernica</em> as a cool bullfight. Something else happened. Picasso kept coming back to these same bulls so many times that they started to become heavier than the original subject could ever hold.</p>
              <p>Maybe that&apos;s what obsession gives an artist. Not an answer but a language. A way of talking that keeps getting deeper the longer you interpret it. And honestly, maybe that&apos;s true outside of art too. Most of us spend years convinced our whole life is transforming just because the scenery keeps changing on us. We&apos;re trying things on like a coat in the mirror, and then one perfectly ordinary morning, coffee still warm on the table, all of those old questions come back up from underneath everything. Am I enough? What am I so scared to lose? Who am I even still trying to impress after all these years? This crazy arena called life, as it turns out, isn&apos;t really about outrunning those questions. It&apos;s about living your life how you want to live it no matter who the spectators are.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.galleryFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-gallery-mobile.png" /><img src="/images/editorial/picasso-bull-gallery-desktop.png" alt="Visitors looking at a group of Picasso bullfight works" /></picture>
          <figcaption className={styles.imageCredit}>THE ROOM LOOKING BACK · PHOTOGRAPHY BY JIMICHANGA.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${styles.slideshowBridge} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">04</span>
            <p className={styles.storyBeatLabel}>AGAIN AND AGAIN</p>
            <div className={styles.storyBeatCopy}>
              <p>And now comes the theatric return that makes this whole story impossible to write off as something Picasso just felt nostalgic about since his childhood. Way back in 1927, the publisher Gustau Gili Roig asked Picasso to illustrate José Delgado&apos;s old bullfighting treatise, <em>La Tauromaquia</em>, and the whole idea just disappeared quietly for many years, the way good ideas do sometimes. Then in January 1956, Gustau Gili Esteve and Anna Maria Torra show up for a visit with their friend Pablo and bring the whole thing back to life. That May, Picasso made the sugar lift aquatints, twenty six of them in total, and the finished edition was finally published in Barcelona in 1959.</p>
              <p>Picasso was seventy five years old and still making moves in the art world. Wow, viejo, that’s not easy to process. After Cubism, war, the kind of fame most artists can&apos;t even dream of, and after decades of reinventing who he was over and over and over, he walks bravely back into that ring. That earns my respect! And I’m sure he had plenty of other things to make. But something in the bullring still had life left for him, and he wasn&apos;t done with it. The Museu Picasso says his bullfighting images break the whole spectacle down piece by piece, the bull and aficionados leaning over the barrera, all while still carrying power, brutality, desire, and death, all tangled up together. In one picture you can see the torero right up on the shoulders of a roaring crowd, hands up in the air, hats flying, the whole plaza going ballistic. Another picture drags the dead bull across the sand while the noise is fading into something more like a somber moment to honor the bull the same way the crowd honored a slain gladiator in the Roman Coliseum. Triumph and mortality right next to each other, because the arena hands everybody a role and for a while it feels permanent and secure, winner and loser, powerful and afraid, until the moment of truth comes and fate decides.</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <BullfightSlideshow />

      <section className={styles.finalAct}>
        <figure className={`${styles.visualFigure} ${styles.bullHeadFigure}`}>
          <picture><source media="(max-width: 640px)" srcSet="/images/editorial/picasso-bull-head-mobile.png" /><img src="/images/editorial/picasso-bull-head-desktop.png" alt="Tête de taureau (Bull's Head), Pablo Picasso, 1942" /></picture>
          <figcaption className={`${styles.imageCredit} ${styles.bullHeadCredit}`}>TÊTE DE TAUREAU (BULL&apos;S HEAD) · PABLO PICASSO · 1942 · BICYCLE SADDLE AND HANDLEBARS</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.finalStoryBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">05</span>
            <p className={styles.storyBeatLabel}>THE BULL REMAINS</p>
            <div className={styles.storyBeatCopy}>
              <p>Strip it all away though. The whole performance, even most of the bull&apos;s fierce anger, and somehow we start to see what&apos;s standing there in the sand. That might be the truest place to leave Picasso. Because there’s no neat little explanation of what his bull really means. It changed too many times to ever come up with an answer. Fear? Maybe strength or violence. Or sexual desire. Who knows? Life and mortality and Picasso himself, all melted into the same dark shape, and none of it explains anything. Any possible meaning is true depending on where you happen to be standing when you look up at it.</p>
              <p>The real question, the one that we know Picasso wants us to ask, is what&apos;s your loco toro? The thing you can’t get out of your system. It could be a fear you keep circling instead of standing up to. Maybe a person or place that you let conquer you. The realization that your time here runs out sooner than you want to believe. And then there&apos;s the arena itself, the place where something real is on the line and you finally become seen. You could fail and people might actually watch it happen. Why not play it safe? A whole life spent up in the audience would surely be safer. But safety and being alive have never been the same thing, and truly being alive means stepping right into the arena where nobody knows how it ends. Loving somebody without a guarantee or pursuing your dream long before you even know if it&apos;ll turn out right. Picasso kept walking back in the ring, decade after decade, way after anybody would have blamed him for staying home and playing dominoes instead. Listen, there’s no moral lesson wrapped in a bow here. This is about an old man named Pablo Picasso who never stopped choosing the ring over the back row, and one simple question he leaves with you.</p>
              <p>Where are you standing?</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <div className={styles.endMark} aria-label="End of cover story"><span>END</span><span>EASTOKYO Nº01</span></div>
      <ArticleFooter />
    </main>
  );
}