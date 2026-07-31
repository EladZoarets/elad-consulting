"use client";

import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/eladz",
    href: "https://www.linkedin.com/in/eladz",
    ariaLabel: "Open Elad Zoarets LinkedIn profile",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "@eladzoarets",
    href: "https://github.com/eladzoarets",
    ariaLabel: "Open Elad Zoarets GitHub profile",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "eladzoarets@gmail.com",
    href: "mailto:eladzoarets@gmail.com",
    ariaLabel: "Send email to Elad Zoarets",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 band">
      <div className="max-w-4xl mx-auto text-center">
        <div
        >
          <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-5 leading-tight">
            Let's connect
          </h2>
          <p className="text-lg text-ink-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            Open to conversations about AI strategy, Multi-Agent orchestration,
            SDLC transformation — and anything related to engineering leverage.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="card p-6 flex flex-col items-center gap-3 group hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Icon size={22} className="text-gold-500" />
                  </span>
                  <span className="font-bold text-ink-900 dark:text-white">{social.label}</span>
                  <span className="text-sm text-ink-400 dark:text-gray-500">{social.handle}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-600 dark:text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Open
                    <ArrowRight size={13} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
