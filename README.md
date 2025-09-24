# M6ABP3 — Binding de datos en Vue 3 (Vite)

Proyecto base en Vue 3 creado con Vite que demuestra binding de datos (`v-model`) mediante:
- Selección de tipo de estudios con radios.
- Selección de día de la semana con un `select`.

El estilo se apoya en Bootstrap 5 cargado vía CDN.

## Instalación y ejecución
- Instalar dependencias: `npm install`
- Entorno de desarrollo: `npm run dev` (abre y sirve en local)

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
- Vue 3
- Vite 7
- Bootstrap 5 (CDN)

## Autor
- Francisco Hidalgo Quezada