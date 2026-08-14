import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Picasso, Looked at Again.",
  description: "Picasso, through the Eyes of Paul Smith at The National Art Center, Tokyo.",
  alternates: { canonical: "/picasso-seen-with-fresh-eyes" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const credit = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY BY JIMICHANGA";

export default function ExhibitionStoryPage() {
  return (
    <main id="top" className="story">
      <style>{`
        :root {
          --paper: #f3efe6;
          --ink: #11110f;
          --blue: #214f78;
          --picasso: #173d70;
          --yellow: #f0c719;
          --red: #8d1d18;
          --line: rgba(17,17,15,.26);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--paper); }
        .story { overflow: hidden; background: var(--paper); color: var(--ink); font-family: var(--font-bienvivos-sans), sans-serif; }
        .serif { font-family: var(--font-bienvivos-display), serif; }

        .folio {
          position: relative;
          z-index: 20;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: end;
          gap: 2rem;
          padding: .58rem clamp(1rem,3.4vw,3.4rem) .72rem;
          border-bottom: 1px solid var(--line);
          background: var(--paper);
          font-size: .56rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .folio a { color: inherit; text-decoration: none; }
        .folioBrand { font-size: clamp(1.65rem,3.9vw,3.5rem); font-weight: 800; line-height: .75; letter-spacing: -.075em; }
        .folioCenter { align-self: center; text-align: center; }
        .folioRight { align-self: center; text-align: right; }

        .opening { position: relative; min-height: 100svh; background: #0d1420; color: #fff; }
        .openingMedia { position: absolute; inset: 0; }
        .openingMedia picture, .openingMedia img { display: block; width: 100%; height: 100%; }
        .openingMedia img { object-fit: cover; object-position: center; }
        .openingShade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5,12,23,.67) 0%, rgba(5,12,23,.13) 47%, rgba(5,12,23,.22) 100%); }
        .openingGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          grid-template-rows: 1fr auto;
          min-height: 100svh;
          padding: clamp(2rem,4vw,4rem) clamp(1rem,3.4vw,3.4rem) clamp(2rem,4vw,4rem);
        }
        .openingNo {
          grid-column: 1 / 4;
          align-self: start;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(8rem,24vw,25rem);
          font-weight: 600;
          line-height: .6;
          letter-spacing: -.08em;
          color: rgba(255,255,255,.13);
          transform: translate(-.06em,.03em);
        }
        .openingMeta {
          grid-column: 10 / 13;
          justify-self: end;
          align-self: start;
          max-width: 24ch;
          padding-top: .4rem;
          font-size: .6rem;
          font-weight: 700;
          line-height: 1.65;
          letter-spacing: .14em;
          text-align: right;
          text-transform: uppercase;
        }
        .openingCopy { grid-column: 1 / 12; align-self: end; }
        .eyebrow { margin: 0 0 1rem; font-size: .64rem; font-weight: 700; letter-spacing: .17em; text-transform: uppercase; }
        .title {
          max-width: 9.4ch;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(5.6rem,13.7vw,14.5rem);
          font-weight: 600;
          line-height: .69;
          letter-spacing: -.065em;
          text-wrap: balance;
        }
        .openingDeck {
          grid-column: 8 / 13;
          align-self: end;
          margin: 0 0 .8rem;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.45rem,2.8vw,3rem);
          line-height: 1.02;
          letter-spacing: -.018em;
        }

        .actRail {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          align-items: baseline;
          padding: .8rem clamp(1rem,3.4vw,3.4rem);
          border-bottom: 1px solid var(--line);
          font-size: .56rem;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .actRail strong { grid-column: 1 / 4; color: var(--red); }
        .actRail span { grid-column: 7 / 13; }

        .intro {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.4rem;
          padding: clamp(5rem,10vw,11rem) clamp(1rem,3.4vw,3.4rem) clamp(5rem,9vw,9rem);
        }
        .introMeta {
          grid-column: 1 / 3;
          font-size: .62rem;
          font-weight: 700;
          line-height: 1.75;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .standfirst {
          grid-column: 4 / 10;
          margin: 0;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2.5rem,5.3vw,6.1rem);
          font-weight: 500;
          line-height: .94;
          letter-spacing: -.04em;
        }
        .introAside {
          grid-column: 11 / 13;
          align-self: end;
          padding-top: .65rem;
          border-top: 4px solid var(--yellow);
          font-size: .68rem;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        figure { margin: 0; }
        figure picture, figure img { display: block; width: 100%; }
        figure img { height: auto; }
        figcaption {
          margin-top: .65rem;
          font-size: .5rem;
          font-weight: 700;
          line-height: 1.45;
          letter-spacing: .13em;
          text-transform: uppercase;
          opacity: .55;
        }
        .imageNo {
          display: block;
          margin-bottom: .32rem;
          color: var(--red);
          font-size: .56rem;
          font-weight: 800;
          letter-spacing: .14em;
        }

        .headphonesWrap {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          padding: 0 clamp(1rem,3.4vw,3.4rem) clamp(5rem,9vw,10rem);
        }
        .headphones { grid-column: 2 / 12; }
        .headphones figcaption { max-width: 62ch; }

        .textField {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.4rem;
          padding: clamp(5rem,8vw,9rem) clamp(1rem,3.4vw,3.4rem);
          border-top: 1px solid var(--line);
        }
        .textLabel { grid-column: 1 / 3; font-size: .6rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        .textCopy {
          grid-column: 4 / 8;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(1.35rem,1.9vw,1.8rem);
          line-height: 1.5;
        }
        .textCopy p { margin: 0; }
        .textCopy p + p { margin-top: 1.35em; }
        .textCopy p:first-child::first-letter { float: left; margin: .025em .1em -.04em 0; font-size: 5.4em; font-weight: 600; line-height: .72; }
        .marginNote {
          grid-column: 10 / 13;
          align-self: start;
          margin-top: 10rem;
          font-size: .67rem;
          font-weight: 700;
          line-height: 1.52;
          letter-spacing: .07em;
          text-transform: uppercase;
        }
        .marginNote::before { content: ""; display: block; width: 2.8rem; height: 2px; margin-bottom: .85rem; background: var(--red); }

        .harlequinStage {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          align-items: end;
          padding: clamp(2rem,5vw,5rem) clamp(1rem,3.4vw,3.4rem) clamp(7rem,12vw,14rem);
        }
        .harlequin { grid-column: 1 / 9; }
        .harlequin figcaption { max-width: 58ch; }
        .harlequinWord {
          grid-column: 8 / 13;
          grid-row: 1;
          z-index: 2;
          align-self: center;
          justify-self: end;
          margin: 0;
          color: var(--yellow);
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(5.8rem,13vw,14rem);
          font-weight: 600;
          line-height: .68;
          letter-spacing: -.07em;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .quoteStage {
          position: relative;
          padding: clamp(3rem,6vw,6rem) 0 clamp(6rem,11vw,12rem);
          overflow: hidden;
        }
        .quoteRule { width: calc(100% - 6.8vw); height: 1px; margin-left: 3.4vw; background: var(--line); }
        .quote {
          width: 110vw;
          margin: clamp(3rem,6vw,6rem) 0 0 -4vw;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(5rem,11.8vw,13rem);
          font-weight: 600;
          line-height: .73;
          letter-spacing: -.065em;
          text-transform: uppercase;
        }
        .quote em { color: var(--red); font-style: italic; font-weight: 500; }
        .quoteCredit { margin: 1.8rem 3.4vw 0 auto; width: min(42ch,42vw); font-size: .58rem; font-weight: 700; line-height: 1.5; letter-spacing: .14em; text-transform: uppercase; }

        .blueAct { position: relative; background: var(--picasso); color: #fff; padding: clamp(5rem,9vw,10rem) 0 clamp(6rem,10vw,11rem); }
        .blueAct::before { content: "02"; position: absolute; top: -.08em; right: -.03em; color: rgba(255,255,255,.055); font-family: var(--font-bienvivos-display), serif; font-size: clamp(15rem,38vw,42rem); font-weight: 600; line-height: .7; letter-spacing: -.08em; }
        .blueKicker { position: relative; z-index: 2; margin: 0 3.4vw clamp(3rem,5vw,5rem); font-size: .59rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .blueGrid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.4rem;
          padding: 0 clamp(1rem,3.4vw,3.4rem);
        }
        .striped { grid-column: 5 / 13; }
        .striped figcaption { color: #fff; opacity: .62; }
        .blueCopy {
          grid-column: 1 / 4;
          grid-row: 1;
          align-self: end;
          padding-bottom: 3rem;
          font-family: var(--font-bienvivos-display), serif;
          font-size: clamp(2rem,3.8vw,4.5rem);
          line-height: .96;
          letter-spacing: -.035em;
        }
        .blueCopy strong { display: block; margin-bottom: 1.1rem; color: var(--yellow); font-family: var(--font-bienvivos-sans), sans-serif; font-size: .58rem; line-height: 1.4; letter-spacing: .16em; text-transform: uppercase; }

        .interlude {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.4rem;
          padding: clamp(6rem,11vw,12rem) clamp(1rem,3.4vw,3.4rem);
        }
        .interludeLabel { grid-column: 1 / 3; font-size: .59rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .interludeCopy { grid-column: 4 / 8; font-family: var(--font-bienvivos-display), serif; font-size: clamp(1.32rem,1.85vw,1.74rem); line-height: 1.52; }
        .interludeCopy p { margin: 0 0 1.3em; }
        .interludeAside { grid-column: 9 / 13; align-self: end; font-family: var(--font-bienvivos-display), serif; font-size: clamp(2rem,3.7vw,4.2rem); font-style: italic; line-height: .98; letter-spacing: -.03em; }

        .thresholdStage {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          align-items: end;
          min-height: 90vh;
          padding: clamp(4rem,8vw,8rem) clamp(1rem,3.4vw,3.4rem) clamp(3rem,5vw,5rem);
        }
        .threshold { grid-column: 5 / 13; }
        .threshold figcaption { max-width: 58ch; }
        .thresholdText { grid-column: 1 / 4; grid-row: 1; align-self: end; padding-bottom: 4rem; }
        .thresholdKicker { margin-bottom: 1rem; color: var(--red); font-size: .58rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
        .thresholdLine { margin: 0; font-family: var(--font-bienvivos-display), serif; font-size: clamp(3.4rem,6.4vw,7.4rem); font-weight: 500; line-height: .83; letter-spacing: -.05em; }

        .ending {
          display: grid;
          grid-template-columns: repeat(12,minmax(0,1fr));
          gap: 1.4rem;
          padding: clamp(5rem,9vw,10rem) clamp(1rem,3.4vw,3.4rem) clamp(4rem,7vw,7rem);
          border-top: 1px solid var(--line);
        }
        .endingTitle { grid-column: 1 / 8; margin: 0; font-family: var(--font-bienvivos-display), serif; font-size: clamp(4.4rem,9vw,10rem); font-weight: 600; line-height: .72; letter-spacing: -.065em; }
        .endingMeta { grid-column: 10 / 13; align-self: end; font-size: .58rem; font-weight: 700; line-height: 1.6; letter-spacing: .14em; text-transform: uppercase; }
        .footer { display: flex; justify-content: space-between; gap: 2rem; padding: 1.1rem clamp(1rem,3.4vw,3.4rem) 1.35rem; border-top: 1px solid var(--line); font-size: .58rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; }
        .footer a { color: inherit; }

        @media (max-width: 760px) {
          .folio { grid-template-columns: 1fr auto; padding: .6rem 14px .72rem; }
          .folioBrand { font-size: 1.75rem; }
          .folioCenter { display: none; }
          .folioRight { max-width: 120px; font-size: .5rem; line-height: 1.35; }

          .opening { min-height: auto; background: var(--paper); color: var(--ink); }
          .openingMedia { position: relative; height: 72svh; background: #0d1420; }
          .openingMedia img { object-fit: cover; object-position: center top; }
          .openingShade { display: none; }
          .openingGrid { display: block; min-height: 0; padding: 0; }
          .openingNo { position: absolute; z-index: 3; top: -71svh; left: 12px; color: rgba(255,255,255,.17); font-size: 12rem; }
          .openingMeta { position: absolute; z-index: 3; top: calc(-72svh + 16px); right: 14px; color: #fff; font-size: .5rem; }
          .openingCopy { padding: 38px 16px 42px; }
          .eyebrow { margin-bottom: 13px; font-size: .54rem; }
          .title { max-width: 8ch; font-size: clamp(4rem,19.5vw,6.3rem); line-height: .72; }
          .openingDeck { margin: 0; padding: 0 16px 46px; font-size: 1.48rem; line-height: 1.05; }

          .actRail { grid-template-columns: 1fr auto; padding: .72rem 16px; font-size: .5rem; }
          .actRail strong { grid-column: auto; }
          .actRail span { grid-column: auto; text-align: right; }

          .intro { display: block; padding: 56px 18px 62px; }
          .introMeta { margin-bottom: 38px; padding-bottom: 17px; border-bottom: 1px solid var(--line); font-size: .56rem; }
          .standfirst { font-size: clamp(2.5rem,11.5vw,4.1rem); line-height: .91; }
          .introAside { margin: 42px 0 0 auto; max-width: 240px; font-size: .59rem; }

          .headphonesWrap { display: block; padding: 0 22px 72px; }
          .headphones { width: 100%; }

          .textField { display: block; padding: 66px 20px 76px; }
          .textLabel { margin-bottom: 32px; font-size: .54rem; }
          .textCopy { font-size: 1.28rem; line-height: 1.5; }
          .marginNote { margin: 48px 0 0 auto; max-width: 245px; font-size: .59rem; }

          .harlequinStage { display: block; padding: 0 0 76px; }
          .harlequin { width: 100%; }
          .harlequin figcaption { padding: 0 14px; }
          .harlequinWord { margin: -8px 14px 0; text-align: right; font-size: 5.7rem; mix-blend-mode: normal; color: var(--yellow); }

          .quoteStage { padding: 12px 0 78px; }
          .quoteRule { width: calc(100% - 28px); margin-left: 14px; }
          .quote { width: 118vw; margin: 42px 0 0 -8vw; font-size: clamp(4.2rem,20vw,7rem); line-height: .72; }
          .quoteCredit { width: 62vw; margin: 24px 16px 0 auto; font-size: .52rem; }

          .blueAct { padding: 56px 0 68px; }
          .blueAct::before { top: .04em; right: -.06em; font-size: 18rem; }
          .blueKicker { margin: 0 16px 28px; font-size: .53rem; }
          .blueGrid { display: flex; flex-direction: column; gap: 0; padding: 0; }
          .striped { order: 1; width: 100%; }
          .striped figcaption { padding: 0 14px; }
          .blueCopy { order: 2; padding: 48px 20px 0; font-size: 2.3rem; }

          .interlude { display: block; padding: 72px 20px 84px; }
          .interludeLabel { margin-bottom: 32px; font-size: .53rem; }
          .interludeCopy { font-size: 1.28rem; line-height: 1.5; }
          .interludeAside { margin: 52px 0 0 auto; max-width: 280px; font-size: 2.6rem; }

          .thresholdStage { display: flex; flex-direction: column; min-height: 0; padding: 0 0 70px; }
          .threshold { order: 1; width: calc(100% - 44px); margin: 0 22px; }
          .threshold figcaption { padding: 0; }
          .thresholdText { order: 2; padding: 58px 20px 0; }
          .thresholdLine { max-width: 8ch; font-size: 4rem; line-height: .8; }

          .ending { display: block; padding: 62px 18px 56px; }
          .endingTitle { font-size: clamp(4rem,18vw,6rem); line-height: .72; }
          .endingMeta { margin-top: 42px; font-size: .52rem; }
          .footer { display: block; padding: 20px 16px 24px; line-height: 1.8; font-size: .52rem; }
          .footer span { display: block; margin-top: 8px; }

          figcaption { font-size: .47rem; letter-spacing: .11em; }
        }
      `}</style>

      <header className="folio">
        <Link href="/" className="folioBrand">EASTOKYO</Link>
        <div className="folioCenter">TOKYO · LOOKING OUTWARD</div>
        <div className="folioRight">ISSUE 01 · EXHIBITION 02</div>
      </header>

      <section className="opening" aria-labelledby="story-title">
        <div className="openingMedia">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-man-in-blue-hero-mobile.png" />
            <img src="/images/editorial/picasso-man-in-blue-hero-desktop.png" alt="Portrait of a Man, also known as Man in Blue, painted by Pablo Picasso in 1902" />
          </picture>
          <div className="openingShade" aria-hidden="true" />
        </div>
        <div className="openingGrid">
          <div className="openingNo" aria-hidden="true">02</div>
          <div className="openingMeta">The National Art Center, Tokyo<br />Summer 2026</div>
          <div className="openingCopy">
            <p className="eyebrow">Exhibition · Picasso through the Eyes of Paul Smith</p>
            <h1 id="story-title" className="title">PICASSO,<br />LOOKED AT<br />AGAIN.</h1>
          </div>
          <p className="openingDeck">Paul Smith moves the walls around, and Picasso wakes back up in the room.</p>
        </div>
      </section>

      <div className="actRail"><strong>Act I · Look Again</strong><span>Room / Color / People / Pace</span></div>

      <section className="intro">
        <div className="introMeta">EASTOKYO<br />EXHIBITION<br />ISSUE 01<br /><br />BY JAMES SIMMONS<br />(AKA JIMICHANGA)</div>
        <p className="standfirst">An exhibition is never only the work on the wall. It is also the distance between things, the color around them, the people who stop, and the people who keep walking.</p>
        <aside className="introAside">Paul Smith does not disappear behind Picasso. He changes the temperature of the room around him.</aside>
      </section>

      <section className="headphonesWrap">
        <figure className="headphones">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png" />
            <img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones studies the exhibition installation" loading="lazy" />
          </picture>
          <figcaption><span className="imageNo">01 — LOOKING</span>{credit}</figcaption>
        </figure>
      </section>

      <section className="textField">
        <div className="textLabel">The room enters the picture</div>
        <div className="textCopy">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus a justo volutpat posuere. Curabitur vel sem sed erat convallis fermentum, vitae luctus nibh tincidunt. Integer placerat velit non interdum posuere, massa arcu commodo neque, sit amet pulvinar lectus nibh vitae justo.</p>
          <p>Praesent laoreet erat id risus faucibus, a faucibus lorem feugiat. Donec dictum tincidunt neque, sed consequat ligula viverra id. Nam finibus, ipsum sed volutpat pretium, nibh sapien consequat urna, sed varius lectus eros sed arcu.</p>
          <p>Aliquam erat volutpat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; vivamus accumsan commodo justo, eget feugiat augue tristique sed.</p>
        </div>
        <aside className="marginNote">A room changes a painting before the painting has had a chance to say anything. Color becomes atmosphere. Distance becomes tempo.</aside>
      </section>

      <section className="harlequinStage">
        <figure className="harlequin">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png" />
            <img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Visitors gather around a Picasso painting in a blue-and-yellow harlequin-patterned gallery" loading="lazy" />
          </picture>
          <figcaption><span className="imageNo">02 — THE ROOM</span>{credit}</figcaption>
        </figure>
        <p className="harlequinWord" aria-hidden="true">ROOM.</p>
      </section>

      <section className="quoteStage">
        <div className="quoteRule" />
        <blockquote className="quote">THE WALLS DO NOT <em>DISAPPEAR.</em><br />THEY BECOME PART<br />OF THE LOOKING.</blockquote>
        <div className="quoteCredit">EASTOKYO · Exhibition 02<br />A room is not neutral space.</div>
      </section>

      <section className="blueAct">
        <p className="blueKicker">Act II · The Room Is Part of the Work</p>
        <div className="blueGrid">
          <div className="blueCopy"><strong>Color / intervention / rhythm</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here, exhibition design stops behaving like background and starts setting the pace.</div>
          <figure className="striped">
            <picture>
              <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png" />
              <img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Visitors move through a Picasso gallery lined with Paul Smith color stripes" loading="lazy" />
            </picture>
            <figcaption><span className="imageNo">03 — COLOR</span>{credit}</figcaption>
          </figure>
        </div>
      </section>

      <section className="interlude">
        <div className="interludeLabel">Between rooms</div>
        <div className="interludeCopy">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tortor non nibh sodales, at dictum ex elementum. Sed euismod sapien id commodo fermentum. Maecenas vitae sem ac mauris hendrerit condimentum.</p>
          <p>Morbi vulputate, enim nec varius dignissim, ipsum nibh consequat sem, nec tincidunt neque eros vitae ipsum. Fusce malesuada dolor a risus dignissim, quis consequat augue consequat.</p>
        </div>
        <aside className="interludeAside">Looking is choreography. Somebody stops. Somebody crosses the frame. The room keeps moving.</aside>
      </section>

      <div className="actRail"><strong>Act III · Moving Out</strong><span>Threshold / memory / afterimage</span></div>

      <section className="thresholdStage">
        <div className="thresholdText">
          <div className="thresholdKicker">04 — On the way out</div>
          <p className="thresholdLine">THE ROOM<br />STAYS<br />WITH YOU.</p>
        </div>
        <figure className="threshold">
          <picture>
            <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-threshold-gallery-mobile.png" />
            <img src="/images/editorial/picasso-threshold-gallery-desktop.png" alt="A yellow-framed threshold opens into a pale blue gallery as visitors move through the exhibition" loading="lazy" />
          </picture>
          <figcaption>{credit}</figcaption>
        </figure>
      </section>

      <section className="ending">
        <p className="endingTitle">LOOK AGAIN.</p>
        <div className="endingMeta">Picasso, through the Eyes of Paul Smith<br />The National Art Center, Tokyo<br />EASTOKYO · Issue 01 · Exhibition 02</div>
      </section>

      <footer className="footer">
        <Link href="/">Back to Issue One ↑</Link>
        <span>EASTOKYO · TOKYO · 2026</span>
      </footer>
    </main>
  );
}
