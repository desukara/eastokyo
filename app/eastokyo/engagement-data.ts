export type StoryId = "cover" | "exhibition" | "ideas" | "tokyo" | "index";

export type HomepageStory = {
  id: StoryId;
  shareSlug: string;
  title: string;
  description: string;
  anchor: string;
  ctaSelector: string;
  imageScopes: string[];
  shareImage: string;
  baseHearts: number;
};

/**
 * EDITORIAL HEART CONTROL
 * -----------------------
 * `baseHearts` is the manual/editorial number. Change it whenever you want.
 * Real visitor reactions are stored separately and are added on top of this value.
 *
 * displayed hearts = baseHearts + automatic visitor hearts
 */
export const homepageStories: Record<StoryId, HomepageStory> = {
  cover: {
    id: "cover",
    shareSlug: "arena",
    title: "He Kept Walking Back In.",
    description: "Picasso and the arena he never really left — EASTOKYO, Issue No. 1.",
    anchor: "latest",
    ctaSelector: "#latest .story-cta",
    // Keep the cover itself visually pristine. The story control shares the hero;
    // only the lower bullfighting editorial images receive image-level sharing.
    imageScopes: ["#bullfighting"],
    shareImage: "/images/editorial/picasso-bullfight-01-desktop.png",
    baseHearts: 1284,
  },
  exhibition: {
    id: "exhibition",
    shareSlug: "picasso-looked-at-again",
    title: "Picasso, Looked At Again.",
    description: "Paul Smith moves the walls around, and Picasso wakes back up in Tokyo.",
    anchor: "exhibition",
    ctaSelector: "#exhibition .story-cta",
    imageScopes: ["#exhibition"],
    shareImage: "/images/editorial/picasso-paul-smith-desktop.png",
    baseHearts: 742,
  },
  ideas: {
    id: "ideas",
    shareSlug: "one-angle-wasnt-enough",
    title: "One Angle Wasn't Enough.",
    description: "Picasso, Braque, and the moment one obedient view of the world cracked open.",
    anchor: "cubism",
    ctaSelector: "#cubism .story-cta",
    imageScopes: ["#cubism", "#cubism-works"],
    shareImage: "/images/editorial/picasso-portrait-desktop.png",
    baseHearts: 963,
  },
  tokyo: {
    id: "tokyo",
    shareSlug: "asagaya-tanabata",
    title: "The City Puts On Its Costume.",
    description: "Asagaya Tanabata: paper creatures, lanterns, color, and a Tokyo street fully alive.",
    anchor: "asagaya",
    ctaSelector: "#asagaya .story-cta",
    // The Asagaya grid has tightly art-directed flex/grid geometry. Keep image
    // sharing detached from those figures until it can be mounted without DOM mutation.
    imageScopes: [],
    shareImage: "/images/editorial/la-ciudad-despierta-desktop.png",
    baseHearts: 1187,
  },
  index: {
    id: "index",
    shareSlug: "picasso-index",
    title: "Nothing Is Ever Just What It Seems.",
    description: "Faces, ceramics, stripes, bicycle parts — Picasso's restless index, EASTOKYO No. 1.",
    anchor: "picasso-index",
    ctaSelector: "#picasso-index .story-cta",
    imageScopes: ["#picasso-index"],
    shareImage: "/images/editorial/picasso-index-hero-desktop.png",
    baseHearts: 678,
  },
};

export const homepageStoryList = Object.values(homepageStories);

export function findStoryByShareSlug(slug: string) {
  return homepageStoryList.find((story) => story.shareSlug === slug);
}
