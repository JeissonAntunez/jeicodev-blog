import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { categories } from "./site";
const POSTS_DIR = path.join(process.cwd(), "content", "posts");
export type PostMeta = { slug: string; title: string; date: string; excerpt: string; category: string; author: string; minutes: number; featured: boolean; visual: string; demo: boolean; image?: string; imageAlt?: string; imageCaption?: string };
export function getPostSource(slug: string) {
 if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null;
 const file = path.join(POSTS_DIR, slug + ".mdx");
 if (!fs.existsSync(file)) return null;
 const { data, content } = matter(fs.readFileSync(file, "utf8"));
 const timestamp = Date.parse(String(data.date));
 if (data.status !== "published" || data.reviewed !== true || !Number.isFinite(timestamp) || timestamp > Date.now()) return null;
 if (!categories.some(c => c.slug === data.category) || !data.title || !data.excerpt || !data.author) return null;
 if (data.demo === true && process.env.SHOW_DEMO_CONTENT !== "true" && process.env.NODE_ENV === "production") return null;
 return { content, meta: { slug, title: String(data.title), date: String(data.date), excerpt: String(data.excerpt), category: String(data.category), author: String(data.author), minutes: Math.max(1, Math.ceil(content.split(/\s+/).length / 200)), featured: data.featured === true, visual: String(data.visual || data.category), demo: data.demo === true, image: typeof data.image === "string" && /^\/images\/[a-zA-Z0-9._/-]+$/.test(data.image) ? data.image : undefined, imageAlt: String(data.imageAlt || ""), imageCaption: String(data.imageCaption || "") } satisfies PostMeta };
}
export function getAllPosts(): PostMeta[] {
 return fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".mdx")).flatMap(f => { const post = getPostSource(f.replace(/\.mdx$/, "")); return post ? [post.meta] : []; }).sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
}
export function formatDate(date: string) { return new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "short", year: "numeric", timeZone: "America/Lima" }).format(new Date(date)); }