// Single source of truth for the letter's copy.
// Replace every [bracketed] placeholder with real specifics — names, links, numbers.
// Keep sentences short. Cut anything that doesn't survive a re-read out loud.

export const site = {
  name: "Arav Gupta",
  role: "Builder. Future policymaker. Currently in high school.",
  email: "aravgupta2019@gmail.com",
  github: "https://github.com/zCranking",
  linkedin: "https://www.linkedin.com/in/arav-gupta-9b581a355/",
  twitter: "https://x.com/[your-handle]",
};

export const hero = {
  statement:
    "I build things that shouldn't exist yet, and I want to write the rules for the things that will.",
  positioning:
    "I'm a high school student who ships full‑stack AI products on nights when most people my age are doing homework — and reads case law on the weekends most people my age are not. I care less about being early to one lane and more about being credible across all of them.",
};

export const thesis = {
  lead: "Software taught me how systems actually work.",
  body: [
    "Every product I've shipped is really a small argument about how the world should work — fewer steps, less friction, more agency for whoever's using it. Government and law are the same argument at a different scale: who gets to decide, and how fast can a good decision actually move.",
    "I don't think you can credibly write policy about technology you've never built, and I don't think you can build technology that matters without understanding the systems it has to survive inside of. So I'm doing both, on purpose, at the same time, before anyone tells me to pick one.",
  ],
  pullQuote:
    "I'd rather be the person who understands both the code and the constitution than the person who only ever has to explain one of them.",
};

export const proofPoints = [
  {
    tag: "Building",
    title: "[Flagship AI Product Name]",
    summary:
      "[One sentence: the real problem it solves, for whom, and the number that proves it — users, hours saved, revenue, anything concrete.]",
    detail:
      "[2-3 sentences: what it actually is, the hardest technical or product decision you made, and why you made it that way. Specifics beat adjectives — name the stack, the constraint, the tradeoff.]",
    href: "https://[link-to-product-or-repo]",
    cta: "See it live",
  },
  {
    tag: "Leading",
    title: "Student Government & Military Leadership",
    summary:
      "[One sentence: the title/role, the scope of what you were responsible for, and the outcome.]",
    detail:
      "[2-3 sentences: a specific decision you had to make under pressure or disagreement, what you did, and what changed because of it. Avoid generic 'I learned leadership' language — say what you actually did.]",
    href: null,
    cta: null,
  },
  {
    tag: "Engineering",
    title: "[Second Technical Project Name]",
    summary:
      "[One sentence: the technical depth — what made this hard, not just what it does.]",
    detail:
      "[2-3 sentences: architecture, the interesting bug or constraint, what you'd do differently now. This is the proof point for engineers reading closely.]",
    href: "https://[link-to-repo]",
    cta: "Read the writeup",
  },
];

export const invitation = {
  lead: "I'm looking for people who think in decades, not quarters.",
  body: [
    "If you're building something that treats AI, governance, or institutions as worth taking seriously — I want to hear about it. If you're further along than me and willing to let me learn by doing real work, I want to hear about that too.",
  ],
  cta: "Start a conversation",
};

export const footer = {
  line: "Last rewritten",
  // Update this string whenever you meaningfully edit the letter.
  lastUpdated: "June 2026",
};
