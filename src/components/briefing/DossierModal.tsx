"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ops } from "@/lib/briefing-content";

export function DossierModal({
  openIdx,
  onClose,
}: {
  openIdx: number | null;
  onClose: () => void;
}) {
  const isOpen = openIdx != null;
  const cur = ops[openIdx ?? 0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "rgba(6,6,7,0.82)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 920,
              maxHeight: "88vh",
              overflowY: "auto",
              background: "#101012",
              border: "1px solid rgba(62,255,139,0.25)",
              padding: "48px 52px",
              animation: "brief-unseal 0.5s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 22,
                height: 22,
                borderTop: "1px solid rgba(62,255,139,0.5)",
                borderLeft: "1px solid rgba(62,255,139,0.5)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 22,
                height: 22,
                borderTop: "1px solid rgba(62,255,139,0.5)",
                borderRight: "1px solid rgba(62,255,139,0.5)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-brief-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "#3EFF8B",
                }}
              >
                {cur.code} · {cur.tag} · DECLASSIFIED
              </span>
              <button
                onClick={onClose}
                aria-label="Close dossier"
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "1px solid rgba(237,237,237,0.25)",
                  color: "rgba(237,237,237,0.7)",
                  width: 30,
                  height: 30,
                  fontFamily: "var(--font-brief-mono)",
                  fontSize: 13,
                }}
              >
                ✕
              </button>
            </div>

            <h3
              style={{
                fontSize: "clamp(32px,5vw,52px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#F4F4F4",
                lineHeight: 1.02,
                marginBottom: 36,
              }}
            >
              {cur.title}
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <DossierRow label="Situation" text={cur.situation} delay={0.1} />
              <Divider />
              <DossierRow label="Approach" text={cur.approach} delay={0.18} />
              <Divider />
              <DossierRow label="Result" text={cur.result} delay={0.26} emphasize />
            </div>

            <div
              style={{
                marginTop: 42,
                paddingTop: 22,
                borderTop: "1px solid rgba(237,237,237,0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-brief-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: "rgba(237,237,237,0.4)",
                  textTransform: "uppercase",
                }}
              >
                Dossier {(openIdx ?? 0) + 1} / {ops.length}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-brief-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: "rgba(237,237,237,0.4)",
                  textTransform: "uppercase",
                }}
              >
                [ J / K ] cycle · [ ESC ] seal
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(237,237,237,0.1)" }} />;
}

function DossierRow({
  label,
  text,
  delay,
  emphasize,
}: {
  label: string;
  text: string;
  delay: number;
  emphasize?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "130px 1fr",
        gap: 24,
        alignItems: "start",
        animation: `brief-fadeUp 0.4s ease ${delay}s both`,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-brief-mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          color: "#3EFF8B",
          textTransform: "uppercase",
          paddingTop: 5,
        }}
      >
        {label}
      </span>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.55,
          color: emphasize ? "#F4F4F4" : "rgba(237,237,237,0.78)",
          fontWeight: emphasize ? 500 : 400,
        }}
      >
        {text}
      </p>
    </div>
  );
}
