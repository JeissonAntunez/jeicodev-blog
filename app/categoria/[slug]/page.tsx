import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, isPublicSite, site } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import BlogExplorer from "@/components/BlogExplorer";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  if (!category) return {};
  const hasContent = getAllPosts().some(p => p.category === slug && !p.demo);
  return {
    title: `${category.name}: artículos y guías`, description: category.intro,
    alternates: { canonical: `/categoria/${slug}` },
    robots: { index: isPublicSite && hasContent, follow: isPublicSite },
    openGraph: { title: category.name, description: category.intro, url: `/categoria/${slug}`, type: "website" },
  };
}
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  if (!category) notFound();
  const posts = getAllPosts();
  const visiblePosts = posts.filter(p => p.category === slug);
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: category.name, description: category.intro, url: `${site.url}/categoria/${slug}`,
    mainEntity: { "@type": "ItemList", itemListElement: visiblePosts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${site.url}/blog/${p.slug}`, name: p.title })) },
  };
  return <>
    <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link href="/blog">Blog</Link><span>/</span><span>{category.name}</span></nav>
    <section className="page-intro category-intro"><span className="kicker">EXPLORA POR TEMA</span><h1>{category.name}</h1><p>{category.intro}</p><Link className="text-link" href="/empieza-aqui">¿Primera visita? Empieza aquí ↗</Link></section>
    <BlogExplorer posts={posts} initialCategory={slug}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/>
  </>;
}
