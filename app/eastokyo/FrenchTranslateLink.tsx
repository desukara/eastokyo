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
        right: "14px",
        bottom: "14px",
        zIndex: 2147483000,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "82px",
        padding: "10px 14px",
        border: "1px solid rgba(255,255,255,.18)",
        borderRadius: "999px",
        background: "rgba(18,20,22,.92)",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "11px",
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: ".12em",
        textDecoration: "none",
        boxShadow: "0 4px 16px rgba(0,0,0,.2)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      ENGLISH
    </a>
  );
}
