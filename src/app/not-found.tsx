import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p className="sub">The page moved during the upgrade.</p>
      <Link className="cta" href="/">
        Return home
      </Link>
    </section>
  );
}
