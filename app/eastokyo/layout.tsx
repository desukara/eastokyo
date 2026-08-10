import type { Metadata } from "next";
import "./eastokyo-cubism-base.css";
import "./picasso-feature.css";
import "./eastokyo-lower-restore.css";
import "./eastokyo-layout-audit.css";
import "./eastokyo-editorial-architecture.css";
import "./eastokyo-editorial-polish.css";
import "./eastokyo-issue-01.css";
import "./eastokyo-final-qa.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eastokyo.com"),
  appleWebApp: {
    capable: true,
    title: "EASTOKYO",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "https://www.eastokyo.com/",
      es: "https://www.bienvivos.com/",
    },
  },
  title: { absolute: "EASTOKYO — Independent Art Magazine" },
  description: "EASTOKYO is an independent art magazine based in Tokyo, covering exhibitions, galleries, fairs, festivals, books, archives, photography, installations and ideas from around the world.",
  openGraph: {
    title: "EASTOKYO — Independent Art Magazine",
    description: "An independent art magazine based in Tokyo, looking outward.",
    url: "/", siteName: "EASTOKYO", locale: "en_US", type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EASTOKYO — Independent Art Magazine" }],
  },
  twitter: { card: "summary_large_image", title: "EASTOKYO — Independent Art Magazine", description: "An independent art magazine based in Tokyo, looking outward.", images: ["/opengraph-image"] },
};

export default function EastokyoLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
