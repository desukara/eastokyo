import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EASTOKYO",
    short_name: "EASTOKYO",
    description: "Independent art magazine based in Tokyo, looking outward.",
    start_url: "/",
    display: "standalone",
    background_color: "#121416",
    theme_color: "#214F78",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
