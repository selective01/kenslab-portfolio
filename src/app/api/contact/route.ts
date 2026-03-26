import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email = String(body?.email || "").trim();
    const name = String(body?.name || "").trim();
    const type = String(body?.type || "").trim();
    const comment = String(body?.comment || "").trim();

    if (!email || !name || !comment) {
      return NextResponse.json(
        { error: "Please fill in your name, contact, and message." },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("EMAIL_USER or EMAIL_PASS not set in environment variables");

      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Add EMAIL_USER and EMAIL_PASS to your environment variables.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeType = escapeHtml(type || "Not specified");
    const safeComment = escapeHtml(comment).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Ken'sLab Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact — ${name}${type ? ` (${type})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #1f2937;">
          <h2 style="margin: 0 0 16px; color: #e8671a;">New Message from Ken'sLab Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; background: #ffffff; border: 1px solid #e5e7eb;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 10px; color: #6b7280; width: 110px; font-weight: 700;">Name</td>
              <td style="padding: 12px 10px;">${safeName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 10px; color: #6b7280; font-weight: 700;">Contact</td>
              <td style="padding: 12px 10px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px 10px; color: #6b7280; font-weight: 700;">Type</td>
              <td style="padding: 12px 10px;">${safeType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 10px; color: #6b7280; font-weight: 700; vertical-align: top;">Message</td>
              <td style="padding: 12px 10px; line-height: 1.65;">${safeComment}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}