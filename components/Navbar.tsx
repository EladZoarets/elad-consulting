"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export default function Navbar({ locale }: { locale: Locale }) {
  const copy = getDict(locale);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper-50/85 dark:bg-ink-950/85 backdrop-blur-xl border-b hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-[4.5rem] flex items-center justify-between gap-3">
        <a href="#top" dir="ltr" className="flex items-center gap-2.5 group shrink-0">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-ink-950 font-extrabold text-sm shadow-glow-gold group-hover:scale-105 transition-transform">
            EZ
          </span>
          <span className="hidden sm:inline font-bold text-lg tracking-tight text-ink-800 dark:text-white">
            Elad <span className="gold-text">Zoarets</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} />

          <button
            onClick={toggleTheme}
            aria-label={isDark ? copy.nav.themeLight : copy.nav.themeDark}
            className="w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-600 dark:text-gold-400 hover:border-gold-500/50 transition-colors shrink-0"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#booking"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gold-500 text-ink-950 text-sm font-bold hover:bg-gold-400 hover:shadow-glow-gold transition-all duration-200 shrink-0"
          >
            {copy.nav.cta}
          </a>

          <button
            className="lg:hidden w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-700 dark:text-gray-300 shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden overflow-hidden bg-paper-50/95 dark:bg-ink-950/95 backdrop-blur-xl border-b hairline">
          <div className="px-6 py-6 flex flex-col gap-4">
            {copy.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-ink-700 dark:text-gray-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gold-500 text-ink-950 font-bold"
            >
              {copy.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
