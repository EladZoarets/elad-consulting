"use client";

import { Brain, Network, GitBranch, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy",
    desc: "From use-case mapping to a full operating model: where AI creates competitive advantage, how to drive cultural adoption, and how to prove ROI to leadership.",
    points: ["Opportunity mapping by impact", "Usage policy & governance", "Phased adoption roadmap"],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Network,
    title: "Multi-Agent Orchestration",
    desc: "Designing agent architectures: Architect, Manager, Dev, Auditor — with smart model routing, shared memory, and cost control.",
    points: ["Role distribution across agents", "Model routing by task type", "Memory injection & oversight"],
    gradient: "from-violet-400 to-purple-600",
  },
  {
    icon: GitBranch,
    title: "AI-Driven SDLC",
    desc: "Redesigning the entire development chain: from spec to PR to review — automating gates, quality, and release without sacrificing engineering accountability.",
    points: ["Plan → Code → PR automation", "Agent-based quality gates", "Jira, GitHub & CI integration"],
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Impact Measurement & ROI",
    desc: "What isn't measured doesn't get budget. Building executive dashboards: cycle-time, throughput, architectural quality, and adoption rate — against real cost.",
    points: ["KPIs that speak to the board", "Baseline before & after", "Quarterly ROI reporting"],
    gradient: "from-emerald-400 to-green-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 band">
      <div className="max-w-6xl mx-auto">
        <div
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
            What I bring to your organization
          </h2>
          <p className="text-lg text-ink-500 dark:text-gray-400">
            Not theoretical consulting. Not another dead pilot. Field-tested
            methodology with measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="card p-8 group hover:-translate-y-1.5 flex flex-col"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-ink-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-ink-500 dark:text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-ink-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 dark:text-gold-400 hover:gap-3 transition-all"
                >
                  Let's talk
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
