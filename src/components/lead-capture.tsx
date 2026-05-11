"use client";

import { FormEvent, useState } from "react";

export function LeadCapture({ context }: { context: string }) {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        context,
      }),
    });

    setStatus(response.ok ? "Subscribed. Check your inbox." : "Subscription failed.");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <section className="lead-capture card">
      <p className="eyebrow">Get the operating playbook</p>
      <h3>Weekly systems note for operators scaling with AI</h3>
      <form onSubmit={onSubmit} className="inline-form">
        <input
          type="email"
          required
          name="email"
          placeholder="your@email.com"
          aria-label="Email address"
        />
        <button type="submit">Subscribe</button>
      </form>
      {status ? <p className="muted">{status}</p> : null}
    </section>
  );
}
