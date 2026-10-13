# Punto y Sigue

Base de blog personal con Next.js, TypeScript, MDX y Tailwind. Marca provisional, editable en lib/site.ts y componentes de cabecera/pie.

## Ejecutar

```sh
npm install
npm run dev
```

Abre http://localhost:3000. Desarrollo muestra cuatro artículos de demostración. Producción los oculta por defecto.

```sh
npm run typecheck
npm run build
npm start
```

Para una vista previa de producción con ejemplos, establece SHOW_DEMO_CONTENT=true antes de build y start. Esto activa noindex; no usar para el lanzamiento definitivo.

## Publicación por categoría y fecha

```sh
npm run post:new -- mi-primera-guia tecnologia
```

Categorías: tecnologia, deporte, vida-practica. El comando crea un borrador sin sobrescribir archivos.

1. Edita el MDX en content/posts; solo autores de confianza deben editar MDX, ya que permite código.
2. Añade contenido original, fuentes, nombre real, título, extracto y categoría.
3. Revisa y cambia reviewed a true, status a published y demo a false.
4. Para programar usa una fecha ISO con zona: date: "2026-11-01T09:00:00-05:00".
5. Incluye el archivo en el despliegue. El servidor solo lo entrega a partir de esa fecha. Borradores, fechas futuras y publicaciones no revisadas devuelven 404 incluso con URL directa.
6. Los listados, artículos, sitemap y RSS se calculan en cada solicitud. No necesitan un cron para mostrar el contenido ya desplegado a su hora. Una pestaña abierta necesita recargarse. No usar exportación estática ni caché de CDN que ignore este comportamiento.

La automatización actual programa visibilidad de archivos revisados y distribuye los definitivos por RSS. No genera contenido autónomamente, no publica en redes y no incorpora CMS; el flujo propuesto para n8n/CMS está en docs/NEGOCIO.md.

Los dos ejemplos originales permanecen en el repositorio pero no se publican porque no tienen estado editorial válido.

## SEO y confianza

Metadatos por artículo, canonical, BlogPosting, sitemap.xml, robots.txt, RSS, página editorial, contacto y borradores legales. El contenido demo nunca aparece en sitemap o RSS. Sin URL real o con SHOW_DEMO_CONTENT=true se indica noindex.

Configura NEXT_PUBLIC_SITE_URL y NEXT_PUBLIC_CONTACT_EMAIL antes de compilar. Completa la identidad del autor, contacto real, privacidad y términos. Quita noindex de las páginas legales cuando estén terminadas. Ninguna de estas medidas garantiza aprobación AdSense.

## Publicidad

AdSlot reserva espacio sin cargar scripts ni recopilar datos. No hay ingresos ni anuncios activos. Antes de integrar:
- Aprobar el sitio y seguir el proceso de verificación de AdSense.
- Configurar mensajes de privacidad y CMP certificada cuando corresponda.
- Utilizar el código y los identificadores reales entregados por Google.
- Sustituir el comentario de public/ads.txt por la línea exacta de tu cuenta.
- Mantener el rótulo Publicidad y comprobar ubicación, consentimiento y cambios de tamaño en móvil.
- No añadir bloques junto a botones que puedan provocar clics accidentales.

La política de privacidad describe el estado actual sin atribuirle integraciones inexistentes. Debe adaptarse al titular y al país antes del lanzamiento.

## Despliegue

Necesita un servidor compatible con Next.js (Node o proveedor administrado). Revisar que el plan permita una actividad comercial, sus costes y límites antes de contratar. Conectar dominio, HTTPS, correo y Search Console. No se ha desplegado ni comprado ningún dominio.

## Negocio

Consulta docs/NEGOCIO.md: audiencia, diagrama, mejoras por fases, métricas, dominios y fuentes oficiales consultadas el 8 de octubre de 2026.

## Validación realizada

- Compilación de producción y TypeScript: correctos.
- Prueba de publicación: borradores, falta de revisión, fechas futuras/inválidas, categoría desconocida, demos, rutas inválidas y paso de la fecha programada.
- Navegador: portada y búsqueda sin tildes; vista móvil sin desbordamiento horizontal.
- Ejecutar `npm test` para repetir los controles editoriales.

## Dependencias antes de producción

Se actualizó next-mdx-remote a 6 para corregir su alerta de ejecución de código. La auditoría de npm aún informa 14 alertas (8 moderadas, 6 altas) en dependencias heredadas y transitivas, incluyendo Next/PostCSS, Tailwind y gray-matter. Antes de exposición pública, planificar su actualización y repetir build, auditoría y pruebas; no aplicar `audit fix --force` sin revisar los cambios mayores. Esta entrega es una base local, no una certificación de seguridad ni de aprobación publicitaria.
