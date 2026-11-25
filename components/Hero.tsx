import { Calendar, ChevronDown, Presentation, Sparkles } from "lucide-react";
import { LocaleText } from "@/components/MixedText";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const copy = getDict(locale).hero;

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-32 -end-32 w-[34rem] h-[34rem] rounded-full bg-gold-500/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -start-40 w-[30rem] h-[30rem] rounded-full bg-indigo-500/[0.05] blur-[130px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-paper-50 dark:from-ink-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24 w-full text-center">
        <div
          dir="ltr"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/[0.08] text-gold-600 dark:text-gold-400 text-sm font-medium mb-7"
        >
          <Sparkles size={15} />
          {copy.eyebrow}
        </div>

        <h1
          dir="ltr"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] tracking-tight gold-text mb-6 text-balance"
        >
          {copy.title}
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-ink-800 dark:text-gray-100 leading-snug max-w-3xl mx-auto mb-6 text-balance">
          <LocaleText locale={locale} text={copy.subtitle} />
        </p>

        <p className="text-lg text-ink-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
          <LocaleText locale={locale} text={copy.intro} />
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#speaking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-500 text-ink-950 font-bold text-lg hover:bg-gold-400 hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-200"
          >
            <Presentation size={20} />
            {copy.bookTalk}
          </a>
          <a
            href="#booking"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border hairline text-ink-800 dark:text-white font-semibold text-lg hover:border-gold-500/50 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
          >
            <Calendar size={20} />
            {copy.bookCall}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-ink-500 dark:text-gray-400">
          {copy.tags.map((tag, index) => (
            <span key={tag} className="inline-flex items-center gap-3">
              {index > 0 && <span className="w-1 h-1 rounded-full bg-gold-500/60" aria-hidden />}
              <span><LocaleText locale={locale} text={tag} /></span>
            </span>
          ))}
        </div>

        <a
          href="#problem"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 dark:text-gray-500 hover:text-gold-500 transition-colors"
          aria-label={copy.scroll}
        >
          <ChevronDown size={26} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
