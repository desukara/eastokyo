import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import EastokyoMotion from "./eastokyo/EastokyoMotion";
import HomepageEngagement from "./eastokyo/HomepageEngagement";
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
import "./eastokyo/eastokyo-index-balance.css";
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
import "./eastokyo/eastokyo-japan-skin-fixes.css";
import "./eastokyo/eastokyo-hard-edged-palette.css";
import "./eastokyo/eastokyo-mobile-cover-final.css";
import "./styles/article-layout-guardrails.css";
import "./styles/article-placement-repair.css";
import "./styles/article-desktop-mechanics-repair.css";

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
  openGraph: { title: "EASTOKYO — Independent Art Magazine", description: "An independent art magazine based in Tokyo, looking outward.", url: "/", siteName: "EASTOKYO", locale: "fr_FR", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EASTOKYO — Independent Art Magazine" }] },
  twitter: { card: "summary_large_image", title: "EASTOKYO — Independent Art Magazine", description: "An independent art magazine based in Tokyo, looking outward.", images: ["/opengraph-image"] },
};

const mobileCoverAuthority = `
@media (max-width:899px){
.mag-page #latest.mag-cover{position:relative!important;display:block!important;height:auto!important;min-height:0!important;overflow:visible!important;background:#121416!important}
.mag-page #latest .mag-cover-media{position:relative!important;inset:auto!important;display:block!important;width:100%!important;height:auto!important;min-height:0!important;overflow:hidden!important;z-index:0!important}
.mag-page #latest .mag-cover-media img{position:static!important;inset:auto!important;display:block!important;width:100%!important;height:auto!important;max-width:100%!important;object-fit:contain!important;object-position:center top!important}
.mag-page #latest .mag-cover-shade{display:none!important}
.mag-page #latest .mag-cover-grid{position:static!important;display:block!important;width:100%!important;min-height:0!important;padding:1rem 1rem 1.5rem!important;background:#121416!important;transform:none!important}
.mag-page #latest .mag-cover-topline,.mag-page #latest .mag-cover-masthead,.mag-page #latest .mag-cover-description,.mag-page #latest .mag-cover-vertical,.mag-page #latest .mag-cover-barcode{display:none!important}
.mag-page #latest .mag-cover-story{position:static!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important;transform:none!important;overflow:visible!important}
.mag-page #latest .mag-cover-story h1{position:absolute!important;z-index:4!important;top:1.1rem!important;left:1.15rem!important;width:54vw!important;max-width:13.5rem!important;margin:0!important;transform:none!important;color:#fff8ec!important;font-size:clamp(1.9rem,8.2vw,2.65rem)!important;line-height:.92!important;letter-spacing:-.025em!important;text-shadow:0 .06em .1em rgba(0,0,0,.55)!important}
.mag-page #latest .story-cta{display:none!important}
.mag-page #latest .story-cta::before,.mag-page #latest .story-cta::after{display:none!important;content:none!important}
.mag-page #latest .story-cta__action{display:block!important;min-width:0!important;padding:0!important;border:0!important;text-align:center!important;font-size:clamp(.98rem,4vw,1.12rem)!important;line-height:1.05!important;letter-spacing:.075em!important;white-space:nowrap!important}
.mag-page #latest .story-cta__status{display:block!important;padding:0!important;border:0!important;text-align:right!important;font-size:.72rem!important;line-height:1!important;letter-spacing:.14em!important;opacity:.72!important;white-space:nowrap!important}
.mag-page #latest .mag-cover-lines{position:static!important;display:grid!important;grid-template-columns:1fr!important;width:100%!important;max-width:none!important;margin:0!important;transform:none!important;background:transparent!important}
.mag-page #latest .mag-cover-line{position:static!important;padding:.9rem 0!important;margin:0!important;border-top:1px solid rgba(255,248,236,.28)!important;background:transparent!important;transform:none!important}
.mag-page #contents.mag-contents{padding-top:2.5rem!important;padding-bottom:2.5rem!important}
.mag-page #contents .mag-rule-heading{margin-bottom:1.25rem!important}
.mag-page #contents .mag-contents-grid{display:block!important;width:100%!important;gap:0!important}
.mag-page #contents .mag-contents-title{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
.mag-page #contents .mag-contents-title h2{width:100%!important;max-width:none!important;margin:.65rem 0 1.25rem!important;font-size:clamp(2.85rem,10.8vw,4rem)!important;line-height:.88!important;letter-spacing:-.025em!important;text-wrap:balance!important}
.mag-page #contents .mag-contents-image{width:100%!important;margin:0!important}
.mag-page #contents .mag-contents-list{padding-top:1.25rem!important}
}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={`${sans.variable} ${display.variable}`}><style dangerouslySetInnerHTML={{ __html: mobileCoverAuthority }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "EASTOKYO", url: "https://www.eastokyo.com", description: "Independent art magazine based in Tokyo, covering art from around the world." }) }} /><EastokyoMotion /><HomepageEngagement />{children}</body></html>;
}
