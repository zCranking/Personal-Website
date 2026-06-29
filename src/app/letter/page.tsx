import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProgressRail } from "@/components/ProgressRail";
import { Reveal } from "@/components/Reveal";
import { PullQuote } from "@/components/PullQuote";
import { ProofPoint } from "@/components/ProofPoint";
import { Footer } from "@/components/Footer";
import { thesis, proofPoints, invitation, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — The Letter`,
  description:
    "A long-form letter, not a resume — on building AI products and thinking about how institutions should work.",
};

export default function LetterPage() {
  const [building, leading, engineering] = proofPoints;

  return (
    <main className="flex-1">
      <ProgressRail />

      <Hero />

      <section id="work" className="px-6 md:px-0">
        <ProofPoint index={1} {...building} />
      </section>

      <section id="story" className="px-6 md:px-0">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
            {thesis.lead}
          </p>
        </Reveal>

        {thesis.body.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.05} className="mx-auto mt-6 max-w-2xl">
            <p className="font-serif text-lg leading-relaxed text-foreground/90 md:text-xl">
              {paragraph}
            </p>
          </Reveal>
        ))}

        <PullQuote>{thesis.pullQuote}</PullQuote>

        <ProofPoint index={2} {...leading} />
      </section>

      <section className="px-6 md:px-0">
        <ProofPoint index={3} {...engineering} />
      </section>

      <section className="px-6 py-20 md:px-0 md:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
            {invitation.lead}
          </p>
          {invitation.body.map((paragraph, i) => (
            <p
              key={i}
              className="mt-4 font-serif text-lg leading-relaxed text-foreground/90 md:text-xl"
            >
              {paragraph}
            </p>
          ))}
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-1.5 font-sans text-base font-medium text-accent transition-opacity hover:opacity-70"
          >
            {invitation.cta}
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
