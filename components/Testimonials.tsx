"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Elad didn't bring another tool — he brought an operating model. Within one quarter our SDLC looked completely different, and cycle-time dropped 38%.",
    name: "VP R&D",
    org: "Cybersecurity company, Series C",
    initials: "R&D",
  },
  {
    quote:
      "The ability to translate AI strategy into language the board understands — and then dive into technical details with the team — is rare. Elad does both.",
    name: "VP Product",
    org: "Global SaaS company",
    initials: "VP",
  },
  {
    quote:
      "We worked with plenty of AI consultants. Elad was the first to talk about ROI, governance, and cultural adoption instead of demos. That made all the difference.",
    name: "CTO",
    org: "Financial organization",
    initials: "CTO",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 band overflow-hidden">
      <Quote
        className="absolute -top-8 right-8 text-gold-500/[0.06] dark:text-gold-500/[0.07] pointer-events-none"
        size={280}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
            What decision-makers say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card p-8 flex flex-col"
            >
              <Quote size={30} className="text-gold-500 mb-5" />
              <blockquote className="text-ink-600 dark:text-gray-300 leading-relaxed mb-8 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-4 border-t hairline pt-5">
                <span className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-ink-950 text-xs font-extrabold shrink-0">
                  {t.initials}
                </span>
                <div>
                  <div className="font-bold text-ink-900 dark:text-white text-sm">{t.name}</div>
                  <div className="text-xs text-ink-400 dark:text-gray-500">{t.org}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
