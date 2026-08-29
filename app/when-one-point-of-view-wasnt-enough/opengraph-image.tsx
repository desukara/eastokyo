import { createSocialCard, socialCardContentType, socialCardSize } from "../social-card";

export const alt = "A Single Point of View Would Never Have Been Enough. — EASTOKYO";
export const size = socialCardSize;
export const contentType = socialCardContentType;

export default function OpenGraphImage() {
  return createSocialCard({
    title: "A SINGLE POINT OF VIEW WOULD NEVER HAVE BEEN ENOUGH.",
    image: "/images/editorial/cubism-orange-portrait-hero-desktop.png",
    label: "IDEAS · PICASSO / CUBISM",
  });
}
