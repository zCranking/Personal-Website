"use client";

import { useEffect, useRef } from "react";

export function ColdOpen({ statusLine }: { statusLine: string }) {
  const coldRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cold = coldRef.current;
    const type = typeRef.current;
    const caret = caretRef.current;
    const scan = scanRef.current;
    if (!cold || !type) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const full = statusLine.toUpperCase();
    let timer: ReturnType<typeof setTimeout>;

    if (reduceMotion) {
      cold.style.transition = "opacity 0.3s ease";
      cold.style.opacity = "0";
      timer = setTimeout(() => {
        cold.style.display = "none";
      }, 300);
      return () => clearTimeout(timer);
    }

    let i = 0;
    const tick = () => {
      type.textContent = full.slice(0, i);
      i++;
      if (i <= full.length) {
        timer = setTimeout(tick, 34 + Math.random() * 40);
      } else {
        timer = setTimeout(() => {
          if (caret) caret.style.display = "none";
          if (scan) {
            scan.style.opacity = "1";
            scan.style.animation = "brief-scanDown 0.55s cubic-bezier(0.7,0,0.84,0) forwards";
          }
          timer = setTimeout(() => {
            cold.style.transition = "opacity 0.5s ease";
            cold.style.opacity = "0";
            timer = setTimeout(() => {
              cold.style.display = "none";
            }, 520);
          }, 360);
        }, 750);
      }
    };
    timer = setTimeout(tick, 500);

    return () => clearTimeout(timer);
  }, [statusLine]);

  return (
    <div
      ref={coldRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "#0A0A0B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-brief-mono)",
          fontSize: 13,
          letterSpacing: "0.18em",
          color: "#3EFF8B",
          textTransform: "uppercase",
        }}
      >
        <span ref={typeRef} />
        <span
          ref={caretRef}
          style={{
            display: "inline-block",
            width: 9,
            height: 16,
            background: "#3EFF8B",
            marginLeft: 3,
            verticalAlign: -2,
            animation: "brief-blink 1s steps(1) infinite",
          }}
        />
      </div>
      <div
        ref={scanRef}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(62,255,139,0.55), transparent)",
          opacity: 0,
        }}
      />
    </div>
  );
}
