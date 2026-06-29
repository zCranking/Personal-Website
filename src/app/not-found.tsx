import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        background: "#0A0A0B",
        color: "#EDEDED",
        fontFamily: "ui-monospace, 'JetBrains Mono', monospace",
        textAlign: "center",
        padding: 40,
      }}
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.22em",
          color: "#3EFF8B",
          textTransform: "uppercase",
        }}
      >
        Briefing · Signal Lost
      </span>
      <h1
        style={{
          fontSize: "clamp(40px,8vw,72px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: 0,
          color: "#F4F4F4",
        }}
      >
        404 — Dossier Not Found
      </h1>
      <p style={{ color: "rgba(237,237,237,0.55)", fontSize: 15, maxWidth: 440 }}>
        This sector hasn&apos;t been declassified. It may have been moved, sealed, or never
        existed.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            padding: "12px 20px",
            background: "#3EFF8B",
            color: "#0A0A0B",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.12em",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Return to Briefing
        </Link>
        <Link
          href="/letter"
          style={{
            padding: "12px 20px",
            border: "1px solid rgba(237,237,237,0.25)",
            color: "#EDEDED",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.12em",
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          Read the Letter
        </Link>
      </div>
    </div>
  );
}
