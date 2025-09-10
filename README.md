# FE-UNAB-M6 — Binding de datos en Vue 3 (Vite)

Proyecto base en Vue 3 creado con Vite que demuestra binding de datos (`v-model`) mediante:
- Selección de tipo de estudios con radios.
- Selección de día de la semana con un `select`.

El estilo se apoya en Bootstrap 5 cargado vía CDN.

## Requisitos
- Node.js 18 o superior
- npm 9 o superior (incluido con Node 18+)

## Instalación y ejecución
- Instalar dependencias: `npm install`
- Entorno de desarrollo: `npm run dev` (abre y sirve en local)
- Construcción de producción: `npm run build`
- Vista previa de la build: `npm run preview`

## Scripts disponibles
- `dev`: inicia el servidor de desarrollo de Vite.
- `build`: genera assets de producción en `dist/`.
- `preview`: sirve la build localmente para verificación.

## Estructura principal
- `index.html`: documento raíz; incluye Bootstrap vía CDN.
- `src/main.js`: punto de entrada que monta la app.
- `src/App.vue`: componente raíz; renderiza el componente de ejemplo.
- `src/components/Binding.vue`: demostración de `v-model` con radios y select.
- `public/`: assets estáticos servidos tal cual.
- `vite.config.js`: configuración mínima de Vite con plugin de Vue.

## Funcionalidades clave
- Radios para escoger el nivel de estudios entre: Básica, Media, Técnica, Superior.
- `select` para elegir un día de la semana con placeholder deshabilitado.
- Visualización reactiva de la opción seleccionada en ambos casos.

## Tecnologías
- Vue 3 (`<script setup>`)
- Vite 7
- Bootstrap 5 (CDN)

## Personalización rápida
- Cambiar opciones de estudios o días: editar `src/components/Binding.vue`.
- Agregar más componentes: crear nuevos SFCs en `src/components/` y registrarlos en `src/App.vue`.

## Notas
- Si el navegador no refresca estilos de Bootstrap, revisar conexión a CDN en `index.html`.
- Para entornos corporativos sin acceso a CDN, instala Bootstrap como dependencia local o sirve los archivos desde `public/`.

## Autor
- Francisco Hidalgo Quezada