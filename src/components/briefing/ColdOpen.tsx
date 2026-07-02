"use client";

import { useEffect, useRef } from "react";

const SEEN_KEY = "brief-cold-open-seen";

// Plays once per session, and any click/keypress skips straight to content.
// An intro may delight the first time; repeated or forced, it's a toll.
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

    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // storage unavailable (private mode) — play normally
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const full = statusLine.toUpperCase();
    let timer: ReturnType<typeof setTimeout>;
    let dismissed = false;

    const dismiss = (instant = false) => {
      if (dismissed) return;
      dismissed = true;
      clearTimeout(timer);
      if (instant) {
        cold.style.display = "none";
        return;
      }
      cold.style.transition = "opacity 0.35s ease";
      cold.style.opacity = "0";
      timer = setTimeout(() => {
        cold.style.display = "none";
      }, 370);
    };

    if (seen || reduceMotion) {
      dismiss(seen);
      return () => clearTimeout(timer);
    }

    const skip = () => dismiss();
    window.addEventListener("pointerdown", skip);
    window.addEventListener("keydown", skip);

    let i = 0;
    const tick = () => {
      if (dismissed) return;
      type.textContent = full.slice(0, i);
      i++;
      if (i <= full.length) {
        timer = setTimeout(tick, 22 + Math.random() * 26);
      } else {
        timer = setTimeout(() => {
          if (dismissed) return;
          if (caret) caret.style.display = "none";
          if (scan) {
            scan.style.opacity = "1";
            scan.style.animation = "brief-scanDown 0.55s cubic-bezier(0.7,0,0.84,0) forwards";
          }
          timer = setTimeout(() => dismiss(), 330);
        }, 450);
      }
    };
    timer = setTimeout(tick, 250);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [statusLine]);

  return (
    <div
      ref={coldRef}
      aria-hidden
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
          padding: "0 20px",
          textAlign: "center",
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
