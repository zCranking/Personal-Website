import type { Metadata } from "next";
import { briefingSans, briefingMono } from "@/lib/briefing-fonts";
import { BriefingRoom } from "@/components/briefing/BriefingRoom";
import { site } from "@/lib/content";
import "./briefing.css";

export const metadata: Metadata = {
  title: `${site.name} — Briefing Room`,
  description:
    "Briefing on the operations, leadership, and equipment behind the work — read like a dossier, not a resume.",
};

export default function Home() {
  return (
    <main className={`flex-1 ${briefingSans.variable} ${briefingMono.variable}`}>
      <BriefingRoom />
    </main>
  );
}
