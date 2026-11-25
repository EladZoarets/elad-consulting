import { LocaleText } from "@/components/MixedText";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export default function Proof({ locale }: { locale: Locale }) {
  const copy = getDict(locale).proof;

  return (
    <section id="proof" className="relative py-24 md:py-32 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <span
            className={`text-sm font-bold text-gold-600 dark:text-gold-400 ${
              locale === "en" ? "uppercase tracking-widest" : "tracking-wide"
            }`}
          >
            {copy.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 leading-tight">
            {copy.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {copy.items.map((item) => (
            <article key={item.place} className="card p-7 flex flex-col">
              <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-3">
                <LocaleText locale={locale} text={item.place} />
              </h3>
              {item.when && (
                <p className="text-sm font-semibold text-gold-600 dark:text-gold-400 mb-3">{item.when}</p>
              )}
              {item.quote && (
                <p dir="ltr" className="embed-ltr text-ink-600 dark:text-gray-300 leading-relaxed">
                  “{item.quote}”
                </p>
              )}
              {item.detail && (
                <p className="text-ink-600 dark:text-gray-300 leading-relaxed">
                  <LocaleText locale={locale} text={item.detail} />
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
