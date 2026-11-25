import { ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react";
import { hasHebrew } from "@/lib/bidi";
import { LocaleText } from "@/components/MixedText";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { posts } from "@/lib/posts";

export default function Blog({ locale }: { locale: Locale }) {
  const copy = getDict(locale).blog;

  return (
    <section id="blog" className="relative py-24 md:py-32 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span
              className={`text-sm font-bold text-gold-600 dark:text-gold-400 ${
                locale === "en" ? "uppercase tracking-widest" : "tracking-wide"
              }`}
            >
              {copy.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
              {copy.title}
            </h2>
            <p className="text-lg text-ink-500 dark:text-gray-400">{copy.lede}</p>
          </div>
          <a
            href="https://www.linkedin.com/in/eladz/recent-activity/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-600 dark:text-gold-400 hover:gap-3 transition-all shrink-0"
          >
            {copy.all}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card overflow-hidden group cursor-pointer flex flex-col hover:-translate-y-1.5"
            >
              <div className="h-1.5 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 opacity-80" />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-600 dark:text-gold-400 text-xs font-bold">
                    {copy.tags[post.tag]}
                  </span>
                  <ExternalLink
                    size={13}
                    className="text-ink-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3
                  dir={hasHebrew(post.title) ? "rtl" : "ltr"}
                  className="text-lg md:text-xl font-bold text-ink-900 dark:text-white mb-3 leading-snug group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors text-start"
                >
                  {hasHebrew(post.title) ? <LocaleText locale="he" text={post.title} /> : post.title}
                </h3>
                <p dir="auto" className="text-ink-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 text-start">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-ink-400 dark:text-gray-500 border-t hairline pt-4">
                  <span className="inline-flex items-center gap-1.5" dir="ltr">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readTime.replace("min", copy.minute)}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
