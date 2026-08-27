import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";
import IndexEngagement from "./IndexEngagement";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="fr-FR"><SiteHeader />{children}<IndexEngagement /><SiteFooter /></div>;
}
