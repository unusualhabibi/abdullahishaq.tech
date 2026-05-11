import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a diagnosis call or send your project context.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Contact</p>
      <h1>Book a call or send your system brief.</h1>
      <p className="sub">No pitch deck required. Bring your bottleneck and desired result.</p>
      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        <ContactForm />
        <article className="card">
          <h3>Prefer direct booking?</h3>
          <p className="muted">Choose your time and we start with an operational diagnosis.</p>
          <Link className="cta" href="/book">
            Open booking flow
          </Link>
        </article>
      </div>
    </section>
  );
}
