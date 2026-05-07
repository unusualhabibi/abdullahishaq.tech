import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.name,
    template: "%s · AI Center",
  },
  description:
    "Premium AI systems, automation architecture, and revenue-focused implementation for African operators.",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description:
      "Premium AI systems, automation architecture, and revenue-focused implementation for African operators.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Premium AI systems, automation architecture, and revenue-focused implementation for African operators.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
