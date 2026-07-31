"use client";

import { Calendar, BookOpen, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-gold-500/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] rounded-full bg-indigo-500/[0.05] blur-[130px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper-50 dark:from-ink-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24 w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/[0.08] text-gold-600 dark:text-gold-400 text-sm font-medium mb-7">
          <Sparkles size={15} />
          AI Strategy Consultant · Engineering at the Core
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.15] tracking-tight text-ink-900 dark:text-white mb-6">
          Turning organizations into
          <span className="gold-text"> AI-driven</span>
          <br />
          engines — with methodology, not just tools
        </h1>

        <p className="text-lg md:text-xl text-ink-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
          I&apos;m Elad Zoarets. I help engineering organizations adopt AI that
          actually delivers: agent-driven operating models, redesigned SDLCs,
          and velocity multipliers measured by ROI — not hype.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-ink-950 font-bold text-lg hover:bg-gold-400 hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-200"
          >
            <Calendar size={20} />
            Book a Call
          </a>
          <a
            href="#speaking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border hairline text-ink-800 dark:text-white font-semibold text-lg hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
          >
            <BookOpen size={19} />
            Speaking Topics
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-400 dark:text-gray-500">
          <span className="font-semibold text-ink-600 dark:text-gray-400">18+ years engineering & leadership</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-gold-500/60" />
          <span>AI Evangelist</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-gold-500/60" />
          <span>Director-level Engineering Leader</span>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 dark:text-gray-500 hover:text-gold-500 transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={26} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
