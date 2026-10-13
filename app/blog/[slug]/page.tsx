import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostSource, formatDate } from "@/lib/posts";
import { categories, site } from "@/lib/site";
import ArticleCover from "@/components/ArticleCover";
import AdSlot from "@/components/AdSlot";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostSource(slug);
  if (!post) return {};
  const { meta } = post;
  const images = meta.image ? [{ url: meta.image, alt: meta.imageAlt }] : undefined;
  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    robots: meta.demo ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article", locale: "es_PE", siteName: site.name,
      url: `/blog/${slug}`, title: meta.title, description: meta.excerpt,
      publishedTime: meta.date, authors: [meta.author], images,
    },
    twitter: { card: meta.image ? "summary_large_image" : "summary", title: meta.title, description: meta.excerpt, images },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostSource(slug);
  if (!post) notFound();
  const { meta } = post;
  const category = categories.find(c => c.slug === meta.category)!;
  const related = getAllPosts().filter(p => p.slug !== slug && p.category === meta.category).slice(0, 3);
  const jsonLd = [
    {
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: meta.title, description: meta.excerpt, datePublished: meta.date,
      inLanguage: "es", articleSection: category.name,
      author: { "@type": "Person", name: meta.author },
      mainEntityOfPage: `${site.url}/blog/${slug}`,
      ...(meta.image ? { image: [new URL(meta.image, site.url).href] } : {}),
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 2, name: category.name, item: `${site.url}/categoria/${category.slug}` },
        { "@type": "ListItem", position: 3, name: meta.title, item: `${site.url}/blog/${slug}` },
      ],
    },
  ];
  return <>
    <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link href="/blog">Blog</Link><span>/</span><Link href={`/categoria/${category.slug}`}>{category.name}</Link></nav>
    <header className="article-heading">
      <span className={`category-label ${category.color}`}>{category.name}</span>
      <h1>{meta.title}</h1><p>{meta.excerpt}</p>
      <div>{meta.author} · <time dateTime={meta.date}>{formatDate(meta.date)}</time> · {meta.minutes} min de lectura</div>
      {meta.demo && <aside className="demo-notice">Artículo de demostración. Requiere revisión y autoría real antes de publicarse.</aside>}
    </header>
    <figure className="article-figure">
      <div className={`article-cover ${meta.image ? "article-cover-photo" : ""}`}><ArticleCover visual={meta.visual} image={meta.image} imageAlt={meta.imageAlt} large priority/></div>
      {meta.imageCaption && <figcaption>{meta.imageCaption}</figcaption>}
    </figure>
    <div className="reading-layout">
      <article className="prose prose-slate reading-content"><MDXRemote source={post.content}/><hr/><p>¿Encontraste algo que podemos mejorar? <Link href="/contacto">Comparte una corrección</Link>.</p></article>
      <div className="reading-sidebar"><div className="reader-note"><span className="kicker">DE LA IDEA A LA ACCIÓN</span><h2>Quédate con un siguiente paso.</h2><p>Elige una idea de esta lectura y pruébala esta semana.</p><Link href="/politica-editorial">Nuestro compromiso editorial ↗</Link></div><AdSlot compact/></div>
    </div>
    {!meta.demo && meta.minutes >= 4 && <div className="article-ad-wrap"><AdSlot placement="article-end"/></div>}
    {related.length > 0 && <section className="related"><h2>Sigue explorando {category.name.toLowerCase()}</h2>{related.map(p => <Link key={p.slug} href={`/blog/${p.slug}`}>{p.title} ↗</Link>)}</section>}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}/>
  </>;
}

