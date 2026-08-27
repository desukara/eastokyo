import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import FrenchTranslateLink from "../eastokyo/FrenchTranslateLink";
import ShareRailPreview from "./ShareRailPreview";
import ReactionPreview from "./ReactionPreview";
import MobileViewportGuard from "./MobileViewportGuard";
import "./festival-force.css";
import "./festival-cleanup.css";
import "./mobile-layout-fix.css";
import "./editorial-balance.css";
import "./desktop-blue-section-fix.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="asagayaFestivalShell"><MobileViewportGuard /><ShareRailPreview /><ReactionPreview /><SiteHeader /><FrenchTranslateLink />{children}<SiteFooter /></div>;
}
