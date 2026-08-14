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
          --orange:#d94e16;
          --blue:#214f78;
          --line:rgba(17,17,15,.18);
          --shell:min(1180px,calc(100vw - 3rem));
          --reading:min(720px,calc(100vw - 3rem));
        }
        *{box-sizing:border-box}
        body{margin:0;background:var(--paper)}
        .story{background:var(--paper);color:var(--ink);font-family:var(--font-bienvivos-sans),sans-serif;overflow:hidden}
        .bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;padding:.82rem max(1rem,calc((100vw - 1180px)/2));border-bottom:1px solid var(--line);font-size:.66rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}
        .brand{color:inherit;text-decoration:none;font-size:clamp(1.7rem,2.6vw,2.7rem);font-weight:800;letter-spacing:-.06em;line-height:.85}
        .barCenter{text-align:center}.barRight{text-align:right}

        .hero{width:var(--shell);margin:clamp(2rem,4vw,4rem) auto 0}
        .hero img,.figure img{display:block;width:100%;height:auto}

        .masthead{width:var(--shell);margin:0 auto;padding:clamp(3.2rem,5vw,5.2rem) 0 clamp(4rem,6vw,6rem);display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,.36fr);gap:clamp(2.5rem,6vw,6rem);align-items:end;border-bottom:1px solid var(--line)}
        .kicker,.caption,.note,.footer{font-size:.66rem;font-weight:700;line-height:1.55;letter-spacing:.12em;text-transform:uppercase}
        .kicker{margin:0 0 1rem;color:var(--orange)}
        h1{margin:0;max-width:9ch;font-family:var(--font-bienvivos-display),serif;font-size:clamp(4.2rem,7.5vw,7.8rem);font-weight:600;line-height:.83;letter-spacing:-.046em;text-wrap:balance}
        .deck{margin:0;font-family:var(--font-bienvivos-display),serif;font-size:clamp(1.5rem,2.15vw,2.15rem);line-height:1.18;max-width:27ch}

        .prose{font-family:var(--font-bienvivos-display),serif;font-size:clamp(1.22rem,1.5vw,1.38rem);line-height:1.68}
        .prose p{margin:0 0 1.35em}
        .figure{margin:0}
        .caption{margin-top:.72rem;opacity:.62}
        .caption strong{color:var(--orange)}
        .note{color:var(--blue)}

        .intro{width:var(--reading);margin:0 auto;padding:clamp(4.5rem,7vw,7rem) 0 clamp(4rem,6vw,6rem)}
        .intro p:first-child::first-letter{float:left;margin:.05em .12em 0 0;color:var(--orange);font-size:4.8em;line-height:.72}
        .introNote{width:min(260px,55%);margin:2rem 0 0 auto;padding-top:.75rem;border-top:3px solid var(--orange)}

        .viewpoint{width:var(--shell);margin:0 auto;padding:clamp(4rem,6vw,6rem) 0 clamp(6rem,9vw,9rem);border-top:1px solid var(--line);display:grid;grid-template-columns:minmax(300px,.4fr) minmax(0,.6fr);gap:clamp(3rem,6vw,6rem);align-items:center}
        .viewpointCopy{max-width:580px}
        .mainFigure{width:min(760px,100%);justify-self:end}

        .fracture{width:var(--shell);margin:0 auto;padding:clamp(5rem,8vw,8rem) 0;border-top:1px solid var(--line);display:grid;grid-template-columns:minmax(220px,.28fr) minmax(0,.72fr);gap:clamp(3rem,7vw,7rem);align-items:center}
        .supportFigure{width:min(300px,100%);justify-self:center}
        .quote{margin:0;max-width:820px;font-family:var(--font-bienvivos-display),serif;font-size:clamp(2.8rem,4.5vw,4.8rem);font-weight:500;line-height:.96;letter-spacing:-.035em}
        .quote em{font-style:normal;color:var(--orange)}
        .fractureCopy{max-width:600px;margin-top:2rem}

        .construction{border-top:1px solid var(--line);padding:clamp(5rem,8vw,8rem) 0 clamp(6rem,9vw,9rem)}
        .constructionCopy{width:var(--reading);margin:0 auto clamp(4rem,6vw,6rem)}
        .aside{max-width:340px;margin:1.5rem 0 0 auto;font-family:var(--font-bienvivos-display),serif;font-size:1.05rem;line-height:1.5}
        .climax{width:min(980px,calc(100vw - 3rem));margin:0 auto}
        .afterClimax{width:min(620px,calc(100vw - 3rem));margin:2.2rem auto 0}

        .study{width:var(--shell);margin:clamp(5rem,8vw,8rem) auto 0;display:grid;grid-template-columns:minmax(210px,.3fr) minmax(0,.7fr);gap:clamp(3rem,6vw,6rem);align-items:start}
        .studyFigure{width:min(280px,100%);justify-self:center}
        .studyCopy{max-width:620px;padding-top:clamp(1rem,3vw,3rem)}
        .studyNote{width:min(230px,60%);margin:1.4rem 0 0 auto;padding-top:.7rem;border-top:1px solid var(--line)}

        .human{border-top:1px solid var(--line);padding:clamp(5rem,8vw,8rem) 0 clamp(8rem,12vw,12rem)}
        .humanCopy{width:var(--reading);margin:0 auto}
        .finalFigure{width:min(720px,calc(100vw - 3rem));margin:clamp(5rem,8vw,8rem) auto 0}
        .finalNote{width:min(720px,calc(100vw - 3rem));margin:.95rem auto 0;text-align:right}

        .footer{display:flex;justify-content:space-between;gap:1rem;padding:1rem max(1rem,calc((100vw - 1180px)/2)) 1.3rem;border-top:1px solid var(--line)}
        .footer a{color:inherit;text-decoration:none}.footer span{text-align:right;opacity:.62}

        @media(max-width:720px){
          :root{--shell:calc(100vw - 2rem);--reading:calc(100vw - 2rem)}
          .bar{grid-template-columns:1fr auto;padding:.7rem 1rem}.barCenter{display:none}.barRight{font-size:.55rem}
          .hero{margin-top:1rem}
          .masthead{grid-template-columns:1fr;gap:1.5rem;padding:2.4rem 0 3.4rem}
          h1{font-size:clamp(3.2rem,14vw,4.9rem);line-height:.85}
          .deck{font-size:1.4rem;max-width:29ch}
          .prose{font-size:1.17rem;line-height:1.67}
          .intro{padding:3.5rem 0 4rem}
          .viewpoint,.fracture,.study{grid-template-columns:1fr;gap:2.4rem}
          .viewpoint{padding:3.8rem 0 4.5rem}
          .mainFigure{width:100%;justify-self:auto}
          .fracture{padding:4rem 0 4.5rem}
          .supportFigure{width:min(250px,72vw)}
          .quote{font-size:clamp(2.55rem,11vw,3.9rem)}
          .construction{padding:4rem 0 4.8rem}
          .constructionCopy{margin-bottom:3rem}
          .climax{width:calc(100vw - 2rem)}
          .afterClimax{width:calc(100vw - 2rem)}
          .study{margin-top:4rem}
          .studyFigure{width:min(230px,68vw);justify-self:start}
          .studyCopy{padding-top:0}
          .human{padding:4.5rem 0 6rem}
          .finalFigure{width:calc(100vw - 2rem);margin-top:4rem}
          .finalNote{width:calc(100vw - 2rem)}
          .footer{flex-direction:column;padding:1rem}.footer span{text-align:left}
        }
      `}</style>

      <header className="bar">
        <Link className="brand" href="/eastokyo">EASTOKYO</Link>
        <span className="barCenter">ISSUE 01 · STORY 03 · IDEAS</span>
        <span className="barRight">TOKYO · 2026</span>
      </header>

      <section className="hero" aria-label="Cubism story hero">
        <picture>
          <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-orange-portrait-hero-mobile.png" />
          <img src="/images/editorial/cubism-orange-portrait-hero-desktop.png" alt="Cubist portrait against an orange field" fetchPriority="high" />
        </picture>
      </section>

      <section className="masthead">
        <div>
          <p className="kicker">03 · IDEAS · PICASSO / CUBISM</p>
          <h1>WHEN ONE ANGLE WASN&apos;T ENOUGH.</h1>
        </div>
        <p className="deck">Picasso and Braque decided a picture didn&apos;t have to sit still and behave itself. One point of view was never going to hold everything they wanted to say.</p>
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
              <div className="note studyNote">Small marks. Big consequences.</div>
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
          <div className="note finalNote">Volver al cuerpo.</div>
        </section>
      </article>

      <footer className="footer">
        <Link href="/eastokyo">EASTOKYO · NUMBER ONE</Link>
        <span>PICASSO · CUBISM · EASTOKYO ISSUE 01<br />Unlisted editorial preview · noindex</span>
      </footer>
    </main>
  );
}
