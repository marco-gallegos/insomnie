#!/usr/bin/env node
import fs from "node:fs";
import path from "path";

// Configuración del archivo JSON a generar
const outputPath = 'version.json';

// Ruta al package.json
const packagePath = './package.json';

// Leer el contenido del package.json
const pkgContent = fs.readFileSync(packagePath, 'utf8');

// Parsear el contenido para obtener la versión (la primera propiedad)
const version = JSON.parse(pkgContent)?.version ?? '0';

console.debug(`updating ${outputPath} to  ${version}`)

// Crear un archivo JSON en `outputPath` con la versión como única propiedad
fs.writeFileSync(outputPath, `{"version": "${version}"}`);
