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

export default function CubismStoryPage() {
  return (
    <main className="cubismStory">
      <style>{`
        :root {
          --paper: #f3efe6;
          --ink: #11110f;
          --orange: #d94e16;
          --blue: #214f78;
          --line: rgba(17,17,15,.22);
          --pad: clamp(1rem,3vw,3rem);
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--paper); }
        .cubismStory {
          overflow: hidden;
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-bienvivos-sans), sans-serif;
        }
        .folio {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
          padding: .72rem var(--pad);
          border-bottom: 1px solid var(--line);
          font-size: .55rem;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .folio a { color: inherit; text-decoration: none; }
        .folioBrand {
          font-size: clamp(1.55rem,3vw,2.7rem);
          font-weight: 800;
          line-height: .8;
          letter-spacing: -.065em;
        }
        .folioCenter { text-align: center; }
        .folioRight { text-align: right; }

        .hero picture, .hero img,
        .figure picture, .figure img { display: block; width: 100%; }
        .hero img, .figure img { height: auto; }

        .opening {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.1rem;
          padding: clamp(2.5rem,4.5vw,4.5rem) var(--pad) clamp(4rem,6vw,6rem);
          border-bottom: 1px solid var(--line);
        }
        .number {
          grid-column: 1 / 2;
          color: var(--orange);
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(3.8rem,7vw,7rem);
          line-height: .72;
          letter-spacing: -.07em;
        }
        .titleBlock { grid-column: 2 / 9; }
        .kicker,
        .marker,
        .caption,
        .marginalia,
        .endMatter {
          font-size: .54rem;
          font-weight: 700;
          line-height: 1.55;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .kicker { margin: 0 0 .9rem; }
        h1 {
          margin: 0;
          max-width: 8.3ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(3.8rem,7.8vw,8.2rem);
          font-weight: 600;
          line-height: .8;
          letter-spacing: -.048em;
          text-wrap: balance;
        }
        .deck {
          grid-column: 9 / 13;
          align-self: end;
          margin: 0;
          max-width: 24ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.25rem,1.9vw,2.05rem);
          line-height: 1.12;
          letter-spacing: -.018em;
        }

        .spread {
          padding-left: var(--pad);
          padding-right: var(--pad);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.1rem;
          align-items: start;
        }
        .prose {
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1rem,1.15vw,1.13rem);
          line-height: 1.64;
        }
        .prose p { margin: 0 0 1.32em; }
        .caption {
          margin-top: .6rem;
          opacity: .58;
        }
        .caption strong { color: var(--orange); }
        .figure { margin: 0; }
        .marker {
          padding-top: .7rem;
          border-top: 1px solid var(--line);
        }
        .marginalia { color: var(--blue); }

        /* 01 — OPENING ESSAY */
        .essaySpread {
          padding-top: clamp(4rem,6.5vw,6.5rem);
          padding-bottom: clamp(4.5rem,7vw,7rem);
        }
        .essayMarker { grid-column: 1 / 3; }
        .essayCopy {
          grid-column: 4 / 9;
          max-width: 64ch;
        }
        .essayCopy p:first-child::first-letter {
          float: left;
          margin: .06em .12em 0 0;
          color: var(--orange);
          font-size: 5em;
          line-height: .7;
        }
        .essayAside {
          grid-column: 10 / 13;
          margin-top: 5.5rem;
          max-width: 24ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: .98rem;
          line-height: 1.5;
        }
        .essaySpanish {
          grid-column: 10 / 13;
          margin-top: 2rem;
          padding-top: .65rem;
          border-top: 3px solid var(--orange);
        }

        /* 02 — VIEWPOINT */
        .viewpointSpread {
          padding-top: clamp(2rem,3vw,3rem);
          padding-bottom: clamp(5rem,8vw,8rem);
        }
        .viewpointMarker { grid-column: 1 / 3; }
        .viewpointFigure {
          grid-column: 6 / 13;
          margin-top: 1.5rem;
          margin-right: calc(-1 * var(--pad));
        }
        .viewpointCopy {
          grid-column: 2 / 6;
          grid-row: 2;
          margin-top: clamp(5rem,8vw,8rem);
          max-width: 58ch;
        }

        /* 03 — FRACTURE */
        .fractureSpread {
          padding-top: clamp(2rem,3vw,3rem);
          padding-bottom: clamp(5rem,8vw,8rem);
          border-top: 1px solid var(--line);
        }
        .monoFigure {
          grid-column: 2 / 5;
          width: 86%;
          margin-top: 3.5rem;
        }
        .pullQuote {
          grid-column: 6 / 12;
          margin: 3rem 0 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2.8rem,4.8vw,5.2rem);
          font-weight: 500;
          line-height: .92;
          letter-spacing: -.038em;
        }
        .pullQuote em { color: var(--orange); font-style: normal; }
        .fractureCopy {
          grid-column: 7 / 11;
          margin-top: 2.3rem;
          max-width: 58ch;
        }

        /* 04 — CONSTRUCTION */
        .constructionSpread {
          padding-top: clamp(3rem,4vw,4rem);
          padding-bottom: clamp(6rem,9vw,9rem);
        }
        .constructionMarker { grid-column: 1 / 3; }
        .constructionCopy {
          grid-column: 4 / 9;
          max-width: 64ch;
        }
        .constructionAside {
          grid-column: 10 / 13;
          margin-top: 2.2rem;
          max-width: 24ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: .98rem;
          line-height: 1.5;
        }
        .collageFigure {
          grid-column: 3 / 13;
          margin-top: clamp(3rem,5vw,5rem);
          margin-right: calc(-1 * var(--pad));
        }
        .afterCollage {
          grid-column: 8 / 12;
          margin-top: 1.8rem;
          max-width: 54ch;
        }
        .studyFigure {
          grid-column: 1 / 4;
          width: 82%;
          margin-top: clamp(5rem,8vw,8rem);
        }
        .studyCopy {
          grid-column: 5 / 9;
          margin-top: clamp(6.5rem,10vw,10rem);
          max-width: 56ch;
        }
        .studyNote {
          grid-column: 10 / 12;
          margin-top: clamp(8rem,12vw,12rem);
          padding-top: .65rem;
          border-top: 1px solid var(--line);
        }

        /* 05 — HUMAN */
        .humanSpread {
          padding-top: clamp(4rem,6vw,6rem);
          padding-bottom: clamp(7rem,11vw,11rem);
          border-top: 1px solid var(--line);
        }
        .humanCopy {
          grid-column: 4 / 9;
          max-width: 62ch;
        }
        .humanFigure {
          grid-column: 4 / 12;
          margin-top: clamp(4rem,6vw,6rem);
        }
        .humanWhisper {
          grid-column: 9 / 12;
          margin-top: 1.1rem;
          text-align: right;
          color: var(--blue);
        }

        .endMatter {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem var(--pad) 1.3rem;
          border-top: 1px solid var(--line);
        }
        .endMatter a { color: inherit; text-decoration: none; }
        .endMatter span:last-child { text-align: right; opacity: .62; }

        @media (max-width: 720px) {
          :root { --pad: 1rem; }
          .folio { grid-template-columns: 1fr auto; padding: .6rem 1rem .7rem; }
          .folioCenter { display: none; }

          .opening {
            grid-template-columns: repeat(6,minmax(0,1fr));
            gap: .7rem;
            padding: 1.8rem 1rem 3.2rem;
          }
          .number { grid-column: 1 / 2; font-size: 3.7rem; }
          .titleBlock { grid-column: 2 / 7; }
          h1 { font-size: clamp(3rem,14vw,5rem); line-height: .82; }
          .deck {
            grid-column: 2 / 7;
            margin-top: 1.25rem;
            max-width: 26ch;
            font-size: 1.32rem;
          }

          .grid {
            grid-template-columns: repeat(6,minmax(0,1fr));
            gap: .7rem;
          }
          .prose { font-size: 1.06rem; line-height: 1.62; }

          .essaySpread { padding-top: 3.2rem; padding-bottom: 3.8rem; }
          .essayMarker { grid-column: 1 / 3; }
          .essayCopy { grid-column: 1 / 7; margin-top: 2rem; }
          .essayAside { grid-column: 2 / 6; margin-top: 1.5rem; font-size: .96rem; }
          .essaySpanish { grid-column: 4 / 7; margin-top: 1.3rem; }

          .viewpointSpread { padding-top: 1rem; padding-bottom: 4rem; }
          .viewpointMarker { grid-column: 1 / 3; }
          .viewpointFigure {
            grid-column: 1 / 7;
            grid-row: auto;
            width: calc(100% + 2rem);
            margin: 1.3rem -1rem 0;
          }
          .viewpointFigure .caption { padding: 0 1rem; }
          .viewpointCopy {
            grid-column: 1 / 7;
            grid-row: auto;
            margin-top: 2.2rem;
          }

          .fractureSpread { padding-top: 1rem; padding-bottom: 4rem; }
          .monoFigure {
            grid-column: 2 / 6;
            width: 72%;
            margin: 2.5rem auto 0;
          }
          .pullQuote {
            grid-column: 1 / 7;
            margin-top: 3rem;
            font-size: clamp(2.7rem,12vw,4.2rem);
          }
          .fractureCopy { grid-column: 1 / 7; margin-top: 2rem; }

          .constructionSpread { padding-top: 2rem; padding-bottom: 4.8rem; }
          .constructionMarker { grid-column: 1 / 3; }
          .constructionCopy { grid-column: 1 / 7; margin-top: 2rem; }
          .constructionAside { grid-column: 2 / 6; margin-top: 1.2rem; font-size: .96rem; }
          .collageFigure {
            grid-column: 1 / 7;
            width: calc(100% + 2rem);
            margin: 2.8rem -1rem 0;
          }
          .collageFigure .caption { padding: 0 1rem; }
          .afterCollage { grid-column: 2 / 7; margin-top: 1.6rem; }
          .studyFigure {
            grid-column: 1 / 5;
            width: 68%;
            margin-top: 3.8rem;
          }
          .studyCopy { grid-column: 1 / 7; margin-top: 2.5rem; }
          .studyNote { grid-column: 4 / 7; margin-top: 1.2rem; }

          .humanSpread { padding-top: 3.5rem; padding-bottom: 5rem; }
          .humanCopy { grid-column: 1 / 7; }
          .humanFigure {
            grid-column: 1 / 7;
            margin-top: 3.5rem;
          }
          .humanWhisper { grid-column: 4 / 7; margin-top: .8rem; }

          .endMatter { flex-direction: column; padding: 1rem; }
          .endMatter span:last-child { text-align: left; }
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

      <article>
        <section className="spread essaySpread">
          <div className="grid">
            <div className="marker essayMarker">01 / THE ARGUMENT</div>
            <div className="prose essayCopy">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, augue sed tempor dictum, massa justo feugiat nisl, vitae tristique arcu ligula vitae est. Integer vel dolor at sapien aliquet tincidunt. Suspendisse potenti. Curabitur finibus, augue vitae commodo posuere, sapien justo vulputate odio, et laoreet libero lectus sed neque.</p>
              <p>Vivamus dictum sem ut nisl tristique, quis tincidunt arcu egestas. Praesent vitae ex sed lectus pellentesque tempor. Nulla facilisi. Maecenas sodales ligula at purus vulputate, in pretium erat fermentum. Duis convallis, turpis sit amet luctus sollicitudin, magna augue ultrices velit, non hendrerit lorem enim id massa.</p>
            </div>
            <aside className="essayAside">Cubism did not ask the eye to behave. It asked the eye to work.</aside>
            <div className="marginalia essaySpanish">Mirar otra vez.</div>
          </div>
        </section>

        <section className="spread viewpointSpread">
          <div className="grid">
            <div className="marker viewpointMarker">02 / MULTIPLE VIEWPOINTS</div>
            <figure className="figure viewpointFigure">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-split-face-main-mobile.png" />
                <img src="/images/editorial/cubism-split-face-main-desktop.png" alt="Cubist seated figure shown through overlapping facial viewpoints" loading="lazy" />
              </picture>
              <figcaption className="caption"><strong>PABLO PICASSO</strong> · CUBIST FIGURE</figcaption>
            </figure>
            <div className="prose viewpointCopy">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt velit at posuere bibendum. Curabitur tincidunt, eros vitae luctus consequat, erat dui feugiat dui, at pellentesque sapien nisi sit amet lacus.</p>
              <p>Nam interdum turpis non ante rhoncus, vitae dictum est consequat. Vestibulum feugiat orci nec semper sollicitudin. Nulla facilisi. Duis tristique neque vel sapien egestas, in volutpat massa dignissim.</p>
            </div>
          </div>
        </section>

        <section className="spread fractureSpread">
          <div className="grid">
            <figure className="figure monoFigure">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-monochrome-study-support-mobile.png" />
                <img src="/images/editorial/cubism-monochrome-study-support-desktop.png" alt="Monochrome Cubist ink and wash study" loading="lazy" />
              </picture>
              <figcaption className="caption"><strong>PABLO PICASSO</strong> · MONOCHROME STUDY</figcaption>
            </figure>
            <p className="pullQuote">A face could turn toward you and away from you <em>at the same time.</em></p>
            <div className="prose fractureCopy">
              <p>Aliquam erat volutpat. Morbi pellentesque augue nec tellus vestibulum, vitae consequat magna posuere. Fusce non justo quis nisl tincidunt posuere. Donec tristique, magna et faucibus dignissim, lectus justo vestibulum arcu, vitae placerat justo nunc ut nibh.</p>
            </div>
          </div>
        </section>

        <section className="spread constructionSpread">
          <div className="grid">
            <div className="marker constructionMarker">03 / CONSTRUCTION</div>
            <div className="prose constructionCopy">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus tortor vel massa accumsan, et efficitur massa fermentum. Sed sed cursus sapien. Morbi sodales lectus a orci feugiat, vel tempor elit imperdiet.</p>
              <p>Etiam viverra, elit eget placerat finibus, risus ipsum dignissim urna, ut vulputate lectus tellus sit amet augue. Integer dignissim nibh non justo volutpat, vel pellentesque dolor ultrices.</p>
            </div>
            <aside className="constructionAside">The picture stops pretending to be a window. It starts behaving like an object.</aside>

            <figure className="figure collageFigure">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-collage-figure-main-mobile.png" />
                <img src="/images/editorial/cubism-collage-figure-main-desktop.png" alt="Cubist collage figure built from layered geometric forms" loading="lazy" />
              </picture>
              <figcaption className="caption"><strong>PABLO PICASSO</strong> · CONSTRUCTION / COLLAGE</figcaption>
            </figure>

            <div className="prose afterCollage">
              <p>Sed luctus sem in risus feugiat, ut malesuada nulla congue. Aenean volutpat tortor sit amet magna tincidunt, quis porttitor arcu pulvinar. Donec euismod quam vel lacus posuere, at dictum enim viverra.</p>
            </div>

            <figure className="figure studyFigure">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-pencil-head-support-mobile.png" />
                <img src="/images/editorial/cubism-pencil-head-support-desktop.png" alt="Cubist pencil head study on aged paper" loading="lazy" />
              </picture>
              <figcaption className="caption"><strong>PABLO PICASSO</strong> · PENCIL HEAD STUDY</figcaption>
            </figure>

            <div className="prose studyCopy">
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac dolor sed erat tincidunt dictum. Quisque vitae viverra augue. Fusce aliquet tincidunt odio, quis interdum turpis porta eget.</p>
              <p>Praesent nec massa vitae justo feugiat pulvinar. In sit amet hendrerit urna. Curabitur vel elementum est, sed malesuada justo.</p>
            </div>
            <div className="marginalia studyNote">Small marks. Big consequences.</div>
          </div>
        </section>

        <section className="spread humanSpread">
          <div className="grid">
            <div className="prose humanCopy">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat dolor vel arcu feugiat, at ultricies odio tristique. Suspendisse sed quam quis lectus aliquam feugiat. Sed vulputate neque id metus pulvinar, et varius purus tincidunt.</p>
              <p>Nulla facilisi. Cras commodo velit a purus consequat, vitae consequat neque elementum.</p>
            </div>

            <figure className="figure humanFigure">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-mother-child-main-mobile.png" />
                <img src="/images/editorial/cubism-mother-child-main-desktop.png" alt="Cubist mother and child in vivid orange, blue, and green" loading="lazy" />
              </picture>
              <figcaption className="caption"><strong>PABLO PICASSO</strong> · FIGURE GROUP</figcaption>
            </figure>
            <div className="marginalia humanWhisper">Volver al cuerpo.</div>
          </div>
        </section>
      </article>

      <footer className="endMatter">
        <Link href="/eastokyo">EASTOKYO · NUMBER ONE</Link>
        <span>PICASSO · CUBISM · EASTOKYO ISSUE 01<br />Unlisted editorial preview · noindex</span>
      </footer>
    </main>
  );
}
