import Image from "next/image";
import Link from "next/link";
import { profile, videoPreviews } from "@/lib/profile";

export default function ProfessionalHome() {
  return <>
    <section className="profile-hero" aria-labelledby="profile-title">
      <div className="profile-copy"><span className="kicker">JEICODEV / SISTEMAS Y TECNOLOGÍA</span>
        <h1 id="profile-title">Entender la tecnología.<br/><em>Construir algo útil.</em></h1>
        <p>Hola, soy JeicoDev. Este es mi espacio como profesional de sistemas: desarrollo, automatización y aprendizajes que se convierten en proyectos.</p>
        <div className="profile-actions"><Link href="/blog" className="profile-button">Explorar el blog <span>↗</span></Link><a href="#youtube" className="profile-secondary">El espacio de YouTube <span>▶</span></a></div>
        <div className="profile-tags"><span>Desarrollo</span><span>Automatización</span><span>Sistemas</span></div>
      </div>
      <figure className="profile-art"><Image src="/images/demo-desarrollo.svg" alt="Ilustración de un espacio de desarrollo con editor de código" width={800} height={600} priority/><figcaption><span>EL LABORATORIO DE JEICODEV</span><strong>Aprender. Probar. Compartir.</strong><small>Imagen ilustrativa · reemplazable</small></figcaption></figure>
    </section>
    <section className="profile-paths" aria-label="Explora por objetivo">
      <Link href="/categoria/tecnologia"><span>01 / APRENDE</span><h2>Una idea más clara.</h2><p>Artículos para entender y aplicar tecnología.</p><b aria-hidden="true">↗</b></Link>
      <a href="#proyectos"><span>02 / CONSTRUYE</span><h2>Del concepto al código.</h2><p>Conoce lo que hay detrás de este proyecto.</p><b aria-hidden="true">↗</b></a>
      <a href="#youtube"><span>03 / ACOMPAÑA</span><h2>También en video.</h2><p>Un espacio para aprender paso a paso.</p><b aria-hidden="true">↗</b></a>
    </section>
    <section id="youtube" className="youtube-section" aria-labelledby="youtube-heading">
      <div className="section-heading"><div><span className="kicker">DEL BLOG A LA PANTALLA</span><h2 id="youtube-heading">Tecnología, paso a paso.</h2></div><a className="text-link" href={profile.youtubeUrl} target="_blank" rel="noopener noreferrer">{profile.youtubeIsPlaceholder ? "Abrir YouTube (provisional)" : "Visitar mi canal"} ↗</a></div>
      <p className="profile-section-intro">Un lugar para explicar el proceso, compartir pruebas y construir contigo. Estas tarjetas son propuestas de contenido; todavía no hay videos publicados aquí.</p>
      <div className="video-grid">{videoPreviews.map(video=><article className="video-preview" key={video.title}><div className="video-art"><Image src={video.image} alt="" width={800} height={600}/><span className="video-demo">VISTA PREVIA</span></div><div className="video-copy"><span className="kicker">{video.topic}</span><h3>{video.title}</h3><p>{video.description}</p><small>Contenido de ejemplo · próximamente</small></div></article>)}</div>
    </section>
    <section id="proyectos" className="profile-project" aria-labelledby="project-heading"><div><span className="kicker">PROYECTO EN CONSTRUCCIÓN / 01</span><h2 id="project-heading">El blog también<br/>es un proyecto.</h2><p>Este sitio es el punto de partida: una publicación con Next.js, artículos en MDX, categorías y dos modos de lectura. Un lugar para documentar decisiones y seguir mejorando.</p><Link href="/empieza-aqui" className="text-link">Explorar el proyecto ↗</Link></div><div className="project-stack"><span>LA BASE TÉCNICA</span>{["Next.js + TypeScript", "Contenido con MDX", "SEO técnico + RSS", "Diseño claro / oscuro"].map((item,i)=><div key={item}><small>0{i+1}</small><strong>{item}</strong><span aria-hidden="true">↗</span></div>)}</div></section>
  </>;
}
