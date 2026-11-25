import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const icons = [Linkedin, Github, Mail];

export default function Contact({ locale }: { locale: Locale }) {
  const copy = getDict(locale).contact;

  return (
    <section id="contact" className="relative py-24 md:py-28 px-6 band scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <span
          className={`text-sm font-bold text-gold-600 dark:text-gold-400 ${
            locale === "en" ? "uppercase tracking-widest" : "tracking-wide"
          }`}
        >
          {copy.eyebrow}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-10 leading-tight">
          {copy.title}
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 text-start">
          {copy.links.map((link, index) => {
            const Icon = icons[index] ?? Mail;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
                className="card p-6 flex flex-col items-center text-center gap-3 group hover:-translate-y-1"
              >
                <span className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={22} className="text-gold-500" />
                </span>
                <span className="font-bold text-ink-900 dark:text-white">{link.label}</span>
                <span dir="ltr" className="text-sm text-ink-400 dark:text-gray-500">
                  {link.handle}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-600 dark:text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {copy.open}
                  <ArrowRight size={13} className="rtl:rotate-180" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
