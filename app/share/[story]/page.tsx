import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findStoryByShareSlug } from "../../eastokyo/engagement-data";
import ShareLanding from "./ShareLanding";

type PageProps = {
  params: Promise<{ story: string }>;
  searchParams: Promise<{
    image?: string | string[];
    destination?: string | string[];
    section?: string | string[];
    caption?: string | string[];
  }>;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function safeImage(value: string | string[] | undefined, fallback: string) {
  const raw = first(value);
  if (!raw) return fallback;
  let decoded = raw;
  try { decoded = decodeURIComponent(raw); } catch { return fallback; }
  return decoded.startsWith("/images/editorial/") ? decoded : fallback;
}

function safeDestination(value: string | string[] | undefined, fallback: string) {
  const raw = first(value);
  if (!raw) return fallback;
  let decoded = raw;
  try { decoded = decodeURIComponent(raw); } catch { return fallback; }
  if (!decoded.startsWith("/") || decoded.startsWith("//") || decoded.length > 220) return fallback;
  return decoded.split("#")[0];
}

function safeSection(value: string | string[] | undefined) {
  const raw = first(value);
  if (!raw) return undefined;
  return /^[a-z0-9-]{1,80}$/i.test(raw) ? raw : undefined;
}

function safeCaption(value: string | string[] | undefined, fallback: string) {
  const raw = first(value);
  if (!raw) return fallback;
  let decoded = raw;
  try { decoded = decodeURIComponent(raw); } catch { return fallback; }
  const caption = decoded.trim().replace(/\s+/g, " ");
  return caption ? caption.slice(0, 180) : fallback;
}

function buildSharePath(slug: string, image: string, destination: string, section: string | undefined, caption: string) {
  const query = new URLSearchParams({ image, destination, caption });
  if (section) query.set("section", section);
  return `/share/${slug}?${query.toString()}`;
}

function shareCardUrl(image: string, caption: string) {
  const query = new URLSearchParams({ image, caption });
  return `https://www.eastokyo.com/api/share-card?${query.toString()}`;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { story: slug } = await params;
  const query = await searchParams;
  const story = findStoryByShareSlug(slug);
  if (!story) return {};

  const image = safeImage(query.image, story.shareImage);
  const destination = safeDestination(query.destination, `/#${story.anchor}`);
  const section = safeSection(query.section);
  const caption = safeCaption(query.caption, story.title);
  const hasCustomShare = Boolean(first(query.image) || first(query.destination) || first(query.section) || first(query.caption));
  const sharePath = hasCustomShare ? buildSharePath(story.shareSlug, image, destination, section, caption) : `/share/${story.shareSlug}`;
  const socialImage = shareCardUrl(image, caption);

  return {
    title: caption,
    description: story.description,
    alternates: { canonical: destination },
    robots: { index: false, follow: true },
    openGraph: {
      title: caption,
      description: story.description,
      url: sharePath,
      siteName: "EASTOKYO",
      type: "article",
      images: [{ url: socialImage, width: 1200, height: 630, alt: caption }],
    },
    twitter: {
      card: "summary_large_image",
      title: caption,
      description: story.description,
      images: [socialImage],
    },
  };
}

export default async function ShareStoryPage({ params, searchParams }: PageProps) {
  const { story: slug } = await params;
  const query = await searchParams;
  const story = findStoryByShareSlug(slug);
  if (!story) notFound();

  const destination = safeDestination(query.destination, `/#${story.anchor}`);
  const section = safeSection(query.section);
  const caption = safeCaption(query.caption, story.title);

  return <ShareLanding destination={destination} section={section} title={caption} />;
}
