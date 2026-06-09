"use server";

import { insertSubmission } from "@/lib/submissions";
import { Resend } from "resend";

const RECIPIENTS = ["nitesh.sharma@virtualxcellence.com"];

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY env var is missing");
  return new Resend(key);
}

export type ContactResult =
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  formData: FormData
): Promise<ContactResult> {
  const name        = (formData.get("name")        as string | null)?.trim() ?? "";
  const email       = (formData.get("email")       as string | null)?.trim() ?? "";
  const company     = (formData.get("company")     as string | null)?.trim() || null;
  const designation = (formData.get("designation") as string | null)?.trim() || null;
  const phone       = (formData.get("phone")       as string | null)?.trim() || null;
  const team        = (formData.get("team")        as string | null) || null;
  const message     = (formData.get("message")     as string | null)?.trim() || null;

  if (!name || !email) {
    return { status: "error", message: "Name and email are required." };
  }

  try {
    await insertSubmission({ name, email, company, designation, phone, team, message });
  } catch (err) {
    console.error("Contact insert error:", err);
    return { status: "error", message: "Failed to submit. Please try again." };
  }

  /* Send notification email — fire-and-forget (don't block the response on failure) */
  try {
    const resend = getResend();
    await resend.emails.send({
      from:    "Greenwatt Contact <onboarding@resend.dev>",
      to:      RECIPIENTS,
      replyTo: email,
      subject: `New enquiry from ${name}${team ? ` — ${team}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#292929">
          <div style="background:#0B7F3B;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0;font-size:18px">New Contact Form Submission</h2>
            <p style="color:#D9FFDE;margin:4px 0 0;font-size:13px">Greenwatt Global Ventures</p>
          </div>
          <div style="background:#f9fafb;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#54595F;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#54595F">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0B7F3B">${email}</a></td></tr>
              ${phone       ? `<tr><td style="padding:8px 0;color:#54595F">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
              ${company     ? `<tr><td style="padding:8px 0;color:#54595F">Company</td><td style="padding:8px 0">${company}</td></tr>` : ""}
              ${designation ? `<tr><td style="padding:8px 0;color:#54595F">Designation</td><td style="padding:8px 0">${designation}</td></tr>` : ""}
              ${team        ? `<tr><td style="padding:8px 0;color:#54595F">Team</td><td style="padding:8px 0"><span style="background:#D9FFDE;color:#0B7F3B;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600">${team}</span></td></tr>` : ""}
            </table>
            ${message ? `
            <div style="margin-top:16px;padding:14px;background:#fff;border:1px solid #e5e7eb;border-radius:6px">
              <p style="margin:0 0 6px;font-size:12px;color:#54595F;font-weight:600;text-transform:uppercase;letter-spacing:.05em">Message</p>
              <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
            </div>` : ""}
            <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e5e7eb">
              <a href="https://greenwatt-2gtlc4ae3-niteshatvirtualexcellence.vercel.app/admin/submissions"
                 style="display:inline-block;background:#0B7F3B;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">
                View in Admin →
              </a>
            </div>
          </div>
        </div>
      `,
    });
  } catch (emailErr) {
    console.error("Email notification error:", emailErr);
    /* Don't fail the submission if email fails */
  }

  return { status: "success" };
}
