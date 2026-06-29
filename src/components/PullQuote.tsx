import { Reveal } from "./Reveal";

export function PullQuote({ children }: { children: string }) {
  return (
    <Reveal className="mx-auto my-16 max-w-2xl md:my-24">
      <blockquote className="border-l-2 border-accent pl-6 font-serif text-2xl italic leading-snug text-foreground md:pl-8 md:text-3xl">
        “{children}”
      </blockquote>
    </Reveal>
  );
}
