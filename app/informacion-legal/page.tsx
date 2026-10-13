import type { Metadata } from "next";
import Link from "next/link";
import { legalLinks } from "@/lib/legal";
export const metadata: Metadata = { title: "Información y transparencia", robots: { index: false, follow: true } };
export default function Page() {
  return <section className="legal-hub"><div className="page-intro"><span className="kicker">CLARIDAD PARA LEER CON CONFIANZA</span><h1>Información y transparencia.</h1><p>Cómo cuidamos el contenido, qué guarda tu navegador y quién responde por el blog.</p></div><div className="legal-hub-grid">{legalLinks.map(l => <Link href={l.href} key={l.href}><span aria-hidden="true">↗</span><h2>{l.label}</h2><p>{l.description}</p></Link>)}</div><p className="legal-hub-note">Las páginas legales están preparadas para esta versión del sitio y pendientes de completar con los datos del titular y del alojamiento público.</p></section>;
}
