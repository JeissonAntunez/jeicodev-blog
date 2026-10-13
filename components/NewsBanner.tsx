import Link from "next/link";
import { categories } from "@/lib/site";
import { formatDate, type PostMeta } from "@/lib/posts";
import ArticleCover from "./ArticleCover";

const dayKey = (date: Date) => new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Lima", year: "numeric", month: "2-digit", day: "2-digit",
}).format(date);

export default function NewsBanner({ posts }: { posts: PostMeta[] }) {
  const now = new Date();
  const today = dayKey(now);
  const published = posts.filter(p => !p.demo && Date.parse(p.date) <= now.getTime());
  const current = published.filter(p => dayKey(new Date(p.date)) === today);
  const pool = current.length ? current : published;
  const sorted = [...pool].sort((a, b) => {
    const byDay = dayKey(new Date(b.date)).localeCompare(dayKey(new Date(a.date)));
    return byDay || Number(b.featured) - Number(a.featured) || Date.parse(b.date) - Date.parse(a.date);
  });
  const lead = sorted[0];
  const secondary = published.filter(p => p.slug !== lead?.slug).slice(0, 3);
  const editionDate = new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima", weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(now);

  return <section className="news-edition" aria-labelledby="news-heading">
    <div className="news-edition-bar"><span className="news-edition-label">JEICODEV / LA PORTADA</span><time dateTime={today}>{editionDate}</time><a href="/feed.xml">Seguir por RSS ↗</a></div>
    <div className="news-heading-row"><div><span className="kicker">{current.length ? "PUBLICACIONES DE HOY" : "SELECCIÓN EDITORIAL"}</span><h2 id="news-heading">Lo importante, en un vistazo<span>.</span></h2></div><Link href="/blog" className="text-link">Todas las publicaciones ↗</Link></div>
    {lead ? <div className="news-layout">
      <article className="news-lead">
        <div className="news-lead-image"><ArticleCover visual={lead.visual} image={lead.image} imageAlt={lead.imageAlt} large priority/></div>
        <div className="news-lead-content">
          <div className="news-lead-labels"><Link href={`/categoria/${lead.category}`}>{categories.find(c=>c.slug===lead.category)?.name}</Link><span>{current.length ? "DESTACADO DE HOY" : "LECTURA DESTACADA"}</span></div>
          <h2><Link href={`/blog/${lead.slug}`}>{lead.title}</Link></h2>
          <p>{lead.excerpt}</p>
          <div className="news-lead-bottom"><div><span>{lead.author}</span><small><time dateTime={lead.date}>{formatDate(lead.date)}</time> · {lead.minutes} min de lectura</small></div><Link href={`/blog/${lead.slug}`} className="news-read" aria-label={`Leer: ${lead.title}`}>Leer artículo <span aria-hidden="true">↗</span></Link></div>
        </div>
      </article>
      <aside className="news-side" aria-label={secondary.length ? "Más lecturas recientes" : "Explorar el blog"}>
        <div className="news-side-heading"><span>{secondary.length ? "MÁS PARA LEER" : "SIGUE EXPLORANDO"}</span><span aria-hidden="true">↗</span></div>
        {secondary.length ? <ol className="news-secondary">{secondary.map((post,i)=><li key={post.slug}><span className="news-number">0{i+1}</span><div><span className="category-label">{categories.find(c=>c.slug===post.category)?.name}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><small><time dateTime={post.date}>{formatDate(post.date)}</time> · {post.minutes} min</small></div></li>)}</ol> :
        <div className="news-topics">{categories.map(c=><Link key={c.slug} href={`/categoria/${c.slug}`}><span className={`news-topic-icon ${c.color}`} aria-hidden="true">{c.icon}</span><span><strong>{c.name}</strong><small>{c.description}</small></span><span aria-hidden="true">↗</span></Link>)}</div>}
        <div className="news-start"><span className="kicker">UN BUEN COMIENZO</span><p>Una idea útil puede cambiar tu siguiente paso.</p><Link href="/empieza-aqui" className="text-link">Empieza aquí ↗</Link></div>
      </aside>
    </div> : <div className="empty-state"><h2>Estamos preparando las próximas lecturas.</h2><p>Los artículos aparecerán aquí cuando estén revisados y publicados.</p><Link className="text-link" href="/empieza-aqui">Conoce el blog ↗</Link></div>}
    {!current.length && lead && <p className="news-freshness">Todavía no hay publicaciones de hoy. Esta selección reúne nuestras lecturas más recientes.</p>}
  </section>;
}

