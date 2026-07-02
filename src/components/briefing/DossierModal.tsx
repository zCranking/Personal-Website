"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
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
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  // Focus management + scroll lock: capture focus on open, keep Tab inside
  // the panel, restore focus and page scroll on close.
  useEffect(() => {
    if (!isOpen) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", trap);

    return () => {
      window.removeEventListener("keydown", trap);
      document.body.style.overflow = prevOverflow;
      restoreRef.current?.focus();
    };
  }, [isOpen]);

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
            padding: "clamp(14px, 4vw, 40px)",
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dossier-title"
            onClick={(e) => e.stopPropagation()}
            className="brief-modal-panel"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 920,
              maxHeight: "88vh",
              overflowY: "auto",
              background: "#101012",
              border: "1px solid rgba(62,255,139,0.25)",
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
                gap: 16,
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
                ref={closeRef}
                onClick={onClose}
                aria-label="Close dossier"
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "1px solid rgba(237,237,237,0.25)",
                  color: "rgba(237,237,237,0.7)",
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  fontFamily: "var(--font-brief-mono)",
                  fontSize: 13,
                }}
              >
                ✕
              </button>
            </div>

            <h3
              id="dossier-title"
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
                gap: 16,
                flexWrap: "wrap",
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
      className="brief-dossier-row"
      style={{
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
