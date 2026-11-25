import { ArrowRight, Compass, GitBranch, Laptop, Lightbulb } from "lucide-react";
import { LocaleText } from "@/components/MixedText";
import type { Bullet, Talk } from "@/lib/content";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const icons = {
  story: Lightbulb,
  workflow: GitBranch,
  orchestrator: Compass,
};

function BulletList({ bullets, locale }: { bullets: Bullet[]; locale: Locale }) {
  return (
    <ul className="space-y-3">
      {bullets.map((bullet, index) => (
        <li key={index} className="flex items-start gap-2.5 text-ink-600 dark:text-gray-300 leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
          <span>
            {bullet.type === "text" && <LocaleText locale={locale} text={bullet.text} />}
            {bullet.type === "terms" && (
              <span className="block">
                <span><LocaleText locale={locale} text={bullet.lead} /></span>
                <span dir="ltr" className="mt-1 block text-left font-medium text-ink-800 dark:text-white">
                  {bullet.terms}
                </span>
              </span>
            )}
            {bullet.type === "loop" && (
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
                {bullet.before ? (
                  <span>
                    <LocaleText locale={locale} text={bullet.before} />
                  </span>
                ) : null}
                <span dir="ltr" className="inline-flex flex-wrap items-center gap-1.5">
                  {bullet.steps.map((step, stepIndex) => (
                    <span key={step} className="inline-flex items-center gap-1.5">
                      {stepIndex > 0 && <ArrowRight size={14} className="text-gold-500 shrink-0" />}
                      <span className="font-semibold text-ink-800 dark:text-white">{step}</span>
                    </span>
                  ))}
                </span>
                {bullet.after ? <span>{bullet.after}</span> : null}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function AudienceLine({ label, text, locale }: { label: string; text: string; locale: Locale }) {
  return (
    <p className="text-sm text-ink-500 dark:text-gray-400">
      <span className="font-bold text-gold-600 dark:text-gold-400">{label}: </span>
      <LocaleText locale={locale} text={text} />
    </p>
  );
}

function TalkCard({ talk, featured = false, locale }: { talk: Talk; featured?: boolean; locale: Locale }) {
  const Icon = icons[talk.key as keyof typeof icons] ?? Lightbulb;

  return (
    <article className={`card p-7 md:p-8 flex flex-col ${featured ? "md:p-10" : ""}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
          <Icon size={20} className="text-gold-500" />
        </span>
        <span className="text-sm font-bold text-gold-600 dark:text-gold-400">{talk.kicker}</span>
      </div>
      <h3
        className={`font-extrabold text-ink-900 dark:text-white leading-snug mb-4 ${
          featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
        } ${talk.englishTitle ? "embed-ltr" : ""}`}
        dir={talk.englishTitle ? "ltr" : undefined}
      >
        {talk.englishTitle ? talk.title : <LocaleText locale={locale} text={talk.title} />}
      </h3>
      <p className="text-ink-500 dark:text-gray-400 leading-relaxed mb-6">
        <LocaleText locale={locale} text={talk.lede} />
      </p>

      {talk.mistakes && (
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-ink-900 dark:text-white mb-3">{talk.mistakesTitle}</h4>
            <ol className="space-y-3">
              {talk.mistakes.map((mistake, index) => (
                <li key={mistake} className="flex items-start gap-3 text-ink-600 dark:text-gray-300 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 dark:text-gold-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span><LocaleText locale={locale} text={mistake} /></span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border hairline p-5">
              <h4 className="font-bold text-gold-600 dark:text-gold-400 mb-2">{talk.turningLabel}</h4>
              <p className="text-ink-700 dark:text-gray-200 leading-relaxed">
                {talk.turning && <LocaleText locale={locale} text={talk.turning} />}
              </p>
            </div>
            <div className="rounded-2xl border hairline p-5">
              <h4 className="font-bold text-ink-900 dark:text-white mb-2">{talk.todayLabel}</h4>
              <p className="text-ink-600 dark:text-gray-300 leading-relaxed">
                {talk.today && <LocaleText locale={locale} text={talk.today} />}
              </p>
            </div>
          </div>
        </div>
      )}

      {talk.bullets && (
        <div className="mb-6">
          <BulletList bullets={talk.bullets} locale={locale} />
        </div>
      )}

      {talk.roles && (
        <ul className="space-y-3 mb-6">
          {talk.roles.map((role) => (
            <li key={role.term} className="rounded-xl border hairline px-4 py-3">
              <div dir="ltr" className="embed-ltr font-bold text-ink-900 dark:text-white">
                {role.term}
              </div>
              {role.detail && <div className="text-sm text-ink-500 dark:text-gray-400 mt-0.5">{role.detail}</div>}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-2">
        <AudienceLine label={talk.audienceLabel} text={talk.audience} locale={locale} />
      </div>
    </article>
  );
}

export default function Speaking({ locale }: { locale: Locale }) {
  const copy = getDict(locale).speaking;
  const [featured, ...rest] = copy.talks;

  return (
    <section id="speaking" className="relative py-24 md:py-32 px-6 band scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14">
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

        <div className="space-y-6">
          {featured && <TalkCard talk={featured} featured locale={locale} />}
          <div className="grid lg:grid-cols-2 gap-6">
            {rest.map((talk) => (
              <TalkCard key={talk.key} talk={talk} locale={locale} />
            ))}
          </div>

          <article className="card p-7 md:p-10 ring-1 ring-gold-500/25">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
                <Laptop size={20} className="text-gold-500" />
              </span>
              <span className="text-sm font-bold text-gold-600 dark:text-gold-400">{copy.workshop.kicker}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-ink-900 dark:text-white mb-4 leading-snug">
              <LocaleText locale={locale} text={copy.workshop.title} />
            </h3>
            <p className="text-ink-500 dark:text-gray-400 text-lg leading-relaxed mb-6 max-w-3xl">
              <LocaleText locale={locale} text={copy.workshop.lede} />
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-2">
              <AudienceLine label={copy.workshop.audienceLabel} text={copy.workshop.audience} locale={locale} />
              <AudienceLine label={copy.workshop.durationLabel} text={copy.workshop.duration} locale={locale} />
            </div>
          </article>

          <div className="card p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold text-ink-900 dark:text-white mb-3">{copy.ctaTitle}</h3>
              <div className="space-y-1.5 text-ink-500 dark:text-gray-400 leading-relaxed">
                {copy.ctaLines.map((line) => (
                  <p key={line}>
                    <LocaleText locale={locale} text={line} />
                  </p>
                ))}
              </div>
            </div>
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 text-ink-950 font-bold hover:bg-gold-400 hover:shadow-glow-gold transition-all shrink-0"
            >
              {copy.ctaButton}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
