# Flujo de trabajo Git

Este proyecto utiliza Gitflow por solicitud del propietario.

- `main`: versiones estables. No desarrollar directamente en esta rama.
- `develop`: integración del desarrollo.
- `feature/<descripcion>`: crear desde `develop` para cada funcionalidad o mejora; integrar de vuelta en `develop` tras verificar los cambios.
- `release/<version>`: crear desde `develop` para preparar una versión; integrar en `main` y `develop`, y etiquetar la versión al publicarla.
- `hotfix/<descripcion>`: crear desde `main` para corregir una versión publicada; integrar en `main` y `develop` (y en una release activa cuando corresponda).

Antes de cambiar de rama, revisar el estado del repositorio y preservar los cambios existentes. Usar commits descriptivos y verificaciones proporcionales al cambio. No incluir secretos, archivos `.env`, dependencias instaladas ni resultados de compilación. No hacer push, publicar versiones ni desplegar sin autorización del usuario. No asumir que la versión base inicial está desplegada o lista para producción.
