import { createSocialCard, socialCardContentType, socialCardSize } from "../social-card";

export const alt = "Picasso Seen With Fresh Eyes. — EASTOKYO";
export const size = socialCardSize;
export const contentType = socialCardContentType;

export default function OpenGraphImage() {
  return createSocialCard({
    title: "PICASSO SEEN WITH FRESH EYES.",
    image: "/images/editorial/picasso-man-in-blue-hero-desktop.png",
    label: "EXHIBITION · PICASSO SEEN BY PAUL SMITH",
  });
}
