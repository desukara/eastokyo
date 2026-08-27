import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import PicassoEngagement from "./PicassoEngagement";
import "./hero-art-direction.css";
import "./blueboy-desktop-theme.css";
import "./editorial-fixes.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>
    <SiteHeader />
    {children}
    <PicassoEngagement />
    <SiteFooter />
  </>;
}
