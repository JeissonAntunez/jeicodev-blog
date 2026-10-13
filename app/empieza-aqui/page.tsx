import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Empieza aquí: encuentra tu próxima lectura", description: "Elige un tema, descubre una guía y pon una idea en práctica. Conoce cómo leer y seguir JeicoDev.", alternates: { canonical: "/empieza-aqui" } };
export default function StartPage() {
  const posts = getAllPosts().filter(p => !p.demo).slice(0,3);
  return <>
    <section className="page-intro"><span className="kicker">TU PRIMER PUNTO DE PARTIDA</span><h1>Encuentra una idea.<br/>Dale un lugar en tu día.</h1><p>No necesitas leerlo todo. Elige un tema que te interese y empieza con una pregunta concreta.</p></section>
    <div className="start-steps"><section><span>01</span><h2>Elige tu tema</h2><p>Herramientas digitales, deporte u organización cotidiana. Entra en la sección que conecte con lo que buscas hoy.</p></section><section><span>02</span><h2>Lee con contexto</h2><p>Revisa la fecha, las fuentes y los ejemplos. Los artículos explicativos no pretenden ser noticias de última hora.</p></section><section><span>03</span><h2>Prueba un paso</h2><p>Quédate con una acción pequeña y evalúa si te sirve. Puedes enviar correcciones desde nuestra página de contacto.</p></section></div>
    <div className="category-grid start-categories">{categories.map(c=><Link key={c.slug} href={`/categoria/${c.slug}`} className={`category-card ${c.color}`}><span className="category-icon">{c.icon}</span><div><h3>{c.name}</h3><p>{c.description}</p></div><span className="category-arrow">↗</span></Link>)}</div>
    {posts.length>0 && <section className="latest-section"><div className="section-heading"><h2>Una lectura para empezar</h2></div><div className="post-grid">{posts.map(p=><PostCard post={p} key={p.slug}/>)}</div></section>}
    <section className="follow-reading"><h2>Sigue las próximas publicaciones</h2><p>El canal RSS reúne los artículos publicados. Copia su dirección en tu lector de feeds para consultar las novedades.</p><a className="text-link" href="/feed.xml">Abrir el canal RSS ↗</a><Link className="text-link" href="/politica-editorial">Cómo elaboramos el contenido ↗</Link></section>
  </>;
}
