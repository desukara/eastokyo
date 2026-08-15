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
      <style>{`
        .asagayaHero {
          aspect-ratio: 15 / 8;
          min-height: 0 !important;
          overflow: hidden;
        }
        .asagayaHeroMedia {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
        }
        .asagayaHeroImage {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
        .asagayaHeroShade {
          background:
            linear-gradient(90deg, rgba(5,7,7,.58) 0%, rgba(5,7,7,.28) 27%, rgba(5,7,7,.04) 58%, rgba(5,7,7,0) 74%),
            linear-gradient(0deg, rgba(5,7,7,.52) 0%, rgba(5,7,7,.16) 33%, rgba(5,7,7,0) 56%) !important;
        }
        .asagayaHeroType {
          left: clamp(1.25rem, 3.6vw, 4.25rem) !important;
          bottom: clamp(1.5rem, 3.4vw, 3.5rem) !important;
          max-width: min(620px, 43vw) !important;
        }
        .asagayaHeroType h1 {
          font-size: clamp(3.35rem, 6.15vw, 7.8rem) !important;
          line-height: .79 !important;
          letter-spacing: -.055em !important;
        }
        .asagayaHeroType .asagayaDeck {
          max-width: 500px !important;
          margin-top: clamp(.8rem, 1.5vw, 1.25rem) !important;
          font-size: clamp(.88rem, 1.08vw, 1.08rem) !important;
          line-height: 1.42 !important;
        }
        .asagayaHeroType .asagayaKicker {
          margin-bottom: .7rem !important;
        }
        .asagayaIssueMark {
          right: 1.5vw !important;
          bottom: -.08em !important;
          font-size: clamp(6rem, 12vw, 13rem) !important;
          color: rgba(255,255,255,.09) !important;
        }
        @media (max-width: 700px) {
          .asagayaHero {
            aspect-ratio: 4 / 5;
            min-height: 0 !important;
          }
          .asagayaHeroImage {
            object-position: center center;
          }
          .asagayaHeroShade {
            background: linear-gradient(0deg, rgba(4,6,6,.78) 0%, rgba(4,6,6,.46) 27%, rgba(4,6,6,.08) 54%, rgba(4,6,6,0) 70%) !important;
          }
          .asagayaHeroType {
            left: 1rem !important;
            right: 1rem !important;
            bottom: 1.15rem !important;
            max-width: none !important;
          }
          .asagayaHeroType h1 {
            font-size: clamp(2.75rem, 13.4vw, 4.15rem) !important;
            line-height: .8 !important;
            letter-spacing: -.052em !important;
          }
          .asagayaHeroType .asagayaDeck {
            max-width: 94% !important;
            margin-top: .75rem !important;
            font-size: .82rem !important;
            line-height: 1.35 !important;
          }
          .asagayaHeroType .asagayaKicker {
            margin-bottom: .5rem !important;
            font-size: .58rem !important;
          }
          .asagayaIssueMark {
            display: none !important;
          }
        }
      `}</style>

      <header className={styles.folio}>
        <Link className={styles.brand} href="/">EASTOKYO</Link>
        <span className={styles.folioCenter}>TOKYO · ISSUE 01</span>
        <span className={styles.folioRight}>SEPTEMBER 2026</span>
      </header>

      <section className={`${styles.hero} asagayaHero`}>
        <picture className="asagayaHeroMedia">
          <source media="(max-width: 700px)" srcSet="/images/editorial/asagaya-hero-01-mobile.jpg" />
          <img
            className="asagayaHeroImage"
            src="/images/editorial/asagaya-hero-01-desktop.jpg"
            alt="Asagaya Pearl Center decorated for the Tanabata festival"
            fetchPriority="high"
          />
        </picture>
        <div className={`${styles.heroShade} asagayaHeroShade`} aria-hidden="true" />
        <div className={`${styles.heroType} asagayaHeroType`}>
          <p className={`${styles.kicker} asagayaKicker`}>TOKYO · ASAGAYA TANABATA</p>
          <h1>THE CITY<br />PUTS ON ITS<br /><em>COSTUME.</em></h1>
          <p className={`${styles.heroDeck} asagayaDeck`}>For five summer days, a neighborhood shopping street looks up, gets weird, and remembers that a city can still make something just because it wants to delight itself.</p>
        </div>
        <span className={`${styles.issueMark} asagayaIssueMark`} aria-hidden="true">04</span>
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
