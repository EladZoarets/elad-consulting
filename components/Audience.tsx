import { Briefcase, Code2, Layers, Users } from "lucide-react";
import { LocaleText } from "@/components/MixedText";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const icons = [Briefcase, Users, Code2, Layers];

export default function Audience({ locale }: { locale: Locale }) {
  const copy = getDict(locale).audience;

  return (
    <section id="audience" className="relative py-24 md:py-32 px-6 band scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <span
            className={`text-sm font-bold text-gold-600 dark:text-gold-400 ${
              locale === "en" ? "uppercase tracking-widest" : "tracking-wide"
            }`}
          >
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
            {copy.title}
          </h2>
          <p className="text-lg text-ink-500 dark:text-gray-400 leading-relaxed">
            <LocaleText locale={locale} text={copy.lede} />
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {copy.roles.map((role, index) => {
            const Icon = icons[index] ?? Users;
            return (
              <li key={role} className="card px-5 py-6 flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold-500" />
                </span>
                <span className="font-bold text-ink-800 dark:text-white leading-snug">
                  <LocaleText locale={locale} text={role} />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
