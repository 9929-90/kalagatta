import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  budget?: string;
  guestCount?: string;
  message?: string;
  company?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request. Please try again." }, { status: 400 });
  }

  if (clean(payload.company)) {
    return NextResponse.json({ message: "Thanks. Your inquiry has been received." });
  }

  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const eventType = clean(payload.eventType);
  const message = clean(payload.message);

  if (name.length < 2 || phone.length < 8 || !eventType || message.length < 15) {
    return NextResponse.json({ message: "Please add your name, valid phone number, event type, and a short message." }, { status: 422 });
  }

  const endpoint = process.env.INQUIRY_WEBHOOK_URL;
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email: clean(payload.email),
        eventType,
        eventDate: clean(payload.eventDate),
        location: clean(payload.location),
        budget: clean(payload.budget),
        guestCount: clean(payload.guestCount),
        message,
        source: "anchorhimanshupaliwal.com",
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Inquiry could not be sent. Please call or WhatsApp directly." }, { status: 502 });
    }
  }

  return NextResponse.json({
    message: endpoint
      ? "Inquiry sent successfully. Himanshu's team will respond soon."
      : "Inquiry validated. Add INQUIRY_WEBHOOK_URL in production to forward submissions, or contact directly on WhatsApp.",
  });
}
