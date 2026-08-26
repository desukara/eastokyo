import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div><SiteHeader />{children}<SiteFooter /></div>;
}
