import { LocaleText } from "@/components/MixedText";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export default function Problem({ locale }: { locale: Locale }) {
  const copy = getDict(locale).problem;

  return (
    <section id="problem" className="relative py-24 md:py-32 px-6 band scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <span
          className={`text-sm font-bold text-gold-600 dark:text-gold-400 ${
            locale === "en" ? "uppercase tracking-widest" : "tracking-wide"
          }`}
        >
          {copy.eyebrow}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-8 leading-tight text-balance">
          <LocaleText locale={locale} text={copy.titleLead} />
          <br />
          <LocaleText locale={locale} text={copy.titleRest} />
        </h2>
        <p className="text-lg text-ink-500 dark:text-gray-400 leading-relaxed mb-10">
          <LocaleText locale={locale} text={copy.body} />
        </p>
        <blockquote className="text-start border-s-2 border-gold-500 ps-6 text-xl md:text-2xl font-semibold text-ink-800 dark:text-white leading-snug">
          <LocaleText locale={locale} text={copy.close} />
        </blockquote>
      </div>
    </section>
  );
}
