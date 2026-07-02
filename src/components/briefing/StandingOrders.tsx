import Link from "next/link";
import { standingOrders, sectionIndex } from "@/lib/briefing-content";
import { site } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "./Magnetic";

// Render only profiles with real URLs — an unfilled "[your-handle]"
// placeholder must never ship as a dead link.
const SOCIALS = [
  { label: "LinkedIn ↗", href: site.linkedin },
  { label: "GitHub ↗", href: site.github },
].filter((s) => !s.href.includes("["));

export function StandingOrders({ initials }: { initials: string }) {
  return (
    <section
      id="contact"
      className="brief-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid rgba(237,237,237,0.08)",
        scrollSnapAlign: "start",
      }}
    >
      <div style={{ position: "absolute", inset: 32, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 26,
            height: 26,
            borderBottom: "1px solid rgba(237,237,237,0.28)",
            borderLeft: "1px solid rgba(237,237,237,0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: 26,
            height: 26,
            borderBottom: "1px solid rgba(237,237,237,0.28)",
            borderRight: "1px solid rgba(237,237,237,0.28)",
          }}
        />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <SectionLabel index={sectionIndex.contact} label="Standing Orders" />

        <Reveal>
          <h2
            style={{
              maxWidth: 900,
              fontSize: "clamp(32px,5vw,60px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#F4F4F4",
            }}
          >
            {standingOrders.lead}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            style={{
              maxWidth: 640,
              marginTop: 28,
              fontSize: "clamp(17px,2vw,21px)",
              lineHeight: 1.55,
              color: "rgba(237,237,237,0.6)",
            }}
          >
            {standingOrders.body}
          </p>
        </Reveal>

        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 46,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              className="brief-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 24px",
                maxWidth: "100%",
                overflowWrap: "anywhere",
                background: "#3EFF8B",
                color: "#0A0A0B",
                textDecoration: "none",
                fontFamily: "var(--font-brief-mono)",
                fontSize: 12,
                letterSpacing: "0.12em",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {site.email}
            </a>
          </Magnetic>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="brief-link"
              style={{
                fontFamily: "var(--font-brief-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                color: "rgba(237,237,237,0.55)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 90,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 20,
            flexWrap: "wrap",
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "rgba(237,237,237,0.28)",
            textTransform: "uppercase",
          }}
        >
          <span>
            End of briefing · {initials} · {standingOrders.year}
          </span>
          <Link
            href="/letter"
            className="brief-link"
            style={{
              color: "rgba(237,237,237,0.4)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Annex: the letter →
          </Link>
        </div>
      </div>
    </section>
  );
}
