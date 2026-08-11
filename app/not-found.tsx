import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
        background: "#F3EBDD",
        color: "#121416",
      }}
    >
      <div>
        <p style={{ letterSpacing: ".18em", fontWeight: 700 }}>ERROR 404 · TOKYO</p>
        <h1 style={{ fontFamily: "var(--font-bienvivos-display)", fontSize: "clamp(3rem, 10vw, 8rem)", margin: ".3em 0" }}>
          THIS PAGE WENT LOOKING ELSEWHERE.
        </h1>
        <p>It is not here, but EASTOKYO is.</p>
        <Link href="/" style={{ display: "inline-block", marginTop: "2rem", fontWeight: 700 }}>
          BACK TO EASTOKYO ↑
        </Link>
      </div>
    </main>
  );
}
