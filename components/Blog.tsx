"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, ExternalLink } from "lucide-react";

const posts = [
  {
    title: "The Fourth Lever: What Nobody Tells You About Cutting AI Costs",
    excerpt:
      "Working with AI at scale is expensive. Most organizations respond with one of two bad strategies: throttle usage or ignore the bill. There's a better way — four levers that typically save 40–70% before touching anything else.",
    date: "Feb 2026",
    readTime: "8 min",
    tag: "AI Cost",
    href: "https://www.linkedin.com/pulse/fourth-lever-what-nobody-tells-you-cutting-ai-costs-elad-zoarets-pvyuf",
  },
  {
    title: "Agentic System Types: Workflow-based vs Agent-based",
    excerpt:
      "In the AI world we talk about Agentic Systems as if they're one thing. In practice there are two completely different types: Workflow-based and Agent-based. The difference isn't theoretical — it impacts stability, cost, control, and maintainability.",
    date: "Jan 2026",
    readTime: "2 min",
    tag: "Architecture",
    href: "https://www.linkedin.com/pulse/agentic-system-types-elad-zoarets-91szf",
  },
  {
    title: "חוקי המשחק השתנו: חלק ה — מ-AI Hype ל-AI Maturity",
    excerpt:
      "The rules of the game have changed. We're moving from AI Hype to AI Maturity. What does that actually mean for engineering organizations, and what separates the ones that get it from the ones still chasing demos?",
    date: "2026",
    readTime: "7 min",
    tag: "Strategy",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2594-%25D7%259E-ai-hype-%25D7%259C-ai-maturity-elad-zoarets-9pmdf",
  },
  {
    title: "חוקי המשחק השתנו: חלק ד — הטמעת AI בארגון",
    excerpt:
      "Part 4 of the series on AI organizational transformation. Moving from theory to practice: how do you actually embed AI into an organization's DNA? The adoption journey, the cultural shift, and the metrics that matter.",
    date: "2026",
    readTime: "12 min",
    tag: "Adoption",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2593-%25D7%2594%25D7%2598%25D7%259E%25D7%25A2%25D7%25AA-ai-%25D7%2591%25D7%2590%25D7%25A8%25D7%2592%25D7%2595%25D7%259F-elad-zoarets-sdnff",
  },
  {
    title: "חוקי המשחק השתנו: חלק ג — שבירת הליניאריות",
    excerpt:
      "Breaking linearity. The traditional engineering org is linear — more output requires more headcount. AI changes that equation. How to break the linear model and create real leverage.",
    date: "2026",
    readTime: "4 min",
    tag: "Strategy",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2592-%25D7%25A9%25D7%2591%25D7%2599%25D7%25A8%25D7%25AA-%25D7%2594%25D7%259C%25D7%2599%25D7%25A0%25D7%2599%25D7%2590%25D7%25A8%25D7%2599%25D7%2595%25D7%25AA-elad-zoarets-rf9cf",
  },
  {
    title: "חוקי המשחק השתנו: חלק ב' – בונים מתודולוגיה (Methodology-First AI)",
    excerpt:
      "Methodology-First AI. Most orgs adopt tools and hope methodology follows. It doesn't. You build the methodology first, then choose tools that fit. Here's how.",
    date: "2026",
    readTime: "7 min",
    tag: "Methodology",
    href: "https://www.linkedin.com/pulse/%25D7%2597%25D7%2595%25D7%25A7%25D7%2599-%25D7%2594%25D7%259E%25D7%25A9%25D7%2597%25D7%25A7-%25D7%2594%25D7%25A9%25D7%25AA%25D7%25A0%25D7%2595-%25D7%2597%25D7%259C%25D7%25A7-%25D7%2591%25D7%2599%25D7%259D-%25D7%259E%25D7%25AA%25D7%2595%25D7%2593%25D7%2595%25D7%259C%25D7%2595%25D7%2592%25D7%2599%25D7%2594-ai-elad-zoarets-eczaf",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
              Writing
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
              From the field, not the hype
            </h2>
            <p className="text-lg text-ink-500 dark:text-gray-400">
              Analysis, frameworks, and insights from real AI transformations.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/eladz/recent-activity/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 dark:text-gold-400 hover:gap-3 transition-all shrink-0"
          >
            All posts on LinkedIn
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="card overflow-hidden group cursor-pointer flex flex-col hover:-translate-y-1.5"
            >
              <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 opacity-80" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-600 dark:text-gold-400 text-xs font-bold">
                    {post.tag}
                  </span>
                  <ExternalLink size={13} className="text-ink-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-ink-900 dark:text-white mb-3 leading-snug group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t hairline pt-4">
                  <div className="flex items-center gap-4 text-xs text-ink-400 dark:text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
