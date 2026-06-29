import { Reveal } from "./Reveal";

type ProofPointProps = {
  index: number;
  tag: string;
  title: string;
  summary: string;
  detail: string;
  href?: string | null;
  cta?: string | null;
};

export function ProofPoint({
  index,
  tag,
  title,
  summary,
  detail,
  href,
  cta,
}: ProofPointProps) {
  return (
    <Reveal className="mx-auto my-20 max-w-2xl md:my-28">
      <div className="border-t border-rule pt-8">
        <div className="flex items-baseline justify-between font-sans text-xs uppercase tracking-[0.18em] text-muted">
          <span>{tag}</span>
          <span>{String(index).padStart(2, "0")}</span>
        </div>

        <h3 className="mt-3 font-serif text-2xl font-medium text-foreground md:text-3xl">
          {title}
        </h3>

        <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/90 md:text-xl">
          {summary}
        </p>

        <p className="mt-4 font-serif text-base leading-relaxed text-muted">
          {detail}
        </p>

        {href && cta && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-accent transition-opacity hover:opacity-70"
          >
            {cta}
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        )}
      </div>
    </Reveal>
  );
}
