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
    title: "AI Powered Corporate Travel Agent",
    summary:
      "Solving the problem of efficiently booking corporate travel using AI.",
    detail:
      "The project leverages AI to streamline the process of booking corporate travel, reducing time and friction for users. With the ability to gather data, it can make intelligent recommendations and automate booking decisions efficiently.",
    href: "https://[link-to-product-or-repo]",
    cta: "Coming Soon",
  },
  {
    tag: "Leading",
    title: "Battalion Commander",
    summary:
      "Lead and oversee a battalion of 300+ cadets across grades 7–12 within the JROTC program",
    detail:
      "Work directly with the President, Commandant (CMDT), Senior Army Instructor (SAI), and staff leadership to ensure effective communication and execution throughout the corps. Strengthened leadership, organizational management, communication, conflict resolution, and decision-making skills through daily oversight of large-scale operations and dynamic challenges.",
    href: null,
    cta: null,
  },
  {
    tag: "Engineering",
    title: "AI Quant Trading Bot",
    summary:
      "Developed an AI-powered trading bot capable of executing quantitative trading strategies autonomously, handling real-time market data and decision-making under uncertainty.",
    detail:
      "The bot's architecture integrates data ingestion, signal processing, and execution modules. One challenge was ensuring low-latency decision-making while maintaining robustness against noisy market signals. In hindsight, I would optimize the data pipeline further and implement more sophisticated risk management strategies.",
    href: "https://[link-to-repo]",
    cta: "Will be published soon!",
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
