import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple helpers
const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ] as string)
  );

export async function POST(req: Request) {
  try {
    const { name = "", email = "", message = "" } = await req.json();

    if (!name.trim() || !message.trim() || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid input." },
        { status: 400 }
      );
    }
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Server not configured." },
        { status: 500 }
      );
    }

    // Always send to your Gmail
    const TO = process.env.CONTACT_TO_EMAIL!;
    const FROM = process.env.FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(
        email
      )}</a></p>
          <p><strong>Message:</strong></p>
          <div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:8px">${esc(
            message
          )}</div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
