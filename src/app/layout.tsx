import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getPublicSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ?? undefined,
  title: {
    default: "PK-TANK | Business Technology & SaaS Solutions",
    template: "%s | PK-TANK",
  },
  description:
    "Practical software, AI automation, managed IT and technical project support for growing businesses.",
  applicationName: "PK-TANK",
  category: "technology",
  keywords: ["business software", "SaaS", "AI automation", "managed IT", "technical project support", "Bangladesh"],
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    type: "website",
    siteName: "PK-TANK",
    title: "PK-TANK | Business Technology & SaaS Solutions",
    description: "Practical software, AI automation, managed IT and technical project support for growing businesses.",
    url: siteUrl ?? undefined,
    images: siteUrl ? [{ url: new URL("/og.png", siteUrl), width: 1200, height: 630, alt: "PK-TANK — Business Technology & SaaS Solutions" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "PK-TANK | Business Technology & SaaS Solutions",
    description: "Build smarter with practical software, automation, managed IT and technical project support.",
    images: siteUrl ? [new URL("/og.png", siteUrl)] : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PK-TANK",
    description: "Business Technology & SaaS Solutions",
    slogan: "Build Smarter. Work Better.",
    areaServed: ["Bangladesh", "Worldwide"],
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
