"use client";

import { CalendarDays, Mail, MapPin, MessageSquare, PartyPopper, Phone, Send, User, Users, Wallet } from "lucide-react";
import { useState } from "react";

const eventTypes = [
  "Wedding",
  "Engagement",
  "Sangeet",
  "Haldi Carnival",
  "Baarat on Wheels",
  "Varmala",
  "Mayra",
  "Corporate Events",
  "Government Events",
  "DJ Parties",
  "Social And Festive Events",
  "Birthday",
  "Anniversary",
  "Baby shower",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit inquiry.");
      setStatus("success");
      setMessage(result.message || "Inquiry received. Himanshu's team will respond soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again or contact on WhatsApp.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-intro">
        <span className="form-icon">
          <Send />
        </span>
        <div>
          <h3>Quick event inquiry</h3>
          <p>Share the basics and get a focused availability response.</p>
        </div>
      </div>
      <div className="form-grid">
        <label>
          <span><User /> Name</span>
          <input name="name" required minLength={2} placeholder="Your name" />
        </label>
        <label>
          <span><Phone /> Phone</span>
          <input name="phone" required inputMode="tel" placeholder="+91..." />
        </label>
        <label>
          <span><Mail /> Email</span>
          <input name="email" type="email" placeholder="you@example.com" />
        </label>
        <label>
          <span><PartyPopper /> Event type</span>
          <select name="eventType" required defaultValue="">
            <option value="" disabled>
              Select event type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span><CalendarDays /> Event date</span>
          <input name="eventDate" type="date" />
        </label>
        <label>
          <span><MapPin /> Location</span>
          <input name="location" placeholder="Venue or city" />
        </label>
        <label>
          <span><Wallet /> Budget</span>
          <input name="budget" placeholder="Approx. budget" />
        </label>
        <label>
          <span><Users /> Guest count</span>
          <input name="guestCount" inputMode="numeric" placeholder="Expected guests" />
        </label>
      </div>
      <label>
        <span><MessageSquare /> Message</span>
        <textarea name="message" required minLength={15} rows={5} placeholder="Tell us about your event flow, audience, and hosting language preference." />
      </label>
      <input type="text" name="company" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        <Send className="btn-icon" />
        {status === "loading" ? "Sending..." : "Send inquiry"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
