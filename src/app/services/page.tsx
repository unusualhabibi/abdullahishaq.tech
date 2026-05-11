import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Automation architecture, AI operations, and conversion systems.",
  alternates: { canonical: "/services" },
};

const services = [
  ["AI Operations Design", "Process mapping, workflow architecture, and KPI model."],
  ["Automation Delivery", "Build and deploy flows for WhatsApp, CRM, onboarding, retention."],
  ["Optimization Retainer", "Weekly experiments, analytics reviews, and conversion improvements."],
];

export default function ServicesPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Services</p>
      <h1>Execution, not experimentation.</h1>
      <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
        {services.map(([title, description]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p className="muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
