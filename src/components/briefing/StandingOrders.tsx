import { standingOrders, sectionIndex } from "@/lib/briefing-content";
import { site } from "@/lib/content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "./Magnetic";

export function StandingOrders({ initials }: { initials: string }) {
  return (
    <section
      id="contact"
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
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 24px",
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
              {site.email}
            </a>
          </Magnetic>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
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
            LinkedIn ↗
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
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
            GitHub ↗
          </a>
        </div>

        <div
          style={{
            marginTop: 90,
            fontFamily: "var(--font-brief-mono)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "rgba(237,237,237,0.28)",
            textTransform: "uppercase",
          }}
        >
          End of briefing · {initials} · {standingOrders.year}
        </div>
      </div>
    </section>
  );
}
