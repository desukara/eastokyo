import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findStoryByShareSlug } from "../../eastokyo/engagement-data";
import ShareLanding from "./ShareLanding";

type PageProps = {
  params: Promise<{ story: string }>;
  searchParams: Promise<{ image?: string | string[] }>;
};

function safeImage(value: string | string[] | undefined, fallback: string) {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return fallback;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    return fallback;
  }
  return decoded.startsWith("/images/editorial/") ? decoded : fallback;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { story: slug } = await params;
  const query = await searchParams;
  const story = findStoryByShareSlug(slug);
  if (!story) return {};

  const image = safeImage(query.image, story.shareImage);
  const sharePath = `/share/${story.shareSlug}`;

  return {
    title: `${story.title} | EASTOKYO`,
    description: story.description,
    alternates: { canonical: `/#${story.anchor}` },
    robots: { index: false, follow: true },
    openGraph: {
      title: story.title,
      description: story.description,
      url: sharePath,
      siteName: "EASTOKYO",
      type: "article",
      images: [{ url: image, alt: story.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.description,
      images: [image],
    },
  };
}

export default async function ShareStoryPage({ params }: PageProps) {
  const { story: slug } = await params;
  const story = findStoryByShareSlug(slug);
  if (!story) notFound();
  return <ShareLanding anchor={story.anchor} title={story.title} />;
}
