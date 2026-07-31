"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What I Do" },
  { href: "#speaking", label: "Speaking" },
  { href: "#blog", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

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
      <nav className="max-w-6xl mx-auto px-6 h-16 md:h-[4.5rem] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-ink-950 font-extrabold text-sm shadow-glow-gold group-hover:scale-105 transition-transform">
            EZ
          </span>
          <span className="font-bold text-lg tracking-tight text-ink-800 dark:text-white">
            Elad <span className="gold-text">Zoarets</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-600 dark:text-gold-400 hover:border-gold-500/50 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#booking"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gold-500 text-ink-950 text-sm font-bold hover:bg-gold-400 hover:shadow-glow-gold transition-all duration-200"
          >
            Book a Call
          </a>

          <button
            className="lg:hidden w-10 h-10 rounded-full border hairline flex items-center justify-center text-ink-700 dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-gold-400 to-gold-600"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-paper-50/95 dark:bg-ink-950/95 backdrop-blur-xl border-b hairline"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
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
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
