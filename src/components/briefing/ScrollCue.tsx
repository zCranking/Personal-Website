"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function ScrollCue({ targetId, label }: { targetId: string; label: string }) {
  const [burstKey, setBurstKey] = useState(0);

  const handleClick = () => {
    setBurstKey((k) => k + 1);
    smoothScrollTo(targetId);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Scroll to ${targetId}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        pointerEvents: "auto",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-brief-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          color: "rgba(237,237,237,0.4)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>

      <span style={{ position: "relative", width: 28, height: 28 }}>
        <AnimatePresence>
          {[0, 1].map((i) => (
            <motion.span
              key={`${burstKey}-${i}`}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 2.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "1px solid #3EFF8B",
              }}
            />
          ))}
        </AnimatePresence>

        <motion.span
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1px solid rgba(62,255,139,0.5)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 6,
            height: 6,
            marginTop: -3,
            marginLeft: -3,
            borderRadius: "50%",
            background: "#3EFF8B",
            boxShadow: "0 0 8px rgba(62,255,139,0.8)",
          }}
        />
      </span>

      <motion.span
        animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 1,
          height: 22,
          background: "linear-gradient(180deg, rgba(62,255,139,0.7), transparent)",
        }}
      />
    </button>
  );
}
