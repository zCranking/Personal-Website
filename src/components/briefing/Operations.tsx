"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ops, type Op, sectionIndex } from "@/lib/briefing-content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Operations({ onOpen }: { onOpen: (idx: number) => void }) {
  return (
    <section
      id="operations"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "120px 40px",
        borderTop: "1px solid rgba(237,237,237,0.08)",
        scrollSnapAlign: "start",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <SectionLabel index={sectionIndex.operations} label="Operations" trailing="Click folder to declassify" />
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(30px,4vw,46px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#F4F4F4",
              marginBottom: 50,
            }}
          >
            Three operations. Same operating doctrine.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {ops.map((op, i) => (
            <OperationCard key={op.code} op={op} index={i} onClick={() => onOpen(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OperationCard({
  op,
  index,
  onClick,
}: {
  op: Op;
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        cursor: "pointer",
        minHeight: 340,
        padding: 26,
        background: hovered ? "#131316" : "#101012",
        border: `1px solid ${hovered ? "rgba(62,255,139,0.4)" : "rgba(237,237,237,0.1)"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transitionProperty: "border-color, background",
        transitionDuration: "0.3s",
      }}
      whileHover={{ y: -4 }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 18,
          height: 18,
          borderTop: "1px solid rgba(62,255,139,0.4)",
          borderLeft: "1px solid rgba(62,255,139,0.4)",
        }}
      />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-brief-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              color: "#3EFF8B",
            }}
          >
            {op.code}
          </span>
          <span
            style={{
              fontFamily: "var(--font-brief-mono)",
              fontSize: 10,
              letterSpacing: "0.14em",
              color: hovered ? "#3EFF8B" : "rgba(237,237,237,0.35)",
              textTransform: "uppercase",
              transition: "color 0.3s",
            }}
          >
            Status: {hovered ? "Declassified" : "Classified"}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(237,237,237,0.4)",
            textTransform: "uppercase",
          }}
        >
          {op.tag}
        </span>
        <h3
          style={{
            marginTop: 10,
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#F4F4F4",
            lineHeight: 1.05,
          }}
        >
          {op.title}
        </h3>
      </div>
      <div>
        <div
          style={{
            overflow: "hidden",
            maxHeight: hovered ? 120 : 0,
            opacity: hovered ? 1 : 0,
            transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s",
          }}
        >
          <p style={{ fontSize: 15, lineHeight: 1.5, color: "rgba(237,237,237,0.7)", paddingBottom: 16 }}>
            {op.teaser}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.16em",
            color: "rgba(237,237,237,0.5)",
            textTransform: "uppercase",
          }}
        >
          <span>Open dossier</span>
          <span style={{ color: "#3EFF8B" }}>→</span>
        </div>
      </div>
    </motion.div>
  );
}
