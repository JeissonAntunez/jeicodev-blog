import Link from "next/link";
import type { ReactNode } from "react";
import { legal, legalLinks } from "@/lib/legal";

export type LegalSection = { id: string; title: string; content: ReactNode };
export function LegalContact() {
  return legal.email ? <a href={`mailto:${legal.email}`}>{legal.email}</a> : <Link href="/contacto">Contacto (canal pendiente de configurar)</Link>;
}
export default function LegalPage({ title, intro, sections, draft = true }: { title: string; intro: string; sections: LegalSection[]; draft?: boolean }) {
  return <article className="prose legal-page legal-document">
    <Link href="/informacion-legal" className="legal-back">← Información y transparencia</Link>
    <h1>{title}</h1><p className="legal-date">Última actualización: {legal.updated}</p><p className="legal-lead">{intro}</p>
    {draft && <aside className="legal-pending"><strong>Documento en preparación para el lanzamiento.</strong><p>Debe completarse y validarse con la identidad del titular, país, contacto, proveedores y condiciones reales del servicio. Describe la versión actual del blog; no acredita por sí solo el cumplimiento de una normativa.</p></aside>}
    <nav className="legal-index" aria-label="Contenido de esta política">{sections.map(s => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}</nav>
    {sections.map(s => <section key={s.id} aria-labelledby={s.id}><h2 id={s.id}>{s.title}</h2>{s.content}</section>)}
    <nav className="legal-related" aria-label="Otras políticas">{legalLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
  </article>;
}
