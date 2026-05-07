import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies with measurable business outcomes.",
  alternates: { canonical: "/work" },
};

const studies = [
  {
    title: "Cushy Cuisine",
    result: "Reduced customer response lag by 67% and increased repeat order rate in 6 weeks.",
  },
  {
    title: "Flora Scents",
    result: "Built lead qualification and quote workflow that improved close rate consistency.",
  },
];

export default function WorkPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Case Studies</p>
      <h1>From ad-hoc execution to systems-level growth.</h1>
      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        {studies.map((study) => (
          <article className="card" key={study.title}>
            <h2>{study.title}</h2>
            <p className="muted">{study.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
