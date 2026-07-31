import type { Metadata } from "next";
import { Inter, Heebo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const heebo = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-heebo" });

export const metadata: Metadata = {
  title: "Elad Zoarets | AI Strategy Consultant & Engineering Leader",
  description:
    "Elad Zoarets — AI Strategy Consultant with deep engineering roots. Expert in Multi-Agent orchestration, AI-driven SDLC, and organizational velocity multipliers. Book a session.",
  keywords: ["AI Evangelist", "Multi-Agent", "SDLC", "AI Strategy", "Engineering Transformation", "Elad Zoarets"],
  metadataBase: new URL("https://elad-consulting.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Elad Zoarets | AI Strategy Consultant & Engineering Leader",
    description: "Turning organizations into AI-driven engines with methodology, not just tools.",
    type: "website",
    locale: "en_US",
    siteName: "Elad Zoarets",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elad Zoarets | AI Strategy Consultant & Engineering Leader",
    description: "Turning organizations into AI-driven engines with methodology, not just tools.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
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
      <body className={`${inter.variable} ${heebo.variable} font-sans dark:bg-ink-950 dark:text-gray-100 light:bg-paper-50 light:text-ink-900`}>
        {children}
      </body>
    </html>
  );
}
