# Tabla de Pokémon — Vue 3 + Vite

Aplicación mínima en Vue 3 creada con Vite que muestra una tabla con un listado estático de Pokémon. Usa Bootstrap 5 (vía CDN) para estilos.

## Tecnologías
- Vue 3
- Vite
- Bootstrap 5 (CDN en `index.html`)

## Requisitos
- Node.js 18+ y npm

## Instalación y uso
```bash
npm install      # instala dependencias
npm run dev      # arranca el servidor de desarrollo
npm run build    # compila para producción en dist/
npm run preview  # sirve el build localmente
```

Abre la URL que imprime Vite (por defecto `http://localhost:5173`).

## Estructura principal
- `index.html`: define el `div#app`, incluye Bootstrap por CDN y monta la app.
- `src/main.js`: crea y monta la aplicación Vue.
- `src/App.vue`: componente raíz que renderiza `TablePokemon`.
- `src/components/TablePokemon.vue`: tabla con los datos de ejemplo (array reactivo `personajes`).

## Personalización rápida
- Edita el arreglo `personajes` en `src/components/TablePokemon.vue` para cambiar filas.
- Para agregar columnas, añade nuevas propiedades a cada objeto y nuevas celdas en la tabla.

## Notas
- Componentes con `<script setup>` en `App.vue` y `TablePokemon.vue`.
- Bootstrap se carga desde CDN; si prefieres empaquetarlo, instálalo por npm e impórtalo en tus estilos.

## Licencia
Uso educativo.
