"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const JUMPS = [
  { href: "#work", label: "Work" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
];

export function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const height = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const [showJumps, setShowJumps] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowJumps(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed left-0 top-0 z-40 hidden h-full w-[3px] bg-rule/40 md:block"
      >
        <motion.div
          style={{ scaleY: height }}
          className="h-full w-full origin-top bg-accent"
        />
      </div>

      <AnimatePresence>
        {showJumps && (
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full border border-rule bg-background/90 px-2 py-1.5 shadow-lg backdrop-blur-sm"
          >
            <ul className="flex items-center gap-1 font-sans text-sm">
              {JUMPS.map((jump) => (
                <li key={jump.href}>
                  <a
                    href={jump.href}
                    className="rounded-full px-3 py-1 text-muted transition-colors hover:bg-rule/50 hover:text-foreground"
                  >
                    {jump.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
