"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroBrief, heroPrimaryCta, totalSections } from "@/lib/briefing-content";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const cornersY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        scrollSnapAlign: "start",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{ position: "absolute", inset: 32, pointerEvents: "none", y: cornersY }}
      >
        <Corner top left />
        <Corner top right />
        <Corner bottom left />
        <Corner bottom right />
      </motion.div>

      <motion.div
        style={{ maxWidth: 1100, margin: "0 auto", width: "100%", y: textY, opacity: fade }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 30 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#3EFF8B",
              boxShadow: "0 0 10px rgba(62,255,139,0.7)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-brief-mono)",
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "#3EFF8B",
              textTransform: "uppercase",
            }}
          >
            {heroBrief.statusLine}
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(48px,8vw,112px)",
            fontWeight: 600,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
            color: "#F4F4F4",
          }}
        >
          {heroBrief.heading}
        </h1>

        <div
          style={{
            height: 1,
            background: "rgba(237,237,237,0.18)",
            margin: "34px 0",
            transformOrigin: "left",
            animation: "brief-ruleGrow 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both",
          }}
        />

        <p
          style={{
            maxWidth: 720,
            fontSize: "clamp(20px,2.4vw,30px)",
            lineHeight: 1.45,
            fontWeight: 400,
            color: "rgba(237,237,237,0.82)",
          }}
        >
          {heroBrief.subhead}
        </p>

        <div style={{ display: "flex", gap: 18, marginTop: 46, flexWrap: "wrap" }}>
          <Magnetic>
            <a
              href={heroPrimaryCta.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 22px",
                background: "#3EFF8B",
                color: "#0A0A0B",
                textDecoration: "none",
                fontFamily: "var(--font-brief-mono)",
                fontSize: 12,
                letterSpacing: "0.12em",
                fontWeight: 600,
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {heroPrimaryCta.label}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 22px",
                border: "1px solid rgba(237,237,237,0.25)",
                color: "#EDEDED",
                textDecoration: "none",
                fontFamily: "var(--font-brief-mono)",
                fontSize: 12,
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              Standing Orders
            </a>
          </Magnetic>
        </div>
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: 42,
          left: 0,
          right: 0,
          padding: "0 56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(237,237,237,0.3)",
            textTransform: "uppercase",
            lineHeight: 1.8,
          }}
        >
          Role · Builder
          <br />
          + Policy
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-brief-mono)",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "rgba(237,237,237,0.4)",
              textTransform: "uppercase",
            }}
          >
            Scroll to brief
          </span>
          <span
            style={{
              width: 1,
              height: 30,
              background: "linear-gradient(180deg, rgba(62,255,139,0.6), transparent)",
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            color: "rgba(237,237,237,0.3)",
            textTransform: "uppercase",
            lineHeight: 1.8,
            textAlign: "right",
          }}
        >
          Sec 01 / {String(totalSections).padStart(2, "0")}
          <br />
          Briefing room
        </div>
      </div>
    </section>
  );
}

function Corner({
  top,
  bottom,
  left,
  right,
}: {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: top ? 0 : undefined,
        bottom: bottom ? 0 : undefined,
        left: left ? 0 : undefined,
        right: right ? 0 : undefined,
        width: 26,
        height: 26,
        borderTop: top ? "1px solid rgba(237,237,237,0.28)" : undefined,
        borderBottom: bottom ? "1px solid rgba(237,237,237,0.28)" : undefined,
        borderLeft: left ? "1px solid rgba(237,237,237,0.28)" : undefined,
        borderRight: right ? "1px solid rgba(237,237,237,0.28)" : undefined,
      }}
    />
  );
}
