"use client";

import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/content";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const copy = getDict(locale).language;

  const go = (next: Locale) => {
    document.cookie = `locale=${next};path=/;max-age=31536000;samesite=lax`;
    const hash = window.location.hash;
    window.location.assign(`/${next}${hash}`);
  };

  const item = (code: Locale, short: string, full: string) => {
    const active = locale === code;
    return (
      <a
        href={`/${code}`}
        hrefLang={code}
        lang={code}
        aria-current={active ? "page" : undefined}
        aria-label={full}
        onClick={(event) => {
          event.preventDefault();
          if (!active) go(code);
        }}
        className={`px-2.5 h-full inline-flex items-center rounded-full text-xs font-bold transition-colors ${
          active
            ? "bg-gold-500 text-ink-950"
            : "text-ink-600 dark:text-gray-400 hover:text-ink-900 dark:hover:text-white"
        }`}
      >
        {short}
      </a>
    );
  };

  return (
    <div
      role="group"
      aria-label={copy.label}
      className="flex h-10 items-center rounded-full border hairline p-0.5 shrink-0"
    >
      {item("he", copy.heShort, copy.he)}
      {item("en", copy.enShort, copy.en)}
    </div>
  );
}
