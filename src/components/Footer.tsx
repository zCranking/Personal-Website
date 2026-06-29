import { footer, site } from "@/lib/content";

const LINKS = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "X", href: site.twitter },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-2xl border-t border-rule px-6 py-12 md:px-0"
    >
      <div className="flex flex-col gap-6 font-sans text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p>
          {footer.line} {footer.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
