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

const caption = "PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY BY JIMICHANGA";

export default function ExhibitionStoryPage() {
  return (
    <main id="top" className="story-shell">
      <style>{`
        :root {
          --paper: #f1efe7;
          --ink: #111;
          --blue: #2d4f91;
          --yellow: #f3ca34;
          --hairline: rgba(17,17,17,.22);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--paper); }
        .story-shell { min-height: 100vh; background: var(--paper); color: var(--ink); font-family: Arial, Helvetica, sans-serif; overflow: hidden; }
        .masthead { display: flex; justify-content: space-between; align-items: center; padding: 15px 22px; background: #111; color: #fff; }
        .brand { color: inherit; text-decoration: none; font-size: clamp(1.65rem,3vw,2.25rem); font-weight: 900; letter-spacing: -.065em; }
        .issue { font-size: .67rem; font-weight: 800; letter-spacing: .14em; text-align: right; }

        .hero { background: #111; border-bottom: 1px solid #111; }
        .hero picture, .hero img { display: block; width: 100%; }
        .hero img { height: auto; }

        .title-block { display: grid; grid-template-columns: minmax(0,1fr) minmax(220px,30vw); gap: 6vw; align-items: end; padding: clamp(54px,8vw,116px) 7vw clamp(58px,8vw,112px); border-bottom: 1px solid var(--ink); }
        .eyebrow { margin: 0 0 22px; font-size: .68rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }
        h1 { max-width: 10ch; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(4.6rem,10vw,10.5rem); line-height: .78; letter-spacing: -.07em; font-weight: 700; }
        .deck { margin: 0; max-width: 25ch; font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.35rem,2.2vw,2.25rem); line-height: 1.15; }

        .intro { display: grid; grid-template-columns: minmax(150px,210px) minmax(0,760px); gap: clamp(34px,7vw,110px); justify-content: center; padding: clamp(58px,8vw,112px) 7vw; }
        .meta { font-size: .69rem; line-height: 1.65; font-weight: 900; letter-spacing: .06em; text-transform: uppercase; }
        .standfirst { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.75rem,3.2vw,3.45rem); line-height: 1.08; letter-spacing: -.025em; }
        .working-note { display: inline-block; margin-top: 28px; padding: 8px 11px 7px; border: 1px solid var(--ink); font-size: .62rem; line-height: 1; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }

        .prose-grid { display: grid; grid-template-columns: minmax(0,640px) minmax(160px,260px); gap: clamp(45px,8vw,140px); width: min(86vw,1120px); margin: 0 auto; padding: clamp(70px,9vw,132px) 0; }
        .prose { font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.15rem,1.55vw,1.42rem); line-height: 1.62; }
        .prose p { margin: 0 0 1.35em; }
        .prose p:first-child::first-letter { float: left; margin: .03em .12em -.02em 0; font-size: 5.2em; line-height: .73; font-weight: 700; }
        .side-note { align-self: start; padding-top: 7px; border-top: 5px solid var(--ink); font-size: .72rem; line-height: 1.55; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }

        figure { margin: 0; }
        figure img { display: block; width: 100%; height: auto; }
        .figure-wide { width: min(88vw,1440px); margin: 0 auto; }
        .figure-left { width: min(76vw,1120px); margin-left: 6vw; }
        .figure-right { width: min(72vw,1040px); margin-left: auto; margin-right: 5vw; }
        .figure-full { width: 100%; }
        figcaption { margin-top: 10px; font-size: .56rem; line-height: 1.45; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; opacity: .56; }
        .figure-wide figcaption { width: 100%; }
        .figure-left figcaption, .figure-right figcaption { max-width: 760px; }
        .figure-full figcaption { width: min(88vw,1440px); margin-left: auto; margin-right: auto; }

        .bridge { display: grid; grid-template-columns: minmax(0,520px) minmax(260px,1fr); gap: 8vw; align-items: start; width: min(86vw,1180px); margin: 0 auto; padding: clamp(72px,10vw,145px) 0; }
        .bridge-copy { font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.08rem,1.5vw,1.35rem); line-height: 1.62; }
        .bridge-copy p { margin: 0 0 1.35em; }
        .pull { margin: 0; padding-top: 12px; border-top: 8px solid var(--yellow); font-family: Georgia, "Times New Roman", serif; font-size: clamp(2.2rem,4.3vw,5rem); line-height: .96; letter-spacing: -.045em; }

        .color-band { margin: clamp(78px,10vw,148px) 0; padding: clamp(64px,8vw,110px) 0; background: var(--blue); color: #fff; }
        .color-band-inner { display: grid; grid-template-columns: minmax(0,1fr) minmax(260px,420px); gap: 6vw; width: min(88vw,1320px); margin: 0 auto; align-items: end; }
        .color-band .figure-wide { width: 100%; }
        .color-band figcaption { color: #fff; opacity: .68; }
        .color-note { font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.35rem,2.4vw,2.45rem); line-height: 1.12; }
        .color-note strong { display: block; margin-bottom: 16px; font-family: Arial, Helvetica, sans-serif; font-size: .64rem; line-height: 1.3; letter-spacing: .14em; text-transform: uppercase; }

        .closing-copy { width: min(76vw,760px); margin: 0 auto; padding: clamp(76px,9vw,132px) 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.15rem,1.55vw,1.42rem); line-height: 1.62; }
        .closing-copy p { margin: 0 0 1.35em; }
        .closing-kicker { margin-bottom: 24px; font-family: Arial, Helvetica, sans-serif; font-size: .66rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }

        .closing-figure { margin-top: 12px; }
        .end-mark { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; padding: clamp(48px,6vw,84px) 7vw; border-top: 1px solid var(--ink); }
        .end-title { margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(2rem,4.5vw,5rem); line-height: .95; letter-spacing: -.04em; }
        .end-meta { max-width: 300px; font-size: .62rem; line-height: 1.5; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; text-align: right; }

        footer { display: flex; justify-content: space-between; gap: 24px; padding: 26px 22px; background: #111; color: #fff; font-size: .7rem; font-weight: 900; letter-spacing: .04em; }
        footer a { color: inherit; }

        @media (max-width: 760px) {
          .masthead { padding: 12px 14px; }
          .issue { max-width: 130px; font-size: .57rem; line-height: 1.3; }
          .title-block { display: block; padding: 42px 18px 48px; }
          .eyebrow { margin-bottom: 16px; font-size: .6rem; }
          h1 { max-width: 8ch; font-size: clamp(4rem,20vw,6.5rem); line-height: .79; }
          .deck { margin-top: 28px; max-width: 28ch; font-size: 1.28rem; }

          .intro { display: block; padding: 42px 18px 56px; }
          .meta { margin-bottom: 34px; padding-bottom: 18px; border-bottom: 1px solid var(--hairline); font-size: .62rem; }
          .standfirst { font-size: clamp(1.65rem,8.5vw,2.55rem); line-height: 1.07; }
          .working-note { margin-top: 24px; }

          .prose-grid { display: block; width: auto; padding: 64px 20px 70px; }
          .prose { font-size: 1.12rem; line-height: 1.58; }
          .side-note { margin-top: 46px; max-width: 270px; }

          .figure-wide, .figure-left, .figure-right { width: calc(100% - 28px); margin-left: 14px; margin-right: 14px; }
          .figure-full { width: 100%; }
          figcaption { padding: 0 2px; font-size: .5rem; letter-spacing: .09em; }
          .figure-full figcaption { width: calc(100% - 28px); }

          .bridge { display: flex; flex-direction: column-reverse; gap: 46px; width: auto; padding: 72px 20px 76px; }
          .bridge-copy { font-size: 1.12rem; }
          .pull { font-size: clamp(2.75rem,14vw,4.5rem); border-top-width: 6px; }

          .color-band { margin: 76px 0; padding: 18px 0 58px; }
          .color-band-inner { display: block; width: 100%; }
          .color-band .figure-wide { width: 100%; margin: 0; }
          .color-band figcaption { width: calc(100% - 28px); margin-left: 14px; margin-right: 14px; }
          .color-note { padding: 46px 20px 0; font-size: 1.55rem; }

          .closing-copy { width: auto; padding: 72px 20px; font-size: 1.12rem; }
          .closing-figure { margin-top: 0; }
          .end-mark { display: block; padding: 44px 18px 48px; }
          .end-title { font-size: 2.75rem; }
          .end-meta { margin-top: 26px; text-align: left; }
          footer { display: block; padding: 24px 16px; line-height: 1.8; }
          footer span { display: block; margin-top: 8px; }
        }
      `}</style>

      <header className="masthead">
        <Link href="/" className="brand">EASTOKYO</Link>
        <div className="issue">ISSUE 01 · EXHIBITION · 02</div>
      </header>

      <section className="hero" aria-label="Portrait of a Man by Pablo Picasso">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-man-in-blue-hero-mobile.png" />
          <img src="/images/editorial/picasso-man-in-blue-hero-desktop.png" alt="Portrait of a Man, also known as Man in Blue, painted by Pablo Picasso in 1902" />
        </picture>
      </section>

      <section className="title-block" aria-labelledby="story-title">
        <div>
          <p className="eyebrow">Exhibition · The National Art Center, Tokyo</p>
          <h1 id="story-title">PICASSO, LOOKED AT AGAIN.</h1>
        </div>
        <p className="deck">Paul Smith moves the walls around, and Picasso wakes back up in the room.</p>
      </section>

      <section className="intro">
        <div className="meta">EASTOKYO<br />EXHIBITION<br />ISSUE 01<br /><br />BY JAMES SIMMONS<br />(AKA JIMICHANGA)</div>
        <div>
          <p className="standfirst">An exhibition is never only the work on the wall. It is also the distance between things, the color around them, the people who stop, and the people who keep walking.</p>
          <span className="working-note">Working layout · placeholder copy</span>
        </div>
      </section>

      <figure className="figure-wide">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-overview-headphones-mobile.png" />
          <img src="/images/editorial/picasso-overview-headphones-desktop.png" alt="A visitor wearing headphones studies the exhibition installation" loading="lazy" />
        </picture>
        <figcaption>{caption}</figcaption>
      </figure>

      <section className="prose-grid">
        <div className="prose">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae tellus a justo volutpat posuere. Curabitur vel sem sed erat convallis fermentum, vitae luctus nibh tincidunt. Integer placerat, velit non interdum posuere, massa arcu commodo neque, sit amet pulvinar lectus nibh vitae justo.</p>
          <p>Praesent laoreet erat id risus faucibus, a faucibus lorem feugiat. Donec dictum tincidunt neque, sed consequat ligula viverra id. Nam finibus, ipsum sed volutpat pretium, nibh sapien consequat urna, sed varius lectus eros sed arcu.</p>
          <p>Aliquam erat volutpat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; vivamus accumsan commodo justo, eget feugiat augue tristique sed.</p>
        </div>
        <aside className="side-note">A room changes a painting before the painting has had a chance to say anything. Color becomes atmosphere. Distance becomes tempo. Looking becomes choreography.</aside>
      </section>

      <figure className="figure-left">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-harlequin-gallery-mobile.png" />
          <img src="/images/editorial/picasso-harlequin-gallery-desktop.png" alt="Visitors gather around a Picasso painting in a blue-and-yellow harlequin-patterned gallery" loading="lazy" />
        </picture>
        <figcaption>{caption}</figcaption>
      </figure>

      <section className="bridge">
        <div className="bridge-copy">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus tortor non nibh sodales, at dictum ex elementum. Sed euismod sapien id commodo fermentum. Maecenas vitae sem ac mauris hendrerit condimentum.</p>
          <p>Morbi vulputate, enim nec varius dignissim, ipsum nibh consequat sem, nec tincidunt neque eros vitae ipsum. Fusce malesuada dolor a risus dignissim, quis consequat augue consequat.</p>
        </div>
        <blockquote className="pull">The walls do not disappear. They become part of the looking.</blockquote>
      </section>

      <section className="color-band">
        <div className="color-band-inner">
          <figure className="figure-wide">
            <picture>
              <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-striped-gallery-mobile.png" />
              <img src="/images/editorial/picasso-striped-gallery-desktop.png" alt="Visitors move through a Picasso gallery lined with Paul Smith color stripes" loading="lazy" />
            </picture>
            <figcaption>{caption}</figcaption>
          </figure>
          <div className="color-note"><strong>Room / Color / Pace</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lorem nec arcu volutpat tempor. Here, the exhibition design stops behaving like background and starts setting the rhythm.</div>
        </div>
      </section>

      <figure className="figure-right">
        <picture>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-threshold-gallery-mobile.png" />
          <img src="/images/editorial/picasso-threshold-gallery-desktop.png" alt="A yellow-framed threshold opens into a pale blue gallery as visitors move through the exhibition" loading="lazy" />
        </picture>
        <figcaption>{caption}</figcaption>
      </figure>

      <section className="closing-copy">
        <div className="closing-kicker">On the way out</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique eros sit amet nisl tristique, quis sollicitudin ipsum posuere. In hac habitasse platea dictumst. Duis aliquet aliquet ligula, vitae dignissim turpis malesuada id.</p>
        <p>Quisque pretium dolor sed metus porta, id scelerisque ligula feugiat. Curabitur vitae arcu non augue consectetur faucibus. Sed vestibulum velit sed nisi vulputate, sed luctus erat tincidunt. What remains is not only a sequence of pictures, but the memory of moving from one room into the next.</p>
      </section>

      <section className="end-mark">
        <p className="end-title">THE ROOM<br />STAYS WITH YOU.</p>
        <div className="end-meta">Picasso, through the Eyes of Paul Smith<br />The National Art Center, Tokyo<br />EASTOKYO · Issue 01</div>
      </section>

      <footer>
        <Link href="/">BACK TO ISSUE ONE</Link>
        <span>EASTOKYO · TOKYO · 2026</span>
      </footer>
    </main>
  );
}
