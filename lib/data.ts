export const priorities = [
  {
    rank: 1,
    title: "Baseline test in Bluebook first",
    detail: "Every other decision depends on the score split. Do it in one sitting under real timing.",
  },
  {
    rank: 2,
    title: "Superscore strategy",
    detail: "The framing that shapes the whole two-test plan — peak each section once across two test dates.",
  },
  {
    rank: 3,
    title: "Keep a miss list",
    detail: "Tag why each question was missed: didn't know it / rushed / misread / timing. Fixing the top reason beats raw practice volume.",
  },
  {
    rank: 4,
    title: "Bluebook + Khan Academy only",
    detail: "Right format, right adaptive logic. Wrong materials teach the wrong instincts.",
  },
  {
    rank: 5,
    title: "Master Desmos",
    detail: "Highest-leverage skill on the digital test. Free speed on a big chunk of math problems.",
  },
  {
    rank: 6,
    title: "Protect Module 1 accuracy",
    detail: "Early clean work unlocks the harder, higher-scoring second module. Careless early errors cap the ceiling.",
  },
  {
    rank: 7,
    title: "Pacing",
    detail: "~1 min per RW question, ~1.5 min per Math question. Has to become automatic.",
  },
  {
    rank: 8,
    title: "Grammar / Standard English Conventions",
    detail: "Finite, learnable to near-perfect. Easiest reliable points on the test.",
  },
  {
    rank: 9,
    title: "Math fundamentals (Algebra 1 & 2)",
    detail: "Raises the ceiling slowly and permanently.",
  },
  {
    rank: 10,
    title: "Reading volume",
    detail: "Slowest lever — start now, pays off at the retake.",
  },
  {
    rank: 11,
    title: "Full-length mocks every few weeks",
    detail: "For stamina and trajectory tracking once school resumes.",
  },
];

export const profiles = [
  {
    id: "math",
    label: "Stronger in Math",
    augustTarget: "Math",
    tagline: "Bank Math, build Verbal for the retake",
    description:
      "Math peaks faster than verbal — it's more trainable, so this is the easy bank. Get it to its ceiling and lock it.",
    augustFocus: [
      "Desmos mastery + Module 1 cleanliness on Math",
      "Push to a number you never have to beat again",
      "Drill only grammar rules to keep the August RW score from being embarrassing — don't expect its peak",
    ],
    retakeProject: "Reading & Writing",
    retakeFocus: [
      "Heavy nonfiction reading volume starting now",
      "Work through reading question types: inference, evidence, main idea",
    ],
    watchFor:
      "Math-strong students coast on verbal and the RW score stalls. The reading habit must start in summer or there's no payoff by next year.",
  },
  {
    id: "even",
    label: "Scores are even",
    augustTarget: "Both sections",
    tagline: "Push both toward August, retake is pure insurance",
    description:
      "No obvious section to bank — front-load whichever section has more easy points left. Usually grammar and math fundamentals, since those climb fastest.",
    augustFocus: [
      "The miss list matters most here — error categories tell you where to spend time",
      "Grammar + math fundamentals (fastest to move)",
      "Pick the higher-ceiling section by mid-July and commit August to it",
    ],
    retakeProject: "Whichever section underperformed",
    retakeFocus: [
      "Targets whichever section underperformed in August relative to practice",
    ],
    watchFor:
      "Spreading too thin. Pick the higher-ceiling section by mid-July and commit August to it.",
  },
  {
    id: "verbal",
    label: "Stronger in Verbal",
    augustTarget: "Reading & Writing",
    tagline: "Bank RW grammar, rebuild Math for the retake",
    description:
      "Bank the grammar (Standard English Conventions) to near-perfect. The reading comprehension half is slow to move even for verbal-strong students.",
    augustFocus: [
      "Lock Standard English Conventions to near-perfect",
      "Keep building reading through the retake",
    ],
    retakeProject: "Math",
    retakeFocus: [
      "Rebuild Algebra 1 & 2 foundations properly",
      "Layer Desmos mastery on top",
      "Needs the most lead time of any scenario — start fundamentals in summer",
    ],
    watchFor:
      "Underestimating the math runway. Verbal-strong students often have real math gaps, not just careless errors. Start fundamentals in summer even though Math is the retake target — it's the longest build of the three profiles.",
  },
];

export const books = [
  {
    title: "Erica Meltzer — The Critical Reader series",
    category: "Best for Reading & Writing",
    color: "purple",
    description:
      "Built specifically for digital SAT RW. Two dedicated books: grammar + reading. Get the grammar one especially — it covers the easiest reliable points lever.",
  },
  {
    title: "The Orange Book (Meltzer/Ruelaz)",
    category: "Best for Math foundations",
    color: "blue",
    description:
      'Large two-volume set for genuine math foundation gaps. The book for the "stronger in verbal, math is the retake project" scenario.',
  },
  {
    title: "SAT Prep Black Book (Barrett)",
    category: "Best for strategy",
    color: "amber",
    description:
      "Emphasizes test reasoning over memorization. Best as a second layer once fundamentals are solid — not a starting point.",
  },
  {
    title: "Princeton Review & Kaplan (2026 editions only)",
    category: "Big question banks",
    color: "green",
    description:
      "Solid for volume and explanations. Get 2026 editions only — earlier editions have outdated paper-test advice.",
  },
  {
    title: "Barron's",
    category: "Use with caution",
    color: "red",
    description:
      "Print-only tests — useful for drills but not a realistic digital test-day simulation. That's Bluebook's job.",
  },
];
