import type { MetadataRoute } from "next";
import { workItems } from "@/data/site-content";
import { getPublicSiteUrl } from "@/lib/site-url";

const routes = ["", "/solutions", "/services", "/work", "/industries", "/pricing", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getPublicSiteUrl();
  if (!base) return [];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((path, index) => ({
    url: new URL(path || "/", base).toString(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...workItems.map((item) => ({
      url: new URL(`/work/${item.slug}`, base).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
