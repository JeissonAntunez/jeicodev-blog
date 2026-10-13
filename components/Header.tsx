import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="JeicoDev, inicio"><span className="brand-mark">j<span>•</span></span>JeicoDev<span className="brand-dot">.</span></Link>
    <nav aria-label="Navegación principal"><Link href="/blog">Blog</Link><Link href="/#proyectos">Proyectos</Link><Link href="/#youtube">YouTube</Link><Link href="/categoria/tecnologia">Tecnología</Link></nav>
    <div className="header-actions"><Link href="/sobre-mi" className="header-about">Detrás del blog <span>↗</span></Link><ThemeToggle/></div>
  </div></header>;
}
