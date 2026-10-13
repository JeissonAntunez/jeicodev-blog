const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
function getSiteUrl() {
  try {
    const url = new URL(configuredUrl || "http://localhost:3000");
    return /^https?:$/.test(url.protocol) ? url.origin : "http://localhost:3000";
  } catch { return "http://localhost:3000"; }
}
const url = getSiteUrl();
export const isPublicSite = Boolean(configuredUrl) && url.startsWith("https://") && !["localhost", "127.0.0.1", "[::1]"].includes(new URL(url).hostname) && process.env.SHOW_DEMO_CONTENT !== "true";
export const site = {
  name: "JeicoDev",
  description: "El espacio de JeicoDev sobre sistemas, desarrollo y automatización. Artículos, proyectos y aprendizajes para construir con tecnología.",
  url,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};
export const categories = [
  { slug: "tecnologia", name: "Tecnología", icon: "↗", description: "Haz que lo digital trabaje para ti.", color: "purple", intro: "Guías para entender herramientas digitales, organizar archivos y reducir tareas repetitivas. Encuentra explicaciones claras y pasos que puedas adaptar a tu contexto." },
  { slug: "deporte", name: "Deporte", icon: "◎", description: "Más movimiento. Menos complicaciones.", color: "green", intro: "Una mirada al deporte desde su organización, su comunidad y las ideas que lo rodean. Explora artículos sobre fútbol, marketing deportivo y preparación de actividades." },
  { slug: "vida-practica", name: "Vida práctica", icon: "✳", description: "Pequeños cambios para tu día a día.", color: "orange", intro: "Ideas para organizar tu semana, ordenar pendientes y dedicar tiempo a lo que importa. Métodos sencillos para probar y ajustar a tu vida cotidiana." },
];
