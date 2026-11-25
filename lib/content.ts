import type { Locale } from "@/lib/i18n";
import type { PostTag } from "@/lib/posts";

export type Bullet =
  | { type: "text"; text: string }
  | { type: "terms"; lead: string; terms: string }
  | { type: "loop"; before: string; after?: string; steps: string[] };

export type Talk = {
  key: string;
  kicker: string;
  title: string;
  englishTitle?: boolean;
  lede: string;
  mistakesTitle?: string;
  mistakes?: string[];
  turningLabel?: string;
  turning?: string;
  todayLabel?: string;
  today?: string;
  bullets?: Bullet[];
  roles?: { term: string; detail?: string }[];
  audienceLabel: string;
  audience: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
    ogAlternate: string;
  };
  language: {
    label: string;
    he: string;
    en: string;
    heShort: string;
    enShort: string;
  };
  nav: {
    links: { href: string; label: string }[];
    cta: string;
    openMenu: string;
    closeMenu: string;
    themeLight: string;
    themeDark: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    intro: string;
    tags: string[];
    bookTalk: string;
    bookCall: string;
    scroll: string;
  };
  problem: {
    eyebrow: string;
    titleLead: string;
    titleRest: string;
    body: string;
    close: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    photoAlt: string;
  };
  speaking: {
    eyebrow: string;
    title: string;
    talks: Talk[];
    workshop: {
      kicker: string;
      title: string;
      lede: string;
      audienceLabel: string;
      audience: string;
      durationLabel: string;
      duration: string;
    };
    ctaTitle: string;
    ctaLines: string[];
    ctaButton: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    items: { place: string; when?: string; quote?: string; detail?: string }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    lede: string;
    roles: string[];
  };
  blog: {
    eyebrow: string;
    title: string;
    lede: string;
    all: string;
    tags: Record<PostTag, string>;
    minute: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    lede: string;
    availability: string;
    slotTitle: string;
    slotHint: string;
    slotGroup: string;
    name: string;
    phone: string;
    email: string;
    org: string;
    message: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    orgLabel: string;
    messageLabel: string;
    meta: string;
    submit: string;
    sending: string;
    needSlot: string;
    successTitle: string;
    successBody: string;
    selected: string;
    another: string;
    error: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    links: { label: string; handle: string; href: string; aria: string }[];
    open: string;
  };
  footer: {
    rights: string;
    built: string;
  };
  notFound: {
    title: string;
    body: string;
  };
};

