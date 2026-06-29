import { situation, sectionIndex } from "@/lib/briefing-content";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "@/components/Reveal";

export function Situation() {
  return (
    <section
      id="situation"
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
        <SectionLabel index={sectionIndex.situation} label="Situation" />

        <Reveal>
          <p
            style={{
              maxWidth: 980,
              fontSize: "clamp(28px,4.2vw,52px)",
              lineHeight: 1.22,
              fontWeight: 500,
              letterSpacing: "-0.015em",
              color: "#F4F4F4",
            }}
          >
            {situation.lead.split("decisions around it").map((part, i, arr) =>
              i === arr.length - 1 ? (
                part
              ) : (
                <span key={i}>
                  {part}
                  <span style={{ color: "#3EFF8B" }}>decisions around it</span>
                </span>
              )
            )}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p
            style={{
              maxWidth: 720,
              marginTop: 34,
              fontSize: "clamp(17px,2vw,21px)",
              lineHeight: 1.55,
              color: "rgba(237,237,237,0.6)",
            }}
          >
            {situation.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
