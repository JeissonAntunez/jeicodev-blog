# Completar las políticas antes del lanzamiento

Actualizado: 13 de octubre de 2026.

## Páginas implementadas

- /informacion-legal: centro de información y transparencia.
- /privacidad: tratamientos actuales, finalidades, proveedores, conservación y solicitudes.
- /cookies: inventario de blog-theme (localStorage), duración y eliminación.
- /terminos: uso del sitio, derechos de autor, enlaces y responsabilidad sin renuncias absolutas.
- /aviso-legal: identificación del titular y actividad.
- /publicidad: separación editorial, afiliación y activación futura de anuncios.
- /politica-editorial: fuentes, IA, autoría y correcciones.

## Datos pendientes

Completar en el entorno de despliegue y volver a compilar:

- SITE_LEGAL_OWNER: nombre o razón social real del titular.
- SITE_LEGAL_COUNTRY: país confirmado, no inferido por zona horaria.
- SITE_LEGAL_ADDRESS: dirección pública de contacto que corresponda; no publicar datos personales innecesarios.
- NEXT_PUBLIC_CONTACT_EMAIL: correo público atendido.
- SITE_LEGAL_HOSTING: proveedor, ubicación y tratamiento de registros técnicos.
- SITE_LEGAL_RETENTION: criterios o plazos efectivos de registros y correspondencia, coherentes con la configuración del proveedor.

Estas variables se muestran públicamente. No introducir claves, contraseñas ni documentos de identidad. El nombre editorial actual no se usa como sustituto de la identidad legal. Sigue pendiente unificar la marca JeicoDev/Punto y Sigue.

Completar también el proveedor de correo, fundamento jurídico de cada tratamiento, transferencias y garantías, procedimiento de derechos y autoridad competente. No basta con rellenar variables: revisar los textos con los datos definitivos y la jurisdicción aplicable. La lista de páginas no es un requisito legal universal ni garantiza aprobación AdSense.

## Estado técnico que reflejan

No hay AdSense, analítica, newsletter, cuentas, pagos ni comentarios activos. La búsqueda de texto es local. El servidor recibe solicitudes HTTP, y el registro y conservación dependen del alojamiento. La única preferencia persistida por código de la aplicación es blog-theme; localStorage no es una cookie y no se transmite automáticamente al servidor. No se añadió un banner que simule un consentimiento inexistente.

Los borradores legales y el centro legal permanecen en noindex. Privacidad y términos fueron retirados del sitemap mientras estén incompletos. Después de completarlos: retirar el aviso de preparación, revisar robots de cada página y añadir las rutas definitivas al sitemap. No indexar textos con datos pendientes por el solo hecho de configurar un dominio.

## Antes de activar anuncios o nuevos servicios

Actualizar inventario y privacidad con proveedores reales, finalidades, almacenamiento, conservación, transferencias y opciones del usuario. Implementar y comprobar consentimiento antes de cargar tecnologías cuando corresponda. Para AdSense, revisar la CMP certificada y sus requisitos regionales; no basta un texto genérico. No afirmar que Google ya trata datos en esta base.

## Fuentes oficiales consultadas

- Google AdSense, contenido obligatorio de privacidad: https://support.google.com/adsense/answer/1348695?hl=es
- Google AdSense, uso de cookies: https://support.google.com/adsense/answer/7549925?hl=es
- Google AdSense, CMP para EEE, Reino Unido y Suiza: https://support.google.com/adsense/answer/13554116?hl=es
- Google AdSense, gestión de consentimiento: https://support.google.com/adsense/answer/7670013?hl=es
- Si se confirma Perú: contrastar la Ley 29733 y su reglamento vigente, publicado por la ANPD como DS 016-2024-JUS: https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus

No se ha confirmado la jurisdicción del titular ni se ha realizado una auditoría del futuro proveedor de alojamiento. Los textos requieren esa adaptación; no representan una certificación legal.
