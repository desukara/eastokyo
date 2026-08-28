import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import FrenchTranslateLink from "../eastokyo/FrenchTranslateLink";
import IndexEngagement from "./IndexEngagement";
import "./audit-fixes.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="indexStoryShell"><SiteHeader /><FrenchTranslateLink />{children}<IndexEngagement /><SiteFooter /></div>;
}
