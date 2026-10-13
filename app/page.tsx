import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { categories } from "@/lib/site";
import PostCard from "@/components/PostCard";
import NewsBanner from "@/components/NewsBanner";
import ProfessionalHome from "@/components/ProfessionalHome";
import AdSlot from "@/components/AdSlot";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export const dynamic = "force-dynamic";
export default function HomePage() {
 const posts = getAllPosts();
 return <><ProfessionalHome/><NewsBanner posts={posts}/>
 <section className="categories-section"><div className="section-heading"><div><span className="kicker">SIGUE TU CURIOSIDAD</span><h2>¿Qué te mueve hoy?</h2></div><p>Tres caminos. Muchas cosas por descubrir.</p></div><div className="category-grid">{categories.map((c,i) => <Link key={c.slug} href={`/categoria/${c.slug}`} className={`category-card ${c.color}`}><span className="category-icon">{c.icon}</span><div><h3>{c.name}</h3><p>{c.description}</p></div><span className="category-arrow">↗</span><small>0{i+1}</small></Link>)}</div></section>
 <AdSlot/>
 <section className="latest-section"><div className="section-heading"><div><span className="kicker">ALGO NUEVO PARA TI</span><h2>Las últimas ideas</h2></div><Link className="text-link" href="/blog">Explorar el blog <span>↗</span></Link></div><div className="post-grid">{posts.slice(0,3).map(p => <PostCard key={p.slug} post={p}/>)}</div>{posts.length < 2 && <p className="muted">Próximamente, más lecturas para tu semana.</p>}</section>
 <section className="manifesto"><span className="manifesto-symbol" aria-hidden="true">✳</span><div><span className="kicker">MENOS SCROLL. MÁS DESCUBRIMIENTOS.</span><h2>Que leer sea el comienzo<br/>de algo bueno.</h2><p>Un blog personal con una idea sencilla: compartir cosas útiles que merezcan un lugar en tu día.</p><Link className="text-link" href="/sobre-mi">Conoce la historia detrás <span>↗</span></Link></div><div className="manifesto-aside"><b>Curiosidad.<br/>Criterio.<br/><em>Y un siguiente paso.</em></b><span>ESO ES JEICODEV.</span></div></section></>;
}