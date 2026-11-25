import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-5">
      <p className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400">404</p>
      <h1 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white">Page not found</h1>
      <p className="text-lg text-ink-500 dark:text-gray-400" dir="rtl">
        העמוד לא נמצא
      </p>
      <div className="flex items-center gap-3">
        <Link
          href="/he"
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-gold-500 text-ink-950 text-sm font-bold"
        >
          עברית
        </Link>
        <Link
          href="/en"
          className="inline-flex items-center px-5 py-2.5 rounded-full border hairline text-sm font-bold"
        >
          English
        </Link>
      </div>
    </main>
  );
}
