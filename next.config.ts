import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const frenchArticleHeaders = [
  { key: "Content-Language", value: "fr-FR" },
];

const frenchArticleRoutes = [
  "/he-never-really-left-the-arena",
  "/picasso-seen-with-fresh-eyes",
  "/when-one-point-of-view-wasnt-enough",
  "/the-city-puts-on-a-costume",
  "/nothing-is-just-what-it-is",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      ...frenchArticleRoutes.map((source) => ({
        source,
        headers: frenchArticleHeaders,
      })),
    ];
  },
};

export default nextConfig;
