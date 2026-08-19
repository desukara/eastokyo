import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import EastokyoMotion from "./eastokyo/EastokyoMotion";
import HomepageEngagement from "./eastokyo/HomepageEngagement";
import EngagementLockdown from "./eastokyo/EngagementLockdown";
import "./globals.css";
import "./styles/header.css";
import "./styles/features.css";
import "./styles/features-two.css";
import "./styles/responsive.css";
import "./styles/polish.css";
import "./styles/motion.css";
import "./styles/motion-fixes.css";
import "./styles/editorial-balance.css";
import "./styles/crisp-cover.css";
import "./styles/launch-hard-reset.css";
import "./styles/site-audit.css";
import "./styles/masculine-palette.css";
import "./styles/social-icons.css";
import "./styles/homepage-engagement.css";
import "./styles/magazine-home.css";
import "./styles/magazine-qa.css";
import "./styles/magazine-mobile-repair.css";
import "./styles/magazine-desktop-repair.css";
import "./styles/magazine-brand-image-pass.css";
import "./styles/magazine-final-visual-fix.css";
import "./styles/live-image-menu-correction.css";
import "./styles/mobile-menu-single-close.css";
import "./styles/mobile-menu-overlap-fix.css";
import "./styles/bien-vivos-passion-pass.css";
import "./styles/cover-art-direction.css";
import "./styles/nav-contrast-fix.css";
import "./styles/bien-vivos-logo.css";
import "./styles/hero-image.css";
import "./styles/tokio-no-es-gris-image.css";
import "./styles/todo-vivos-image.css";
import "./styles/bienvivos-picasso-mirror.css";
import "./styles/picasso-story2-clean-hero.css";
import "./eastokyo/eastokyo-cubism-base.css";
import "./eastokyo/picasso-feature.css";
import "./eastokyo/eastokyo-lower-restore.css";
import "./eastokyo/eastokyo-layout-audit.css";
import "./eastokyo/eastokyo-editorial-architecture.css";
import "./eastokyo/eastokyo-editorial-polish.css";
import "./eastokyo/eastokyo-issue-01.css";
import "./eastokyo/eastokyo-final-qa.css";
import "./eastokyo/eastokyo-mobile-image-repair.css";
import "./eastokyo/eastokyo-mobile-emergency.css";
import "./styles/asagaya-mobile-final.css";
import "./styles/asagaya-desktop-photo-preserve.css";
import "./styles/asagaya-story-desktop-sizing.css";
import "./eastokyo/eastokyo-language-cleanup.css";
import "./eastokyo/eastokyo-story-cta.css";
import "./eastokyo/eastokyo-mobile-review-fixes.css";
import "./eastokyo/eastokyo-asagaya-balance-panels.css";
import "./eastokyo/eastokyo-issue-01-art-direction.css";
import "./eastokyo/eastokyo-index-balance-spacing.css";
import "./eastokyo/eastokyo-mobile-footer-copy.css";
import "./eastokyo/eastokyo-mobile-authority.css";
import "./eastokyo/eastokyo-wordmark-authority.css";
import "./eastokyo/eastokyo-motion-system.css";
import "./eastokyo/eastokyo-mini-cover-authority.css";
import "./eastokyo/eastokyo-active-nav.css";
import "./eastokyo/eastokyo-engagement-polish.css";
import "./eastokyo/eastokyo-engagement-lockdown.css";
import "./eastokyo/eastokyo-japan-skin.css";

const sans = Montserrat({ variable: "--font-bienvivos-sans", subsets: ["latin"], display: "swap" });
const display = Cormorant_Garamond({ variable: "--font-bienvivos-display", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap" });

export const viewport: Viewport = { themeColor: "#214F78" };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eastokyo.com"),
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "EASTOKYO", statusBarStyle: "black-translucent" },
  alternates: { canonical: "/" },
  title: { default: "EASTOKYO — Independent Art Magazine", template: "%s | EASTOKYO" },
  description: "EASTOKYO is an independent art magazine based in Tokyo, covering exhibitions, galleries, fairs, festivals, books, archives, photography, installations and ideas from around the world.",
  openGraph: {
    title: "EASTOKYO — Independent Art Magazine",
    description: "An independent art magazine based in Tokyo, looking outward.",
    url: "/",
    siteName: "EASTOKYO",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EASTOKYO — Independent Art Magazine" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EASTOKYO — Independent Art Magazine",
    description: "An independent art magazine based in Tokyo, looking outward.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "EASTOKYO", url: "https://www.eastokyo.com", description: "Independent art magazine based in Tokyo, covering art from around the world." }) }} /><EastokyoMotion /><HomepageEngagement /><EngagementLockdown />{children}</body></html>;
}
