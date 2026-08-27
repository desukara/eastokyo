"use client";

import { usePathname } from "next/navigation";

export default function FrenchTranslateLink() {
  const pathname = usePathname();
  const sourceUrl = `https://www.eastokyo.com${pathname}`;
  const translateUrl = `https://translate.google.com/translate?sl=fr&tl=en&u=${encodeURIComponent(sourceUrl)}`;

  return (
    <div style={{ position: "relative", width: "min(1320px, calc(100vw - 32px))", height: 0, margin: "0 auto", zIndex: 80 }}>
      <a
        href={translateUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read this article in English"
        style={{
          position: "absolute",
          top: "10px",
          right: 0,
          display: "inline-block",
          color: "#171717",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "9px",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: ".16em",
          textDecoration: "none",
          textTransform: "uppercase",
          opacity: .68,
          background: "transparent",
          border: 0,
          borderBottom: "1px solid currentColor",
          padding: "0 0 3px"
        }}
      >
        ENGLISH
      </a>
    </div>
  );
}
