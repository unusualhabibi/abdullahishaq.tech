import type { Metadata } from "next";
import { LeadCapture } from "@/components/lead-capture";
import { getFrameworks } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Frameworks",
  description: "Actionable systems and templates for operators deploying AI.",
  alternates: { canonical: "/frameworks" },
};

export default async function FrameworksPage() {
  const frameworks = await getFrameworks();

  return (
    <section className="section container">
      <p className="eyebrow">Frameworks</p>
      <h1>Practical frameworks that save implementation time.</h1>
      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        {frameworks.map((framework) => (
          <article className="card" key={framework.slug}>
            <p className="eyebrow">{framework.status}</p>
            <h3>{framework.title}</h3>
            <p className="muted">{framework.summary}</p>
          </article>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <LeadCapture context="frameworks" />
      </div>
    </section>
  );
}
