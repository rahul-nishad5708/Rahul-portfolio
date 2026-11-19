import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  // 1. Production-ready IP-based rate limiting using persistent / shared store
  const rateLimitResult = await checkRateLimit(request);
  if (!rateLimitResult.success) {
    const retrySeconds = Math.max(
      1,
      Math.ceil((rateLimitResult.reset - Date.now()) / 1000)
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many requests. Please wait a few minutes before submitting another message.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": retrySeconds.toString(),
          "X-RateLimit-Limit": rateLimitResult.limit.toString(),
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
          "X-RateLimit-Reset": rateLimitResult.reset.toString(),
        },
      }
    );
  }

  // 2. Strengthened JSON payload parsing & runtime type validation
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON request body." },
      { status: 400 }
    );
  }

  if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload format." },
      { status: 400 }
    );
  }

  const body = rawBody as Record<string, unknown>;

  // 3. Honeypot spam trap: dropped silently if bots fill out the hidden field
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true, delivered: false }, { status: 200 });
  }

  // Strict runtime type validation for all fields
  if (body.name !== undefined && typeof body.name !== "string") {
    return NextResponse.json(
      { ok: false, error: "Name must be a valid text string." },
      { status: 400 }
    );
  }

  if (body.email !== undefined && typeof body.email !== "string") {
    return NextResponse.json(
      { ok: false, error: "Email must be a valid text string." },
      { status: 400 }
    );
  }

  if (body.subject !== undefined && typeof body.subject !== "string") {
    return NextResponse.json(
      { ok: false, error: "Subject must be a valid text string." },
      { status: 400 }
    );
  }

  if (body.message !== undefined && typeof body.message !== "string") {
    return NextResponse.json(
      { ok: false, error: "Message must be a valid text string." },
      { status: 400 }
    );
  }

  // 4. Server-side input extraction and sanitation
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // Content validation
  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please enter a name between 2 and 100 characters." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email) || email.length > 160) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (subject.length > 150) {
    return NextResponse.json(
      { ok: false, error: "Subject must be 150 characters or fewer." },
      { status: 400 }
    );
  }

  if (message.length < 10 || message.length > 2500) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please enter a message between 10 and 2500 characters.",
      },
      { status: 400 }
    );
  }

  // 5. Server-Enforced Email Routing (Client NEVER chooses or overrides the recipient)
  // No hardcoded recipient fallback: require CONTACT_TO_EMAIL to be configured in environment
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "Portfolio Contact <onboarding@resend.dev>";

  // If required environment variables are missing, provide honest fallback without hardcoded recipient
  if (!resendApiKey || !toEmail) {
    console.warn(
      "[Contact API] Server email delivery unconfigured - missing required environment variables:",
      {
        hasApiKey: Boolean(resendApiKey),
        hasToEmail: Boolean(toEmail),
        timestamp: new Date().toISOString(),
      }
    );

    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        mode: "unconfigured",
        message:
          "Automated server email delivery is not configured yet (missing required configuration). Use the pre-filled email button or copy your message below.",
      },
      { status: 200 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);

    const emailSubject = subject || `Portfolio Inquiry from ${name}`;
    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedSubject = escapeHtml(emailSubject);
    const escapedMessage = escapeHtml(message);

    const textContent = [
      "New Portfolio Contact Form Submission",
      "=====================================",
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Subject: ${emailSubject}`,
      "",
      "Message:",
      message,
      "",
      "-------------------------------------",
      "Sent from Rahul Chandraveer Nishad Portfolio",
    ].join("\n");

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapedSubject}</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #090B10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #F5F7FA;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #11151D; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); overflow: hidden;">
    <div style="padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.08); background-color: #151A24;">
      <h2 style="margin: 0; color: #75D69A; font-size: 18px; font-weight: 600;">New Portfolio Contact Message</h2>
      <p style="margin: 4px 0 0 0; color: #A0A8B5; font-size: 12px; font-family: monospace;">Received via rahulnishad.dev contact form</p>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
        <tr>
          <td style="padding: 6px 0; color: #A0A8B5; width: 80px; font-weight: 600;">From:</td>
          <td style="padding: 6px 0; color: #F5F7FA; font-weight: 500;">${escapedName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #A0A8B5; font-weight: 600;">Email:</td>
          <td style="padding: 6px 0;"><a href="mailto:${escapedEmail}" style="color: #75D69A; text-decoration: none;">${escapedEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #A0A8B5; font-weight: 600;">Subject:</td>
          <td style="padding: 6px 0; color: #F5F7FA;">${escapedSubject}</td>
        </tr>
      </table>
      <div style="background-color: #151A24; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 16px;">
        <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.08em; color: #75D69A; font-weight: 600; margin-bottom: 8px;">Message Content:</div>
        <div style="font-size: 14px; line-height: 1.6; color: #F5F7FA; white-space: pre-wrap;">${escapedMessage}</div>
      </div>
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11px; color: #A0A8B5;">
        <span>Reply directly to this email to contact <strong>${escapedName}</strong> (${escapedEmail}).</span>
      </div>
    </div>
  </div>
</body>
</html>
`.trim();

    // 6. Send single email to fixed recipient ONLY; no auto-confirmation email is sent to visitor
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    // 7. Return generic error to browser if Resend fails, logging safe diagnostic details server-side
    if (error || !data?.id) {
      console.error("[Contact API] Resend dispatch rejected:", {
        errorName: error?.name || "MissingMessageId",
        errorMessage: error?.message || "No message ID returned from Resend",
        timestamp: new Date().toISOString(),
        hasRecipient: Boolean(toEmail),
      });

      return NextResponse.json(
        {
          ok: false,
          delivered: false,
          error:
            "Unable to deliver your message at this time. Please email directly or try again later.",
        },
        { status: 502 }
      );
    }

    // 8. Success returned ONLY when Resend accepts the email request
    return NextResponse.json(
      {
        ok: true,
        delivered: true,
        mode: "resend",
        id: data.id,
        message: "Your message has been accepted for email delivery.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Contact API] Unexpected error during email dispatch:", {
      errorType: err instanceof Error ? err.name : typeof err,
      errorMessage: err instanceof Error ? err.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: false,
        delivered: false,
        error:
          "An unexpected error occurred while processing your message. Please email directly or try again later.",
      },
      { status: 500 }
    );
  }
}
