import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A1D3A", color: "#FFFFFF", fontSize: 26, fontWeight: 800, letterSpacing: "-0.08em", border: "5px solid #1D5FFF" }}>
      PK
    </div>,
    size,
  );
}
