import Link from "next/link";
import { LeadCapture } from "@/components/lead-capture";
import { testimonials } from "@/content/testimonials";

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Ishaq",
    url: "https://abdullahishaq.tech",
    jobTitle: "AI Systems Operator",
    sameAs: [
      "https://x.com/unusualhabibi",
      "https://www.linkedin.com/in/abdullahishaq",
    ],
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AI Center",
    url: "https://abdullahishaq.tech",
    email: "hello@abdullahishaq.tech",
    description: "Premium AI systems and automation implementation for African operators.",
    areaServed: "Africa",
    founder: "Abdullah Ishaq",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <section className="hero container">
        <p className="eyebrow">AI Systems for Operators</p>
        <h1>
          Build a <span className="gradient-text">premium growth engine</span>, not random automations.
        </h1>
        <p className="sub">
          I help African food and service-led operators deploy AI systems that improve response speed,
          retention, and booking conversion. Built with operational discipline, measured by revenue and time saved.
        </p>
        <div className="section">
          <Link className="cta" href="/contact">
            Book a 20-min diagnosis
          </Link>
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">Proof</p>
        <div className="grid grid-3">
          <article className="card"><p className="metric gradient-text">10+</p><p className="muted">Operators served</p></article>
          <article className="card"><p className="metric gradient-text">92%</p><p className="muted">Client retention</p></article>
          <article className="card"><p className="metric gradient-text">48h</p><p className="muted">Typical first workflow live</p></article>
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">Testimonials</p>
        <h2>Trusted by operators who need outcomes.</h2>
        <div className="grid grid-2">
          {testimonials.map((item) => (
            <article className="card" key={item.name}>
              <p>“{item.quote}”</p>
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                {item.name} — {item.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">Next step</p>
        <h2>Prefer a predictable growth operating system?</h2>
        <p className="sub">Start with strategy, implement with technical depth, then optimize weekly with analytics.</p>
      </section>

      <div className="container">
        <LeadCapture context="home" />
      </div>
    </>
  );
}
