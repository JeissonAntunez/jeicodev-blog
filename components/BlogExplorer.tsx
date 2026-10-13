"use client";
import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { categories } from "@/lib/site";
import ArticleCover from "./ArticleCover";
export default function BlogExplorer({ posts, initialCategory }: { posts: PostMeta[]; initialCategory: string }) {
 const [query,setQuery] = useState("");
 const normalized = (s:string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
 const results = posts.filter(p => (!initialCategory || p.category === initialCategory) && normalized(p.title + " " + p.excerpt).includes(normalized(query)));
 return <><div className="explorer-toolbar"><nav className="filter-tabs" aria-label="Filtrar por tema"><Link aria-current={!initialCategory ? "page" : undefined} href="/blog">Todo</Link>{categories.map(c => <Link aria-current={initialCategory===c.slug ? "page" : undefined} key={c.slug} href={`/categoria/${c.slug}`}>{c.name}</Link>)}</nav><label className="search"><span>Buscar artículos</span><input type="search" placeholder="¿Qué quieres descubrir?" value={query} onChange={e=>setQuery(e.target.value)}/></label></div><p className="result-count" aria-live="polite">{results.length} {results.length===1 ? "lectura disponible" : "lecturas disponibles"}</p><div className="post-grid">{results.map(p=><article className="post-card" key={p.slug}><ArticleCover visual={p.visual} image={p.image} imageAlt={p.imageAlt}/><div className="card-body"><div className="post-eyebrow"><span className="category-label">{categories.find(c=>c.slug===p.category)?.name}</span><span>{p.minutes} min{p.demo ? " · Demo" : ""}</span></div><h2><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2><p>{p.excerpt}</p><Link className="text-link" href={`/blog/${p.slug}`}>Leer artículo ↗</Link></div></article>)}</div>{!results.length && <div className="empty-state"><h2>No encontramos lecturas con esos filtros.</h2><p>Prueba otra búsqueda o explora todos los temas.</p><button className="button-dark" onClick={()=>setQuery("")}>Limpiar búsqueda</button></div>}</>;
}