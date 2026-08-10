import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
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

/* Shared issue art direction: Bien Vivos now mirrors EASTOKYO exactly. */
import "./eastokyo/eastokyo-cubism-base.css";
import "./eastokyo/picasso-feature.css";
import "./eastokyo/eastokyo-lower-restore.css";
import "./eastokyo/eastokyo-layout-audit.css";
import "./eastokyo/eastokyo-editorial-architecture.css";
import "./eastokyo/eastokyo-editorial-polish.css";
import "./eastokyo/eastokyo-issue-01.css";
import "./eastokyo/eastokyo-final-qa.css";

/* Bien Vivos mobile cascade overrides. Emergency layer must be final. */
import "./styles/bienvivos-mobile-final.css";
import "./styles/bienvivos-mobile-hardfix.css";
import "./styles/bienvivos-mobile-emergency.css";
import "./styles/asagaya-mobile-final.css";

const sans = Montserrat({ variable: "--font-bienvivos-sans", subsets: ["latin"], display: "swap" });
const display = Cormorant_Garamond({ variable: "--font-bienvivos-display", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap" });

export const viewport: Viewport = { themeColor: "#4b0d1d" };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bienvivos.com"),
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Bien Vivos", statusBarStyle: "black-translucent" },
  alternates: { canonical: "/", languages: { es: "https://www.bienvivos.com/", en: "https://www.eastokyo.com/" } },
  title: { default: "Bien Vivos — Revista independiente de arte", template: "%s | Bien Vivos" },
  description: "Bien Vivos es una revista independiente de arte hecha en Tokio para el mundo hispanohablante: exposiciones, artistas, festivales, fotografía, objetos e ideas de Japón y más allá.",
  openGraph: {
    title: "Bien Vivos — Revista independiente de arte",
    description: "Arte desde Tokio, mirando a todas partes.",
    url: "/",
    siteName: "Bien Vivos",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Bien Vivos — Revista independiente de arte" }],
  },
  twitter: { card: "summary_large_image", title: "Bien Vivos — Revista independiente de arte", description: "Arte desde Tokio, mirando a todas partes.", images: ["/opengraph-image"] },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const host = ((await headers()).get("host") ?? "").split(":")[0].toLowerCase();
  const isEastokyo = host === "eastokyo.com" || host === "www.eastokyo.com";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: isEastokyo ? "EASTOKYO" : "Bien Vivos",
    url: isEastokyo ? "https://www.eastokyo.com" : "https://www.bienvivos.com",
    description: isEastokyo ? "Independent art magazine based in Tokyo, covering art from around the world." : "Revista independiente de arte hecha en Tokio para el mundo hispanohablante.",
  };

  return (
    <html lang={isEastokyo ? "en" : "es"}>
      <body className={`${sans.variable} ${display.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
