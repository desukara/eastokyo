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
    <main className="story">
      <style>{`
        :root {
          --paper:#f3efe6;
          --ink:#11110f;
          --muted:#625f59;
          --orange:#d94e16;
          --blue:#214f78;
          --line:rgba(17,17,15,.14);
          --shell:min(1160px,calc(100vw - 4rem));
          --reading:min(680px,calc(100vw - 4rem));
        }
        *{box-sizing:border-box}
        body{margin:0;background:var(--paper)}
        .story{background:var(--paper);color:var(--ink);font-family:var(--font-bienvivos-sans),sans-serif;overflow:hidden}

        .bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;width:var(--shell);margin:0 auto;padding:.7rem 0;border-bottom:1px solid var(--line);font-size:.72rem;font-weight:650;letter-spacing:.11em;text-transform:uppercase}
        .brand{color:inherit;text-decoration:none;font-size:clamp(1.55rem,2.2vw,2.35rem);font-weight:800;letter-spacing:-.055em;line-height:.9}
        .barCenter{text-align:center;color:var(--muted)}
        .barRight{text-align:right;color:var(--muted)}

        .opening{width:var(--shell);margin:0 auto;padding-top:clamp(2rem,3.5vw,3.5rem)}
        .hero{width:100%;margin:0}
        .hero img,.figure img{display:block;width:100%;height:auto}
        .masthead{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.34fr);gap:clamp(2.5rem,5vw,5rem);align-items:start;padding:clamp(2.6rem,4.5vw,4.5rem) 0 clamp(4.5rem,7vw,7rem)}
        .kicker,.caption,.note,.footer{font-size:.72rem;font-weight:650;line-height:1.5;letter-spacing:.1em;text-transform:uppercase}
        .kicker{margin:0 0 .9rem;color:var(--muted)}
        h1{margin:0;max-width:10.2ch;font-family:var(--font-bienvivos-display),serif;font-size:clamp(3.6rem,6.3vw,6.4rem);font-weight:600;line-height:.9;letter-spacing:-.04em;text-wrap:balance}
        .deck{margin:.2rem 0 0;font-family:var(--font-bienvivos-display),serif;font-size:clamp(1.28rem,1.8vw,1.75rem);line-height:1.28;max-width:30ch;color:#25231f}

        .prose{font-family:var(--font-bienvivos-display),serif;font-size:clamp(1.22rem,1.42vw,1.34rem);line-height:1.66}
        .prose p{margin:0 0 1.4em}
        .figure{margin:0}
        .caption{margin-top:.65rem;color:var(--muted);letter-spacing:.08em}
        .caption strong{color:inherit;font-weight:750}
        .note{color:var(--blue);letter-spacing:.08em}

        .intro{width:var(--reading);margin:0 auto;padding:0 0 clamp(4.5rem,7vw,7rem)}
        .intro p:first-child::first-letter{float:left;margin:.045em .11em 0 0;color:var(--orange);font-size:4.5em;line-height:.73}
        .introNote{width:max-content;max-width:100%;margin:1.6rem 0 0 auto;padding-top:.55rem;border-top:2px solid var(--orange)}

        .viewpoint{width:var(--shell);margin:0 auto;padding:clamp(3.5rem,5vw,5rem) 0 clamp(5rem,7vw,7rem);display:grid;grid-template-columns:minmax(280px,.42fr) minmax(0,.58fr);gap:clamp(3rem,5.5vw,5.5rem);align-items:center}
        .viewpointCopy{max-width:560px}
        .mainFigure{width:min(620px,100%);justify-self:end}
        .mainFigure img{max-height:72vh;object-fit:contain}

        .fracture{width:var(--shell);margin:0 auto;padding:clamp(4.5rem,6.5vw,6.5rem) 0 clamp(5rem,7vw,7rem);display:grid;grid-template-columns:minmax(190px,.25fr) minmax(0,.75fr);gap:clamp(3rem,6vw,6rem);align-items:center}
        .supportFigure{width:min(250px,100%);justify-self:center}
        .quote{margin:0;max-width:760px;font-family:var(--font-bienvivos-display),serif;font-size:clamp(2.25rem,3.5vw,3.7rem);font-weight:500;line-height:1.02;letter-spacing:-.03em}
        .quote em{font-style:normal;color:var(--orange)}
        .fractureCopy{max-width:570px;margin-top:2rem}

        .construction{padding:clamp(4rem,6vw,6rem) 0 clamp(5.5rem,8vw,8rem)}
        .constructionCopy{width:var(--reading);margin:0 auto clamp(3.8rem,5.5vw,5.5rem)}
        .aside{max-width:320px;margin:1.4rem 0 0 auto;padding-left:1rem;border-left:2px solid var(--orange);font-family:var(--font-bienvivos-display),serif;font-size:1.06rem;line-height:1.5;color:#34312c}
        .climax{width:min(760px,calc(100vw - 4rem));margin:0 auto}
        .climax img{max-height:82vh;object-fit:contain}
        .afterClimax{width:min(590px,calc(100vw - 4rem));margin:2rem auto 0}

        .study{width:var(--shell);margin:clamp(4.5rem,7vw,7rem) auto 0;display:grid;grid-template-columns:minmax(180px,.28fr) minmax(0,.72fr);gap:clamp(3rem,5.5vw,5.5rem);align-items:start}
        .studyFigure{width:min(230px,100%);justify-self:center}
        .studyCopy{max-width:590px;padding-top:1rem}
        .studyNote{width:max-content;max-width:100%;margin:1.2rem 0 0 auto;color:var(--muted)}

        .human{padding:clamp(5rem,7vw,7rem) 0 clamp(5rem,7vw,7rem)}
        .humanCopy{width:var(--reading);margin:0 auto}
        .finalFigure{width:min(600px,calc(100vw - 4rem));margin:clamp(4rem,6vw,6rem) auto 0}
        .finalFigure img{max-height:78vh;object-fit:contain}
        .finalNote{width:min(600px,calc(100vw - 4rem));margin:.85rem auto 0;text-align:right;font-family:var(--font-bienvivos-display),serif;font-size:1rem;font-weight:600;letter-spacing:0;text-transform:none;color:var(--blue)}

        .footer{display:flex;justify-content:space-between;gap:1rem;width:var(--shell);margin:0 auto;padding:1rem 0 1.35rem;border-top:1px solid var(--line);color:var(--muted)}
        .footer a{color:inherit;text-decoration:none}.footer span{text-align:right}

        @media(max-width:720px){
          :root{--shell:calc(100vw - 2rem);--reading:calc(100vw - 2.4rem)}
          .bar{grid-template-columns:1fr auto;padding:.65rem 0;font-size:.66rem}.barCenter{display:none}.barRight{font-size:.64rem}
          .opening{padding-top:1rem}
          .masthead{grid-template-columns:1fr;gap:1.25rem;padding:2.1rem 0 3.2rem}
          h1{font-size:clamp(2.9rem,11.5vw,4rem);line-height:.92;max-width:10ch}
          .deck{font-size:1.28rem;line-height:1.3;max-width:31ch}
          .prose{font-size:1.18rem;line-height:1.66}
          .intro{padding-bottom:3.8rem}
          .viewpoint,.fracture,.study{grid-template-columns:1fr;gap:2rem}
          .viewpoint{padding:3rem 0 4rem}
          .viewpointCopy{max-width:none}
          .mainFigure{width:min(86vw,460px);justify-self:center}
          .mainFigure img{max-height:68vh}
          .fracture{padding:3.8rem 0 4.2rem}
          .supportFigure{width:min(210px,58vw);justify-self:start;margin-left:8vw}
          .quote{font-size:clamp(2.1rem,8.8vw,3rem);line-height:1.04}
          .fractureCopy{max-width:none}
          .construction{padding:3.8rem 0 4.5rem}
          .constructionCopy{margin-bottom:2.7rem}
          .climax{width:min(84vw,520px)}
          .climax img{max-height:74vh}
          .afterClimax{width:var(--reading)}
          .study{margin-top:3.8rem}
          .studyFigure{width:min(190px,52vw);justify-self:end;margin-right:6vw}
          .studyCopy{padding-top:0}
          .studyNote{margin-left:0;margin-right:auto}
          .human{padding:4rem 0 4.5rem}
          .finalFigure{width:min(82vw,460px);margin-top:3.6rem}
          .finalFigure img{max-height:72vh}
          .finalNote{width:min(82vw,460px)}
          .footer{flex-direction:column;padding:1rem 0 1.3rem;font-size:.68rem}.footer span{text-align:left}
        }
      `}</style>

      <header className="bar">
        <Link className="brand" href="/eastokyo">EASTOKYO</Link>
        <span className="barCenter">ISSUE 01 · STORY 03 · IDEAS</span>
        <span className="barRight">TOKYO · 2026</span>
      </header>

      <section className="opening" aria-label="Cubism story opening">
        <figure className="hero">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-orange-portrait-hero-mobile.png" />
            <img src="/images/editorial/cubism-orange-portrait-hero-desktop.png" alt="Cubist portrait against an orange field" fetchPriority="high" />
          </picture>
        </figure>
        <div className="masthead">
          <div>
            <p className="kicker">03 · IDEAS · PICASSO / CUBISM</p>
            <h1>WHEN ONE ANGLE WASN&apos;T ENOUGH.</h1>
          </div>
          <p className="deck">Picasso and Braque decided a picture didn&apos;t have to sit still and behave itself. One point of view was never going to hold everything they wanted to say.</p>
        </div>
      </section>

      <article>
        <section className="intro prose">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, augue sed tempor dictum, massa justo feugiat nisl, vitae tristique arcu ligula vitae est. Integer vel dolor at sapien aliquet tincidunt. Suspendisse potenti. Curabitur finibus, augue vitae commodo posuere, sapien justo vulputate odio, et laoreet libero lectus sed neque.</p>
          <p>Vivamus dictum sem ut nisl tristique, quis tincidunt arcu egestas. Praesent vitae ex sed lectus pellentesque tempor. Nulla facilisi. Maecenas sodales ligula at purus vulputate, in pretium erat fermentum. Duis convallis, turpis sit amet luctus sollicitudin, magna augue ultrices velit, non hendrerit lorem enim id massa.</p>
          <div className="note introNote">Mirar otra vez.</div>
        </section>

        <section className="viewpoint">
          <div className="prose viewpointCopy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt velit at posuere bibendum. Curabitur tincidunt, eros vitae luctus consequat, erat dui feugiat dui, at pellentesque sapien nisi sit amet lacus.</p>
            <p>Nam interdum turpis non ante rhoncus, vitae dictum est consequat. Vestibulum feugiat orci nec semper sollicitudin. Nulla facilisi. Duis tristique neque vel sapien egestas, in volutpat massa dignissim.</p>
          </div>
          <figure className="figure mainFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-split-face-main-mobile.png" />
              <img src="/images/editorial/cubism-split-face-main-desktop.png" alt="Cubist seated figure shown through overlapping facial viewpoints" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PABLO PICASSO</strong> · CUBIST FIGURE</figcaption>
          </figure>
        </section>

        <section className="fracture">
          <figure className="figure supportFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-monochrome-study-support-mobile.png" />
              <img src="/images/editorial/cubism-monochrome-study-support-desktop.png" alt="Monochrome Cubist ink and wash study" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PABLO PICASSO</strong> · MONOCHROME STUDY</figcaption>
          </figure>
          <div>
            <p className="quote">A face could turn toward you and away from you <em>at the same time.</em></p>
            <div className="prose fractureCopy">
              <p>Aliquam erat volutpat. Morbi pellentesque augue nec tellus vestibulum, vitae consequat magna posuere. Fusce non justo quis nisl tincidunt posuere. Donec tristique, magna et faucibus dignissim, lectus justo vestibulum arcu, vitae placerat justo nunc ut nibh.</p>
            </div>
          </div>
        </section>

        <section className="construction">
          <div className="constructionCopy prose">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus tortor vel massa accumsan, et efficitur massa fermentum. Sed sed cursus sapien. Morbi sodales lectus a orci feugiat, vel tempor elit imperdiet.</p>
            <p>Etiam viverra, elit eget placerat finibus, risus ipsum dignissim urna, ut vulputate lectus tellus sit amet augue. Integer dignissim nibh non justo volutpat, vel pellentesque dolor ultrices.</p>
            <aside className="aside">The picture stops pretending to be a window. It starts behaving like an object.</aside>
          </div>

          <figure className="figure climax">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-collage-figure-main-mobile.png" />
              <img src="/images/editorial/cubism-collage-figure-main-desktop.png" alt="Cubist collage figure built from layered geometric forms" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PABLO PICASSO</strong> · CONSTRUCTION / COLLAGE</figcaption>
          </figure>

          <div className="afterClimax prose">
            <p>Sed luctus sem in risus feugiat, ut malesuada nulla congue. Aenean volutpat tortor sit amet magna tincidunt, quis porttitor arcu pulvinar. Donec euismod quam vel lacus posuere, at dictum enim viverra.</p>
          </div>

          <div className="study">
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
              <div className="note studyNote">Study / line / revision</div>
            </div>
          </div>
        </section>

        <section className="human">
          <div className="humanCopy prose">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat dolor vel arcu feugiat, at ultricies odio tristique. Suspendisse sed quam quis lectus aliquam feugiat. Sed vulputate neque id metus pulvinar, et varius purus tincidunt.</p>
            <p>Nulla facilisi. Cras commodo velit a purus consequat, vitae consequat neque elementum.</p>
          </div>

          <figure className="figure finalFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-mother-child-main-mobile.png" />
              <img src="/images/editorial/cubism-mother-child-main-desktop.png" alt="Cubist mother and child in vivid orange, blue, and green" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>PABLO PICASSO</strong> · FIGURE GROUP</figcaption>
          </figure>
          <div className="finalNote">Volver al cuerpo.</div>
        </section>
      </article>

      <footer className="footer">
        <Link href="/eastokyo">EASTOKYO · NUMBER ONE</Link>
        <span>PICASSO · CUBISM · ISSUE 01</span>
      </footer>
    </main>
  );
}
