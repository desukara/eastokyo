import { createSocialCard, socialCardContentType, socialCardSize } from "../social-card";

export const alt = "The City Puts on a Costume. — EASTOKYO";
export const size = socialCardSize;
export const contentType = socialCardContentType;

export default function OpenGraphImage() {
  return createSocialCard({
    title: "THE CITY PUTS ON A COSTUME.",
    image: "/images/editorial/asagaya-hero-01-desktop.jpg",
    label: "TOKYO · ASAGAYA TANABATA",
  });
}
