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

      <section aria-labelledby="story-title" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(300px,1fr)", minHeight: "78vh", borderBottom: "2px solid #111" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "30px", background: "#e2cf48", borderRight: "2px solid #111", textAlign: "center" }}>
          <span style={{ fontSize: "clamp(2rem,5vw,5rem)", fontWeight: 900, letterSpacing: "-0.05em" }}>HERO IMAGE RESERVED</span>
          <small style={{ fontWeight: 700, textTransform: "uppercase" }}>Picasso, through the Eyes of Paul Smith · entrance wall</small>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(28px,5vw,72px)" }}>
          <p style={{ fontSize: ".72rem", fontWeight: 900, letterSpacing: ".12em", textTransform: "uppercase" }}>EXHIBITION · THE NATIONAL ART CENTER, TOKYO</p>
          <h1 id="story-title" style={{ margin: 0, fontSize: "clamp(3rem,7vw,7rem)", lineHeight: .88, letterSpacing: "-0.07em" }}>PICASSO, LOOKED AT AGAIN.</h1>
          <p style={{ fontSize: "clamp(1.2rem,2vw,2rem)", fontWeight: 700 }}>Paul Smith moves the walls around, and Picasso wakes back up in the room.</p>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", gap: "60px", padding: "70px 8vw", borderBottom: "1px solid #111" }}>
        <div style={{ fontSize: ".75rem", lineHeight: 1.55, fontWeight: 900 }}>EASTOKYO<br />EXHIBITION<br />ISSUE 01<br /><br />BY JAMES SIMMONS (AKA JIMICHANGA)</div>
        <div style={{ maxWidth: "860px", fontFamily: "Georgia, Times New Roman, serif", fontSize: "clamp(1.5rem,2.7vw,3rem)", lineHeight: 1.18 }}>
          <p>This is the overview story for <em>Picasso, through the Eyes of Paul Smith</em>: the rooms, the color, the pacing, the people looking, and what happens when the exhibition design becomes part of the way you see Picasso.</p>
          <p style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: ".7rem", fontWeight: 900, letterSpacing: ".14em" }}>DRAFT PAGE · NOT YET PUBLISHED</p>
        </div>
      </section>

      <section style={{ padding: "80px 8vw", borderBottom: "1px solid #111" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 900, letterSpacing: ".12em" }}>THE STORY</p>
        <div style={{ maxWidth: "760px", margin: "0 auto", fontFamily: "Georgia, Times New Roman, serif", fontSize: "1.35rem", lineHeight: 1.55 }}>
          <p style={{ opacity: .45, fontStyle: "italic" }}>Article text begins here.</p>
        </div>
      </section>

      <section style={{ padding: "80px 8vw", borderBottom: "1px solid #111" }}>
        <p style={{ fontSize: ".72rem", fontWeight: 900, letterSpacing: ".12em" }}>IMAGE PLAN · 5 IMAGES</p>
        <ol>
          <li>Entrance / exhibition-title wall · HERO</li>
          <li>Wide room / installation view</li>
          <li>Visitor engaging with the work</li>
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
