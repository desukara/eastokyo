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

export default function ExhibitionStoryPage() {
  return (
    <main id="top" style={{ minHeight: "100vh", background: "#f1efe7", color: "#111", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", background: "#111", color: "#fff" }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none", fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.06em" }}>EASTOKYO</Link>
        <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".12em" }}>ISSUE 01 · EXHIBITION · 02</div>
      </header>

      <section aria-label="Exhibition entrance" style={{ background: "#111", borderBottom: "2px solid #111" }}>
        <picture style={{ display: "block", width: "100%" }}>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-paul-smith-mobile.png" />
          <img
            src="/images/editorial/picasso-paul-smith-desktop.png"
            alt="Entrance wall for Picasso, through the Eyes of Paul Smith at The National Art Center, Tokyo"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </picture>
      </section>

      <section aria-labelledby="story-title" style={{ padding: "clamp(44px,7vw,96px) 8vw clamp(48px,7vw,96px)", borderBottom: "1px solid #111" }}>
        <p style={{ margin: "0 0 18px", fontSize: ".72rem", fontWeight: 900, letterSpacing: ".12em", textTransform: "uppercase" }}>EXHIBITION · THE NATIONAL ART CENTER, TOKYO</p>
        <h1 id="story-title" style={{ maxWidth: "11ch", margin: 0, fontFamily: "Georgia, Times New Roman, serif", fontSize: "clamp(3.8rem,9vw,9rem)", lineHeight: .82, letterSpacing: "-0.065em" }}>PICASSO, LOOKED AT AGAIN.</h1>
        <p style={{ maxWidth: "36ch", margin: "26px 0 0", fontFamily: "Georgia, Times New Roman, serif", fontSize: "clamp(1.25rem,2.3vw,2.2rem)", lineHeight: 1.18 }}>Paul Smith moves the walls around, and Picasso wakes back up in the room.</p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "minmax(160px,220px) minmax(0,1fr)", gap: "clamp(30px,6vw,80px)", padding: "clamp(50px,7vw,90px) 8vw", borderBottom: "1px solid #111" }}>
        <div style={{ fontSize: ".75rem", lineHeight: 1.55, fontWeight: 900 }}>EASTOKYO<br />EXHIBITION<br />ISSUE 01<br /><br />BY JAMES SIMMONS (AKA JIMICHANGA)</div>
        <div style={{ maxWidth: "860px", fontFamily: "Georgia, Times New Roman, serif", fontSize: "clamp(1.5rem,2.7vw,3rem)", lineHeight: 1.18 }}>
          <p>This is the overview story for <em>Picasso, through the Eyes of Paul Smith</em>: the rooms, the color, the pacing, the people looking, and what happens when the exhibition design becomes part of the way you see Picasso.</p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: ".7rem", fontWeight: 900, letterSpacing: ".14em" }}>DRAFT PAGE · NOT YET PUBLISHED</p>
        </div>
      </section>

      <figure style={{ margin: 0, padding: "clamp(50px,7vw,90px) 0 0" }}>
        <picture style={{ display: "block", width: "min(88vw, 1440px)", margin: "0 auto" }}>
          <source media="(max-width: 700px)" srcSet="/images/editorial/picasso-paying-attention-mobile.jpg" />
          <img
            src="/images/editorial/picasso-paying-attention-desktop.png"
            alt="A visitor wearing headphones studies the exhibition installation"
            loading="lazy"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </picture>
        <figcaption style={{ width: "min(88vw, 1440px)", margin: "10px auto 0", fontSize: ".58rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", opacity: .58 }}>
          PICASSO, THROUGH THE EYES OF PAUL SMITH · THE NATIONAL ART CENTER, TOKYO · PHOTOGRAPHY BY JIMICHANGA
        </figcaption>
      </figure>

      <section style={{ padding: "80px 8vw", borderBottom: "1px solid #111" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 900, letterSpacing: ".12em" }}>THE STORY</p>
        <div style={{ maxWidth: "760px", margin: "0 auto", fontFamily: "Georgia, Times New Roman, serif", fontSize: "1.35rem", lineHeight: 1.55 }}>
          <p style={{ opacity: .45, fontStyle: "italic" }}>Article text begins here.</p>
        </div>
      </section>

      <section style={{ padding: "80px 8vw", borderBottom: "1px solid #111" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 900, letterSpacing: ".12em" }}>IMAGE PLAN · 5 IMAGES</p>
        <ol>
          <li>Entrance / exhibition-title wall · HERO · ADDED</li>
          <li>Visitor engaging with the exhibition · ADDED</li>
          <li>Wide room / installation view</li>
          <li>Paul Smith color / stripe intervention</li>
          <li>Closing room / exit view</li>
        </ol>
      </section>

      <footer style={{ display: "flex", justifyContent: "space-between", padding: "28px 24px", background: "#111", color: "#fff", fontSize: ".75rem", fontWeight: 900 }}>
        <Link href="/" style={{ color: "inherit" }}>BACK TO ISSUE ONE</Link>
        <span>EASTOKYO · TOKYO · 2026</span>
      </footer>
    </main>
  );
}
