"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { getDict } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type FormState = "idle" | "sending" | "sent" | "error";

type Slot = {
  id: string;
  label: string;
  day: string;
  time: string;
  dateISO: string;
};

const HE_DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
const HE_MONTHS = ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"];
const EN_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function buildSlots(locale: Locale): Slot[] {
  const today = new Date();
  const slots: Slot[] = [];
  const times = ["09:00", "10:00", "11:00"];

  for (let i = 0; i < 21 && slots.length < 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dow = date.getDay();
    if (dow !== 2 && dow !== 4 && dow !== 5) continue;

    const day = locale === "he" ? HE_DAYS[dow] : EN_DAYS[dow];
    const month = locale === "he" ? HE_MONTHS[date.getMonth()] : EN_MONTHS[date.getMonth()];
    const dateISO = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const dateLabel = locale === "he" ? `${date.getDate()} ב${month}` : `${month} ${date.getDate()}`;

    for (const time of times) {
      if (slots.length >= 6) break;
      slots.push({
        id: `${dateISO}-${time}`,
        label: locale === "he" ? `יום ${day}, ${dateLabel} · ${time}` : `${day} ${dateLabel} · ${time}`,
        day,
        time,
        dateISO,
      });
    }
  }

  return slots;
}

export default function Booking({ locale }: { locale: Locale }) {
  const copy = getDict(locale).booking;
  const [slots, setSlots] = useState<Slot[]>([]);
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", message: "" });
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    setSlots(buildSlots(locale));
  }, [locale]);

  const update =
    (key: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: event.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedSlot) return;
    setState("sending");
    try {
      const slot = slots.find((item) => item.id === selectedSlot);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          locale,
          slot: slot ? slot.label : selectedSlot,
          slotDate: slot?.dateISO || "",
          slotTime: slot?.time || "",
          slotDay: slot?.day || "",
        }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  };

  const reset = () => {
    setState("idle");
    setForm({ name: "", email: "", phone: "", org: "", message: "" });
    setSelectedSlot(null);
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 px-6 overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-gold-500/[0.05] blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-14">
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
          <p className="text-lg text-ink-500 dark:text-gray-400 max-w-2xl mx-auto">{copy.lede}</p>
          <p className="text-base text-ink-500 dark:text-gray-400 max-w-2xl mx-auto mt-4">{copy.availability}</p>
        </div>

        <div className="card p-8 md:p-10">
          {state === "sent" ? (
            <div className="min-h-[380px] flex flex-col items-center justify-center text-center gap-4">
              <span className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </span>
              <h3 className="text-2xl font-bold text-ink-900 dark:text-white">{copy.successTitle}</h3>
              <p className="text-ink-500 dark:text-gray-400 max-w-sm">
                {copy.successBody.replace("{name}", form.name.split(" ")[0] || form.name)}
              </p>
              <p className="text-sm text-gold-600 dark:text-gold-400 font-semibold">
                {copy.selected}: {slots.find((slot) => slot.id === selectedSlot)?.label}
              </p>
              <button onClick={reset} className="text-sm font-bold text-gold-600 dark:text-gold-400 hover:underline">
                {copy.another}
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-1">{copy.slotTitle}</h3>
                <p className="text-sm text-ink-400 dark:text-gray-500 mb-4">{copy.slotHint}</p>
                {slots.length === 0 ? (
                  <div className="grid sm:grid-cols-2 gap-2" aria-hidden>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="h-12 rounded-xl border hairline animate-pulse" />
                    ))}
                  </div>
                ) : (
                  <div role="radiogroup" aria-label={copy.slotGroup} className="grid sm:grid-cols-2 gap-2">
                    {slots.map((slot) => {
                      const active = selectedSlot === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 text-start ${
                            active
                              ? "bg-gold-500 text-ink-950 border-gold-500 shadow-glow-gold"
                              : "border-ink-600/20 dark:border-white/10 text-ink-600 dark:text-gray-400 hover:border-gold-500/50 hover:bg-gold-500/5"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Calendar size={15} className={active ? "text-ink-950 shrink-0" : "text-gold-500 shrink-0"} />
                            <span>{slot.label}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <User className="absolute start-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                  <input
                    type="text"
                    required
                    placeholder={copy.name}
                    value={form.name}
                    onChange={update("name")}
                    aria-label={copy.nameLabel}
                    autoComplete="name"
                    className="field"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute start-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder={copy.phone}
                    value={form.phone}
                    onChange={update("phone")}
                    aria-label={copy.phoneLabel}
                    autoComplete="tel"
                    className="field"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative">
                  <Mail className="absolute start-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                  <input
                    type="email"
                    required
                    placeholder={copy.email}
                    value={form.email}
                    onChange={update("email")}
                    aria-label={copy.emailLabel}
                    autoComplete="email"
                    className="field"
                  />
                </div>
                <div className="relative">
                  <Building2 className="absolute start-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                  <input
                    type="text"
                    required
                    placeholder={copy.org}
                    value={form.org}
                    onChange={update("org")}
                    aria-label={copy.orgLabel}
                    autoComplete="organization"
                    className="field"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute start-4 top-4 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                <textarea
                  rows={3}
                  placeholder={copy.message}
                  value={form.message}
                  onChange={update("message")}
                  aria-label={copy.messageLabel}
                  className="field resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-ink-400 dark:text-gray-500">
                <Clock size={15} />
                {copy.meta}
              </div>

              {state === "error" && (
                <p role="alert" className="text-sm text-red-500">
                  {copy.error}
                </p>
              )}

              <button
                type="submit"
                disabled={state === "sending" || !selectedSlot}
                className="w-full py-4 rounded-xl bg-gold-500 text-ink-950 font-bold text-lg hover:bg-gold-400 hover:shadow-glow-gold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === "sending" ? (
                  <>
                    <Loader2 size={19} className="animate-spin" />
                    {copy.sending}
                  </>
                ) : (
                  <>
                    <Send size={18} className="rtl:rotate-180" />
                    {copy.submit}
                  </>
                )}
              </button>

              {!selectedSlot && (
                <p className="text-center text-sm text-ink-400 dark:text-gray-500">{copy.needSlot}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
