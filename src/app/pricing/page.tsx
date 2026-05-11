import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear engagement models for implementation and optimization.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Engagement Models</p>
      <h1>Clear scope. Clear outcomes.</h1>
      <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
        <article className="card">
          <h3>Diagnostics Sprint</h3>
          <p className="metric">$1,500+</p>
          <p className="muted">2-week audit and implementation plan.</p>
        </article>
        <article className="card">
          <h3>System Build</h3>
          <p className="metric">$6,000+</p>
          <p className="muted">Delivery of core conversion and operations stack.</p>
        </article>
        <article className="card">
          <h3>Optimization Retainer</h3>
          <p className="metric">$2,000/mo+</p>
          <p className="muted">Weekly experiments, QA, and KPI improvement cycles.</p>
        </article>
      </div>
    </section>
  );
}
