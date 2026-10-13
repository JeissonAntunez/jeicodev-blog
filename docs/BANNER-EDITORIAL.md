# Banner editorial de portada

La portada utiliza components/NewsBanner.tsx. No incluye un carrusel ni requiere JavaScript del cliente.

- Solo utiliza artículos definitivos (demo: false), ya publicados y revisados por el cargador existente.
- Calcula el día en America/Lima; se vuelve a calcular en cada solicitud de la portada, no en una pestaña que permanece abierta.
- Si hay publicaciones del día, muestra Publicaciones de hoy y elige una como principal. featured: true tiene prioridad entre artículos del mismo día; después se utiliza la fecha de publicación.
- Sin novedades de hoy, muestra Selección editorial y conserva la fecha real del artículo más reciente. No cambia su fecha ni afirma que sea una noticia reciente.
- Presenta hasta tres artículos secundarios, con fecha y categoría; si no existen, muestra navegación por temas.
- Sin artículos definitivos, presenta un estado vacío con enlace a Empieza aquí.
- El resto de la portada mantiene categorías, últimas publicaciones y la reserva publicitaria, fuera del banner.

Para destacar una noticia del día: crear el MDX con fecha real y zona horaria, status: published, reviewed: true, demo: false y featured: true. Añadir image e imageAlt para la fotografía o ilustración de portada. No cambiar fechas antiguas solo para promocionarlas.
