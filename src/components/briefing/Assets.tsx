"use client";

import { motion } from "framer-motion";
import { assets, sectionIndex } from "@/lib/briefing-content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Assets() {
  return (
    <section
      id="assets"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px",
        borderTop: "1px solid rgba(237,237,237,0.08)",
        scrollSnapAlign: "start",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <SectionLabel index={sectionIndex.assets} label="Assets" trailing="Standard loadout" />
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
            Equipment carried into every operation.
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            background: "rgba(237,237,237,0.1)",
            border: "1px solid rgba(237,237,237,0.1)",
          }}
        >
          {assets.map((a, i) => (
            <AssetTile key={a.slot} asset={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AssetTile({
  asset,
  index,
}: {
  asset: { slot: string; name: string; kind: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ backgroundColor: "#131316" }}
      style={{
        background: "#0A0A0B",
        padding: "28px 22px",
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          style={{
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "rgba(237,237,237,0.35)",
          }}
        >
          {asset.slot}
        </span>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#3EFF8B",
            opacity: 0.6,
          }}
        />
      </div>
      <div>
        <div style={{ fontSize: 19, fontWeight: 600, color: "#F4F4F4", letterSpacing: "-0.01em" }}>
          {asset.name}
        </div>
        <div
          style={{
            marginTop: 4,
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "rgba(237,237,237,0.4)",
            textTransform: "uppercase",
          }}
        >
          {asset.kind}
        </div>
      </div>
    </motion.div>
  );
}
