import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const copy = getDict(locale).footer;

  return (
    <footer className="py-10 px-6 border-t hairline">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
        <div className="text-sm text-ink-400 dark:text-gray-500">{copy.rights}</div>
        <div className="text-sm text-ink-400 dark:text-gray-500">
          {locale === "he" ? (
            <>
              נבנה עם <span className="text-gold-500">AI</span> · Next.js · Tailwind
            </>
          ) : (
            <>
              Built with <span className="text-gold-500">AI</span> · Next.js · Tailwind
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
