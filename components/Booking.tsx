"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  Loader2,
  Clock,
} from "lucide-react";

type FormState = "idle" | "sending" | "sent";

/* Build the next 4 available slots: upcoming Tue & Fri mornings */
function buildSlots(): { id: string; label: string; day: string; time: string; dateISO: string }[] {
  const today = new Date();
  const slots: { id: string; label: string; day: string; time: string; dateISO: string }[] = [];
  const times = ["09:00", "10:00", "11:00"];

  // Scan the next 21 days for Tuesdays (2) and Fridays (5)
  for (let i = 0; i < 21 && slots.length < 6; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dow = d.getDay();
    if (dow !== 2 && dow !== 4 && dow !== 5) continue;

    const dayName = dow === 2 ? "Tue" : dow === 4 ? "Thu" : "Fri";
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    for (const t of times) {
      slots.push({
        id: `${dayName}-${dateStr}-${t}`,
        label: `${dayName} ${dateStr} · ${t}`,
        day: dayName,
        time: t,
        dateISO: d.toISOString().split("T")[0],
      });
    }
  }
  return slots;
}

export default function Booking() {
  const slots = useMemo(buildSlots, []);
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
  });
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setState("sending");
    try {
      const slot = slots.find((s) => s.id === selectedSlot);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          slot: slot ? slot.label : selectedSlot,
          slotDate: slot?.dateISO || "",
          slotTime: slot?.time || "",
          slotDay: slot?.day || "",
        }),
      });
      if (res.ok) setState("sent");
      else setState("idle");
    } catch {
      setState("idle");
    }
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-gold-500/[0.05] blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold tracking-widest text-gold-600 dark:text-gold-400 uppercase">
            Book a Call
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink-900 dark:text-white mt-3 mb-4 leading-tight">
            Let's talk about your organization
          </h2>
          <p className="text-lg text-ink-500 dark:text-gray-400 max-w-2xl mx-auto">
            Limited availability — I take on a small number of consulting
            clients alongside my full-time role. Currently 4 hours/week,
            Tuesday, Thursday & Friday mornings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="card p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {state === "sent" ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[380px] flex flex-col items-center justify-center text-center gap-4"
              >
                <span className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-emerald-500" />
                </span>
                <h3 className="text-2xl font-bold text-ink-900 dark:text-white">
                  Request received!
                </h3>
                <p className="text-ink-500 dark:text-gray-400 max-w-sm">
                  Thanks {form.name.split(" ")[0]}. I'll get back to you
                  within 24 hours to confirm the call.
                </p>
                <p className="text-sm text-gold-600 dark:text-gold-400 font-semibold">
                  Selected: {slots.find((s) => s.id === selectedSlot)?.label}
                </p>
                <button
                  onClick={() => {
                    setState("idle");
                    setForm({ name: "", email: "", phone: "", org: "", message: "" });
                    setSelectedSlot(null);
                  }}
                  className="text-sm font-bold text-gold-600 dark:text-gold-400 hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Time slot picker — single select */}
                <div>
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-1">
                    Choose a time slot
                  </h3>
                  <p className="text-sm text-ink-400 dark:text-gray-500 mb-4">
                    Pick one slot · Tue, Thu & Fri mornings · 30 min · Zoom
                  </p>
                  <div
                    role="radiogroup"
                    aria-label="Available time slots"
                    className="grid sm:grid-cols-2 gap-2"
                  >
                    {slots.map((slot) => {
                      const active = selectedSlot === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          aria-label={slot.label}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all duration-200 text-left ${
                            active
                              ? "bg-gold-500 text-ink-950 border-gold-500 shadow-glow-gold"
                              : "border-ink-600/20 dark:border-white/10 text-ink-600 dark:text-gray-400 hover:border-gold-500/50 hover:bg-gold-500/5"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Calendar size={15} className={active ? "text-ink-950" : "text-gold-500"} />
                            {slot.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact details */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={update("name")}
                      aria-label="Full name"
                      className="field"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (with country code)"
                      value={form.phone}
                      onChange={update("phone")}
                      aria-label="Phone number"
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={update("email")}
                      aria-label="Email address"
                      className="field"
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                    <input
                      type="text"
                      required
                      placeholder="Organization & role"
                      value={form.org}
                      onChange={update("org")}
                      aria-label="Organization and role"
                      className="field"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-ink-400 dark:text-gray-500 pointer-events-none" size={17} />
                  <textarea
                    rows={3}
                    placeholder="What's your biggest AI challenge right now? (optional)"
                    value={form.message}
                    onChange={update("message")}
                    aria-label="Message"
                    className="field resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-ink-400 dark:text-gray-500">
                  <Clock size={15} />
                  30 min · Zoom · Tue/Thu/Fri mornings · No cost, no commitment
                </div>

                <button
                  type="submit"
                  disabled={state === "sending" || !selectedSlot}
                  className="w-full py-4 rounded-xl bg-gold-500 text-ink-950 font-bold text-lg hover:bg-gold-400 hover:shadow-glow-gold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 size={19} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Request a call
                    </>
                  )}
                </button>

                {!selectedSlot && (
                  <p className="text-center text-sm text-ink-400 dark:text-gray-500">
                    Please select a time slot above to continue
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
