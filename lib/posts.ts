export type PostTag = "cost" | "architecture" | "strategy" | "adoption" | "methodology";

export type Post = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: PostTag;
  href: string;
};

export const posts: Post[] = [
  {
    title: "The Fourth Lever: What Nobody Tells You About Cutting AI Costs",
    excerpt:
      "Working with AI at scale is expensive. Most organizations respond with one of two bad strategies: throttle usage or ignore the bill. There's a better way — four levers that typically save 40–70% before touching anything else.",
    date: "Feb 2026",
    readTime: "8 min",
    tag: "cost",
    href: "https://www.linkedin.com/pulse/fourth-lever-what-nobody-tells-you-cutting-ai-costs-elad-zoarets-pvyuf",
  },
  {
    title: "Agentic System Types: Workflow-based vs Agent-based",
    excerpt:
      "In the AI world we talk about Agentic Systems as if they're one thing. In practice there are two completely different types: Workflow-based and Agent-based. The difference isn't theoretical — it impacts stability, cost, control, and maintainability.",
    date: "Jan 2026",
    readTime: "2 min",
    tag: "architecture",
    href: "https://www.linkedin.com/pulse/agentic-system-types-elad-zoarets-91szf",
  },
  {
    title: "חוקי המשחק השתנו: חלק ה — מ-AI Hype ל-AI Maturity",
    excerpt:
      "The rules of the game have changed. We're moving from AI Hype to AI Maturity. What does that actually mean for engineering organizations, and what separates the ones that get it from the ones still chasing demos?",
    date: "2026",
    readTime: "7 min",
    tag: "strategy",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2594-%25D7%259E-ai-hype-%25D7%259C-ai-maturity-elad-zoarets-9pmdf",
  },
  {
    title: "חוקי המשחק השתנו: חלק ד — הטמעת AI בארגון",
    excerpt:
      "Part 4 of the series on AI organizational transformation. Moving from theory to practice: how do you actually embed AI into an organization's DNA? The adoption journey, the cultural shift, and the metrics that matter.",
    date: "2026",
    readTime: "12 min",
    tag: "adoption",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2593-%25D7%2594%25D7%2598%25D7%259E%25D7%25A2%25D7%25AA-ai-%25D7%2591%25D7%2590%25D7%25A8%25D7%2592%25D7%2595%25D7%259F-elad-zoarets-sdnff",
  },
  {
    title: "חוקי המשחק השתנו: חלק ג — שבירת הליניאריות",
    excerpt:
      "Breaking linearity. The traditional engineering org is linear — more output requires more headcount. AI changes that equation. How to break the linear model and create real leverage.",
    date: "2026",
    readTime: "4 min",
    tag: "strategy",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2592-%25D7%25A9%25D7%2591%25D7%2599%25D7%25A8%25D7%25AA-%25D7%2594%25D7%259C%25D7%2599%25D7%25A0%25D7%2599%25D7%2590%25D7%25A8%25D7%2599%25D7%2595%25D7%25AA-elad-zoarets-rf9cf",
  },
  {
    title: "חוקי המשחק השתנו: חלק ב' – בונים מתודולוגיה (Methodology-First AI)",
    excerpt:
      "Methodology-First AI. Most orgs adopt tools and hope methodology follows. It doesn't. You build the methodology first, then choose tools that fit. Here's how.",
    date: "2026",
    readTime: "7 min",
    tag: "methodology",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2591%25D7%2599%25D7%259D-%25D7%259E%25D7%25AA%25D7%2595%25D7%2593%25D7%2595%25D7%259C%25D7%2595%25D7%2592%25D7%2599%25D7%2594-ai-elad-zoarets-eczaf",
  },
];
