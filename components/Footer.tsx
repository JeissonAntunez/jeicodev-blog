import Link from "next/link";
export default function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-top"><div><Link className="brand" href="/">JeicoDev<span className="brand-dot">.</span></Link><p>Un poco de curiosidad. Muchas posibilidades.</p></div><nav aria-label="Información"><Link href="/empieza-aqui">Empieza aquí</Link><Link href="/sobre-mi">Sobre el blog</Link><Link href="/politica-editorial">Política editorial</Link><Link href="/contacto">Contacto</Link></nav></div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} JeicoDev</span><nav className="footer-legal-links" aria-label="Políticas del blog"><Link href="/privacidad">Privacidad</Link><Link href="/cookies">Cookies</Link><Link href="/terminos">Términos</Link><Link href="/aviso-legal">Aviso legal</Link><Link href="/publicidad">Publicidad</Link><Link href="/informacion-legal">Todas las políticas</Link><a href="/feed.xml">RSS ↗</a></nav></div>
  </footer>;
}
