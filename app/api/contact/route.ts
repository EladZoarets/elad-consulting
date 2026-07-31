import { NextRequest, NextResponse } from "next/server";
import { execFile } from "child_process";
import { promisify } from "util";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const execFileAsync = promisify(execFile);

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  record.count++;
  return record.count > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, org, message, slot, slotDate, slotTime, slotDay } = body;

    if (!name || !email || !phone || !org) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields (name, email, phone, org)" },
        { status: 400 }
      );
    }

    if (!slot) {
      return NextResponse.json(
        { ok: false, error: "No time slot selected" },
        { status: 400 }
      );
    }

    // Basic input validation
    if (
      name.length > 200 ||
      email.length > 200 ||
      phone.length > 50 ||
      org.length > 200 ||
      (message && message.length > 5000)
    ) {
      return NextResponse.json(
        { ok: false, error: "Input too long" },
        { status: 400 }
      );
    }

    const subject = `🎤 Booking: ${name} — ${slot}`;
    const lines = [
      `New booking request from elad-consulting.com`,
      ``,
      `═══════════════════════════════════════`,
      `📅 SELECTED SLOT`,
      `═══════════════════════════════════════`,
      `Time: ${slot}`,
    ];
    if (slotDate) lines.push(`Date: ${slotDate}`);
    if (slotDay) lines.push(`Day: ${slotDay}`);
    if (slotTime) lines.push(`Hour: ${slotTime}`);
    lines.push(
      ``,
      `═══════════════════════════════════════`,
      `👤 CONTACT DETAILS`,
      `═══════════════════════════════════════`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Organization: ${org}`,
      ``
    );
    if (message) {
      lines.push(
        `═══════════════════════════════════════`,
        `💬 MESSAGE`,
        `═══════════════════════════════════════`,
        ``
      );
      lines.push(message);
    }

    const emailBody = lines.join("\n");

    try {
      await execFileAsync(
        "gog",
        ["gmail", "send", "--to", "eladzoarets@gmail.com", "--subject", subject, "--body", emailBody],
        { timeout: 15000 }
      );
    } catch (e) {
      console.error("gog send failed, saving to file:", e);
      const submissionsDir = join(process.cwd(), "submissions");
      if (!existsSync(submissionsDir)) mkdirSync(submissionsDir);
      writeFileSync(
        join(submissionsDir, `submission-${Date.now()}.json`),
        JSON.stringify({ name, email, phone, org, message, slot, slotDate, slotTime, slotDay, date: new Date().toISOString() }, null, 2)
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
