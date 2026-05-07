import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Positioning, methodology, and operating philosophy.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="section container">
      <p className="eyebrow">About</p>
      <h1>Operator-first AI implementation.</h1>
      <p className="sub">
        I work at the intersection of operations, automation, and conversion strategy. My niche is African operators
        in food, hospitality, and service-led businesses where speed and consistency directly affect cash flow.
      </p>
      <p className="sub">
        Every engagement follows one sequence: diagnose bottlenecks, deploy durable systems, then optimize with data.
      </p>
    </section>
  );
}
