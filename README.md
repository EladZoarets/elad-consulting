# אלעד זוארץ — אתר אישי

אתר אישי (עמוד אחד, RTL בעברית) עבור אלעד זוארץ — AI Evangelist ומוביל טרנספורמציית AI ארגונית.

## סטאק

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — מצב כהה כברירת מחדל + מצב בהיר מלא
- **Framer Motion** — אנימציות fade/slide בגלילה
- **Lucide React** — אייקונים
- פונטים: **Heebo** (עברית) + **Inter** (לטינית) דרך `next/font`

## הרצה

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # בילד פרודקשן
```

## מבנה

```
app/
  layout.tsx      # RTL, פונטים, סקריפט theme (כהה כברירת מחדל), metadata
  page.tsx        # הרכבת הסקשנים
  globals.css     # מערכת העיצוב: card / field / band / gold-text + light mode
components/
  Navbar.tsx      # ניווט + toggle נושא + progress bar + תפריט מובייל
  Hero.tsx        # כותרת, CTA, פלייסהולדר תמונת פרופיל, trust bar
  About.tsx       # ביו, צ'יפים, טיימליין, 4 סטטיסטיקות
  Services.tsx    # 4 כרטיסי שירות
  Blog.tsx        # 3 כרטיסי פוסטים
  Testimonials.tsx# 3 המלצות
  Booking.tsx     # פלייסהולדר Calendly + טופס פונקציונלי (state מלא)
  Contact.tsx     # קישורי LinkedIn / GitHub / Email
  Footer.tsx
```

## התאמות מהירות

- **תמונת פרופיל**: החליפו את בלוק ה-`User` ב-`components/Hero.tsx` ב-`<Image src="/elad.jpg" fill className="object-cover" />` והוסיפו את התמונה ל-`public/`.
- **Calendly**: החליפו את הבלוק המקווקו ב-`components/Booking.tsx` בקוד ההטמעה של Calendly / Cal.com.
- **טופס**: ב-`handleSubmit` ב-`Booking.tsx` חברו ל-API route / Formspree / HubSpot.
- **קישורים חברתיים**: עדכנו ב-`components/Contact.tsx` וב-`components/Footer.tsx`.
- **צבעי מותג**: `tailwind.config.js` (`gold`, `ink`, `paper`).
