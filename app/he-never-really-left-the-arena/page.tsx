import type { Metadata } from "next";
import BullfightSlideshow from "./BullfightSlideshow";
import { ArticleFooter, ArticleHeader } from "./ArticleChrome";
import EditorialReveal from "./EditorialReveal";
import styles from "./page.module.css";
import responsive from "./responsive-fixes.module.css";
import signature from "./signature.module.css";
import heroPolish from "./hero-polish.module.css";

export const metadata: Metadata = {
  title: "He Never Really Left the Arena.",
  description: "Picasso spent his life going back to the arena. It was never about the bull, but why certain things just won't let us go.",
  alternates: { canonical: "/he-never-really-left-the-arena" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "He Never Really Left the Arena.",
    description: "Picasso spent his life going back to the arena. It was never about the bull, but why certain things just won't let us go.",
    url: "/he-never-really-left-the-arena",
    siteName: "EASTOKYO",
    locale: "en_GB",
    type: "article",
    images: [{ url: "/images/editorial/picasso-bullfight-01-desktop.png", alt: "He Never Really Left the Arena." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "He Never Really Left the Arena.",
    description: "Picasso spent his life going back to the arena. It was never about the bull, but why certain things just won't let us go.",
    images: ["/images/editorial/picasso-bullfight-01-desktop.png"],
  },
};

export default function CoverStoryPage() {
  return (
    <main className={`${styles.page} ${responsive.page}`} id="top">
      <ArticleHeader />

      <section className={`${styles.hero} ${responsive.hero}`}>
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-bullfight-01-mobile.png" />
          <img className={styles.heroImage} src="/images/editorial/picasso-bullfight-01-desktop.png" alt="Work by Picasso about bullfighting" />
        </picture>
        <div className={`${styles.heroShade} ${heroPolish.shade}`} aria-hidden="true" />
        <div className={`${styles.heroCopy} ${responsive.heroCopy}`}>
          <h1 className={`${styles.title} ${heroPolish.title} ${responsive.title}`}>HE ALWAYS RETURNED TO THE ARENA.</h1>
        </div>
      </section>

      <section className={`${styles.intro} ${responsive.intro}`}>
        <div className={styles.meta}>EASTOKYO<br />LONG FORM<br />ISSUE 01<br /><br />BY ARTHUR DELACROIX</div>
        <p className={styles.deck}>Picasso spent his life going back to the arena. It was never about the bull, but why certain things just won&apos;t let us go.</p>
      </section>

      <section className={`${styles.body} ${responsive.body}`}>
        <p className={styles.bodyLabel}>THE STORY</p>
        <div className={styles.bodyCopy}>
          <p>Oh, you think you know Picasso? We need to talk about bullfighting and the way this guy turned the rules of reality upside down through this raw, almost primitive drama. There&apos;s something about an arena: the heat rising off the sand, a crowd leaning forward as if it had only one heart left between them. It grabs you and doesn&apos;t let go, and Picasso knew that better than anyone.</p>
          <p>He was still a kid in Málaga when the obsession started. The smell of the arena with all the colours of the capes dancing behind his eyes once the sun went down. He just couldn’t let it go. For sixty years it keeps coming back in his artwork. The bulls and the bullfighters move in and out of his work as if they had their own set of keys. The Museu Picasso in Barcelona itself calls bullfighting one of the great obsessions of his career. Personally, I even find the word “obsession” a little weak.</p>
          <p>Then again, maybe I&apos;m exaggerating. Was he simply nostalgic for Spain? Let&apos;s say Spain never really left him. Except that doesn&apos;t explain fifty or sixty years of returning to the same arena, not from a man who spent his time turning everything else in painting every which way. This is the guy who slaughtered traditional perspective and folded it up like a dirty napkin. He brought sculpture into painting then looked at a bicycle seat and saw a bull&apos;s head. A man with that hunger, that wild imagination incapable of behaving, had more than enough other places to get bored.</p>
          <p>And the bull came back. Faithfully. It brought with it the horse, the bullfighter, the crowd, and that endless second when everyone holds their breath before the horn strikes. Picasso kept right on reinventing himself, and the arena too.</p>
        </div>
      </section>

      <section className={styles.visualSequence} aria-label="Picasso and bullfighting exhibition">
        <figure className={`${styles.visualFigure} ${styles.hallwayFigure}`}>
          <picture><source media="(max-width: 700px)" srcSet="/images/editorial/picasso-red-room-mobile.png" /><img src="/images/editorial/picasso-red-room-desktop.png" alt="Red exhibition corridor presenting works by Picasso" /></picture>
          <figcaption className={styles.imageCredit}>VIEW OF THE EXHIBITION · PHOTOGRAPHY: ARTHUR DELACROIX.</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${responsive.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">01</span>
            <p className={styles.storyBeatLabel}>LOOK CLOSER</p>
            <div className={styles.storyBeatCopy}>
              <p>Bullfighting gives a painter everything: the silk, bright gold catching the light, that enormous dark beast crossing an arena’s white sand with the hot sun while a man is mostly trying not to piss his pants with half a ton of furious bull charging at full speed ahead. But look a little closer and something happens: You have to stop watching the arena and start watching the people watching it. A head tilting slightly or an entire crowd of spectators leaning forward at exactly the same second. Without an audience there’s no show.</p>
              <p>A bullfight has always needed an audience. Everything plays out in that small circle of sand, but the best part of the real drama happens somewhere else, in all the people’s eyes surrounding it. Picasso watches the arena, the crowd watches the bull, and he takes all of it and turns it into something that, several decades later, can still stop a stranger cold in front of a canvas. And here we are, in turn, watching that stranger.</p>
              <p>There&apos;s a little arena hidden in almost every corner of our lives: at work, in love, around the family table. Sometimes we take a risk precisely because other people are watching, and sometimes we run from that same risk for the very same reason. That little movement in the chest. Half of you wanting every eye in the room, the other half willing to give anything to vanish into the crowd.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.viewerFigure}`}>
          <picture><source media="(max-width: 700px)" srcSet="/images/editorial/picasso-bull-viewer-mobile.png" /><img src="/images/editorial/picasso-bull-viewer-desktop.png" alt="A visitor looks closely at Picasso's bullfighting works" /></picture>
          <figcaption className={styles.imageCredit}>LOOK CLOSER · PHOTOGRAPHY: ARTHUR DELACROIX.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${responsive.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">02</span>
            <p className={styles.storyBeatLabel}>THE ARENA</p>
            <div className={styles.storyBeatCopy}>
              <p>Rewind to the 1930s, the arena he carried inside him got darker and more mysterious. On September 19, 1933, at Boisgeloup, he paints <em>Bullfight: The Death of the Bullfighter</em>. A tiny oil on wood, thirty-one centimetres by forty, small enough to fit between two hands and yet loaded with something enormous. Thirteen days earlier he had already painted <em>Bullfight: The Death of the Woman Bullfighter</em>. Death had entered the arena and had no intention of leaving it quietly.</p>
              <p>A year later he goes back. <em>The Bullfight</em> of 1934 belongs to this intense series painted at Boisgeloup, all circling this violent encounter between the bull, the horse and the man. The Thyssen museum reads it as a kind of parable of love and death. Fine, good to know, it opens something up. But don&apos;t let it be the last word, because the arena doesn&apos;t let itself get boxed in that easily.</p>
              <p>At first the bullfighter marches in like a Marine after boot camp graduation, chin raised high, cape flapping in the wind, and then suddenly he looks scared as hell. Yet the bull never so much as blinks even while walking straight toward a brutal death decided long before it ever set a hoof in the arena. Muscle, dust and blood under the same relentless sun. Let’s not forget the horse. He’s part of the whole ceremony and can easily become, at any moment, one of its victims. Power switches sides in front of everyone’s eyes, and the arena reminds everyone that beneath the ornate costumes, under all of that pompous pride and festive ceremony, what remains is mortal flesh, frail breath, and a heart that can stop beating. That’s it. Sooner or later, every life meets a bull that refuses to be controlled, a horn charging at full speed at the exact moment you were sure you&apos;d finally understood everything. How quaint.</p>
            </div>
          </section>
        </EditorialReveal>

        <EditorialReveal delay="medium">
          <aside className={styles.pullQuote} aria-label="EASTOKYO editorial line">
            <span className={styles.pullQuoteMark}>“</span>
            <p>THE ARENA IS DRAMA WITH NOWHERE AT ALL TO LOOK AWAY.</p>
            <span className={styles.pullQuoteCredit}>EASTOKYO · LONG FORM 01</span>
          </aside>
        </EditorialReveal>

        <div className={`${styles.bullfightPair} ${responsive.bullfightPair}`}>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 700px)" srcSet="/images/editorial/bullfight-feature-mobile.png" /><img src="/images/editorial/bullfight-feature-desktop.png" alt="Bullfight, Pablo Picasso, 1934" /></picture>
            <figcaption className={styles.imageCredit}>BULLFIGHT · PABLO PICASSO · 1934</figcaption>
          </figure>
          <figure className={styles.visualFigure}>
            <picture><source media="(max-width: 700px)" srcSet="/images/editorial/bullfight-detail-mobile.png" /><img src="/images/editorial/bullfight-detail-desktop.png" alt="Bullfight: The Death of the Bullfighter, Pablo Picasso, 1933" /></picture>
            <figcaption className={styles.imageCredit}>BULLFIGHT: THE DEATH OF THE BULLFIGHTER · PABLO PICASSO · 1933</figcaption>
          </figure>
        </div>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.storyBeatRight} ${responsive.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">03</span>
            <p className={styles.storyBeatLabel}>WHAT REMAINS</p>
            <div className={styles.storyBeatCopy}>
              <p>Something else is playing out in these paintings from the thirties: the crazy bull and the horse, this constant feeling of someone watching. All of it was already part of Picasso&apos;s visual language way before <em>Guernica</em>. The Thyssen places these bullfights from 1933 to 1935 directly on the path leading to the 1937 painting, particularly in these brutal confrontations between bull and horse. That doesn&apos;t mean the bull has one tidy little meaning that could be carved into marble, and it means even less that <em>Guernica</em> can be read as a slightly more sophisticated bullfight. Something else happened: Picasso went back to the same bulls so often that eventually they grew too heavy to stay locked inside their original subject.</p>
              <p>Maybe that&apos;s what an obsession eventually gives an artist when he’s never really looking for an answer. He discovers a language, one that gets deeper when it’s used over and over. And maybe that&apos;s true outside of art too. We can spend years convincing ourselves our whole life is changing because the scenery changes around us. We try on versions of ourselves like coats in front of a mirror. Then one ordinary morning, with coffee still hot on the table, some old questions rise back up. Am I really good enough? Who am I trying so hard to impress after all these years? This loco arena we call life isn’t about outrunning those questions. It&apos;s more about living the way we want to live, no matter who the spectators are at the moment.</p>
            </div>
          </section>
        </EditorialReveal>

        <figure className={`${styles.visualFigure} ${styles.galleryFigure}`}>
          <picture><source media="(max-width: 700px)" srcSet="/images/editorial/picasso-bull-gallery-mobile.png" /><img src="/images/editorial/picasso-bull-gallery-desktop.png" alt="Visitors look at a group of Picasso's bullfighting works" /></picture>
          <figcaption className={styles.imageCredit}>THE ROOM IS WATCHING US · PHOTOGRAPHY: ARTHUR DELACROIX.</figcaption>
        </figure>

        <EditorialReveal delay="short">
          <section className={`${styles.storyBeat} ${styles.slideshowBridge} ${responsive.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">04</span>
            <p className={styles.storyBeatLabel}>AGAIN AND AGAIN</p>
            <div className={styles.storyBeatCopy}>
              <p>This return is almost ridiculous, which makes it impossible to reduce the whole story to an old childhood memory. In 1927, the publisher Gustau Gili Roig asks him to illustrate José Delgado&apos;s old treatise on bullfighting, <em>La Tauromaquia</em>. The project then disappears for years, the way good ideas usually know how to do. Then in January 1956, Gustau Gili Esteve and Anna Maria Torra come to see their old friend Pablo and pull the story back out of the dusty drawer. In May, Picasso produces twenty-six sugar aquatints, and the edition is finally published in Barcelona in 1959.</p>
              <p>Picasso is seventy-five years old and still shaking things up in the art world. That&apos;s pretty hard to take in. After Cubism, the war, a level of fame most artists couldn&apos;t dare dream of, after decades of constantly reinventing himself, there he is walking right back into the arena again. For that alone, respect. He surely had a thousand other things to do with all that fame and fortune. But something in bullfighting kept calling him, and he wasn&apos;t blocking the number.</p>
              <p>The Museu Picasso explains that his bullfighting images take the spectacle apart piece by piece. The bull, the aficionados leaning over the barrera. All while keeping power, desire and death intertwined. Damn. In one image the bullfighter is carried on the shoulders of a roaring crowd, arms raised, the whole plaza going ballistic. In another, the mortally wounded bull is dragged across the hot sand. Then the yelling and cheering of the crazy crowd dies down and gives way to something way more solemn, almost a tribute to the bull as a fallen comrade, the way a crowd in a Roman amphitheatre might have saluted a defeated gladiator. Triumph and mortality side by side, because the arena hands everyone a role that, for a hot minute, seems eternal. Senior Victor, Miss Defeated, Captain Powerful, Madam Terrified. At least until the moment of truth, when fate decides it doesn&apos;t give a damn about the casting.</p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <BullfightSlideshow />

      <section className={styles.finalAct}>
        <figure className={`${styles.visualFigure} ${styles.bullHeadFigure}`}>
          <picture><source media="(max-width: 700px)" srcSet="/images/editorial/picasso-bull-head-mobile.png" /><img src="/images/editorial/picasso-bull-head-desktop.png" alt="Bull's Head, Pablo Picasso, 1942" /></picture>
          <figcaption className={`${styles.imageCredit} ${styles.bullHeadCredit}`}>BULL&apos;S HEAD · PABLO PICASSO · 1942 · BICYCLE SEAT AND HANDLEBARS</figcaption>
        </figure>

        <EditorialReveal>
          <section className={`${styles.storyBeat} ${styles.finalStoryBeat} ${responsive.storyBeat} ${signature.numbered}`}>
            <span className={signature.sectionNumber} aria-hidden="true">05</span>
            <p className={styles.storyBeatLabel}>THE BULL REMAINS</p>
            <div className={styles.storyBeatCopy}>
              <p>Take away everything else and what do you have? The brief spectacle and the hilarious ceremony, even a good glimpse of the bull&apos;s rage. Maybe this is where we should leave Picasso: there&apos;s no neat, definitive account of what his bull really means. It changed too much for that. Fear? Maybe. Strength and violence, desire? Why not? Life and death, even Picasso himself, all melted into the same black silhouette without any single correct answer ever explaining it. The meaning changes depending on where you&apos;re standing and what you’re looking at in the arena.</p>
              <p>The real question Picasso leaves us with, in the middle of all the chaos, is: what’s your bull? Is it someone you can&apos;t manage to shake? Something you&apos;ve been circling for years instead of facing? The not exactly pleasant discovery that your time in the arena will run out sooner than you&apos;d prefer?</p>
              <p>The arena is real. That place where something important is happening and where, finally, you’re seen. You can screw it all up, and someone will always be there to watch it happen. So why not play it safe, spend a whole life in the stands, so much safer? Except being safe and being alive have never been the same thing. Being truly alive means stepping into the arena without even knowing how it ends. Loving someone without a guarantee or chasing what you truly want long before you have the slightest proof it will turn out as planned.</p>
              <p>Picasso went back to that arena decade after decade, far past the age when nobody would have blamed him for staying at the casa playing dominoes. There’s no delightful moral of the story wrapped up in a bow here. Just an old man named Pablo Picasso, who never really stopped choosing the arena over the back row. And one very simple question he leaves us as he goes.</p>
              <p><strong>WILL YOU STAND IN YOUR ARENA?</strong></p>
            </div>
          </section>
        </EditorialReveal>
      </section>

      <div className={styles.endMark} aria-label="End of the long form"><span>END</span><span>EASTOKYO Nº01</span></div>
      <ArticleFooter />
    </main>
  );
}