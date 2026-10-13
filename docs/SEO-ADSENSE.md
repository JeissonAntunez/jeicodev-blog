# Estado profesional, SEO y AdSense

Revisión: 13 de octubre de 2026.

## Mejoras implementadas

- Marca editorial JeicoDev unificada en metadatos, pie y presentación; no sustituye la identidad legal pendiente.
- Categorías en /categoria/tecnologia, /categoria/deporte y /categoria/vida-practica: descripción propia, canonical, metadatos sociales y CollectionPage con lista de artículos.
- Los filtros antiguos /blog?categoria=... redirigen permanentemente a las páginas correspondientes.
- Las categorías sin publicaciones definitivas quedan en noindex y fuera del sitemap. Los ejemplos no acreditan contenido editorial final.
- Página /empieza-aqui con orientación y artículos definitivos, enlazada desde portada y pie.
- Icono propio del sitio y canonical de portada.
- Variable GOOGLE_SITE_VERIFICATION para configurar la metaetiqueta de Search Console.
- Entornos locales, demos o URL no HTTPS no habilitan indexación; sitemap y robots usan el mismo criterio central.
- Artículos con imagen, datos BlogPosting/BreadcrumbList, fuentes, extracto, alt e imagen social.

## Mapa de publicidad preparado

| Ubicación | Reserva visual | Condiciones |
| --- | --- | --- |
| Portada, tras temas | 120 px mínimo en escritorio / 250 px en móvil | Después de contenido editorial y separado de navegación |
| Lateral de lectura | 250 px mínimo | Solo escritorio, según diseño actual |
| Final del artículo | 250 px mínimo | Solo artículos definitivos de al menos 4 minutos; visible también en móvil |

Son reservas de diseño, no tamaños obligatorios de Google ni unidades publicitarias activas. No generan ingresos. Al integrar anuncios, adaptar alturas al formato real, probar estados sin anuncio y evitar saltos de contenido. No usar superposiciones ni anuncios pegados a botones. No añadir scripts automáticamente antes de preparar consentimiento.

## Bloqueos reales antes del lanzamiento

1. Confirmar dominio y alojamiento público HTTPS. Configurar NEXT_PUBLIC_SITE_URL y comprobar enlaces canonical e imágenes sociales con ese dominio.
2. Sustituir los contenidos demo por artículos propios de utilidad; actualmente la mayoría de ejemplos no se publican en producción. No existe una cantidad de artículos que garantice AdSense.
3. Completar nombre del titular, país, contacto atendido, trayectoria, proveedor y políticas. Los textos legales incompletos siguen en noindex.
4. Resolver alertas de dependencias heredadas documentadas en README; validar el despliegue final.
5. Configurar Search Console, enviar sitemap.xml e inspeccionar portada, categoría Deporte y artículo definitivo. La etiqueta de verificación sola no envía el sitemap ni garantiza indexación.
6. Medir carga, estabilidad visual y experiencia móvil en producción. Las alturas reservadas ayudan, pero no constituyen una medición de Core Web Vitals.
7. Solicitar AdSense desde la cuenta del titular. Usar los identificadores reales de verificación/anuncios y la línea exacta de ads.txt de esa cuenta.
8. Antes de cargar anuncios, actualizar políticas e implementar el consentimiento/CMP aplicable. Verificar funcionamiento y estado rechazado/aceptado. No pedir clics ni probar haciendo clic en anuncios reales.

## Después de lanzar

Mantener un calendario sostenible, mejorar contenidos usando preguntas reales de lectores, enlazar artículos relacionados y añadir recursos descargables originales. Valorar newsletter solo cuando existan proveedor, consentimiento y procedimiento de baja. Medir recurrencia, consultas orgánicas y RPM de página; no prometer posiciones ni ingresos.

## Fuentes oficiales

- SEO: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Enlaces internos: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Ubicaciones publicitarias: https://support.google.com/adsense/answer/1346295
- Buenas prácticas: https://support.google.com/adsense/answer/1282097
- Consentimiento: https://support.google.com/adsense/answer/13554116
