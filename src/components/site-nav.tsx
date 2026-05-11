import Link from "next/link";
import { navItems } from "@/lib/site";

export function SiteNav() {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary navigation">
        <Link href="/" className="brand">
          <span>AI Center</span>
          <span className="brand-dot" />
        </Link>
        <ul className="nav-list">
          {navItems.slice(0, -1).map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="cta" href="/contact">
          {navItems.at(-1)?.label}
        </Link>
      </nav>
    </header>
  );
}
