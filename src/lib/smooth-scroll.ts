import { animate } from "framer-motion";

export function smoothScrollTo(targetId: string) {
  const el = document.getElementById(targetId);
  if (!el) return;

  // CSS scroll-snap fights a JS-driven scroll animation (it snaps early,
  // cutting the animation short) — disable it for the duration, then restore.
  const html = document.documentElement;
  const previousSnap = html.style.scrollSnapType;
  html.style.scrollSnapType = "none";
  const restoreSnap = () => {
    html.style.scrollSnapType = previousSnap;
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + startY;

  if (reduceMotion) {
    window.scrollTo(0, targetY);
    restoreSnap();
    return;
  }

  animate(startY, targetY, {
    duration: 1.05,
    ease: [0.16, 1, 0.3, 1],
    onUpdate: (v) => window.scrollTo(0, v),
    onComplete: restoreSnap,
  });
}
