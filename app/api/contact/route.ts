import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensures Node runtime on Vercel

const resend = new Resend(process.env.RESEND_API_KEY);

type Body = {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
};

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
    const {
      name = "",
      email = "",
      message = "",
      honeypot = "",
    } = (await req.json()) as Body;

    // Simple bot trap: real users never see/fill this
    if (honeypot) return NextResponse.json({ ok: true }, { status: 204 });

    if (!name.trim() || !isEmail(email) || !message.trim()) {
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

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    // 1) Send to YOU (Gmail inbox)
    const owner = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
          <h2>New Contact Form Submission</h2>
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
    });
    if (owner.error) throw new Error(owner.error.message);

    // 2) Auto-reply to the sender (nice UX)
    await resend.emails.send({
      from,
      to: email,
      subject: "Thanks! I received your message",
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
          <p>Hi ${esc(name)},</p>
          <p>Thanks for reaching out. I received your message and will reply shortly.</p>
          <hr/>
          <p style="opacity:.8"><em>Your message:</em></p>
          <blockquote style="white-space:pre-wrap;border-left:4px solid #ddd;margin:0;padding:8px 12px">${esc(
            message
          )}</blockquote>
          <p style="margin-top:16px">— Vishal</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
