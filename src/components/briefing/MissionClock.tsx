"use client";

import { useEffect, useState } from "react";

export function MissionClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{
        fontFamily: "var(--font-brief-mono)",
        fontSize: 11,
        letterSpacing: "0.16em",
        color: "rgba(237,237,237,0.4)",
        whiteSpace: "nowrap",
        minWidth: 70,
        display: "inline-block",
      }}
    >
      {time ?? "··:··:··"}
    </span>
  );
}
