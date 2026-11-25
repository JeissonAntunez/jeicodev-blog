
import Link from "next/link";


export default function CardDeportes() {
  return (
    <div className="card-deportes">
      <Link href="/categoria/deportes" className="card-deportes-link">
        <h2>Deportes</h2>
        <p>Explora artículos y guías sobre deportes, desde fútbol hasta baloncesto, y mantente al día con las últimas noticias y análisis.</p>
      </Link>
    </div>
  );
}
