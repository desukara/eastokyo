import type { MetadataRoute } from "next";

const baseUrl = "https://www.eastokyo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/he-never-really-left-the-arena`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/picasso-seen-with-fresh-eyes`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/when-one-point-of-view-wasnt-enough`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/the-city-puts-on-a-costume`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nothing-is-just-what-it-is`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
