// Copy for the Briefing Room homepage. Replace every [bracketed] placeholder.
// Keep the dossier fields terse — situation/approach/result, not paragraphs.

import { site } from "./content";

// Flip to true once the Operations dossiers (below) have real content —
// it slots back in with correct nav links, section numbering, and hero CTA.
export const SHOW_OPERATIONS = false;

export const callsignTag = "callsign · student";

export const sectionIndex = {
  situation: "02",
  operations: "03",
  assets: SHOW_OPERATIONS ? "04" : "03",
  contact: SHOW_OPERATIONS ? "05" : "04",
};

export const totalSections = SHOW_OPERATIONS ? 5 : 4;

export const heroPrimaryCta = SHOW_OPERATIONS
  ? { label: "Review Operations →", href: "#operations" }
  : { label: "Review Assets →", href: "#assets" };

export const heroBrief = {
  statusLine: `Briefing · ${site.name} · Status Active`,
  heading: site.name,
  subhead:
    "I build systems that have to hold under load & unreliable circumstances. My experience in building AI products, student government, and a military leadership track that doesn't forgive bad decisions. The cost of being wrong is never just a grade.",
};

export const situation = {
  lead: "The hard part is never the model. It's the decisions around it — who's accountable, what breaks under pressure, and whether anyone trusts what they're holding.",
  body: "I work at the seam between AI systems and the institutions that have to govern them — building the software, and learning to lead the people, so both hold when it counts.",
};

export type Op = {
  code: string;
  tag: string;
  title: string;
  teaser: string;
  situation: string;
  approach: string;
  result: string;
};

export const ops: Op[] = [
  {
    code: "OP-01",
    tag: "BUILDING",
    title: "[Flagship AI Product]",
    teaser: "[One punchy line with a real number — users, hours saved, revenue.]",
    situation:
      "[The real problem, for whom, and why it was worth building before anyone asked you to.]",
    approach:
      "[The hardest technical or product call you made, and why you made it that way — name the stack, the constraint, the tradeoff.]",
    result:
      "[The outcome, stated as a number wherever possible. Specifics beat adjectives.]",
  },
  {
    code: "OP-02",
    tag: "LEADERSHIP",
    title: "Student Government & Military Leadership",
    teaser: "[The title/role, the scope of what you were responsible for, in one line.]",
    situation:
      "[A real moment of disagreement, pressure, or a decision nobody else wanted to make.]",
    approach:
      "[What you actually did — not 'I learned leadership,' the specific call you made.]",
    result:
      "[What changed because of it. Concrete, not generic.]",
  },
  {
    code: "OP-03",
    tag: "TECHNICAL",
    title: "[Second Technical Project]",
    teaser: "[The technical depth — what made this hard, not just what it does.]",
    situation:
      "[The constraint or bug that made this nontrivial.]",
    approach:
      "[Architecture and the decision that mattered — what you'd do differently now.]",
    result:
      "[The measurable outcome — latency, cost, scale, correctness.]",
  },
];

export type Asset = { slot: string; name: string; kind: string };

export const assets: Asset[] = [
  { slot: "LANG-01", name: "TypeScript", kind: "Primary" },
  { slot: "LANG-02", name: "Python", kind: "AI / ML" },
  { slot: "FRAMEWORK-01", name: "Next.js", kind: "Product" },
  { slot: "DB-01", name: "Supabase", kind: "Data" },
  { slot: "AI-01", name: "LLM APIs", kind: "Intelligence" },
  { slot: "CLOUD-01", name: "Vercel", kind: "Deploy" },
  { slot: "TOOL-01", name: "Git", kind: "Workflow" },
  { slot: "DOMAIN-01", name: "Policy & Law", kind: "Context" },
];

export const standingOrders = {
  lead: "Looking for the next operation worth running.",
  body: "I'm looking for people building at the edge of AI and institutions — founding-team or learning-seat roles where the stakes are real and the problem is hard. If that's you, let's talk.",
  // Update this each year you keep the site live.
  year: "2026",
};
