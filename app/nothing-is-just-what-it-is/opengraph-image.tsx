import { createSocialCard, socialCardContentType, socialCardSize } from "../social-card";

export const alt = "Nothing Is Just What It Is. — EASTOKYO";
export const size = socialCardSize;
export const contentType = socialCardContentType;

export default function OpenGraphImage() {
  return createSocialCard({
    title: "NOTHING IS JUST WHAT IT IS.",
    image: "/images/editorial/index-hero-desktop.jpg",
    label: "INDEX · PICASSO",
  });
}
