import type { Metadata } from "next";
import { canonical } from "@/lib/site-url";

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const canonicalUrl = canonical(pathname);
  return {
    title,
    description,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: { title, description, url: canonicalUrl },
    twitter: { title, description },
  };
}