const he: Dictionary = {
  meta: {
    title: "אלעד זוארץ | The Human Orchestrator",
    description:
      "מניסויי AI לייצור מדיד, עם תהליכי עבודה של סוכנים שאדם מתזמר. אלעד זוארץ — הרצאות, סדנה וייעוץ לצוותי R&D ומוצר.",
    keywords: [
      "Human Orchestrator",
      "אלעד זוארץ",
      "Agentic Engineering",
      "AI Transformation",
      "הרצאות AI",
      "סדנת סוכנים",
    ],
    ogLocale: "he_IL",
    ogAlternate: "en_US",
  },
  language: {
    label: "שפה",
    he: "עברית",
    en: "English",
    heShort: "עב",
    enShort: "EN",
  },
  nav: {
    links: [
      { href: "#about", label: "אודות" },
      { href: "#speaking", label: "הרצאות" },
      { href: "#proof", label: "הופעות" },
      { href: "#blog", label: "מהשטח" },
      { href: "#contact", label: "יצירת קשר" },
    ],
    cta: "לקביעת שיחה",
    openMenu: "פתיחת תפריט",
    closeMenu: "סגירת תפריט",
    themeLight: "מעבר למצב בהיר",
    themeDark: "מעבר למצב כהה",
  },
  hero: {
    eyebrow: "Agentic Engineering · WSC Sports",
    title: "The Human Orchestrator",
    subtitle: "מניסויי AI לייצור מדיד, עם תהליכי עבודה של סוכנים שאדם מתזמר.",
    intro:
      "אני אלעד זוארץ, מוביל Agentic Engineering & AI Transformation ב-WSC Sports. אני עוזר לצוותי R&D ומוצר להפסיק לייצר עוד פיילוטים ולהתחיל לייצר תוצאות: workflows ברורים, סוכנים שעובדים בתוך הפיתוח ולא לידו, ומדדים שמראים מה השתנה.",
    tags: ["18+ שנות הנדסה וניהול", "מפתח ← Director", "Agentic Engineering ב-WSC Sports"],
    bookTalk: "להזמנת הרצאה",
    bookCall: "לקביעת שיחת היכרות",
    scroll: "גלילה למטה",
  },
  problem: {
    eyebrow: "הבעיה",
    titleLead: "ה-AI נהיה מהיר יותר.",
    titleRest: "הפיתוח לא בהכרח נהיה טוב יותר.",
    body: "רוב הארגונים כבר נתנו לצוותים כלים, הריצו פיילוט, ואולי אפילו בנו סוכן. ובכל זאת, הקצב של הצוות לא באמת השתנה. הסיבה כמעט אף פעם לא טכנית: הכלי יושב ליד הפיתוח ולא בתוכו, אין מחויבות של המנהלים, ואין מדד ברור שמראה אם משהו השתפר.",
    close:
      "ה-AI הוא לא הבעיה. החסר הוא מישהו שמתזמר: מגדיר את העבודה, מתכנן איך היא תבוצע, ומוודא את התוצאה.",
  },
  about: {
    eyebrow: "אודות",
    title: "מי אני",
    paragraphs: [
      "בניתי את הקריירה שלי בכל השלבים, ממפתח ועד Director, לאורך יותר מ-18 שנה. הובלתי קבוצות R&D של כמה צוותים והעליתי מערכות לייצור בסקייל. היום אני מוביל Agentic Engineering & AI Transformation ב-WSC Sports.",
      "שם גם בניתי מוצר SDLC מבוסס סוכנים. הוא עבד, הוא היה אוטונומי, ואנשים אהבו אותו, אבל הוא לא שיפר את המהירות של הצוותים. מהטעויות האלה נולדה הגישה שאני מלמד היום: מתחילים ממדדים ומהצוות, ולא מהכלי.",
      "אני לא מוכר עוד כלי AI. אני מלמד צוותים לתזמר אנשים, תהליכים וסוכנים לכיוון של תוצאה אחת מדידה.",
    ],
    photoAlt: "אלעד זוארץ",
  },
  speaking: {
    eyebrow: "הרצאות",
    title: "שלוש הרצאות. כל אחת עובדת כהרצאה או כסדנה.",
    talks: [
      {
        key: "story",
        kicker: "הרצאה 1",
        title: "בניתי מוצר AI מצוין, והוא לא שיפר כלום",
        lede: 'הסיפור האישי שלי מ-WSC Sports. הגעתי עם מנדט עמום מראש הפיתוח וציפיות גבוהות, פירקתי את הבעיה לחלק "טכני" (שלי) וחלק "ניהולי" (לא שלי), ובניתי מוצר SDLC מבוסס סוכנים כמו פאונדר, בלילות.',
        mistakesTitle: "חמש הטעויות",
        mistakes: [
          "בניתי מהראש שלי ולא ממה שהצוותים צריכים.",
          "האימוץ נשען על אלופים בודדים בשלושה צוותים, בלי מחויבות של המנהלים.",
          "המוצר הפך לאיש קש: הוא ישב ליד הפיתוח הרגיל ולא בתוכו.",
          "המהירות של הצוותים לא עלתה, כי מדדתי את הכלי ולא את הצוות.",
          "המדדים היו מורכבים ולא ברורים, ולכן שום דבר מדיד לא השתפר.",
        ],
        turningLabel: "נקודת המפנה",
        turning: 'הבעיה ה"ניהולית" הייתה הבעיה האמיתית.',
        todayLabel: "איך אני עושה את זה היום",
        today:
          "מתחילים ממדדים ומנקודת בסיס, יושבים עם הצוותים כדי להבין מה חסר להם, בונים משהו קטן לכאב אחד ביחד איתם, ומיישרים קו עם מנהלים ודירקטורים מהיום הראשון, עם מטרה ברורה ושקיפות קבועה מול היעד.",
        audienceLabel: "למי",
        audience: "מנהלי הנדסה ומוצר, ראשי צוותים, הנהלה.",
      },
      {
        key: "workflow",
        kicker: "הרצאה 2",
        title: "Engineer the workflow, not just the prompt",
        englishTitle: true,
        lede: "מה זה workflow, איך כותבים אחד, ולמה מתחילים בקטן.",
        bullets: [
          {
            type: "terms",
            lead: "מפרומפט להגדרת עבודה:",
            terms: "Goal, Context, Scope, Constraints, Acceptance, Validation",
          },
          {
            type: "loop",
            before: "הלולאה",
            steps: ["Observe", "Reason", "Act", "Verify"],
          },
          {
            type: "text",
            text: "סוכן יחיד, תהליך מובנה, או מערכת מרובת סוכנים, ולמה יותר סוכנים זה לא בהכרח יותר טוב",
          },
          {
            type: "text",
            text: 'התרגיל "הסוכן אומר Done": איזו ראיה אתם צריכים כדי להאמין לו?',
          },
        ],
        audienceLabel: "למי",
        audience: "מפתחים, ראשי צוותים, מנהלי מוצר.",
      },
      {
        key: "orchestrator",
        kicker: "הרצאה 3",
        title: "The Human Orchestrator",
        englishTitle: true,
        lede: "מה זה Human Orchestrator, ואיך עוברים מתפקיד של מפקח לתפקיד של מתזמר בפיתוח מבוסס סוכנים. שלושת התפקידים:",
        roles: [
          { term: "Define the work", detail: "להגדיר את העבודה" },
          { term: "Design the execution", detail: "לתכנן את הביצוע" },
          { term: "Verify the outcome", detail: "לוודא את התוצאה" },
        ],
        audienceLabel: "למי",
        audience: "מנהלי R&D ומוצר וראשי צוותים, וכל מי שמנהל אנשים שעובדים עם סוכנים.",
      },
    ],
    workshop: {
      kicker: "סדנה מעשית",
      title: "בונים סוכן (לאנשים טכניים)",
      lede: "המסר פשוט: ברמה הבסיסית, סוכן הוא שירות עם חיבור ל-LLM, ולא יותר מסובך מזה. זיכרון וכל השאר מגיעים אחר כך. בסדנה בונים סוכן שעובד, מהבסיס.",
      audienceLabel: "למי",
      audience: "מפתחים וראשי צוותים טכניים, עם לפטופים.",
      durationLabel: "משך",
      duration: "כ-4 שעות.",
    },
    ctaTitle: "בואו נתאים את זה לקהל שלכם",
    ctaLines: [
      "ייעוץ והטמעה: בתיאום.",
      "מתאים לארגון שרוצה לעבור את כל המסלול, מהסיפור ועד התזמור.",
    ],
    ctaButton: "לקביעת שיחת היכרות",
  },
  proof: {
    eyebrow: "הופעות",
    title: "איפה כבר שמעו אותי",
    items: [
      {
        place: "יחידה 8200",
        quote: "AI is getting faster. But is software engineering getting better?",
      },
      {
        place: "כנס AI Builders 2026",
        when: "ספטמבר 2026",
        quote: "Behind the Backlog: Aligning Product and R&D Through Agentic Workflows",
      },
      {
        place: "הרצאות וסדנאות בחברות הייטק",
        detail: "ייעוץ, שתי הרצאות וסדנה לצוותי פיתוח",
      },
    ],
  },
  audience: {
    eyebrow: "קהל",
    title: "למי זה מתאים",
    lede: "אנשי R&D ומוצר בארגונים שכבר מתנסים ב-AI ורוצים לראות תוצאה מדידה:",
    roles: ["מנהלי הנדסה ודירקטורים", "ראשי צוותים", "מפתחים", "מנהלי מוצר"],
  },
  blog: {
    eyebrow: "מהשטח",
    title: "מהשטח, לא מההייפ",
    lede: "ניתוחים, מתודולוגיות ותובנות מטרנספורמציות AI אמיתיות.",
    all: "כל הפוסטים בלינקדאין",
    tags: {
      cost: "עלות AI",
      architecture: "ארכיטקטורה",
      strategy: "אסטרטגיה",
      adoption: "הטמעה",
      methodology: "מתודולוגיה",
    },
    minute: "דק׳",
  },
  booking: {
    eyebrow: "שיחת היכרות",
    title: "רוצים את זה אצלכם?",
    lede: "ספרו לי מי הקהל ומה האתגר, ואני אציע את ההרצאה, הסדנה או החבילה שהכי מתאימה.",
    availability:
      "הזמינות שלי מוגבלת. אני עושה את זה לצד התפקיד המלא שלי, 4 שעות בשבוע, בבקרים של ימי שלישי, חמישי ושישי.",
    slotTitle: "בחירת מועד",
    slotHint: "שיחת היכרות של 30 דקות בזום",
    slotGroup: "מועדים פנויים",
    name: "שם מלא",
    phone: "טלפון (עם קידומת)",
    email: "אימייל",
    org: "ארגון ותפקיד",
    message: "מי הקהל ומה האתגר? (לא חובה)",
    nameLabel: "שם מלא",
    phoneLabel: "טלפון",
    emailLabel: "אימייל",
    orgLabel: "ארגון ותפקיד",
    messageLabel: "הודעה",
    meta: "30 דקות · זום",
    submit: "לקביעת שיחת היכרות",
    sending: "שולח...",
    needSlot: "בחרו מועד למעלה כדי להמשיך",
    successTitle: "הבקשה התקבלה",
    successBody: "תודה {name}. אחזור אליך תוך 24 שעות לאישור השיחה.",
    selected: "נבחר",
    another: "שליחת בקשה נוספת",
    error: "משהו השתבש. נסו שוב בעוד רגע.",
  },
  contact: {
    eyebrow: "יצירת קשר",
    title: "יצירת קשר",
    open: "פתיחה",
    links: [
      {
        label: "LinkedIn",
        handle: "in/eladz",
        href: "https://www.linkedin.com/in/eladz",
        aria: "פתיחת פרופיל הלינקדאין של אלעד זוארץ",
      },
      {
        label: "GitHub",
        handle: "@eladzoarets",
        href: "https://github.com/eladzoarets",
        aria: "פתיחת פרופיל הגיטהאב של אלעד זוארץ",
      },
      {
        label: "מייל",
        handle: "eladzoarets@gmail.com",
        href: "mailto:eladzoarets@gmail.com",
        aria: "שליחת מייל לאלעד זוארץ",
      },
    ],
  },
  footer: {
    rights: "© 2026 Elad Zoarets · כל הזכויות שמורות",
    built: "נבנה עם AI · Next.js · Tailwind",
  },
  notFound: {
    title: "העמוד לא נמצא",
    body: "אפשר לחזור לעמוד הבית.",
  },
};

