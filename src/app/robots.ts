import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getPublicSiteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: base ? new URL("/sitemap.xml", base).toString() : undefined,
    host: base?.origin,
  };
}
