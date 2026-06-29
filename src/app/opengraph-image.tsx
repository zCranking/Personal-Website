import { ImageResponse } from "next/og";
import { site } from "@/lib/content";
import { heroBrief } from "@/lib/briefing-content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0A0A0B",
          color: "#EDEDED",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 28,
            height: 28,
            borderTop: "2px solid rgba(62,255,139,0.6)",
            borderLeft: "2px solid rgba(62,255,139,0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 28,
            height: 28,
            borderBottom: "2px solid rgba(62,255,139,0.6)",
            borderRight: "2px solid rgba(62,255,139,0.6)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 4,
            color: "#3EFF8B",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#3EFF8B",
            }}
          />
          {heroBrief.statusLine}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 700,
            marginTop: 28,
            color: "#F4F4F4",
            letterSpacing: -2,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: 24,
            color: "rgba(237,237,237,0.6)",
            maxWidth: 980,
          }}
        >
          {site.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
