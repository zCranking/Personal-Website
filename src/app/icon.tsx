import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const initials = site.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0B",
          border: "1px solid #3EFF8B",
          color: "#3EFF8B",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        {initials}
      </div>
    ),
    { ...size }
  );
}
