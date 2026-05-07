"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
      }),
    });

    setStatus(response.ok ? "Thanks — response sent." : "Could not send. Try again.");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="contact-form card">
      <label>
        Name
        <input name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Company
        <input name="company" />
      </label>
      <label>
        What are you solving?
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit">Send request</button>
      {status ? <p className="muted">{status}</p> : null}
    </form>
  );
}
