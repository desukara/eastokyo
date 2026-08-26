import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import ShareRailPreview from "./ShareRailPreview";
import "./festival-force.css";
import "./festival-cleanup.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="asagayaFestivalShell"><ShareRailPreview /><SiteHeader />{children}<SiteFooter /></div>;
}
