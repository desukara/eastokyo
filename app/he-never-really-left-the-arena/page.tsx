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
          <p>There is something about a bullring that makes it almost impossible to look away, that heat and dust and roar of a crowd leaning forward all at once, and Picasso understood it better than almost anyone who ever picked up a brush. He learned it as a boy in Málaga, with the smell of the sand and the color of the capes still living somewhere under his skin long after the afternoon ended, and that fascination never really let him go. It threaded itself through drawings and paintings, through prints and ceramics and illustrated books, bulls and matadors turning up again and again across a lifetime of work, so much so that the Museu Picasso simply calls bullfighting one of the great recurring subjects of his entire career.</p>
          <p>It would be easy to call that nostalgia, to imagine a man carrying a little piece of home in his pocket no matter where the world took him. But nostalgia alone cannot explain fifty or sixty years of coming back to the same ring, especially from a man who changed nearly everything else about the way he saw and painted the world. He broke bodies open and put them back together in ways nobody had dared before. He let perspective collapse and fold in on itself, turned painting into sculpture, turned ordinary kitchen objects into animals, and reinvented himself again and again with an appetite most artists never have. A man with that much hunger for the new had every reason in the world to leave an old idea behind him.</p>
          <p>And still the bull came back, heavy and dark and lowering its head the same way it always had, bringing the horse and the torero and the crowd and that long unbearable breath before impact right along with it. Picasso kept changing, decade after decade, style after style, and somehow the arena simply changed alongside him instead of ever being left behind.</p>
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
              <p>At first glance the corrida hands a painter everything he could ever want, the heat rising off the sand, the silk and gold of the costumes catching the light, a dark animal crossing bright open ground while a body tries its best to stay graceful with something enormous bearing down on it. But spend enough time in front of Picasso&apos;s bullfights and something in the experience starts to shift under you. You stop watching the ring and start noticing the people watching the ring, the tilt of their heads, the way a whole grandstand seems to lean forward on the same breath.</p>
              <p>Bullfighting has always needed an audience, and even though the encounter itself happens inside that circle of sand, its full weight lands somewhere else entirely, inside the circle of eyes surrounding it. Now look around the museum where you are standing. Picasso watched the arena, the crowd watched the bull, and Picasso turned all of that spectacle into images that decades later bring someone to a quiet stop in front of a canvas, taking it all in. And now, without quite meaning to, we are watching that person too.</p>
              <p>There is a little arena tucked inside almost everywhere we go, at work and in love, online and within our own families, and sometimes we take a risk precisely because people are watching while other times we avoid that very same risk for exactly the same reason, that flutter between wanting every eye on you and wishing you could simply disappear into the crowd instead.</p>
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
              <p>By the 1930s the arena Picasso carried inside him had grown considerably darker. He painted <em>Corrida: la mort du torero</em> at Boisgeloup on the nineteenth of September, 1933, oil on wood, just thirty one by forty centimeters, small enough to hold in two hands and yet carrying something enormous inside it. Thirteen days earlier, working in that same quiet studio, he had painted <em>Corrida: la mort de la femme torero</em>. Death had entered the ring, and it was not going to leave quietly.</p>
              <p>A year later he returned again with the 1934 <em>Corrida</em>, one of an intense group of bullfight paintings the Thyssen museum places among the works made at Boisgeloup that summer, all of them circling the violent meeting of bull and horse and human ritual. The museum has described this body of work as reaching past physical violence toward something closer to a parable of love and death, and that reading is useful, though it should never be allowed to settle the matter for good, because the arena resists tidy roles the way water resists being held.</p>
              <p>The torero appears to command the whole situation, chin high, cape snapping in the light, until suddenly he does not. The bull looks powerful even as it moves toward a death that was arranged long before it ever arrived, muscle and dust and blood catching the same afternoon sun. The horse belongs to the human ceremony and can just as easily become one of its victims. Power turns over on itself, the plan comes apart at the seams, and the body reminds everyone watching that underneath all the ceremony it is only a body after all, breath and heartbeat and nothing more. Sooner or later every life meets something that refuses to be controlled, some version of that horn coming in low and fast when we were sure we had the angle covered.</p>
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
              <p>There is another reason those paintings from the 1930s matter so much. The bull, the horse, the bodily violence and the presence of a witness were already becoming part of Picasso&apos;s visual language well before <em>Guernica</em>, and the Thyssen places these 1933 to 1935 bullfight works squarely on the road toward that 1937 painting, especially in those violent encounters between bull and horse. That does not mean the bull carries one single fixed meaning, and it certainly does not mean <em>Guernica</em> can be decoded as simply a corrida wearing another costume. Something quieter and far more interesting happened instead. Picasso returned to these forms so often that they began to carry more weight than their original subject could ever hold on its own.</p>
              <p>Perhaps that is what obsession gives an artist, not an answer but a language, a way of speaking that keeps deepening the longer he stays with it. The same may be true outside of art entirely. Most of us spend years convinced our lives are transforming because the scenery around us keeps changing, a new city, a new job, a new love, a new version of ourselves we are trying on for size, and then, on some perfectly ordinary Tuesday with the coffee still warm on the table, the old questions rise up underneath all of it anyway, the ones about whether we are enough, about what we are so afraid to lose, about who exactly we are still trying to impress after all these years. Growing older, it turns out, is not really about outrunning those questions. It is about learning to sit across the table from them without flinching quite so hard.</p>
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
              <p>And then comes the return that makes the whole story impossible to write off as something Picasso simply carried out of childhood. In 1927 the publisher Gustau Gili Roig proposed that Picasso illustrate José Delgado&apos;s historic bullfighting treatise, <em>La Tauromaquia</em>, and the project drifted quietly into the years the way so many good ideas do. Then in January of 1956, Gustau Gili Esteve and Anna Maria Torra came to visit Picasso and brought the whole idea back to life. Picasso made the sugar lift aquatints that May, twenty six of them in the end, and the finished edition appeared in Barcelona in 1959.</p>
              <p>Picasso was seventy five years old. That detail is hard to shake once you sit with it. After Cubism, after war, after a kind of fame most artists could never imagine for themselves, after decades spent reinventing who he was over and over, he walked straight back into the ring, not because he had run out of other things to make but because something in there still had life left in it for him. Museu Picasso describes his bullfighting imagery as breaking the whole spectacle down into its working parts, the ring itself, the bull, the matador, the aficionados leaning in over the barrera, while still carrying those larger themes of power and brutality and eroticism and death all wrapped up together in the same afternoon. One image lifts the torero onto the shoulders of a jubilant crowd, hands raised, hats thrown, the whole plaza on its feet. Another drags the dead bull away across the sand while the noise is already fading into something quieter. Triumph and mortality sitting right next to each other in the very same sequence, because the arena hands everyone a role and for a while makes that role feel absolutely permanent, the winner and the loser, the powerful and the afraid, until the afternoon shifts under everyone&apos;s feet and the roles go with it.</p>
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
              <p>Strip everything else away, the seats, the costume, the applause, the title, the performance itself, even most of the bull&apos;s own weight and shadow, and somehow we still recognize what remains standing there in the sand. That may be the truest place to leave Picasso, not with some tidy explanation of what his bull finally means, because it changed too many times and stayed with him too long and carried too many contradictions to ever survive one clean answer. Fear, maybe, or strength, or violence, or desire, home and mortality and Picasso himself all folded into the same dark shape, and none of it explains the whole thing completely, each meaning simply becoming true depending on where you happen to be standing when you look up at it.</p>
              <p>The more interesting question is what our own bull happens to be, the thing we cannot indefinitely bargain with, the fear we keep circling instead of naming out loud, the desire we pretend not to have, the plain fact that our time here runs out sooner than we would like to believe. And then there is the arena itself, the place where something is genuinely at stake, where we finally become visible, where we might fail and other people might actually see us fail. A life spent entirely in the seats would certainly be safer, but safety and aliveness have never really been the same thing, and being fully alive sometimes means stepping into the very place where the outcome is uncertain, loving someone without a guarantee, making something before you even know whether it will matter, leaving when it is time to leave, beginning again when every tired bone in you wants to stay put.</p>
              <p>Picasso kept walking back in, year after year, decade after decade, long after anyone would have blamed him for staying away. Maybe that is the only lesson worth carrying out of that red hallway and into the rest of your day. Not an answer, not a moral, just an old man who never stopped choosing the ring over the seats, and a question he leaves sitting quietly in your lap on the way out the door. Where are you standing?</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <div className={styles.endMark} aria-label="End of cover story"><span>END</span><span>EASTOKYO Nº01</span></div>
      <ArticleFooter />
    </main>
  );
}
