import { ImageResponse } from "next/og";

export const socialCardSize = { width: 1200, height: 630 };
export const socialCardContentType = "image/png";

type SocialCardOptions = {
  title: string;
  image: string;
  label?: string;
};

export function createSocialCard({ title, image, label = "EASTOKYO · ISSUE 01" }: SocialCardOptions) {
  const imageUrl = new URL(image, "https://www.eastokyo.com").toString();

  return new ImageResponse(
    <div style={{ width: "1200px", height: "630px", display: "flex", background: "#11110f", color: "#f7f1e7", fontFamily: "Arial, Helvetica, sans-serif", padding: "30px", gap: "30px" }}>
      <div style={{ width: "700px", height: "570px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#1b1b1b", border: "1px solid rgba(247,241,231,.18)" }}>
        <img src={imageUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px 4px 8px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", fontSize: "21px", fontWeight: 900, letterSpacing: ".13em" }}>EASTOKYO</div>
          <div style={{ display: "flex", width: "72px", height: "8px", background: "#d2a33a" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ display: "flex", fontSize: "47px", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 1.02 }}>{title}</div>
          <div style={{ display: "flex", fontSize: "17px", fontWeight: 800, letterSpacing: ".12em", lineHeight: 1.3 }}>{label}</div>
        </div>
        <div style={{ display: "flex", fontSize: "17px", fontWeight: 800, letterSpacing: ".1em" }}>TOKYO · LOOKING OUTWARD</div>
      </div>
    </div>,
    socialCardSize,
  );
}
