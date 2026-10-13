import fs from "node:fs";
import path from "node:path";
const [slug, category="tecnologia"] = process.argv.slice(2);
if(!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !["tecnologia","deporte","vida-practica"].includes(category)) {
 console.error("Uso: npm run post:new -- mi-articulo tecnologia|deporte|vida-practica"); process.exit(1);
}
const destination=path.join(process.cwd(),"content","posts",slug+".mdx");
const source = `---
title: "Título por completar"
date: "${new Date().toISOString()}"
excerpt: "Describe el problema concreto que resuelve esta guía."
category: "${category}"
author: "Nombre real del autor"
status: "draft"
reviewed: false
demo: false
featured: false
---

## El problema

Explica a quién ayudas y qué necesita resolver.

## Paso a paso

Añade un ejemplo propio y verificable.

## Fuentes

Incluye fuentes originales, fecha de consulta y enlaces.

## Tu siguiente paso

Propón una acción concreta.
`;
try { fs.writeFileSync(destination,source,{flag:"wx"}); console.log("Borrador creado: "+destination); }
catch(e){console.error(e.code==="EEXIST"?"Ya existe un artículo con ese nombre. No se sobrescribió.":e.message);process.exit(1);}
