import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

const COOKIE = "locale";
const YEAR = 60 * 60 * 24 * 365;

function languageQuality(header: string, prefix: string): number | null {
  let best: number | null = null;
  for (const part of header.split(",")) {
    const [rangeRaw, ...params] = part.trim().split(";");
    const range = rangeRaw.trim().toLowerCase();
    if (!range || range === "*") continue;
    if (range !== prefix && !range.startsWith(`${prefix}-`)) continue;
    const qParam = params.map((param) => param.trim()).find((param) => param.startsWith("q="));
    const q = qParam ? Number(qParam.slice(2)) : 1;
    if (Number.isNaN(q)) continue;
    best = best === null ? q : Math.max(best, q);
  }
  return best;
}

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(COOKIE)?.value;
  if (saved && isLocale(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";
  const hebrew = languageQuality(header, "he");
  const english = languageQuality(header, "en");
  if (english !== null && (hebrew === null || english > hebrew)) return "en";
  return defaultLocale;
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(COOKIE, locale, {
    path: "/",
    maxAge: YEAR,
    sameSite: "lax",
  });
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/").filter(Boolean)[0];

  if (first && isLocale(first)) {
    return withLocaleCookie(NextResponse.next(), first);
  }

  if (pathname === "/") {
    const locale = preferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return withLocaleCookie(NextResponse.redirect(url), locale);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
