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
          <p className={`${styles.kicker} ${heroPolish.kicker}`}>PICASSO AND THE ARENA HE NEVER LEFT.</p>
          <h1 className={`${styles.title} ${heroPolish.title}`}>HE KEPT WALKING BACK IN.</h1>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.meta}>EASTOKYO<br />COVER STORY<br />ISSUE 01</div>
        <p className={styles.deck}>Picasso spent an entire lifetime returning to the bullring, and perhaps the question worth asking was never what the bull meant to him, but why certain things simply refuse to let us go.</p>
      </section>

      <section className={styles.body}>
        <p className={styles.bodyLabel}>THE STORY</p>
        <div className={styles.bodyCopy}>
          <p>Ay, listen. There is something about a bullring, that heat coming off the sand, the dust, the whole crowd leaning forward like one big heartbeat, that just grabs you and won&apos;t let go. And Picasso, mi amor, he knew this better than anybody who ever picked up a brush in his life. He was just a kid in Málaga when it got into him, the smell of that arena, the color of the capes still living somewhere behind his eyes long after the sun went down. That thing never let him go, not once, not for sixty years. It shows up in his drawings, his paintings, his prints, his little ceramic pieces, his books, bulls and matadors walking in and out of his whole life&apos;s work, so much so that the Museu Picasso itself says bullfighting is one of the great obsessions of his career. One of the big ones.</p>
          <p>Now you could say ay pobre, just nostalgia, a man carrying a little piece of home in his back pocket wherever life took him. Fine. But that don&apos;t explain fifty, sixty years of coming back to the same ring, especially from a man who flipped everything else in painting upside down and inside out. This is the man who took perspective and folded it like a napkin, who turned painting into sculpture, who could look at a bicycle seat and see a bull&apos;s head staring back at him, who never stopped reinventing himself, not for one single day. A man with that kind of hunger, that kind of restlessness, he had every reason to leave an old idea in the dust.</p>
          <p>And still, mira, the bull kept coming back. Heavy, dark, head down low, same as always, dragging the horse and the torero and the crowd and that long terrible breath before the horn hits, right along with him. Picasso kept changing every decade of his life, and somehow, somehow, the arena changed right there with him.</p>
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
              <p>First time you see it, the corrida gives a painter everything, the silk, the gold catching the light, that dark animal cutting across bright open ground while some man tries to hold himself together with a thousand pounds of muscle charging straight at his chest. But you sit with Picasso&apos;s bullfights long enough and the longer you look, the more you start noticing the people around it. You stop watching the ring. You start watching the people watching the ring. The tilt of somebody&apos;s head, the way a whole grandstand leans forward on the exact same breath, like they&apos;re all one body.</p>
              <p>A bullfight has always needed people watching, even though the whole thing happens inside that little circle of sand, the real weight of it lands somewhere else, out there in all those eyes surrounding it. So now look around wherever you&apos;re standing in that museum. Picasso watched the ring, the crowd watched the bull, and Picasso turned all of it, every bit of that spectacle, into something that decades later stops a total stranger cold in front of a canvas. And now, without even trying to, we are watching that person too.</p>
              <p>There&apos;s a little arena tucked inside almost every corner of our lives, mi gente, at the office, in love, online, sitting right there at the family table. Sometimes we take the risk exactly because people are watching. Other times we run from that same risk for that exact same reason. That flutter in your chest, half of you wanting every eye in the room on you, the other half praying you could just melt into the crowd and disappear.</p>
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
              <p>By the 1930s the arena Picasso carried around inside him had turned darker, heavier. September nineteenth, 1933, up at Boisgeloup, he painted <em>Corrida: la mort du torero</em>, oil on wood, tiny little thing, thirty one by forty centimeters, small enough to hold in your two hands and still carrying something enormous locked up inside it. Thirteen days before that, same quiet studio, he&apos;d already painted <em>Corrida: la mort de la femme torero</em>. Death had walked into the ring, papi, and it was not leaving quietly.</p>
              <p>A year later he goes back again, the 1934 <em>Corrida</em>, part of this intense run of bullfight paintings the Thyssen museum puts right there among the Boisgeloup works from that summer, all of them circling around that violent meeting of bull and horse and man and ceremony. The museum calls this body of work something reaching past the physical violence, toward a kind of parable about love and death, and okay, that reading helps, it&apos;s useful, but don&apos;t let it close the book for you, because the arena wiggles out of any tidy little box you try to put it in, same way water slips through your fingers no matter how tight you close your hand.</p>
              <p>The torero looks like he&apos;s got the whole thing under control, chin up, cape snapping in the light, and then suddenly he doesn&apos;t. The bull looks powerful even while it&apos;s walking straight into a death that got decided long before it ever stepped foot in that ring, muscle and dust and blood all soaking up that same afternoon sun. The horse belongs to the whole human ceremony and just as easy becomes one of its victims. Power flips over on itself right there in front of everybody, the whole plan comes apart at the seams, and the body reminds every single person watching that underneath all that ceremony, it&apos;s just a body, breath and heartbeat, nothing more, nothing less. Sooner or later, corazón, every life runs into something that refuses to be controlled, some version of that horn coming in low and fast just when you were so sure you had the angle covered.</p>
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
              <p>Here&apos;s the other thing about those thirties paintings. The bull, the horse, all that bodily violence, that presence of somebody watching, all of it was already living inside Picasso&apos;s visual language way before <em>Guernica</em> ever happened. The Thyssen puts these 1933 to 1935 bullfight works right there on the road toward that 1937 painting, especially those brutal encounters between bull and horse. Now that don&apos;t mean the bull carries one fixed meaning stamped on it forever, and it sure don&apos;t mean you can just decode <em>Guernica</em> as a bullfight wearing a different coat. Something quieter happened, something more interesting. Picasso kept returning to these same shapes so many times that they started carrying more weight than the original subject could ever hold by itself.</p>
              <p>Maybe that&apos;s what obsession gives an artist. Not an answer. A language. A way of talking that keeps getting deeper the longer you stay with it. And honestly, mi amor, maybe that&apos;s true outside of art too. Most of us spend years convinced our whole life is transforming just because the scenery keeps changing on us, new city, new job, new love, new version of ourselves we&apos;re trying on like a dress in the mirror, and then one perfectly ordinary Tuesday, coffee still warm on the table, all those old questions rise right back up underneath everything anyway. Am I enough. What am I so scared to lose. Who am I even still trying to impress after all these years. Getting older, turns out, isn&apos;t really about outrunning those questions. It&apos;s about learning to sit across the table from them without flinching so hard.</p>
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
              <p>And then comes the return that makes this whole story impossible to write off as something Picasso just carried from his childhood. Back in 1927, the publisher Gustau Gili Roig asked Picasso to illustrate José Delgado&apos;s old bullfighting treatise, <em>La Tauromaquia</em>, and the whole idea just drifted off quietly into the years, the way good ideas do sometimes. Then in January 1956, Gustau Gili Esteve and Anna Maria Torra show up and bring the whole thing back to life. That May, Picasso made the sugar lift aquatints, twenty six of them in the end, and the finished edition came out in Barcelona in 1959.</p>
              <p>Picasso was seventy five years old. Sit with that for a second, it&apos;s hard to shake once it lands on you. After Cubism, after war, after a kind of fame most artists can&apos;t even dream of, after decades of reinventing who he was over and over and over, he walks straight back into that ring. Not because he ran out of other things to make. Because something in there still had life left for him, and he wasn&apos;t done listening to it. The Museu Picasso says his bullfighting images break the whole spectacle down piece by piece, the ring, the bull, the matador, the aficionados leaning over the barrera, all while still carrying those big themes, power, brutality, desire, death, all tangled up together in one single afternoon. One image lifts the torero right up onto the shoulders of a roaring crowd, hands in the air, hats flying, the whole plaza on its feet. Another one drags the dead bull across the sand while the noise is already fading into something quiet. Triumph and mortality sitting right next to each other in the exact same sequence, because the arena hands everybody a role and for a while it feels permanent, the winner, the loser, the powerful, the afraid, until the afternoon shifts under everybody&apos;s feet and the roles go right along with it.</p>
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
              <p>Strip it all away, mi gente. The seats, the costumes, the applause, the title, the whole performance, even most of the bull&apos;s own weight and shadow, and somehow we still know exactly what&apos;s standing there in the sand. That might be the truest place to leave Picasso, not with some neat little explanation of what his bull finally means, because it changed too many times, stayed with him too long, held too many contradictions in its chest to ever survive one clean answer. Fear maybe. Or strength. Or violence. Or desire. Home and mortality and Picasso himself, all folded into the same dark shape, and none of it explains the whole thing completely. Each meaning just becomes true depending on where you happen to be standing when you look up at it.</p>
              <p>The real question, the one that matters, is what&apos;s your bull, mi amor. The thing you cannot bargain with forever. The fear you keep circling instead of just saying its name out loud. The desire you pretend you don&apos;t have. The plain hard truth that your time here runs out sooner than you want to believe. And then there&apos;s the arena itself, the place where something real is at stake, where you finally become visible, where you might fail and people might actually watch you fail. A whole life spent up in the seats would sure be safer. But safety and being alive have never once been the same thing, mija, and being truly alive sometimes means stepping right into the place where nobody knows how it ends. Loving somebody without a guarantee. Making something before you even know if it&apos;ll matter to a single soul. Leaving when it&apos;s time to leave. Starting over when every tired bone in your body just wants to stay put.</p>
              <p>Picasso kept walking back in, year after year, decade after decade, long after anybody would&apos;ve blamed him for staying home. And maybe that&apos;s the only lesson worth taking with you out of that red hallway and back into your day. Not an answer. Not some moral lesson wrapped in a bow. Just an old man who never stopped choosing the ring over the seats, and one question he leaves sitting quiet in your lap on your way out the door.</p>
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
