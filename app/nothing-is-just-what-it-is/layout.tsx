import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import "./riviera-theme.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="riviera-route"><SiteHeader />{children}<SiteFooter /></div>;
}
