import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import "./festival-force.css";
import "./festival-cleanup.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="asagayaFestivalShell"><SiteHeader />{children}<SiteFooter /></div>;
}
