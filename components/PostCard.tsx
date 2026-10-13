import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";
import { categories } from "@/lib/site";
import ArticleCover from "./ArticleCover";
export default function PostCard({ post }: { post: PostMeta }) {
 const category = categories.find(c => c.slug === post.category)!;
 return <article className="post-card"><Link href={`/blog/${post.slug}`} className="card-image" tabIndex={-1} aria-hidden="true"><ArticleCover visual={post.visual} image={post.image} imageAlt={post.imageAlt}/></Link><div className="card-body"><div className="post-eyebrow"><span className={`category-label ${category.color}`}>{category.name}</span><span>{post.minutes} min de lectura</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="card-meta"><span>{formatDate(post.date)}{post.demo ? " · Demo" : ""}</span><Link href={`/blog/${post.slug}`} aria-label={`Leer ${post.title}`}>↗</Link></div></div></article>;
}