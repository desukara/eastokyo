import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import FrenchTranslateLink from "../eastokyo/FrenchTranslateLink";
import ArenaEngagement from "./ArenaEngagement";
import "./arena-finale-polish.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="arena-story-theme"><ArenaEngagement /><SiteHeader /><FrenchTranslateLink />{children}<SiteFooter /></div>;
}
