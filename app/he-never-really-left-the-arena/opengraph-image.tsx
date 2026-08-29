import { createSocialCard, socialCardContentType, socialCardSize } from "../social-card";

export const alt = "He Never Really Left the Arena. — EASTOKYO";
export const size = socialCardSize;
export const contentType = socialCardContentType;

export default function OpenGraphImage() {
  return createSocialCard({
    title: "HE NEVER REALLY LEFT THE ARENA.",
    image: "/images/editorial/picasso-bullfight-01-desktop.png",
    label: "COVER ARTICLE · PICASSO AND THE ARENA",
  });
}
