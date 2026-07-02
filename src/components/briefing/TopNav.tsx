"use client";

import { useEffect, useRef } from "react";
import { callsignTag, SHOW_OPERATIONS } from "@/lib/briefing-content";
import { MissionClock } from "./MissionClock";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const SECTIONS = [
  { id: "situation", label: "Situation" },
  ...(SHOW_OPERATIONS ? [{ id: "operations", label: "Operations" }] : []),
  { id: "assets", label: "Assets" },
  { id: "contact", label: "Contact" },
];

export function TopNav({ initials }: { initials: string }) {
  const underlineRef = useRef<HTMLSpanElement>(null);
  const navLinks = useRef<Record<string, HTMLAnchorElement>>({});

  useEffect(() => {
    const moveUnderline = (sec: string) => {
      const link = navLinks.current[sec];
      const bar = underlineRef.current;
      if (!link || !bar) return;
      bar.style.opacity = "1";
      bar.style.left = `${link.offsetLeft}px`;
      bar.style.width = `${link.offsetWidth}px`;
      Object.values(navLinks.current).forEach((l) => {
        l.style.color = l === link ? "#F4F4F4" : "rgba(237,237,237,0.55)";
      });
    };

    const hideUnderline = () => {
      const bar = underlineRef.current;
      if (bar) bar.style.opacity = "0";
      Object.values(navLinks.current).forEach((l) => {
        l.style.color = "rgba(237,237,237,0.55)";
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) moveUnderline(en.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });

    const topEl = document.getElementById("top");
    let ioTop: IntersectionObserver | undefined;
    if (topEl) {
      ioTop = new IntersectionObserver(
        (entries) => entries.forEach((en) => en.isIntersecting && hideUnderline()),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      ioTop.observe(topEl);
    }

    return () => {
      io.disconnect();
      ioTop?.disconnect();
    };
  }, []);

  return (
    <header
      className="brief-nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg, rgba(10,10,11,0.92), rgba(10,10,11,0))",
        backdropFilter: "blur(2px)",
      }}
    >
      <a
        href="#top"
        style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            border: "1px solid rgba(237,237,237,0.35)",
            fontFamily: "var(--font-brief-mono)",
            fontWeight: 600,
            fontSize: 13,
            color: "#EDEDED",
            letterSpacing: "0.05em",
          }}
        >
          {initials}
        </span>
        <span
          className="brief-nav-callsign"
          style={{
            fontFamily: "var(--font-brief-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            color: "rgba(237,237,237,0.5)",
            textTransform: "uppercase",
          }}
        >
          {callsignTag}
        </span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <span className="brief-nav-clock">
          <MissionClock />
        </span>
        <nav
          className="brief-nav-links"
          style={{ position: "relative", display: "flex", gap: 28, paddingBottom: 8 }}
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              ref={(el) => {
                if (el) navLinks.current[s.id] = el;
              }}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(s.id);
              }}
              style={{
                fontFamily: "var(--font-brief-mono)",
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "rgba(237,237,237,0.55)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.25s",
              }}
            >
              {s.label}
            </a>
          ))}
          <span
            ref={underlineRef}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: 0,
              height: 1.5,
              background: "#3EFF8B",
              boxShadow: "0 0 8px rgba(62,255,139,0.6)",
              transition:
                "left 0.4s cubic-bezier(0.16,1,0.3,1), width 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s",
              opacity: 0,
            }}
          />
        </nav>
      </div>
    </header>
  );
}
