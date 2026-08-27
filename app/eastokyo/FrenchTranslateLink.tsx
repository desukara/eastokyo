"use client";

import { usePathname } from "next/navigation";

export default function FrenchTranslateLink() {
  const pathname = usePathname();
  const sourceUrl = `https://www.eastokyo.com${pathname}`;
  const translateUrl = `https://translate.google.com/translate?sl=fr&tl=en&u=${encodeURIComponent(sourceUrl)}`;

  return (
    <a
      href={translateUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read this article in English with Google Translate"
      style={{
        position: "fixed",
        right: "14px",
        bottom: "14px",
        zIndex: 2147483000,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 13px",
        border: "1px solid rgba(255,255,255,.24)",
        borderRadius: "999px",
        background: "rgba(18,20,22,.94)",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "11px",
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: ".08em",
        textDecoration: "none",
        boxShadow: "0 5px 18px rgba(0,0,0,.24)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <span>ENGLISH</span>
      <span aria-hidden="true" style={{ opacity: .45 }}>·</span>
      <span style={{ fontWeight: 600, opacity: .78, letterSpacing: ".02em" }}>GOOGLE TRANSLATE</span>
    </a>
  );
}
