import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When One Angle Wasn't Enough.",
  description: "Picasso, Cubism, and the moment one point of view stopped being enough.",
  alternates: { canonical: "/when-one-point-of-view-wasnt-enough" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const credit = "PICASSO · CUBISM · EASTOKYO ISSUE 01";

export default function CubismStoryPage() {
  return (
    <main className="cubismStory">
      <style>{`
        :root {
          --paper: #f3efe6;
          --ink: #11110f;
          --orange: #d94e16;
          --blue: #214f78;
          --red: #8d1d18;
          --line: rgba(17,17,15,.24);
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--paper); }
        .cubismStory { overflow: hidden; background: var(--paper); color: var(--ink); font-family: var(--font-bienvivos-sans), sans-serif; }
        .serif { font-family: var(--font-bienvivos-display), serif; }
        .folio {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
          padding: .7rem clamp(1rem,3.4vw,3.4rem);
          border-bottom: 1px solid var(--line);
          font-size: .58rem;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .folio a { color: inherit; text-decoration: none; }
        .folioBrand { font-size: clamp(1.6rem,3.4vw,3rem); font-weight: 800; line-height: .8; letter-spacing: -.07em; }
        .folioCenter { text-align: center; }
        .folioRight { text-align: right; }

        .hero { background: var(--orange); }
        .hero picture, .hero img { display: block; width: 100%; }
        .hero img { height: auto; }

        .opening {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(2.5rem,6vw,6rem) clamp(1rem,3.4vw,3.4rem) clamp(4rem,8vw,8rem);
          border-bottom: 1px solid var(--line);
        }
        .number {
          grid-column: 1 / 3;
          color: var(--orange);
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(6rem,13vw,14rem);
          font-weight: 600;
          line-height: .65;
          letter-spacing: -.08em;
        }
        .titleBlock { grid-column: 3 / 10; }
        .kicker { margin: 0 0 1rem; font-size: .62rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        h1 {
          margin: 0;
          max-width: 8.4ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(4.7rem,10vw,11rem);
          font-weight: 600;
          line-height: .73;
          letter-spacing: -.055em;
          text-wrap: balance;
        }
        .deck {
          grid-column: 9 / 13;
          align-self: end;
          margin: 0 0 .45rem;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.65rem,3vw,3.5rem);
          line-height: 1.02;
          letter-spacing: -.025em;
        }

        .thesis {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(5rem,10vw,11rem) clamp(1rem,3.4vw,3.4rem);
        }
        .thesisLabel { grid-column: 1 / 3; font-size: .58rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        .thesisText {
          grid-column: 4 / 10;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2.4rem,5vw,5.6rem);
          font-weight: 500;
          line-height: .95;
          letter-spacing: -.035em;
        }
        .thesisAside {
          grid-column: 11 / 13;
          align-self: end;
          padding-top: .8rem;
          border-top: 4px solid var(--orange);
          font-size: .64rem;
          font-weight: 700;
          line-height: 1.55;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .plan {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: 0 clamp(1rem,3.4vw,3.4rem) clamp(7rem,10vw,11rem);
        }
        .planTitle { grid-column: 1 / 13; padding-top: .8rem; border-top: 1px solid var(--line); font-size: .58rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        .storyFigure { margin: 0; align-self: start; }
        .storyFigure picture, .storyFigure img { display: block; width: 100%; }
        .storyFigure img { height: auto; }
        .storyFigure figcaption { margin-top: .65rem; font-size: .52rem; font-weight: 700; line-height: 1.45; letter-spacing: .13em; text-transform: uppercase; opacity: .58; }
        .storyFigure figcaption strong { color: var(--orange); }
        .pending {
          align-self: start;
          padding-top: .7rem;
          border-top: 1px solid var(--line);
          font-size: .54rem;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: .13em;
          text-transform: uppercase;
          opacity: .62;
        }
        .pending strong { color: var(--orange); }
        .pending span { display: block; margin-top: .25rem; font-weight: 600; }
        .mainB { grid-column: 8 / 13; margin-top: 2.5rem; }
        .supportA { grid-column: 2 / 5; margin-top: 3rem; }
        .mainC { grid-column: 6 / 13; margin-top: 5rem; }
        .supportB { grid-column: 1 / 4; margin-top: 3.5rem; }
        .mainD { grid-column: 5 / 13; margin-top: 5rem; }

        .status {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(4rem,8vw,8rem) clamp(1rem,3.4vw,3.4rem);
          background: var(--ink);
          color: var(--paper);
        }
        .status strong { grid-column: 1 / 4; color: #ff6f2f; font-size: .64rem; letter-spacing: .16em; text-transform: uppercase; }
        .status p { grid-column: 5 / 11; margin: 0; font-family: var(--font-bienvivos-display), serif; font-size: clamp(2rem,4vw,4.5rem); line-height: .96; letter-spacing: -.03em; }
        .status small { grid-column: 11 / 13; align-self: end; font-size: .56rem; line-height: 1.5; letter-spacing: .13em; text-transform: uppercase; }

        .footer {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem clamp(1rem,3.4vw,3.4rem) 1.2rem;
          border-top: 1px solid var(--line);
          font-size: .56rem;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .footer a { color: inherit; text-decoration: none; }

        @media (max-width: 720px) {
          .folio { grid-template-columns: 1fr auto; padding: .6rem 1rem .7rem; }
          .folioCenter { display: none; }
          .folioRight { text-align: right; }
          .hero picture, .hero img { width: 100%; }
          .opening { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 2.2rem 1rem 4rem; }
          .number { grid-column: 1 / 2; font-size: 5.4rem; }
          .titleBlock { grid-column: 2 / 7; }
          h1 { font-size: clamp(4rem,20vw,7.2rem); line-height: .76; }
          .deck { grid-column: 2 / 7; margin-top: 1.6rem; font-size: 1.75rem; }
          .thesis { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 4.5rem 1rem 5.5rem; }
          .thesisLabel { grid-column: 1 / 3; }
          .thesisText { grid-column: 1 / 7; margin-top: 3rem; font-size: clamp(2.7rem,12vw,4.8rem); }
          .thesisAside { grid-column: 4 / 7; margin-top: 3rem; }
          .plan { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 0 1rem 6rem; }
          .planTitle { grid-column: 1 / 7; }
          .mainB, .mainC { grid-column: 1 / 7; margin-top: 2.5rem; }
          .supportA { grid-column: 2 / 6; margin-top: 2rem; }
          .supportB { grid-column: 1 / 5; margin-top: 2rem; }
          .mainD { grid-column: 1 / 7; margin-top: 2.5rem; }
          .status { grid-template-columns: repeat(6,minmax(0,1fr)); padding: 4rem 1rem; }
          .status strong { grid-column: 1 / 4; }
          .status p { grid-column: 1 / 7; margin-top: 3rem; font-size: 2.5rem; }
          .status small { grid-column: 4 / 7; margin-top: 2rem; }
          .footer { flex-direction: column; }
        }
      `}</style>

      <header className="folio">
        <Link className="folioBrand" href="/eastokyo">EASTOKYO</Link>
        <span className="folioCenter">ISSUE 01 · STORY 03 · IDEAS</span>
        <span className="folioRight">TOKYO · 2026</span>
      </header>

      <section className="hero" aria-label="Cubism story hero">
        <picture>
          <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-orange-portrait-hero-mobile.png" />
          <img src="/images/editorial/cubism-orange-portrait-hero-desktop.png" alt="Cubist portrait against an orange field" fetchPriority="high" />
        </picture>
      </section>

      <section className="opening">
        <div className="number">03</div>
        <div className="titleBlock">
          <p className="kicker">IDEAS · PICASSO · CUBISM</p>
          <h1>WHEN ONE ANGLE WASN&apos;T ENOUGH.</h1>
        </div>
        <p className="deck">Picasso and Braque decided a picture didn&apos;t have to sit still and behave itself. One point of view was never going to hold everything they wanted to say.</p>
      </section>

      <section className="thesis">
        <div className="thesisLabel">THE IDEA</div>
        <p className="thesisText">A face could turn toward you and away from you at the same time. Space could flatten, split, overlap, and still somehow feel more true.</p>
        <aside className="thesisAside">This page is now online for private editorial review. Final copy and the remaining prepared image assets come next.</aside>
      </section>

      <section className="plan" aria-label="Cubism image plan">
        <div className="planTitle">IMAGE CHOREOGRAPHY · 4 MAIN + 2 SUPPORT</div>
        <figure className="storyFigure mainB">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-split-face-main-mobile.png" />
            <img src="/images/editorial/cubism-split-face-main-desktop.png" alt="Cubist seated figure shown through overlapping facial viewpoints" loading="lazy" />
          </picture>
          <figcaption><strong>MAIN 02</strong> · MULTIPLE VIEWPOINTS · PICASSO · EASTOKYO ISSUE 01</figcaption>
        </figure>
        <div className="pending supportA"><strong>SUPPORT 01</strong><span>Monochrome study · asset pending</span></div>
        <figure className="storyFigure mainC">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-collage-figure-main-mobile.png" />
            <img src="/images/editorial/cubism-collage-figure-main-desktop.png" alt="Cubist collage figure built from layered geometric forms" loading="lazy" />
          </picture>
          <figcaption><strong>MAIN 03</strong> · CONSTRUCTION / COLLAGE · PICASSO · EASTOKYO ISSUE 01</figcaption>
        </figure>
        <figure className="storyFigure supportB">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-pencil-head-support-mobile.png" />
            <img src="/images/editorial/cubism-pencil-head-support-desktop.png" alt="Cubist pencil head study on aged paper" loading="lazy" />
          </picture>
          <figcaption><strong>SUPPORT 02</strong> · PENCIL HEAD STUDY · PICASSO · EASTOKYO ISSUE 01</figcaption>
        </figure>
        <div className="pending mainD"><strong>MAIN 04</strong><span>Closing · orange and blue figure · asset pending</span></div>
      </section>

      <section className="status">
        <strong>UNLISTED EDITORIAL PREVIEW</strong>
        <p>Break the picture apart. Then put the world back together differently.</p>
        <small>{credit}<br />Not linked from the homepage. Noindex.</small>
      </section>

      <footer className="footer">
        <span>EASTOKYO · NUMBER ONE</span>
        <Link href="/eastokyo">Back to issue</Link>
      </footer>
    </main>
  );
}
