import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import FrenchTranslateLink from "../eastokyo/FrenchTranslateLink";
import PicassoEngagement from "./PicassoEngagement";
import "./hero-art-direction.css";
import "./blueboy-desktop-theme.css";
import "./editorial-fixes.css";
import "./responsive-fixes.css";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>
    <SiteHeader />
    <FrenchTranslateLink />
    {children}
    <style>{`
      @media (max-width: 899px) {
        main#top > header:first-child {
          display: none !important;
        }
      }
    `}</style>
    <PicassoEngagement />
    <SiteFooter />
  </>;
}
