// Copy for the Briefing Room homepage. Replace every [bracketed] placeholder.
// Keep the dossier fields terse — situation/approach/result, not paragraphs.

import { site } from "./content";

// KEEP FALSE until every [bracketed] placeholder in `ops` below is replaced
// with real content — names, numbers, outcomes. While false, the section,
// its nav link, and the hero CTA are hidden and numbering adapts. Flipping
// this to true with placeholders still present ships bracket text to visitors.
export const SHOW_OPERATIONS = true;

export const callsignTag = "builder · policy";

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
    "I build AI products, carry elected responsibility in student government, and train in a military leadership track that doesn't forgive bad decisions. Different arenas, same lesson: the cost of being wrong is never just a grade.",
};

export const situation = {
  // `highlight` is rendered in the accent color inside `lead` — keep it a
  // verbatim substring of the sentence, defined once here instead of
  // string-matched in the component.
  lead: {
    before: "The hard part is never the model. It's the ",
    highlight: "decisions around it",
    after:
      " — who's accountable, what breaks under pressure, and whether anyone trusts what they're holding.",
  },
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
    title: "AI Powered Corporate Travel Agent",
    teaser: "Developed an AI-powered travel agent that autonomously manages corporate travel bookings, saving significant time and operational overhead.",
    situation:
      "With my previous experience in buidling AI powered solutions I wanted to create an AI-powered travel agent that could autonomously manage corporate travel bookings, reducing the operational burden on teams.",
    approach:
      "When developing this I had to think about how the AI agent would interact with travel booking systems, handle user requests, and make autonomous decisions reliably.",
    result:
      "Results coming soon!",
  },
  {
    code: "OP-02",
    tag: "LEADERSHIP",
    title: "Battalion Commander",
    teaser: "Lead and oversee a battalion of 300+ cadets across grades 7–12 within the JROTC program",
    situation:
      "Have had to make large scale decision regarding the management of cadet's safety, discipline, and overall program operations.",
    approach:
      "Strengthened leadership, organizational management, communication, conflict resolution, and decision-making skills through daily oversight of large-scale operations and dynamic challenges.",
    result:
      "Excited to make changes in my role this coming school year!",
  },
  {
    code: "OP-03",
    tag: "TECHNICAL",
    title: "AI Quant Trading Bot",
    teaser: "Developed an AI-powered trading bot capable of executing quantitative trading strategies autonomously, handling real-time market data and decision-making under uncertainty.",
    situation:
      "Started with creating an efficient system without using AI, then integrated AI to handle real-time market data and autonomous trading decisions.",
    approach:
      "It was really important to understand the basic on your own, and then the understanding of when to leverage AI became more obvious.",
    result:
      "Mock Trading Results coming soon!",
  },
];

export type Asset = { slot: string; name: string; kind: string };

// Six tiles, each earning its slot — table-stakes tools (Git, deploy
// platforms) dilute the signal for senior readers. "Policy & Law" stays
// last on purpose: it's the anomaly that makes the loadout memorable.
export const assets: Asset[] = [
  { slot: "LANG-01", name: "TypeScript", kind: "Primary" },
  { slot: "LANG-02", name: "Python", kind: "AI / ML" },
  { slot: "FRAMEWORK-01", name: "Next.js", kind: "Product" },
  { slot: "DB-01", name: "Supabase", kind: "Data" },
  { slot: "AI-01", name: "LLM APIs", kind: "Intelligence" },
  { slot: "DOMAIN-01", name: "Policy & Law", kind: "Context" },
];

export const standingOrders = {
  lead: "Looking for the next operation worth running.",
  body: "I'm looking for people building at the edge of AI and institutions — founding-team or learning-seat roles where the stakes are real and the problem is hard. If that's you, let's talk.",
  // Update this each year you keep the site live.
  year: "2026",
};
