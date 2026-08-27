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
      aria-label="Read this article in English"
      style={{
        position: "absolute",
        top: "74px",
        right: "clamp(16px,3vw,44px)",
        zIndex: 50,
        color: "inherit",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "10px",
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: ".16em",
        textDecoration: "none",
        textTransform: "uppercase",
        opacity: .72,
        background: "transparent",
        border: 0,
        padding: "8px 0"
      }}
    >
      ENGLISH
    </a>
  );
}
