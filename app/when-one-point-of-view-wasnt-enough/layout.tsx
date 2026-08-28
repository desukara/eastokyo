import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import FrenchTranslateLink from "../eastokyo/FrenchTranslateLink";
import CubismEngagement from "./CubismEngagement";
import "./desktop-editorial-repair.css";
import "./editorial-polish.css";
import "./targeted-layout-repair.css";
import "./responsive-fixes.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader /><FrenchTranslateLink />{children}<CubismEngagement /><SiteFooter /></>;
}
