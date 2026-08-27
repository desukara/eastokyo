import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import FrenchTranslateLink from "../eastokyo/FrenchTranslateLink";
import IndexEngagement from "./IndexEngagement";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div><SiteHeader /><FrenchTranslateLink />{children}<IndexEngagement /><SiteFooter /></div>;
}
