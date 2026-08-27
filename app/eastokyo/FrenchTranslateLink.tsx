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
        position: "fixed",
        top: "72px",
        right: "14px",
        zIndex: 2147483000,
        display: "inline-block",
        color: "#171717",
        background: "rgba(247,242,232,.94)",
        border: "1px solid rgba(23,23,23,.22)",
        padding: "7px 9px 6px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "9px",
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: ".15em",
        textDecoration: "none",
        textTransform: "uppercase",
        boxShadow: "0 1px 4px rgba(0,0,0,.08)"
      }}
    >
      ENGLISH
    </a>
  );
}
