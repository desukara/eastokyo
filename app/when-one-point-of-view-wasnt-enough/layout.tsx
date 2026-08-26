import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import "./desktop-editorial-repair.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
