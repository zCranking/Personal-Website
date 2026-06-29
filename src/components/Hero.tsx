"use client";

import { motion } from "framer-motion";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[92vh] max-w-2xl flex-col justify-center px-6 py-24 md:px-0">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-sans text-sm uppercase tracking-[0.18em] text-muted"
      >
        {site.name} — {site.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14, clipPath: "inset(0 0 100% 0)" }}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-serif text-4xl leading-[1.15] font-medium text-foreground md:text-6xl"
      >
        {hero.statement}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-muted md:text-xl"
      >
        {hero.positioning}
      </motion.p>
    </section>
  );
}
