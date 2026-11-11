import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  origin?: string;
  destination?: string;
  cargo?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.email || !body.company || !body.service) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const record = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  // Staging / default: log enquiry. Wire RESEND_API_KEY + CONTACT_TO for production email.
  console.info("[northgo-enquiry]", JSON.stringify(record));

  const resendKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO || "info.tpe@northgo.com";
  const contactFrom = process.env.CONTACT_FROM || "Northgo Website <onboarding@resend.dev>";

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: contactFrom,
          to: [contactTo],
          reply_to: body.email,
          subject: `Northgo enquiry — ${body.service} — ${body.company}`,
          text: Object.entries(record)
            .map(([k, v]) => `${k}: ${v ?? ""}`)
            .join("\n"),
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("[northgo-enquiry-email-failed]", detail);
        return NextResponse.json({ ok: false, error: "Email failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("[northgo-enquiry-email-error]", err);
      return NextResponse.json({ ok: false, error: "Email failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
