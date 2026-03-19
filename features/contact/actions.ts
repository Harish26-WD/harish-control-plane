"use server"

import { resend } from "@/lib/resend"
import { contactSchema } from "./schema"
import { SITE_CONFIG } from "@/lib/constants"

export type ContactActionState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function sendContactEmail(
  _prev: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  }

  const result = contactSchema.safeParse(raw)

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  const { name, email, subject, message } = result.data

  const subjectLabels: Record<string, string> = {
    hiring: "Hiring Inquiry",
    freelance: "Freelance Project",
    collaboration: "Collaboration",
    other: "General Inquiry",
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: SITE_CONFIG.email,
      subject: `[Portfolio] ${subjectLabels[subject]} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact from Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 100px;">Name:</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Subject:</td>
              <td style="padding: 8px 0;">${subjectLabels[subject]}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #475569; font-size: 14px; margin-bottom: 8px;">Message:</h3>
          <p style="color: #0f172a; line-height: 1.7; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">${message.replace(/\n/g, "<br/>")}</p>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">Sent from harishkumar.dev portfolio</p>
        </div>
      `,
    })

    return {
      success: true,
      message: "Message sent! I'll get back to you within 24 hours.",
    }
  } catch {
    return {
      success: false,
      message: "Failed to send message. Please email me directly at " + SITE_CONFIG.email,
    }
  }
}
