import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
  description: "Schedule a 20-minute diagnosis call.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <section className="section container">
      <p className="eyebrow">Booking</p>
      <h1>Schedule a 20-minute diagnosis call.</h1>
      <p className="sub">Use the booking widget below to choose your time.</p>
      <iframe src="https://cal.com" title="Booking" loading="lazy" />
    </section>
  );
}
