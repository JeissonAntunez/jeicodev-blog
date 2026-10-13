import { site } from "./site";

// Complete only with verified public information from the site owner.
export const legal = {
  updated: "13 de octubre de 2026",
  owner: process.env.SITE_LEGAL_OWNER || "",
  country: process.env.SITE_LEGAL_COUNTRY || "",
  address: process.env.SITE_LEGAL_ADDRESS || "",
  email: site.email,
  hosting: process.env.SITE_LEGAL_HOSTING || "",
  retention: process.env.SITE_LEGAL_RETENTION || "",
};
export const legalLinks = [
  { href: "/privacidad", label: "Privacidad", description: "Qué información se trata, para qué y cómo solicitar atención." },
  { href: "/cookies", label: "Cookies y almacenamiento", description: "Cómo se recuerda el tema y qué tecnologías están activas." },
  { href: "/terminos", label: "Términos de uso", description: "Condiciones de lectura, uso del contenido y enlaces externos." },
  { href: "/aviso-legal", label: "Aviso legal", description: "Identidad del responsable y alcance de este sitio." },
  { href: "/politica-editorial", label: "Política editorial", description: "Fuentes, autoría, uso de IA y correcciones." },
  { href: "/publicidad", label: "Publicidad y afiliación", description: "Cómo se identificarán los anuncios y las colaboraciones." },
];
