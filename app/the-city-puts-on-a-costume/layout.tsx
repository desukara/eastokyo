import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import SharePrototype from "./SharePrototype";
import "./festival-force.css";
import "./festival-cleanup.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="asagayaFestivalShell"><SharePrototype /><SiteHeader />{children}<SiteFooter /></div>;
}
