import type { MetadataRoute } from "next";
import { isPublicSite, site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", ...(isPublicSite ? { allow: "/" } : { disallow: "/" }) }, ...(isPublicSite ? { sitemap: site.url+"/sitemap.xml" } : {}) };
}
