import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import "./hero-art-direction.css";
import "./blueboy-desktop-theme.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>
    <SiteHeader />
    {children}
    <SiteFooter />
  </>;
}
