export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t hairline">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-ink-400 dark:text-gray-500">
          © 2026 Elad Zoarets · All rights reserved
        </div>
        <div className="text-sm text-ink-400 dark:text-gray-500">
          Built with <span className="text-gold-500">AI</span> · Next.js · Tailwind
        </div>
      </div>
    </footer>
  );
}
