import type { Metadata } from "next";
import LegalPage, { LegalContact } from "@/components/LegalPage";
import { legal } from "@/lib/legal";
export const metadata: Metadata = { title: "Aviso legal", robots: { index: false, follow: true }, alternates: { canonical: "/aviso-legal" } };
export default function Page() {
  return <LegalPage title="Aviso legal" intro="Información de identificación del titular y del servicio editorial." sections={[
    { id: "titular", title: "1. Identificación del titular", content: <dl className="legal-owner"><dt>Nombre o razón social</dt><dd>{legal.owner || "Pendiente de completar"}</dd><dt>País</dt><dd>{legal.country || "Pendiente de confirmar"}</dd><dt>Dirección de contacto</dt><dd>{legal.address || "Pendiente de determinar según las obligaciones aplicables"}</dd><dt>Correo público</dt><dd><LegalContact/></dd></dl> },
    { id: "actividad", title: "2. Actividad del blog", content: <p>Publicación de contenidos informativos sobre tecnología, deporte y vida práctica. La versión actual no ofrece contratación, pagos ni suscripciones de pago. Los datos registrales, tributarios o profesionales que resulten exigibles deberán incorporarse cuando se determine la actividad y el país del titular.</p> },
    { id: "identidad", title: "3. Nombre editorial", content: <p>JeicoDev es el nombre editorial del sitio. Este nombre no sustituye por sí solo el nombre o razón social de la persona responsable.</p> },
    { id: "alojamiento", title: "4. Alojamiento y contacto", content: <><p>{legal.hosting || "La vista previa se ejecuta en un servidor local. El proveedor de alojamiento público está pendiente de configurar."}</p><p>Las comunicaciones legales, solicitudes sobre derechos de autor o incidencias pueden dirigirse a <LegalContact/>. Incluye el enlace afectado y una explicación concreta; no envíes más datos personales de los necesarios.</p></> },
  ]}/>;
}
