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
          --muted:#6f6a62;
          --orange:#d94e16;
          --blue:#214f78;
          --line:rgba(17,17,15,.13);
          --shell:min(1120px,calc(100vw - 4rem));
          --reading:min(660px,calc(100vw - 4rem));
        }
        *{box-sizing:border-box}
        body{margin:0;background:var(--paper)}
        .story{background:var(--paper);color:var(--ink);font-family:var(--font-bienvivos-sans),sans-serif;overflow:hidden}

        .bar{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;width:var(--shell);margin:0 auto;padding:.56rem 0 .62rem;border-bottom:1px solid var(--line);font-size:.68rem;font-weight:650;letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}
        .brand{color:var(--ink);text-decoration:none;font-size:clamp(1.35rem,1.8vw,1.9rem);font-weight:800;letter-spacing:-.05em;line-height:.9}
        .barCenter{text-align:center}.barRight{text-align:right}

        .opening{width:var(--shell);margin:0 auto;padding-top:clamp(1.1rem,1.8vw,1.8rem);position:relative}
        .hero{width:100vw;margin:0 0 0 calc(50% - 50vw);height:min(72vh,760px);overflow:hidden}
        .hero img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 46%}
        .figure img{display:block;width:100%;height:auto}
        .masthead{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(250px,.38fr);gap:clamp(2rem,4vw,4rem);align-items:end;padding:clamp(2.1rem,3.2vw,3.2rem) 0 1.2rem;position:relative}
        .masthead:before{content:"";position:absolute;left:-6vw;top:0;width:clamp(70px,9vw,130px);height:3px;background:var(--orange)}
        .kicker{margin:0 0 .72rem;color:var(--muted);font-size:.72rem;font-weight:650;letter-spacing:.08em;text-transform:uppercase}
        h1{margin:0;max-width:11ch;font-family:var(--font-bienvivos-display),serif;font-size:clamp(3.8rem,6.5vw,6.7rem);font-weight:600;line-height:.86;letter-spacing:-.045em}
        .titleLine{display:block;position:relative}
        .titleLine:nth-child(2){transform:translateX(clamp(1.3rem,5vw,5rem));color:var(--blue);font-style:italic}
        .deck{margin:0 0 .25rem;font-family:var(--font-bienvivos-display),serif;font-size:clamp(1.26rem,1.7vw,1.68rem);line-height:1.28;max-width:30ch;color:#282520}
        .storyMeta{display:flex;justify-content:space-between;gap:2rem;padding:1rem 0 1.2rem;border-top:1px solid var(--line);font-size:.76rem;line-height:1.45;color:var(--muted)}
        .storyMeta strong{color:var(--ink);font-weight:700}

        .prose{font-family:var(--font-bienvivos-sans),sans-serif;font-size:clamp(1.12rem,1.24vw,1.24rem);line-height:1.7;font-weight:420}
        .prose p{margin:0 0 1.42em}
        .figure{margin:0}
        .caption{margin-top:.58rem;color:var(--muted);font-family:var(--font-bienvivos-sans),sans-serif;font-size:.82rem;line-height:1.4}
        .caption strong{color:var(--ink);font-weight:650}
        .sectionCue{margin:0 0 1.4rem;font-family:var(--font-bienvivos-display),serif;font-size:1.02rem;font-style:italic;color:var(--muted)}
        .motif{width:30px;height:2px;background:var(--orange);margin:0 0 1.25rem}

        .intro{width:var(--reading);margin:0 auto;padding:clamp(4rem,6vw,6rem) 0 clamp(1rem,2vw,2rem);position:relative}
        .intro:after{content:"";position:absolute;right:-12vw;bottom:0;width:38vw;max-width:470px;height:1px;background:var(--line)}
        .introNote{margin:1.6rem -4vw 0 auto;width:max-content;max-width:100%;font-family:var(--font-bienvivos-display),serif;font-size:1.14rem;font-style:italic;color:var(--blue)}

        .viewpoint{width:var(--shell);margin:0 auto;padding:clamp(1rem,2vw,2rem) 0 clamp(5.2rem,7vw,7rem);display:grid;grid-template-columns:minmax(260px,.34fr) minmax(0,.66fr);gap:clamp(1.4rem,2.8vw,2.8rem);align-items:center;position:relative}
        .viewpoint:before{content:"01";position:absolute;left:-4.4vw;top:8%;font-family:var(--font-bienvivos-display),serif;font-size:clamp(3rem,5vw,5rem);line-height:1;color:rgba(17,17,15,.08)}
        .viewpointCopy{max-width:500px;position:relative;z-index:2}
        .viewpointCopy .sectionCue{font-size:clamp(1.45rem,2.2vw,2.2rem);line-height:1.05;color:var(--orange);max-width:9ch;margin-bottom:1.8rem}
        .mainFigure{width:min(720px,66vw);justify-self:end;transform:translateX(5vw);position:relative}
        .mainFigure img{max-height:82vh;object-fit:contain}
        .mainFigure .caption{max-width:20ch;margin-left:auto;text-align:right}

        .fracture{width:var(--shell);margin:0 auto;padding:clamp(4.5rem,6vw,6rem) 0 clamp(4.8rem,6.5vw,6.5rem);display:grid;grid-template-columns:minmax(170px,.22fr) minmax(0,.78fr);gap:clamp(4rem,7vw,7rem);align-items:center;position:relative}
        .supportStage{display:flex;justify-content:flex-start;align-items:center;min-height:480px}
        .supportFigure{width:min(210px,100%)}
        .quote{margin:0;max-width:760px;font-family:var(--font-bienvivos-display),serif;font-size:clamp(2.3rem,3.8vw,4rem);font-weight:500;line-height:.98;letter-spacing:-.03em}
        .quote em{font-style:italic;color:var(--blue)}
        .fractureCopy{max-width:500px;margin:2.2rem 0 0 18%}

        .construction{padding:clamp(2.8rem,4vw,4rem) 0 clamp(5rem,7vw,7rem)}
        .constructionCopy{width:var(--reading);margin:0 auto clamp(3.2rem,4.8vw,4.8rem)}
        .constructionCopy .sectionCue{font-size:clamp(1.45rem,2vw,2rem);line-height:1.1;color:var(--blue);max-width:20ch}
        .aside{max-width:310px;margin:1.35rem -5vw 0 auto;padding-left:.9rem;border-left:3px solid var(--orange);font-family:var(--font-bienvivos-display),serif;font-size:1.08rem;line-height:1.45;color:#3b3731}
        .climax{width:min(900px,calc(100vw - 4rem));margin:0 auto 0 max(2rem,8vw);position:relative}
        .climax:before{content:"";position:absolute;right:-12vw;top:18%;width:22vw;height:3px;background:var(--orange)}
        .climax img{max-height:88vh;object-fit:contain}
        .climax .caption{max-width:24ch}
        .afterClimax{width:min(580px,calc(100vw - 4rem));margin:2.4rem max(2rem,13vw) 0 auto}

        .study{width:var(--shell);margin:clamp(6rem,8vw,8rem) auto 0;display:grid;grid-template-columns:minmax(180px,.28fr) minmax(0,.72fr);gap:clamp(4rem,6vw,6rem);align-items:center}
        .studyStage{display:flex;justify-content:center;align-items:center;min-height:420px}
        .studyFigure{width:min(200px,100%)}
        .studyCopy{max-width:560px}

        .human{padding:clamp(6rem,8vw,8rem) 0 clamp(5rem,7vw,7rem)}
        .humanCopy{width:var(--reading);margin:0 auto}
        .finalFigure{width:min(620px,calc(100vw - 4rem));margin:clamp(4rem,5.5vw,5.5rem) auto 0}
        .finalFigure img{max-height:80vh;object-fit:contain}
        .finalNote{width:min(620px,calc(100vw - 4rem));margin:1rem auto 0;padding-top:.8rem;border-top:2px solid var(--orange);text-align:right;font-family:var(--font-bienvivos-display),serif;font-size:1.08rem;font-style:italic;color:var(--blue)}

        .footer{display:flex;justify-content:space-between;gap:1rem;width:var(--shell);margin:0 auto;padding:.9rem 0 1.3rem;border-top:1px solid var(--line);font-size:.72rem;line-height:1.4;color:var(--muted)}
        .footer a{color:inherit;text-decoration:none}.footer span{text-align:right}

        @media(max-width:720px){
          :root{--shell:calc(100vw - 2rem);--reading:calc(100vw - 2.4rem)}
          .bar{grid-template-columns:1fr auto;padding:.52rem 0;font-size:.62rem}.barCenter{display:none}.barRight{font-size:.6rem}
          .opening{padding-top:.65rem}
          .hero{height:62vh;min-height:430px}
          .masthead{grid-template-columns:1fr;gap:1.2rem;padding:1.6rem 0 .9rem}
          .masthead:before{left:-1rem;width:64px}
          h1{font-size:clamp(3.05rem,13vw,4.45rem);line-height:.87;max-width:9.8ch}
          .titleLine:nth-child(2){transform:translateX(8vw)}
          .deck{font-size:1.25rem;line-height:1.3;max-width:28ch;margin-left:12vw}
          .storyMeta{flex-direction:column;gap:.35rem;padding:.8rem 0 0;font-size:.72rem}
          .prose{font-size:1.08rem;line-height:1.7}
          .intro{padding:3.2rem 0 1rem;margin-left:1.2rem;margin-right:auto}
          .intro:after{right:-18vw;width:55vw}
          .introNote{margin-right:-.4rem}
          .viewpoint,.fracture,.study{grid-template-columns:1fr}
          .viewpoint{gap:1rem;padding:1.2rem 0 4.5rem}
          .viewpoint:before{left:-.6rem;top:2%;font-size:4rem}
          .viewpointCopy{max-width:78vw;margin-left:auto;z-index:2}
          .viewpointCopy .sectionCue{font-size:1.72rem;max-width:8ch;margin-left:-12vw}
          .mainFigure{width:min(94vw,500px);justify-self:end;transform:translateX(12vw);margin-top:-1.2rem}
          .mainFigure img{max-height:76vh}
          .mainFigure .caption{margin-right:12vw}
          .fracture{gap:1.5rem;padding:3.8rem 0 4.5rem}
          .supportStage{min-height:300px;justify-content:flex-start;padding-left:4vw}
          .supportFigure{width:min(168px,44vw)}
          .quote{font-size:clamp(2.15rem,9.2vw,3.05rem);line-height:1;max-width:94%}
          .fractureCopy{max-width:78vw;margin:1.8rem 0 0 auto}
          .construction{padding:2.8rem 0 4.5rem}
          .constructionCopy{margin-bottom:2.8rem}
          .constructionCopy .sectionCue{font-size:1.55rem;max-width:13ch;margin-left:-.5rem}
          .aside{margin-right:-.8rem}
          .climax{width:min(96vw,520px);margin-left:-5vw}
          .climax:before{right:-20vw;width:34vw}
          .climax img{max-height:82vh}
          .climax .caption{margin-left:5vw}
          .afterClimax{width:78vw;margin:2rem 1.2rem 0 auto}
          .study{gap:1.7rem;margin-top:4.5rem}
          .studyStage{min-height:260px;justify-content:flex-end;padding-right:5vw}
          .studyFigure{width:min(158px,42vw)}
          .studyCopy{max-width:80vw;margin-left:0}
          .human{padding:4.8rem 0 4.5rem}
          .humanCopy{margin-left:auto;margin-right:1.2rem}
          .finalFigure{width:min(82vw,430px);margin-top:3.4rem}
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
          <p className="deck">Picasso and Braque decided a picture didn&apos;t have to sit still and behave itself. One point of view was never going to hold everything they wanted to say.</p>
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