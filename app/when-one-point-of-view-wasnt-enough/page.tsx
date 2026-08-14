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
          --line: rgba(17,17,15,.22);
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
          padding: clamp(3rem,6vw,6.5rem) clamp(1rem,3.4vw,3.4rem) clamp(5rem,9vw,9rem);
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

        .articleLead {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(5rem,10vw,11rem) clamp(1rem,3.4vw,3.4rem) clamp(6rem,10vw,10rem);
        }
        .eyebrow {
          font-size: .58rem;
          font-weight: 800;
          line-height: 1.5;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .leadLabel { grid-column: 1 / 3; }
        .leadStatement {
          grid-column: 4 / 10;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2.7rem,5.3vw,6rem);
          font-weight: 500;
          line-height: .92;
          letter-spacing: -.04em;
        }
        .leadNote {
          grid-column: 11 / 13;
          align-self: end;
          margin: 0;
          padding-top: .8rem;
          border-top: 4px solid var(--orange);
          font-size: .66rem;
          font-weight: 700;
          line-height: 1.55;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .leadBody {
          grid-column: 4 / 9;
          margin-top: 4rem;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.25rem,1.8vw,1.7rem);
          line-height: 1.45;
        }
        .leadBody p { margin: 0 0 1.35em; }
        .leadBody p:first-child::first-letter {
          float: left;
          margin: .05em .12em 0 0;
          color: var(--orange);
          font-size: 5.7em;
          font-weight: 600;
          line-height: .68;
        }
        .leadBodyAside {
          grid-column: 10 / 13;
          align-self: start;
          margin-top: 7rem;
          font-size: .72rem;
          line-height: 1.65;
          letter-spacing: .04em;
        }

        .movement {
          padding: 0 clamp(1rem,3.4vw,3.4rem) clamp(7rem,12vw,12rem);
        }
        .movementGrid {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          align-items: start;
        }
        .movementLabel {
          grid-column: 1 / 4;
          padding-top: .75rem;
          border-top: 1px solid var(--line);
        }
        .storyFigure { margin: 0; }
        .storyFigure picture, .storyFigure img { display: block; width: 100%; }
        .storyFigure img { height: auto; }
        .storyFigure figcaption {
          margin-top: .7rem;
          font-size: .52rem;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: .13em;
          text-transform: uppercase;
          opacity: .62;
        }
        .storyFigure figcaption strong { color: var(--orange); }
        .figureSplit { grid-column: 7 / 13; }
        .bodyA {
          grid-column: 2 / 6;
          margin: 7rem 0 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.2rem,1.7vw,1.6rem);
          line-height: 1.5;
        }
        .bodyA p { margin: 0 0 1.4em; }

        .interlude {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(6rem,11vw,12rem) clamp(1rem,3.4vw,3.4rem);
          background: var(--ink);
          color: var(--paper);
        }
        .supportMono { grid-column: 1 / 5; }
        .interludeQuote {
          grid-column: 6 / 13;
          margin: 1rem 0 0;
          color: var(--paper);
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(3.5rem,7.5vw,8.5rem);
          font-weight: 500;
          line-height: .84;
          letter-spacing: -.05em;
        }
        .interludeQuote em { color: #ff6f2f; font-style: normal; }
        .interludeNote {
          grid-column: 9 / 13;
          margin: 2.5rem 0 0;
          font-size: .62rem;
          font-weight: 700;
          line-height: 1.55;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .construction {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(7rem,12vw,13rem) clamp(1rem,3.4vw,3.4rem);
        }
        .constructionTitle {
          grid-column: 1 / 6;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(3rem,6vw,7rem);
          line-height: .88;
          letter-spacing: -.045em;
        }
        .constructionTitle span { color: var(--orange); }
        .constructionBody {
          grid-column: 8 / 12;
          margin: 1rem 0 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.15rem,1.6vw,1.55rem);
          line-height: 1.5;
        }
        .constructionBody p { margin: 0 0 1.4em; }
        .figureCollage { grid-column: 5 / 13; margin-top: 6rem; }
        .constructionRail {
          grid-column: 1 / 4;
          margin-top: 10rem;
          padding-top: .75rem;
          border-top: 4px solid var(--orange);
          font-size: .62rem;
          font-weight: 700;
          line-height: 1.65;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .studySpread {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: 0 clamp(1rem,3.4vw,3.4rem) clamp(8rem,13vw,14rem);
        }
        .supportPencil { grid-column: 1 / 5; }
        .studyCopy {
          grid-column: 6 / 11;
          margin-top: 4rem;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.2rem,1.75vw,1.65rem);
          line-height: 1.5;
        }
        .studyCopy p { margin: 0 0 1.4em; }
        .studyMark {
          grid-column: 11 / 13;
          align-self: end;
          color: var(--orange);
          font-size: clamp(3.5rem,7vw,8rem);
          font-weight: 800;
          line-height: .75;
          letter-spacing: -.08em;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .resolution {
          padding: clamp(5rem,8vw,8rem) clamp(1rem,3.4vw,3.4rem) clamp(8rem,12vw,12rem);
          background: var(--blue);
          color: var(--paper);
        }
        .resolutionHead {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          margin-bottom: clamp(4rem,7vw,7rem);
        }
        .resolutionLabel { grid-column: 1 / 3; }
        .resolutionTitle {
          grid-column: 4 / 12;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(3.8rem,8vw,9rem);
          font-weight: 500;
          line-height: .84;
          letter-spacing: -.05em;
        }
        .resolutionTitle em { color: #ff8250; font-style: normal; }
        .figureFinal { width: min(72vw, 1180px); margin: 0 auto; }
        .figureFinal figcaption { color: var(--paper); opacity: .78; }
        .resolutionCopy {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          margin-top: clamp(4rem,7vw,7rem);
        }
        .resolutionCopy p {
          grid-column: 4 / 9;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.2rem,1.7vw,1.6rem);
          line-height: 1.5;
        }
        .resolutionCopy aside {
          grid-column: 10 / 13;
          align-self: end;
          padding-top: .75rem;
          border-top: 1px solid rgba(243,239,230,.45);
          font-size: .62rem;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: .11em;
          text-transform: uppercase;
        }

        .status {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.25rem;
          padding: clamp(5rem,9vw,9rem) clamp(1rem,3.4vw,3.4rem);
          background: var(--ink);
          color: var(--paper);
        }
        .status strong { grid-column: 1 / 4; color: #ff6f2f; font-size: .64rem; letter-spacing: .16em; text-transform: uppercase; }
        .status p { grid-column: 4 / 11; margin: 0; font-family: var(--font-bienvivos-display), serif; font-size: clamp(2.8rem,5.5vw,6rem); line-height: .9; letter-spacing: -.04em; }
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
          .opening { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 2.2rem 1rem 4.5rem; }
          .number { grid-column: 1 / 2; font-size: 5.4rem; }
          .titleBlock { grid-column: 2 / 7; }
          h1 { font-size: clamp(4rem,20vw,7.2rem); line-height: .76; }
          .deck { grid-column: 2 / 7; margin-top: 1.6rem; font-size: 1.75rem; }

          .articleLead { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 4.5rem 1rem 5rem; }
          .leadLabel { grid-column: 1 / 3; }
          .leadStatement { grid-column: 1 / 7; margin-top: 2.5rem; font-size: clamp(3rem,13vw,5rem); }
          .leadNote { grid-column: 4 / 7; margin-top: 2.5rem; }
          .leadBody { grid-column: 1 / 7; margin-top: 4rem; font-size: 1.3rem; }
          .leadBodyAside { grid-column: 2 / 6; margin-top: 2rem; }

          .movement { padding: 0 1rem 5.5rem; }
          .movementGrid { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; }
          .movementLabel { grid-column: 1 / 4; }
          .figureSplit { grid-column: 1 / 7; margin-top: 2rem; }
          .bodyA { grid-column: 1 / 7; margin-top: 3.5rem; font-size: 1.3rem; }

          .interlude { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 5rem 1rem; }
          .supportMono { grid-column: 2 / 6; }
          .interludeQuote { grid-column: 1 / 7; margin-top: 4rem; font-size: clamp(3.4rem,16vw,6rem); }
          .interludeNote { grid-column: 3 / 7; margin-top: 2.5rem; }

          .construction { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 5.5rem 1rem; }
          .constructionTitle { grid-column: 1 / 7; }
          .constructionBody { grid-column: 2 / 7; margin-top: 3rem; font-size: 1.3rem; }
          .figureCollage { grid-column: 1 / 7; margin-top: 4rem; }
          .constructionRail { grid-column: 1 / 5; margin-top: 3rem; }

          .studySpread { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; padding: 0 1rem 6rem; }
          .supportPencil { grid-column: 1 / 5; }
          .studyCopy { grid-column: 1 / 7; margin-top: 3.5rem; font-size: 1.3rem; }
          .studyMark { display: none; }

          .resolution { padding: 4.5rem 1rem 6rem; }
          .resolutionHead { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; margin-bottom: 3.5rem; }
          .resolutionLabel { grid-column: 1 / 3; }
          .resolutionTitle { grid-column: 1 / 7; margin-top: 2.5rem; font-size: clamp(3.6rem,16vw,6rem); }
          .figureFinal { width: 100%; }
          .resolutionCopy { grid-template-columns: repeat(6,minmax(0,1fr)); gap: .75rem; margin-top: 3.5rem; }
          .resolutionCopy p { grid-column: 1 / 7; font-size: 1.3rem; }
          .resolutionCopy aside { grid-column: 3 / 7; margin-top: 2.5rem; }

          .status { grid-template-columns: repeat(6,minmax(0,1fr)); padding: 4.5rem 1rem; }
          .status strong { grid-column: 1 / 4; }
          .status p { grid-column: 1 / 7; margin-top: 3rem; font-size: clamp(3rem,14vw,5rem); }
          .status small { grid-column: 3 / 7; margin-top: 2.5rem; }
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

      <article>
        <section className="articleLead">
          <div className="eyebrow leadLabel">THE IDEA<br />MIRAR / ROMPER</div>
          <p className="leadStatement">A face could turn toward you and away from you at the same time. Space could flatten, split, overlap — and somehow feel more true.</p>
          <p className="leadNote">Editorial prototype · Lorem Ipsum is being used here deliberately to test final article length, pacing, and typographic rhythm.</p>

          <div className="leadBody">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, augue sed tempor dictum, massa justo feugiat nisl, vitae tristique arcu ligula vitae est. Integer vel dolor at sapien aliquet tincidunt. Suspendisse potenti. Curabitur finibus, augue vitae commodo posuere, sapien justo vulputate odio, et laoreet libero lectus sed neque.</p>
            <p>Vivamus dictum sem ut nisl tristique, quis tincidunt arcu egestas. Praesent vitae ex sed lectus pellentesque tempor. Nulla facilisi. Maecenas sodales ligula at purus vulputate, in pretium erat fermentum. Duis convallis, turpis sit amet luctus sollicitudin, magna augue ultrices velit, non hendrerit lorem enim id massa.</p>
            <p>Aliquam erat volutpat. Morbi pellentesque augue nec tellus vestibulum, vitae consequat magna posuere. Fusce non justo quis nisl tincidunt posuere. Donec tristique, magna et faucibus dignissim, lectus justo vestibulum arcu, vitae placerat justo nunc ut nibh.</p>
          </div>
          <aside className="leadBodyAside"><strong>NOTE 01</strong><br />The finished story needs this much textual mass. Without it, the page reads like a contact sheet instead of a magazine.</aside>
        </section>

        <section className="movement">
          <div className="movementGrid">
            <div className="eyebrow movementLabel">01 · MULTIPLE VIEWPOINTS<br />VER / VOLVER A VER</div>
            <figure className="storyFigure figureSplit">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-split-face-main-mobile.png" />
                <img src="/images/editorial/cubism-split-face-main-desktop.png" alt="Cubist seated figure shown through overlapping facial viewpoints" loading="lazy" />
              </picture>
              <figcaption><strong>MAIN 02</strong> · MULTIPLE VIEWPOINTS · PICASSO · EASTOKYO ISSUE 01</figcaption>
            </figure>
            <div className="bodyA">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt velit at posuere bibendum. Curabitur tincidunt, eros vitae luctus consequat, erat dui feugiat dui, at pellentesque sapien nisi sit amet lacus.</p>
              <p>Nam interdum turpis non ante rhoncus, vitae dictum est consequat. Vestibulum feugiat orci nec semper sollicitudin. Nulla facilisi. Duis tristique neque vel sapien egestas, in volutpat massa dignissim.</p>
            </div>
          </div>
        </section>

        <section className="interlude">
          <figure className="storyFigure supportMono">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-monochrome-study-support-mobile.png" />
              <img src="/images/editorial/cubism-monochrome-study-support-desktop.png" alt="Monochrome Cubist ink and wash study" loading="lazy" />
            </picture>
            <figcaption><strong>SUPPORT 01</strong> · MONOCHROME STUDY · PICASSO · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <p className="interludeQuote">One object.<br /><em>More than one truth.</em></p>
          <p className="interludeNote">Tokyo precision. Spanish heat. A hard grid with enough emotion to break it.</p>
        </section>

        <section className="construction">
          <h2 className="constructionTitle">THE PICTURE STOPS BEING A WINDOW.<br /><span>IT BECOMES A THING.</span></h2>
          <div className="constructionBody">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus tortor vel massa accumsan, et efficitur massa fermentum. Sed sed cursus sapien. Morbi sodales lectus a orci feugiat, vel tempor elit imperdiet.</p>
            <p>Etiam viverra, elit eget placerat finibus, risus ipsum dignissim urna, ut vulputate lectus tellus sit amet augue. Integer dignissim nibh non justo volutpat, vel pellentesque dolor ultrices.</p>
          </div>
          <div className="constructionRail">02 · CONSTRUCTION<br />CORTAR / PEGAR / CAMBIAR<br /><br />The editorial rhythm deliberately opens and closes instead of repeating one image size.</div>
          <figure className="storyFigure figureCollage">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-collage-figure-main-mobile.png" />
              <img src="/images/editorial/cubism-collage-figure-main-desktop.png" alt="Cubist collage figure built from layered geometric forms" loading="lazy" />
            </picture>
            <figcaption><strong>MAIN 03</strong> · CONSTRUCTION / COLLAGE · PICASSO · EASTOKYO ISSUE 01</figcaption>
          </figure>
        </section>

        <section className="studySpread">
          <figure className="storyFigure supportPencil">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-pencil-head-support-mobile.png" />
              <img src="/images/editorial/cubism-pencil-head-support-desktop.png" alt="Cubist pencil head study on aged paper" loading="lazy" />
            </picture>
            <figcaption><strong>SUPPORT 02</strong> · PENCIL HEAD STUDY · PICASSO · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <div className="studyCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem in risus feugiat, ut malesuada nulla congue. Aenean volutpat tortor sit amet magna tincidunt, quis porttitor arcu pulvinar. Donec euismod quam vel lacus posuere, at dictum enim viverra.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac dolor sed erat tincidunt dictum. Quisque vitae viverra augue. Fusce aliquet tincidunt odio, quis interdum turpis porta eget.</p>
            <p>Praesent nec massa vitae justo feugiat pulvinar. In sit amet hendrerit urna. Curabitur vel elementum est, sed malesuada justo. Vivamus euismod mauris a ex fermentum, et porttitor sem commodo.</p>
          </div>
          <div className="studyMark">03</div>
        </section>

        <section className="resolution">
          <div className="resolutionHead">
            <div className="eyebrow resolutionLabel">04 · HUMAN RESOLUTION<br />VOLVER AL CUERPO</div>
            <h2 className="resolutionTitle">After all the fracture, <em>the human figure remains.</em></h2>
          </div>
          <figure className="storyFigure figureFinal">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-mother-child-main-mobile.png" />
              <img src="/images/editorial/cubism-mother-child-main-desktop.png" alt="Cubist mother and child in vivid orange, blue, and green" loading="lazy" />
            </picture>
            <figcaption><strong>MAIN 04</strong> · HUMAN RESOLUTION · PICASSO · EASTOKYO ISSUE 01</figcaption>
          </figure>
          <div className="resolutionCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat dolor vel arcu feugiat, at ultricies odio tristique. Suspendisse sed quam quis lectus aliquam feugiat. Sed vulputate neque id metus pulvinar, et varius purus tincidunt. Nulla facilisi. Cras commodo velit a purus consequat, vitae consequat neque elementum.</p>
            <aside>Final paragraph scale test.<br />This is where the real article should land emotionally rather than simply stop.</aside>
          </div>
        </section>
      </article>

      <section className="status">
        <strong>UNLISTED EDITORIAL PREVIEW</strong>
        <p>Break the picture apart. Then put the world back together differently.</p>
        <small>{credit}<br />Lorem Ipsum layout prototype.<br />Not linked from the homepage. Noindex.</small>
      </section>

      <footer className="footer">
        <span>EASTOKYO · NUMBER ONE</span>
        <Link href="/eastokyo">Back to issue</Link>
      </footer>
    </main>
  );
}
