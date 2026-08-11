import { ImageResponse } from "next/og";

export const alt = "EASTOKYO — Independent Art Magazine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#FFF8EC",
          background: "#121416",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 84% 18%, #86B9D3 0, transparent 25%), radial-gradient(circle at 18% 86%, #DD762A 0, transparent 30%), linear-gradient(125deg, #214F78, #121416 62%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "44px solid #F1C61B",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 58px 44px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 26, fontWeight: 800, letterSpacing: "0.08em" }}>
              Nº 01 · 01.09.2026
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: "0.08em" }}>
              TOKYO · LOOKING OUTWARD
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 128, fontWeight: 900, letterSpacing: "-0.08em", lineHeight: 0.8 }}>
              EASTOKYO
            </div>
            <div style={{ marginTop: 34, maxWidth: 900, fontSize: 72, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.9 }}>
              Art from Tokyo, looking everywhere.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ maxWidth: 720, fontFamily: "sans-serif", fontSize: 25, fontWeight: 700, lineHeight: 1.25 }}>
              Independent art magazine · Tokyo and beyond.
            </div>
            <div style={{ padding: "14px 22px", color: "#121416", background: "#F1C61B", fontFamily: "sans-serif", fontSize: 23, fontWeight: 900 }}>
              EASTOKYO.COM
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
