import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { categories, isPublicSite, site } from "@/lib/site";
export const dynamic = "force-dynamic";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicSite) return [];
  const posts = getAllPosts().filter(p=>!p.demo);
  return [
    ...["", "/blog", "/empieza-aqui", "/sobre-mi", "/contacto", "/politica-editorial"].map(p=>({url:site.url+p})),
    ...categories.filter(c=>posts.some(p=>p.category===c.slug)).map(c=>({url:site.url+"/categoria/"+c.slug})),
    ...posts.map(p=>({url:site.url+"/blog/"+p.slug,lastModified:new Date(p.date)})),
  ];
}
