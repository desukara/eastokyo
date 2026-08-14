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
        :root{
          --paper:#f3efe6;
          --ink:#11110f;
          --muted:#6f6a62;
          --orange:#d94e16;
          --blue:#214f78;
          --line:rgba(17,17,15,.14);
          --shell:min(1180px,calc(100vw - 4rem));
          --reading:min(690px,calc(100vw - 4rem));
        }
        *{box-sizing:border-box}
        body{margin:0;background:var(--paper)}
        .story{background:var(--paper);color:var(--ink);font-family:var(--font-bienvivos-sans),sans-serif;overflow:hidden}
        .figure{margin:0}
        .figure img,.hero img{display:block;width:100%;height:auto}

        .bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;width:var(--shell);margin:0 auto;padding:.58rem 0 .66rem;border-bottom:1px solid var(--line);font-size:.68rem;font-weight:650;letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}
        .brand{color:var(--ink);text-decoration:none;font-size:clamp(1.35rem,1.8vw,1.9rem);font-weight:800;letter-spacing:-.05em;line-height:.9}
        .barCenter{text-align:center}.barRight{text-align:right}

        .opening{width:var(--shell);margin:0 auto;padding-top:clamp(1.2rem,2vw,2rem)}
        .hero{width:100%;margin:0}
        .masthead{display:block;padding:clamp(2.1rem,3.6vw,3.8rem) 0 1.35rem}
        .kicker{margin:0 0 .72rem;color:var(--muted);font-size:.72rem;font-weight:650;letter-spacing:.08em;text-transform:uppercase}
        h1{margin:0;max-width:11ch;font-family:var(--font-bienvivos-display),serif;font-size:clamp(3.45rem,5.35vw,5.9rem);font-weight:600;line-height:.92;letter-spacing:-.04em}
        .titleLine{display:block}
        .storyMeta{display:flex;justify-content:space-between;gap:2rem;padding:1rem 0 1.15rem;border-top:1px solid var(--line);border-bottom:1px solid var(--line);font-size:.76rem;line-height:1.45;color:var(--muted)}
        .storyMeta strong{color:var(--ink);font-weight:700}

        .prose{font-family:var(--font-bienvivos-sans),sans-serif;font-size:clamp(1.08rem,1.2vw,1.2rem);line-height:1.68;font-weight:420}
        .prose p{margin:0 0 1.42em}
        .caption{margin-top:.62rem;color:var(--muted);font-size:.8rem;line-height:1.4}
        .caption strong{color:var(--ink);font-weight:650}
        .sectionCue{margin:0 0 1.25rem;font-family:var(--font-bienvivos-display),serif;font-size:1.06rem;font-style:italic;color:var(--muted)}
        .motif{width:34px;height:2px;background:var(--orange);margin:0 0 1.3rem}

        .intro{width:var(--reading);margin:0 auto;padding:clamp(4.2rem,6vw,6.2rem) 0 clamp(4rem,5.5vw,5.6rem)}
        .introNote{margin:1.55rem 0 0 auto;width:max-content;max-width:100%;font-family:var(--font-bienvivos-display),serif;font-size:1.08rem;font-style:italic;color:var(--blue)}

        .viewpoint{width:var(--shell);margin:0 auto;padding:clamp(2rem,3vw,3rem) 0 clamp(6rem,8vw,8rem);display:grid;grid-template-columns:minmax(300px,.38fr) minmax(0,.62fr);gap:clamp(3rem,6vw,7rem);align-items:center}
        .viewpointCopy{max-width:500px}
        .mainFigure{width:min(720px,100%);justify-self:end}
        .mainFigure img{max-height:82vh;object-fit:contain;object-position:center}

        .fracture{width:var(--shell);margin:0 auto;padding:0 0 clamp(5.6rem,7vw,7rem);display:grid;grid-template-columns:minmax(180px,.24fr) minmax(0,.76fr);gap:clamp(3.5rem,6.5vw,7rem);align-items:center}
        .supportStage{display:flex;justify-content:flex-start;align-items:center}
        .supportFigure{width:min(220px,100%)}
        .quote{margin:0;max-width:760px;font-family:var(--font-bienvivos-display),serif;font-size:clamp(2rem,3vw,3.2rem);font-weight:500;line-height:1.07;letter-spacing:-.025em}
        .quote em{font-style:italic;color:var(--blue)}
        .fractureCopy{max-width:560px;margin-top:1.8rem}

        .construction{padding:clamp(2.6rem,4vw,4rem) 0 clamp(5.5rem,7.5vw,7.5rem)}
        .constructionCopy{width:var(--reading);margin:0 auto clamp(3.8rem,5vw,5rem)}
        .aside{max-width:320px;margin:1.35rem 0 0 auto;padding-left:.95rem;border-left:2px solid var(--orange);font-family:var(--font-bienvivos-display),serif;font-size:1.06rem;line-height:1.5;color:#3b3731}
        .climax{width:min(940px,calc(100vw - 4rem));margin:0 auto}
        .climax img{max-height:88vh;object-fit:contain;object-position:center}
        .afterClimax{width:min(620px,calc(100vw - 4rem));margin:2.1rem auto 0}

        .study{width:var(--shell);margin:clamp(5.5rem,7vw,7rem) auto 0;display:grid;grid-template-columns:minmax(190px,.25fr) minmax(0,.75fr);gap:clamp(3.5rem,6vw,6.5rem);align-items:center}
        .studyStage{display:flex;justify-content:flex-end;align-items:center}
        .studyFigure{width:min(210px,100%)}
        .studyCopy{max-width:570px}

        .human{padding:clamp(5.5rem,7vw,7rem) 0 clamp(4.5rem,6vw,6rem)}
        .humanCopy{width:var(--reading);margin:0 auto}
        .finalFigure{width:min(650px,calc(100vw - 4rem));margin:clamp(4rem,5.5vw,5.5rem) auto 0}
        .finalFigure img{max-height:80vh;object-fit:contain;object-position:center}
        .finalNote{width:min(650px,calc(100vw - 4rem));margin:1rem auto 0;padding-top:.8rem;border-top:2px solid var(--orange);text-align:right;font-family:var(--font-bienvivos-display),serif;font-size:1.08rem;font-style:italic;color:var(--blue)}

        .footer{display:flex;justify-content:space-between;gap:1rem;width:var(--shell);margin:0 auto;padding:.9rem 0 1.3rem;border-top:1px solid var(--line);font-size:.72rem;line-height:1.4;color:var(--muted)}
        .footer a{color:inherit;text-decoration:none}.footer span{text-align:right}

        @media(max-width:900px){
          .viewpoint{grid-template-columns:1fr;gap:2.5rem}
          .viewpointCopy{max-width:var(--reading)}
          .mainFigure{width:min(78vw,620px);justify-self:center}
        }

        @media(max-width:720px){
          :root{--shell:calc(100vw - 2rem);--reading:calc(100vw - 2.4rem)}
          .bar{grid-template-columns:1fr auto;padding:.52rem 0;font-size:.62rem}.barCenter{display:none}.barRight{font-size:.6rem}
          .opening{padding-top:.8rem}
          .masthead{padding:1.8rem 0 .9rem}
          h1{font-size:clamp(2.75rem,10.5vw,3.7rem);line-height:.95;max-width:10.5ch}
          .storyMeta{flex-direction:column;gap:.35rem;padding:.85rem 0 1rem;font-size:.72rem}
          .prose{font-size:1.06rem;line-height:1.68}
          .intro{padding:3.2rem 0 3.8rem}
          .viewpoint{gap:2rem;padding:1.5rem 0 4.8rem}
          .mainFigure{width:min(91vw,520px)}
          .mainFigure img{max-height:78vh}
          .fracture{grid-template-columns:1fr;gap:2rem;padding-bottom:4.5rem}
          .supportStage{justify-content:flex-start;padding-left:7vw}
          .supportFigure{width:min(175px,46vw)}
          .quote{font-size:clamp(1.9rem,7.3vw,2.55rem);line-height:1.08}
          .fractureCopy{max-width:none}
          .construction{padding:2.8rem 0 4.8rem}
          .constructionCopy{margin-bottom:3rem}
          .climax{width:min(94vw,560px)}
          .climax img{max-height:82vh}
          .afterClimax{width:var(--reading)}
          .study{grid-template-columns:1fr;gap:2rem;margin-top:4.5rem}
          .studyStage{justify-content:flex-end;padding-right:7vw}
          .studyFigure{width:min(170px,43vw)}
          .studyCopy{max-width:none}
          .human{padding:4.4rem 0 4.4rem}
          .finalFigure{width:min(82vw,430px);margin-top:3.5rem}
          .finalFigure img{max-height:74vh}
          .finalNote{width:min(82vw,430px)}
          .footer{flex-direction:column;padding:.85rem 0 1.2rem;font-size:.68rem}.footer span{text-align:left}
        }
      `}</style>

      <header className="bar">
        <Link className="brand" href="/eastokyo">EASTOKYO</Link>
        <span className="barCenter">Issue 01 · Story 03</span>
        <span className="barRight">Tokyo · 2026</span>
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
            <p className="kicker">03 · Ideas · Picasso / Cubism</p>
            <h1><span className="titleLine">WHEN ONE ANGLE</span><span className="titleLine">WASN&apos;T ENOUGH.</span></h1>
          </div>
        </div>

        <div className="storyMeta">
          <span><strong>Words</strong> · EASTOKYO</span>
          <span>Tokyo · Issue 01 · 2026</span>
        </div>
      </section>

      <article>
        <section className="intro prose">
          <div className="motif" aria-hidden="true" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, augue sed tempor dictum, massa justo feugiat nisl, vitae tristique arcu ligula vitae est. Integer vel dolor at sapien aliquet tincidunt. Suspendisse potenti. Curabitur finibus, augue vitae commodo posuere, sapien justo vulputate odio, et laoreet libero lectus sed neque.</p>
          <p>Vivamus dictum sem ut nisl tristique, quis tincidunt arcu egestas. Praesent vitae ex sed lectus pellentesque tempor. Nulla facilisi. Maecenas sodales ligula at purus vulputate, in pretium erat fermentum. Duis convallis, turpis sit amet luctus sollicitudin, magna augue ultrices velit, non hendrerit lorem enim id massa.</p>
          <div className="introNote">Mirar otra vez.</div>
        </section>

        <section className="viewpoint">
          <div className="prose viewpointCopy">
            <p className="sectionCue">One object, several positions.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt velit at posuere bibendum. Curabitur tincidunt, eros vitae luctus consequat, erat dui feugiat dui, at pellentesque sapien nisi sit amet lacus.</p>
            <p>Nam interdum turpis non ante rhoncus, vitae dictum est consequat. Vestibulum feugiat orci nec semper sollicitudin. Nulla facilisi. Duis tristique neque vel sapien egestas, in volutpat massa dignissim.</p>
          </div>
          <figure className="figure mainFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-split-face-main-mobile.png" />
              <img src="/images/editorial/cubism-split-face-main-desktop.png" alt="Cubist seated figure shown through overlapping facial viewpoints" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>Pablo Picasso</strong> · Cubist figure</figcaption>
          </figure>
        </section>

        <section className="fracture">
          <div className="supportStage">
            <figure className="figure supportFigure">
              <picture>
                <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-monochrome-study-support-mobile.png" />
                <img src="/images/editorial/cubism-monochrome-study-support-desktop.png" alt="Monochrome Cubist ink and wash study" loading="lazy" />
              </picture>
              <figcaption className="caption"><strong>Pablo Picasso</strong> · Monochrome study</figcaption>
            </figure>
          </div>
          <div>
            <p className="quote">A face could turn toward you and away from you <em>at the same time.</em></p>
            <div className="prose fractureCopy">
              <p>Aliquam erat volutpat. Morbi pellentesque augue nec tellus vestibulum, vitae consequat magna posuere. Fusce non justo quis nisl tincidunt posuere. Donec tristique, magna et faucibus dignissim, lectus justo vestibulum arcu, vitae placerat justo nunc ut nibh.</p>
            </div>
          </div>
        </section>

        <section className="construction">
          <div className="constructionCopy prose">
            <p className="sectionCue">The picture stops pretending to be a window.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus tortor vel massa accumsan, et efficitur massa fermentum. Sed sed cursus sapien. Morbi sodales lectus a orci feugiat, vel tempor elit imperdiet.</p>
            <p>Etiam viverra, elit eget placerat finibus, risus ipsum dignissim urna, ut vulputate lectus tellus sit amet augue. Integer dignissim nibh non justo volutpat, vel pellentesque dolor ultrices.</p>
            <aside className="aside">It starts behaving like an object.</aside>
          </div>

          <figure className="figure climax">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-collage-figure-main-mobile.png" />
              <img src="/images/editorial/cubism-collage-figure-main-desktop.png" alt="Cubist collage figure built from layered geometric forms" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>Pablo Picasso</strong> · Construction / collage</figcaption>
          </figure>

          <div className="afterClimax prose">
            <p>Sed luctus sem in risus feugiat, ut malesuada nulla congue. Aenean volutpat tortor sit amet magna tincidunt, quis porttitor arcu pulvinar. Donec euismod quam vel lacus posuere, at dictum enim viverra.</p>
          </div>

          <div className="study">
            <div className="studyStage">
              <figure className="figure studyFigure">
                <picture>
                  <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-pencil-head-support-mobile.png" />
                  <img src="/images/editorial/cubism-pencil-head-support-desktop.png" alt="Cubist pencil head study on aged paper" loading="lazy" />
                </picture>
                <figcaption className="caption"><strong>Pablo Picasso</strong> · Pencil head study</figcaption>
              </figure>
            </div>
            <div className="prose studyCopy">
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac dolor sed erat tincidunt dictum. Quisque vitae viverra augue. Fusce aliquet tincidunt odio, quis interdum turpis porta eget.</p>
              <p>Praesent nec massa vitae justo feugiat pulvinar. In sit amet hendrerit urna. Curabitur vel elementum est, sed malesuada justo.</p>
            </div>
          </div>
        </section>

        <section className="human">
          <div className="humanCopy prose">
            <div className="motif" aria-hidden="true" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat dolor vel arcu feugiat, at ultricies odio tristique. Suspendisse sed quam quis lectus aliquam feugiat. Sed vulputate neque id metus pulvinar, et varius purus tincidunt.</p>
            <p>Nulla facilisi. Cras commodo velit a purus consequat, vitae consequat neque elementum.</p>
          </div>

          <figure className="figure finalFigure">
            <picture>
              <source media="(max-width: 720px)" srcSet="/images/editorial/cubism-mother-child-main-mobile.png" />
              <img src="/images/editorial/cubism-mother-child-main-desktop.png" alt="Cubist mother and child in vivid orange, blue, and green" loading="lazy" />
            </picture>
            <figcaption className="caption"><strong>Pablo Picasso</strong> · Figure group</figcaption>
          </figure>
          <div className="finalNote">Volver al cuerpo.</div>
        </section>
      </article>

      <footer className="footer">
        <Link href="/eastokyo">EASTOKYO · Number One</Link>
        <span>Picasso · Cubism · Issue 01</span>
      </footer>
    </main>
  );
}