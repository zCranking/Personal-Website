"use client";

import { motion } from "framer-motion";

export function SectionLabel({
  index,
  label,
  trailing,
}: {
  index: string;
  label: string;
  trailing?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
      <span
        style={{
          fontFamily: "var(--font-brief-mono)",
          fontSize: 11,
          letterSpacing: "0.22em",
          color: "rgba(237,237,237,0.45)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {index} — {label}
      </span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: 1,
          background: "rgba(237,237,237,0.12)",
          transformOrigin: "left",
        }}
      />
      {trailing && (
        <span
          style={{
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            color: "rgba(237,237,237,0.32)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {trailing}
        </span>
      )}
    </div>
  );
}
