import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import ShareRailPreview from "./ShareRailPreview";
import ReactionPreview from "./ReactionPreview";
import "./festival-force.css";
import "./festival-cleanup.css";
import "./mobile-layout-fix.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="asagayaFestivalShell"><ShareRailPreview /><ReactionPreview /><SiteHeader />{children}<SiteFooter /></div>;
}
