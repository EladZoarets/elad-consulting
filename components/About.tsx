import Image from "next/image";
import { LocaleText } from "@/components/MixedText";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export default function About({ locale }: { locale: Locale }) {
  const copy = getDict(locale).about;

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border hairline shadow-xl">
              <Image
                src="/elad-photo.jpg"
                alt={copy.photoAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>

          <div>
            <span
              className={`text-sm font-bold text-gold-600 dark:text-gold-400 ${
                locale === "en" ? "uppercase tracking-widest" : "tracking-wide"
              }`}
            >
              {copy.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-6 leading-tight">
              {copy.title}
            </h2>
            <div className="space-y-4 text-ink-500 dark:text-gray-400 text-lg leading-relaxed">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <LocaleText locale={locale} text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
