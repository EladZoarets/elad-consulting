"use client";

import { motion } from "framer-motion";
import { Presentation, Mic, Users, GraduationCap, ArrowRight } from "lucide-react";

const topics = [
  {
    icon: Presentation,
    title: "From AI Hype to AI Maturity",
    desc: "How to move organizations from endless POCs to production AI that delivers measurable ROI.",
    duration: "45-60 min",
  },
  {
    icon: Mic,
    title: "Multi-Agent SDLC in Practice",
    desc: "What a dev team looks like when 40% of code is written by agents — and how to make it work.",
    duration: "45 min",
  },
  {
    icon: Users,
    title: "The Organizational Operating Model for AI",
    desc: "Methodology-first AI adoption: governance, routing, measurement, and cultural shift.",
    duration: "60 min",
  },
  {
    icon: GraduationCap,
    title: "Cutting AI Costs Without Killing Productivity",
    desc: "The four levers of AI cost optimization — routing, prompt precision, caching, and the fourth one nobody talks about.",
    duration: "30-45 min",
  },
];

const formats = [
  { label: "Keynote", desc: "45-60 min talk for conferences & company events" },
  { label: "Workshop", desc: "Half-day hands-on session with your engineering team" },
  { label: "Lecture series", desc: "Bi-weekly sessions over 6-12 weeks — deep transformation" },
  { label: "Executive briefing", desc: "60 min strategic session for leadership teams" },
];

export default function Speaking() {
  return (
    <section id="speaking" className="relative py-24 md:py-32 px-6 band">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
            Speaking
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
            Talks, workshops & lecture series
          </h2>
          <p className="text-lg text-ink-500 dark:text-gray-400">
            Practical, field-tested sessions for engineering organizations
            ready to move beyond AI experimentation.
            Available for one-off talks or recurring bi-weekly lecture series.
          </p>
        </motion.div>

        {/* Speaking topics */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="card p-7 group hover:-translate-y-1.5"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Icon size={22} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-ink-500 dark:text-gray-400 text-sm leading-relaxed mb-3">
                      {topic.desc}
                    </p>
                    <span className="text-xs font-semibold text-gold-600 dark:text-gold-400">
                      {topic.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement formats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card p-8 md:p-10"
        >
          <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-6">
            Engagement formats
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((fmt, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="font-bold text-gold-600 dark:text-gold-400 mb-1">
                  {fmt.label}
                </div>
                <div className="text-sm text-ink-500 dark:text-gray-400">
                  {fmt.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t hairline">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 dark:text-gold-400 hover:gap-3 transition-all"
            >
              Request a speaking engagement
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
