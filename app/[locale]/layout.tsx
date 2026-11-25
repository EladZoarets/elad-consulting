import type { Metadata } from "next";
import { Inter, Heebo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDict } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-heebo" });

const site = "https://elad-consulting.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "he";
  const { meta } = getDict(locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Elad Zoarets", url: site }],
    metadataBase: new URL(site),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        he: "/he",
        en: "/en",
        "x-default": "/he",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: [meta.ogAlternate],
      siteName: "Elad Zoarets",
      url: `${site}/${locale}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') document.documentElement.classList.add('dark');
                else document.documentElement.classList.add('light');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${heebo.variable} font-sans dark:bg-ink-950 dark:text-gray-100 light:bg-paper-50 light:text-ink-900`}
      >
        {children}
      </body>
    </html>
  );
}
