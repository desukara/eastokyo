import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteHeader />{children}<SiteFooter /></>;
}
