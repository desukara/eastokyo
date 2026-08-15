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

export default function AsagayaStoryPage() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.folio}>
        <Link className={styles.brand} href="/">EASTOKYO</Link>
        <span className={styles.folioCenter}>TOKYO · ISSUE 01</span>
        <span className={styles.folioRight}>SEPTEMBER 2026</span>
      </header>

      <section className={styles.hero}>
        <picture style={{ position: "absolute", inset: 0, display: "block" }}>
          <source media="(max-width: 700px)" srcSet="/images/editorial/asagaya-hero-01-mobile.jpg" />
          <img
            src="/images/editorial/asagaya-hero-01-desktop.jpg"
            alt="Asagaya Pearl Center decorated for the Tanabata festival"
            fetchPriority="high"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 43%" }}
          />
        </picture>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroType}>
          <p className={styles.kicker}>TOKYO · ASAGAYA TANABATA</p>
          <h1>THE CITY<br />PUTS ON ITS<br /><em>COSTUME.</em></h1>
          <p className={styles.heroDeck}>For five summer days, a neighborhood shopping street looks up, gets weird, and remembers that a city can still make something just because it wants to delight itself.</p>
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
          <p className={styles.drop}>Tokyo is very good at looking like it has everything under control.</p>
          <p>Lines form where they are supposed to. Trains arrive with frightening precision. The convenience store shelf looks like somebody used a ruler on it. Even chaos here has a tendency to organize itself before you get a chance to complain.</p>
          <p>And then you walk into Asagaya in August and there is a giraffe hanging over your head.</p>
          <p>Not a tasteful little giraffe either. A full-on, ridiculous, handmade creature floating above a shopping street while children point, old ladies keep moving with their groceries, somebody is frying something ten meters away, and a paper Mona Lisa is apparently attending the same festival you are.</p>
          <p>That is when Tokyo becomes interesting again.</p>
        </div>
      </section>

      <section className={styles.statement}>
        <p>THE BEST THING ABOUT ASAGAYA TANABATA IS THAT THE STREET DOESN&apos;T PRETEND TO BECOME A THEME PARK.</p>
        <span>IT STAYS A NEIGHBORHOOD. IT JUST GETS DRESSED.</span>
      </section>

      <section className={styles.readingSection}>
        <div className={styles.readingCopy}>
          <p className={styles.sectionNo}>01</p>
          <p className={styles.sectionLabel}>THE STREET LOOKS UP</p>
          <h2>You notice the ceiling before anything else.</h2>
          <p>Asagaya Pearl Center is normally a covered shotengai: shops, restaurants, pharmacies, bakeries, people cutting through on the way home. Useful Tokyo. Everyday Tokyo. The kind of place that exists because people actually live nearby.</p>
          <p>During Tanabata, that ordinary ceiling becomes a second street suspended over the first one. Kusudama, streamers and handmade papier-mâché figures crowd the air above everybody&apos;s heads. You stop walking in a straight line because every few meters somebody has built another reason to look up.</p>
          <p>The festival started in 1954, partly as a way to bring energy back into the shopping street. The early organizers borrowed the language of larger Tanabata celebrations, but Asagaya developed its own grammar: handmade figures, jokes, characters, creatures, whatever somebody could dream up and somehow hang from the roof.</p>
          <p>That handmade part matters. You can feel the difference between something manufactured to impress you and something a neighborhood made because it wanted to see if it could pull the idea off.</p>
        </div>
      </section>

      <section className={styles.readingSection}>
        <div className={styles.readingCopy}>
          <p className={styles.sectionNo}>02</p>
          <p className={styles.sectionLabel}>A FESTIVAL MADE BY HAND</p>
          <h2>Polish would ruin it.</h2>
          <p>The giant haribote are the stars, but perfection is not really the point. Some are beautiful. Some are funny. Some are bizarre enough that you stand underneath them trying to understand what chain of decisions brought everybody to this moment. Good. That is exactly what public life needs more of.</p>
          <p>Cities are increasingly designed to remove surprise. Same storefront systems. Same luxury lobbies. Same neutral materials. Same careful promise that nothing unpredictable will happen while you are there. Asagaya goes the other direction for a few days. It lets people make the ceiling strange.</p>
          <p>And everybody participates simply by being underneath it. The teenager checking her phone. The father carrying a kid on his shoulders. The shop owner leaning into the crowd to hand over food. The couple trying to take a photograph without stopping traffic. Nobody needs to understand the history of Tanabata to understand what the street is doing.</p>
          <p>It is making room for delight.</p>
        </div>
      </section>

      <section className={styles.blueSection}>
        <div className={styles.blueTitle}>
          <p className={styles.sectionNo}>03</p>
          <p className={styles.sectionLabel}>THE USEFUL CITY DISAPPEARS</p>
          <h2>For a little while, nobody is in a hurry to get through.</h2>
        </div>
        <div className={styles.blueColumns}>
          <p>That might be the real transformation. Not the decorations. The pace. A shopping street usually asks you to move through it with some purpose: pick something up, eat, get home, catch the train. Festival Asagaya keeps interrupting that logic.</p>
          <p>You look at the lanterns. You stop for food. You lose whoever you came with and then find them twenty minutes later under some enormous paper animal. You take the same photograph as everybody else because, yes, the thing overhead really does look that good.</p>
          <p>Tokyo gets called lonely almost as often as it gets called crowded. Both things can be true. Density is not the same thing as connection. But here, for a few days, the crowd has a shared reason to be there that is not work, commuting or consumption.</p>
          <p>Everybody is looking at the same ridiculous sky.</p>
        </div>
      </section>

      <section className={styles.outro}>
        <div className={styles.outroCopy}>
          <p className={styles.sectionNo}>04</p>
          <p className={styles.sectionLabel}>WHAT THE STREET REMEMBERS</p>
          <h2>Then everybody takes the costume down.</h2>
          <p>A few days later, Pearl Center goes back to being Pearl Center. The same shops. The same route from the station. The same people buying dinner and getting on with their lives.</p>
          <p>But that is why the festival works. The transformation has an ending. Nobody needs Asagaya to stay magical forever. Permanent magic is just branding.</p>
          <p>The good stuff comes from knowing the ordinary street is still underneath all of it. The festival does not replace daily life. It reminds you daily life can contain this too: color for no practical reason, a joke suspended twenty feet in the air, strangers slowing down together, somebody spending weeks making a ridiculous creature because once a year the neighborhood gives them a ceiling big enough to hang it from.</p>
          <p>Tokyo puts its costume on.</p>
          <p>Then it goes back to work.</p>
          <p className={styles.lastLine}>And somehow, after seeing it dressed up, you notice the city a little differently when it is wearing nothing special at all.</p>
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
