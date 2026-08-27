import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import CubismEngagement from "./CubismEngagement";
import "./desktop-editorial-repair.css";
import "./editorial-polish.css";
import "./targeted-layout-repair.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="fr-FR"><SiteHeader />{children}<CubismEngagement /><SiteFooter /></div>;
}
