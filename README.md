# Elad Zoarets — The Human Orchestrator

Bilingual consulting site for [elad-consulting.com](https://elad-consulting.com). Hebrew (RTL) and English (LTR), one page per language.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS — dark by default, light mode included
- Lucide icons
- Fonts: Heebo (Hebrew and Latin) and Inter, via `next/font`

## Routes

- `/` redirects to `/he` or `/en` from the `locale` cookie, then `Accept-Language` (Hebrew when neither language is preferred)
- `/he` Hebrew, `dir="rtl"`
- `/en` English
- `POST /api/contact` — intro-call requests

## Run

```bash
npm install
npm run dev
npm run build
npm run lint
```
