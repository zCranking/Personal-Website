"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { heroBrief, ops, SHOW_OPERATIONS } from "@/lib/briefing-content";
import { ColdOpen } from "./ColdOpen";
import { CursorGlow } from "./CursorGlow";
import { TopNav } from "./TopNav";
import { Hero } from "./Hero";
import { Situation } from "./Situation";
import { Operations } from "./Operations";
import { Assets } from "./Assets";
import { StandingOrders } from "./StandingOrders";
import { DossierModal } from "./DossierModal";

const initials = site.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

export function BriefingRoom() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("briefing-scroll");
    return () => document.documentElement.classList.remove("briefing-scroll");
  }, []);

  useEffect(() => {
    if (openIdx == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIdx(null);
      } else if (["j", "J", "ArrowDown", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        setOpenIdx((cur) => (cur == null ? 0 : (cur + 1) % ops.length));
      } else if (["k", "K", "ArrowUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        setOpenIdx((cur) => (cur == null ? 0 : (cur + ops.length - 1) % ops.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  return (
    <div
      className="briefing-scope"
      style={{
        position: "relative",
        background: "#0A0A0B",
        color: "#EDEDED",
        fontFamily: "var(--font-brief-sans)",
      }}
    >
      <ColdOpen statusLine={`Briefing: ${heroBrief.heading} — Status: Active`} />
      <CursorGlow />
      <TopNav initials={initials} />
      <Hero />
      <Situation />
      {SHOW_OPERATIONS && <Operations onOpen={setOpenIdx} />}
      <Assets />
      <StandingOrders initials={initials} />
      <DossierModal openIdx={openIdx} onClose={() => setOpenIdx(null)} />
    </div>
  );
}
