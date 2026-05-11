import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labs",
  description: "Active experiments and productized tools.",
  alternates: { canonical: "/labs" },
};

const labs = [
  ["Ops Readiness Quiz", "Assess your current operational readiness for AI adoption.", "Live"],
  ["Lead Scoring Engine", "Rule-based + AI assist qualification flow for inbound leads.", "Beta"],
  ["Retention Prompt Bank", "Ready-to-use prompts for customer reactivation sequences.", "Beta"],
];

export default function LabsPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Labs</p>
      <h1>Now shipping practical tools.</h1>
      <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
        {labs.map(([title, desc, status]) => (
          <article className="card" key={title}>
            <p className="eyebrow">{status}</p>
            <h3>{title}</h3>
            <p className="muted">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
