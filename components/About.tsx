"use client";

import Image from "next/image";
import { Briefcase, Bot, Gauge, Layers } from "lucide-react";

const stats = [
  { value: "18+", label: "Years across engineering, leadership & AI" },
  { value: "IC → Director", label: "Led teams at every level" },
  { value: "3×", label: "Measured velocity multiplier" },
  { value: "1.5+", label: "Years driving AI transformation" },
];

const focus = [
  { icon: Bot, text: "Agent-driven operating models" },
  { icon: Layers, text: "Multi-Agent orchestration" },
  { icon: Gauge, text: "SDLC velocity multipliers" },
];

const timeline = [
  { role: "AI Evangelist & Strategy Consultant", org: "Current", period: "Driving AI transformation across engineering orgs" },
  { role: "Director-level Engineering Leader", org: "Previous", period: "Led multi-team R&D groups through hyper-growth" },
  { role: "Full-ladder IC → Director", org: "18+ years", period: "From hands-on architect to senior leadership" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Photo */}
          <div
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border hairline shadow-xl">
              <Image
                src="/elad-photo.jpg"
                alt="Elad Zoarets"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>

          <div
          >
            <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-6 leading-tight">
              Engineering has changed.
              <br />
              Most organizations haven't.
            </h2>
            <div className="space-y-4 text-ink-500 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm <span className="font-bold text-ink-800 dark:text-white">Elad Zoarets</span> —
                an <span className="font-semibold">AI Evangelist & Strategy Consultant</span> who
                climbed every rung from <span className="font-semibold">hands-on developer to
                Director</span> over 18+ years. I led multi-team R&D groups, shipped production
                systems at scale, and now help engineering organizations adopt AI that actually
                delivers.
              </p>
              <p>
                I don't sell another AI tool. I build with you an{" "}
                <span className="text-gold-600 dark:text-gold-400 font-semibold">
                  organizational operating model
                </span>{" "}
                where autonomous agents, redesigned SDLC processes, and sharp
                measurement turn your engineering into a growth engine — with
                leverage that shows up on the bottom line.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {focus.map((f, i) => {
                const Icon = f.icon;
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border hairline text-sm font-medium text-ink-700 dark:text-gray-300"
                  >
                    <Icon size={15} className="text-gold-500" />
                    {f.text}
                  </span>
                );
              })}
            </div>

            <div className="mt-10 space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
                    <Briefcase size={17} className="text-gold-500" />
                  </span>
                  <div>
                    <div className="font-bold text-ink-800 dark:text-white">
                      {t.role} · {t.org}
                    </div>
                    <div className="text-sm text-ink-400 dark:text-gray-500">{t.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:pt-14">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`card p-6 md:p-8 ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-extrabold gold-text mb-2 text-left">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-ink-500 dark:text-gray-400 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
