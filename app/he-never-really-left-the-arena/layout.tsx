import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import "./arena-finale-polish.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="arena-story-theme"><SiteHeader />{children}<SiteFooter /></div>;
}
