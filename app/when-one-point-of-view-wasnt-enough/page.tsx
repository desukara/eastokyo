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
          --line: rgba(17,17,15,.22);
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
          padding: .72rem clamp(1rem,3vw,3rem);
          border-bottom: 1px solid var(--line);
          font-size: .56rem;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .folio a { color: inherit; text-decoration: none; }
        .folioBrand { font-size: clamp(1.55rem,3vw,2.7rem); font-weight: 800; line-height: .8; letter-spacing: -.065em; }
        .folioCenter { text-align: center; }
        .folioRight { text-align: right; }

        .hero picture, .hero img,
        .figure picture, .figure img { display: block; width: 100%; }
        .hero img, .figure img { height: auto; }

        .opening {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.1rem;
          padding: clamp(2.8rem,5vw,5rem) clamp(1rem,3vw,3rem) clamp(4.5rem,7vw,7rem);
          border-bottom: 1px solid var(--line);
        }
        .number {
          grid-column: 1 / 3;
          color: var(--orange);
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(5rem,10vw,10rem);
          line-height: .7;
          letter-spacing: -.07em;
        }
        .titleBlock { grid-column: 3 / 10; }
        .kicker,
        .eyebrow,
        .caption,
        .marginalia,
        .endMatter {
          font-size: .56rem;
          font-weight: 700;
          line-height: 1.55;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .kicker { margin: 0 0 .9rem; }
        h1 {
          margin: 0;
          max-width: 8ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(4.3rem,9vw,9.6rem);
          font-weight: 600;
          line-height: .77;
          letter-spacing: -.05em;
          text-wrap: balance;
        }
        .deck {
          grid-column: 9 / 13;
          align-self: end;
          margin: 0;
          max-width: 20ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.45rem,2.2vw,2.5rem);
          line-height: 1.08;
          letter-spacing: -.02em;
        }

        .story {
          padding: clamp(4rem,7vw,7rem) clamp(1rem,3vw,3rem) clamp(7rem,10vw,10rem);
        }
        .storyGrid {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.1rem;
          align-items: start;
        }
        .introLabel { grid-column: 1 / 3; }
        .introStatement {
          grid-column: 4 / 10;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2.6rem,4.6vw,5rem);
          font-weight: 500;
          line-height: .95;
          letter-spacing: -.035em;
        }
        .introMargin {
          grid-column: 11 / 13;
          align-self: end;
          padding-top: .7rem;
          border-top: 3px solid var(--orange);
          color: var(--blue);
        }
        .prose {
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.02rem,1.25vw,1.2rem);
          line-height: 1.62;
        }
        .prose p { margin: 0 0 1.3em; }
        .introCopy { grid-column: 4 / 9; margin-top: 3.5rem; }
        .introCopy p:first-child::first-letter {
          float: left;
          margin: .06em .12em 0 0;
          color: var(--orange);
          font-size: 5em;
          line-height: .7;
        }
        .introSide {
          grid-column: 10 / 13;
          margin-top: 7rem;
          max-width: 23ch;
          font-family: var(--font-bienvivos-display), serif;
          font-size: 1rem;
          line-height: 1.5;
        }

        .figure { margin: 0; }
        .caption {
          margin-top: .65rem;
          opacity: .58;
        }
        .caption strong { color: var(--orange); }

        .splitFigure { grid-column: 7 / 13; margin-top: 5rem; }
        .splitCopy { grid-column: 2 / 6; margin-top: 9rem; }
        .splitLabel {
          grid-column: 1 / 4;
          margin-top: 5rem;
          padding-top: .7rem;
          border-top: 1px solid var(--line);
        }

        .monoFigure { grid-column: 2 / 5; margin-top: 5rem; }
        .pullQuote {
          grid-column: 6 / 13;
          margin: 7rem 0 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(3.6rem,6.8vw,7.4rem);
          font-weight: 500;
          line-height: .86;
          letter-spacing: -.045em;
        }
        .pullQuote em { color: var(--orange); font-style: normal; }
        .quoteMargin {
          grid-column: 9 / 13;
          margin-top: 1.2rem;
          color: var(--blue);
        }

        .constructionLabel {
          grid-column: 1 / 3;
          margin-top: 7rem;
        }
        .constructionCopy {
          grid-column: 4 / 8;
          margin-top: 7rem;
        }
        .constructionSide {
          grid-column: 9 / 12;
          margin-top: 9rem;
          font-family: var(--font-bienvivos-display), serif;
          font-size: 1rem;
          line-height: 1.5;
        }
        .collageFigure {
          grid-column: 5 / 13;
          margin-top: 4.5rem;
        }

        .studyFigure {
          grid-column: 1 / 4;
          margin-top: 7rem;
        }
        .studyCopy {
          grid-column: 5 / 10;
          margin-top: 9rem;
        }
        .studyNote {
          grid-column: 10 / 13;
          margin-top: 12rem;
          padding-top: .7rem;
          border-top: 1px solid var(--line);
          color: var(--blue);
        }

        .finalLead {
          grid-column: 3 / 11;
          margin: 10rem 0 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2.5rem,4.8vw,5.4rem);
          font-weight: 500;
          line-height: .94;
          letter-spacing: -.035em;
        }
        .finalLead em { color: var(--orange); font-style: normal; }
        .finalCopy {
          grid-column: 4 / 9;
          margin-top: 3rem;
        }
        .finalFigure {
          grid-column: 4 / 12;
          margin-top: 4rem;
        }
        .finalWhisper {
          grid-column: 8 / 12;
          margin-top: 1rem;
          color: var(--blue);
          text-align: right;
        }

        .endMatter {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem clamp(1rem,3vw,3rem) 1.3rem;
          border-top: 1px solid var(--line);
        }
        .endMatter a { color: inherit; text-decoration: none; }
        .endMatter span:last-child { text-align: right; opacity: .62; }

        @media (max-width: 720px) {
          .folio { grid-template-columns: 1fr auto; padding: .6rem 1rem .7rem; }
          .folioCenter { display: none; }
          .opening { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .7rem; padding: 2rem 1rem 3.8rem; }
          .number { grid-column: 1 / 2; font-size: 4.6rem; }
          .titleBlock { grid-column: 2 / 7; }
          h1 { font-size: clamp(3.7rem,18vw,6.5rem); line-height: .78; }
          .deck { grid-column: 2 / 7; margin-top: 1.5rem; font-size: 1.5rem; }

          .story { padding: 3.8rem 1rem 5.5rem; }
          .storyGrid { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .7rem; }
          .introLabel { grid-column: 1 / 3; }
          .introStatement { grid-column: 1 / 7; margin-top: 2.2rem; font-size: clamp(2.8rem,12vw,4.6rem); }
          .introMargin { grid-column: 4 / 7; margin-top: 2rem; }
          .introCopy { grid-column: 1 / 7; margin-top: 3rem; font-size: 1.12rem; }
          .introSide { grid-column: 2 / 6; margin-top: 1.5rem; }

          .splitLabel { grid-column: 1 / 4; margin-top: 4rem; }
          .splitFigure { grid-column: 1 / 7; margin-top: 1.5rem; }
          .splitCopy { grid-column: 1 / 7; margin-top: 2.5rem; font-size: 1.12rem; }

          .monoFigure { grid-column: 2 / 6; margin-top: 4rem; }
          .pullQuote { grid-column: 1 / 7; margin-top: 3.5rem; font-size: clamp(3.4rem,15vw,5.6rem); }
          .quoteMargin { grid-column: 3 / 7; margin-top: 1rem; }

          .constructionLabel { grid-column: 1 / 3; margin-top: 4.5rem; }
          .constructionCopy { grid-column: 1 / 7; margin-top: 2.5rem; font-size: 1.12rem; }
          .constructionSide { grid-column: 2 / 6; margin-top: 1.5rem; }
          .collageFigure { grid-column: 1 / 7; margin-top: 2.8rem; }

          .studyFigure { grid-column: 1 / 5; margin-top: 4.5rem; }
          .studyCopy { grid-column: 1 / 7; margin-top: 2.8rem; font-size: 1.12rem; }
          .studyNote { grid-column: 3 / 7; margin-top: 1.5rem; }

          .finalLead { grid-column: 1 / 7; margin-top: 5rem; font-size: clamp(2.9rem,12vw,4.8rem); }
          .finalCopy { grid-column: 1 / 7; margin-top: 2.5rem; font-size: 1.12rem; }
          .finalFigure { grid-column: 1 / 7; margin-top: 3rem; }
          .finalWhisper { grid-column: 3 / 7; margin-top: .8rem; }

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

      <article className="story">
        <div className="storyGrid">
          <div className="eyebrow introLabel">THE IDEA</div>
          <p className="introStatement">A face could turn toward you and away from you at the same time. Space could flatten, split, overlap — and somehow feel more true.</p>
          <div className="marginalia introMargin">Mirar otra vez.<br />Then look again.</div>

          <div className="prose introCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, augue sed tempor dictum, massa justo feugiat nisl, vitae tristique arcu ligula vitae est. Integer vel dolor at sapien aliquet tincidunt. Suspendisse potenti. Curabitur finibus, augue vitae commodo posuere, sapien justo vulputate odio, et laoreet libero lectus sed neque.</p>
            <p>Vivamus dictum sem ut nisl tristique, quis tincidunt arcu egestas. Praesent vitae ex sed lectus pellentesque tempor. Nulla facilisi. Maecenas sodales ligula at purus vulputate, in pretium erat fermentum. Duis convallis, turpis sit amet luctus sollicitudin, magna augue ultrices velit, non hendrerit lorem enim id massa.</p>
            <p>Aliquam erat volutpat. Morbi pellentesque augue nec tellus vestibulum, vitae consequat magna posuere. Fusce non justo quis nisl tincidunt posuere. Donec tristique, magna et faucibus dignissim, lectus justo vestibulum arcu, vitae placerat justo nunc ut nibh.</p>
          </div>
          <aside className="introSide">Cubism did not ask the eye to behave. It asked the eye to work.</aside>

          <div className="eyebrow splitLabel">MULTIPLE VIEWPOINTS</div>
          <figure className="figure splitFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-split-face-main-mobile.png" />
              <img src="/images/editorial/cubism-split-face-main-desktop.png" alt="Cubist seated figure shown through overlapping facial viewpoints" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PICASSO</strong> · CUBIST FIGURE · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <div className="prose splitCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt velit at posuere bibendum. Curabitur tincidunt, eros vitae luctus consequat, erat dui feugiat dui, at pellentesque sapien nisi sit amet lacus.</p>
            <p>Nam interdum turpis non ante rhoncus, vitae dictum est consequat. Vestibulum feugiat orci nec semper sollicitudin. Nulla facilisi. Duis tristique neque vel sapien egestas, in volutpat massa dignissim.</p>
          </div>

          <figure className="figure monoFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-monochrome-study-support-mobile.png" />
              <img src="/images/editorial/cubism-monochrome-study-support-desktop.png" alt="Monochrome Cubist ink and wash study" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PICASSO</strong> · MONOCHROME STUDY · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <p className="pullQuote">One object.<br /><em>More than one truth.</em></p>
          <div className="marginalia quoteMargin">No hace falta elegir una sola vista.</div>

          <div className="eyebrow constructionLabel">CONSTRUCTION</div>
          <div className="prose constructionCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus tortor vel massa accumsan, et efficitur massa fermentum. Sed sed cursus sapien. Morbi sodales lectus a orci feugiat, vel tempor elit imperdiet.</p>
            <p>Etiam viverra, elit eget placerat finibus, risus ipsum dignissim urna, ut vulputate lectus tellus sit amet augue. Integer dignissim nibh non justo volutpat, vel pellentesque dolor ultrices.</p>
          </div>
          <aside className="constructionSide">The picture stops pretending to be a window. It starts behaving like an object.</aside>
          <figure className="figure collageFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-collage-figure-main-mobile.png" />
              <img src="/images/editorial/cubism-collage-figure-main-desktop.png" alt="Cubist collage figure built from layered geometric forms" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PICASSO</strong> · CONSTRUCTION / COLLAGE · EASTOKYO ISSUE 01</figcaption>
          </figure>

          <figure className="figure studyFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-pencil-head-support-mobile.png" />
              <img src="/images/editorial/cubism-pencil-head-support-desktop.png" alt="Cubist pencil head study on aged paper" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PICASSO</strong> · PENCIL HEAD STUDY · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <div className="prose studyCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem in risus feugiat, ut malesuada nulla congue. Aenean volutpat tortor sit amet magna tincidunt, quis porttitor arcu pulvinar. Donec euismod quam vel lacus posuere, at dictum enim viverra.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac dolor sed erat tincidunt dictum. Quisque vitae viverra augue. Fusce aliquet tincidunt odio, quis interdum turpis porta eget.</p>
            <p>Praesent nec massa vitae justo feugiat pulvinar. In sit amet hendrerit urna. Curabitur vel elementum est, sed malesuada justo. Vivamus euismod mauris a ex fermentum, et porttitor sem commodo.</p>
          </div>
          <div className="marginalia studyNote">Small marks. Big consequences.</div>

          <p className="finalLead">After all the fracture, <em>the human figure remains.</em></p>
          <div className="prose finalCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat dolor vel arcu feugiat, at ultricies odio tristique. Suspendisse sed quam quis lectus aliquam feugiat. Sed vulputate neque id metus pulvinar, et varius purus tincidunt. Nulla facilisi. Cras commodo velit a purus consequat, vitae consequat neque elementum.</p>
          </div>
          <figure className="figure finalFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-mother-child-main-mobile.png" />
              <img src="/images/editorial/cubism-mother-child-main-desktop.png" alt="Cubist mother and child in vivid orange, blue, and green" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PICASSO</strong> · FIGURE GROUP · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <div className="marginalia finalWhisper">Volver al cuerpo.</div>
        </div>
      </article>

      <footer className="endMatter">
        <Link href="/eastokyo">EASTOKYO · NUMBER ONE</Link>
        <span>{credit}<br />Unlisted editorial preview · noindex</span>
      </footer>
    </main>
  );
}