const en: Dictionary = {
  meta: {
    title: "Elad Zoarets | The Human Orchestrator",
    description:
      "From AI experiments to measurable production, with agent workflows orchestrated by humans. Talks, a workshop, and consulting for R&D and product teams.",
    keywords: [
      "Human Orchestrator",
      "Elad Zoarets",
      "Agentic Engineering",
      "AI Transformation",
      "AI talks",
      "agent workshop",
    ],
    ogLocale: "en_US",
    ogAlternate: "he_IL",
  },
  language: {
    label: "Language",
    he: "עברית",
    en: "English",
    heShort: "עב",
    enShort: "EN",
  },
  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#speaking", label: "Talks" },
      { href: "#proof", label: "Appearances" },
      { href: "#blog", label: "Writing" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Book a Call",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
  },
  hero: {
    eyebrow: "Agentic Engineering · WSC Sports",
    title: "The Human Orchestrator",
    subtitle: "From AI experiments to measurable production, with agent workflows orchestrated by humans.",
    intro:
      "I'm Elad Zoarets. I lead Agentic Engineering & AI Transformation at WSC Sports. I help R&D and product teams stop producing pilots and start producing results: clear workflows, agents that work inside development instead of beside it, and metrics that show what actually changed.",
    tags: ["18+ years engineering & leadership", "IC → Director", "Agentic Engineering at WSC Sports"],
    bookTalk: "Book a talk",
    bookCall: "Schedule an intro call",
    scroll: "Scroll down",
  },
  problem: {
    eyebrow: "The problem",
    titleLead: "AI is getting faster.",
    titleRest: "Software engineering isn't necessarily getting better.",
    body: "Most organizations have already given their teams tools, run a pilot, maybe even built an agent. And yet the team's pace hasn't really changed. The reason is almost never technical: the tool sits beside development instead of inside it, managers aren't committed, and no clear metric shows whether anything improved.",
    close:
      "AI isn't the problem. What's missing is someone who orchestrates: defines the work, designs how it gets done, and verifies the outcome.",
  },
  about: {
    eyebrow: "About",
    title: "About me",
    paragraphs: [
      "I've worked every rung of the ladder, from hands-on developer to Director, over 18+ years. I led multi-team R&D groups and shipped production systems at scale. Today I lead Agentic Engineering & AI Transformation at WSC Sports.",
      "That's where I built an agent-based SDLC product. It worked, it was autonomous, people liked it, and it didn't make the teams any faster. The approach I teach today came out of those mistakes: start from the metrics and the team, not the tool.",
      "I don't sell another AI tool. I teach teams to orchestrate people, processes, and agents toward one measurable outcome.",
    ],
    photoAlt: "Elad Zoarets",
  },
  speaking: {
    eyebrow: "Talks",
    title: "Three talks. Each works as a lecture or a workshop.",
    talks: [
      {
        key: "story",
        kicker: "Talk 1",
        title: "I built a great AI product, and it didn't improve anything",
        lede: 'My personal story from WSC Sports. I arrived with a vague mandate from the head of R&D and high expectations, split the problem into a "technical" part (mine) and a "managerial" part (not mine), and built an agent-based SDLC product like a founder, at night.',
        mistakesTitle: "The five mistakes",
        mistakes: [
          "I built from my own head, not from what the teams needed.",
          "Adoption relied on individual champions in three teams, with no manager commitment.",
          "The product became a straw man: it sat beside regular development, not inside it.",
          "Team velocity didn't go up, because I measured the tool, not the team.",
          "The metrics were complex and unclear, so nothing measurable improved.",
        ],
        turningLabel: "The turning point",
        turning: 'The "managerial" problem was the real one.',
        todayLabel: "How I do it today",
        today:
          "Start with metrics and a baseline; sit with the teams to find what they're missing; build something small for one pain, together with them; align managers and directors from day one, with a clear goal and constant visibility against the target.",
        audienceLabel: "For",
        audience: "engineering and product managers, team leads, leadership.",
      },
      {
        key: "workflow",
        kicker: "Talk 2",
        title: "Engineer the workflow, not just the prompt",
        englishTitle: true,
        lede: "What a workflow is, how to write one, and why you start small.",
        bullets: [
          {
            type: "terms",
            lead: "From prompt to work definition:",
            terms: "Goal, Context, Scope, Constraints, Acceptance, Validation",
          },
          {
            type: "loop",
            before: "The",
            after: "loop",
            steps: ["Observe", "Reason", "Act", "Verify"],
          },
          {
            type: "text",
            text: "Single agent, structured workflow, or multi-agent, and why more agents isn't necessarily better",
          },
          {
            type: "text",
            text: 'The exercise "The agent says Done": what evidence do you need to believe it?',
          },
        ],
        audienceLabel: "For",
        audience: "developers, team leads, product managers.",
      },
      {
        key: "orchestrator",
        kicker: "Talk 3",
        title: "The Human Orchestrator",
        englishTitle: true,
        lede: "What a Human Orchestrator is, and how you move from supervisor to orchestrator in agentic development. The three roles:",
        roles: [
          { term: "Define the work" },
          { term: "Design the execution" },
          { term: "Verify the outcome" },
        ],
        audienceLabel: "For",
        audience: "R&D and product managers, team leads, and anyone who manages people working with agents.",
      },
    ],
    workshop: {
      kicker: "Hands-on workshop",
      title: "Build an agent (for technical people)",
      lede: "The message is simple: at the basic level, an agent is a service with an LLM connection, and it isn't more complicated than that. Memory and everything else come later. In the workshop you build a working agent from the ground up.",
      audienceLabel: "For",
      audience: "developers and technical team leads, with laptops.",
      durationLabel: "Duration",
      duration: "about 4 hours.",
    },
    ctaTitle: "Let's match this to your audience",
    ctaLines: [
      "Consulting & implementation: by arrangement.",
      "For organizations that want the whole track, from the story to orchestration.",
    ],
    ctaButton: "Schedule an intro call",
  },
  proof: {
    eyebrow: "Appearances",
    title: "Where I've spoken",
    items: [
      {
        place: "Unit 8200",
        quote: "AI is getting faster. But is software engineering getting better?",
      },
      {
        place: "AI Builders 2026 conference",
        when: "September 2026",
        quote: "Behind the Backlog: Aligning Product and R&D Through Agentic Workflows",
      },
      {
        place: "Talks and workshops at hi-tech companies",
        detail: "consulting, two talks, and a workshop for development teams",
      },
    ],
  },
  audience: {
    eyebrow: "Audience",
    title: "Who it's for",
    lede: "R&D and product people in organizations that are already experimenting with AI and want to see a measurable result:",
    roles: ["Engineering managers and directors", "Team leads", "Developers", "Product managers"],
  },
  blog: {
    eyebrow: "Writing",
    title: "From the field, not the hype",
    lede: "Analysis, frameworks, and insights from real AI transformations.",
    all: "All posts on LinkedIn",
    tags: {
      cost: "AI Cost",
      architecture: "Architecture",
      strategy: "Strategy",
      adoption: "Adoption",
      methodology: "Methodology",
    },
    minute: "min",
  },
  booking: {
    eyebrow: "Intro call",
    title: "Want this for your team?",
    lede: "Tell me who the audience is and what the challenge is, and I'll suggest the talk, workshop, or bundle that fits best.",
    availability:
      "Limited availability: I do this alongside my full-time role, 4 hours a week, on Tuesday, Thursday, and Friday mornings.",
    slotTitle: "Choose a time slot",
    slotHint: "30-minute intro call on Zoom",
    slotGroup: "Available time slots",
    name: "Full name",
    phone: "Phone (with country code)",
    email: "Email",
    org: "Organization & role",
    message: "Who's the audience, and what's the challenge? (optional)",
    nameLabel: "Full name",
    phoneLabel: "Phone number",
    emailLabel: "Email address",
    orgLabel: "Organization and role",
    messageLabel: "Message",
    meta: "30 min · Zoom",
    submit: "Schedule an intro call",
    sending: "Sending...",
    needSlot: "Please select a time slot above to continue",
    successTitle: "Request received!",
    successBody: "Thanks {name}. I'll get back to you within 24 hours to confirm the call.",
    selected: "Selected",
    another: "Send another request",
    error: "Something went wrong. Please try again in a moment.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    open: "Open",
    links: [
      {
        label: "LinkedIn",
        handle: "in/eladz",
        href: "https://www.linkedin.com/in/eladz",
        aria: "Open Elad Zoarets LinkedIn profile",
      },
      {
        label: "GitHub",
        handle: "@eladzoarets",
        href: "https://github.com/eladzoarets",
        aria: "Open Elad Zoarets GitHub profile",
      },
      {
        label: "Email",
        handle: "eladzoarets@gmail.com",
        href: "mailto:eladzoarets@gmail.com",
        aria: "Send email to Elad Zoarets",
      },
    ],
  },
  footer: {
    rights: "© 2026 Elad Zoarets · All rights reserved",
    built: "Built with AI · Next.js · Tailwind",
  },
  notFound: {
    title: "Page not found",
    body: "Head back to the homepage.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { he, en };

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale];
}
