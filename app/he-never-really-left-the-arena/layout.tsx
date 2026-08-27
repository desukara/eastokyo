import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import ArenaEngagement from "./ArenaEngagement";
import "./arena-finale-polish.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="arena-story-theme"><ArenaEngagement /><SiteHeader />{children}<SiteFooter /></div>;
}
