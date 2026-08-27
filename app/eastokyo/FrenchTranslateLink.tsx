"use client";

import { usePathname } from "next/navigation";

export default function FrenchTranslateLink() {
  const pathname = usePathname();
  const sourceUrl = `https://www.eastokyo.com${pathname}`;
  const translateUrl = `https://translate.google.com/translate?sl=fr&tl=en&u=${encodeURIComponent(sourceUrl)}`;

  return (
    <div style={{ width: "100%", borderBottom: "1px solid rgba(20,20,20,.18)", background: "#f7f2e8" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "7px clamp(16px,3vw,44px)", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
        <a
          href={translateUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read this article in English"
          style={{ color: "#171717", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "10px", fontWeight: 700, lineHeight: 1, letterSpacing: ".16em", textDecoration: "none", textTransform: "uppercase" }}
        >
          ENGLISH
        </a>
      </div>
    </div>
  );
}
