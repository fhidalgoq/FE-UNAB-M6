# Lista de Personas — Vue 3 + Vite

Aplicación mínima en Vue 3 creada con Vite que muestra una tabla con una lista estática de personas. Usa Bootstrap 5 (vía CDN) para estilos.

## Tecnologías
- Vue 3
- Vite
- Bootstrap 5 (CDN en `index.html`)

## Requisitos
- Node.js 18+ y npm

## Instalación y uso
```bash
npm install    # instala dependencias
npm run dev    # arranca el servidor de desarrollo
npm run build  # compila para producción en dist/
npm run preview # sirve el build localmente
```

Una vez en desarrollo, abre la URL que imprime Vite.

## Estructura principal
- `index.html`: define el `div#app`, incluye Bootstrap por CDN y monta la app.
- `src/main.js`: crea y monta la aplicación Vue.
- `src/App.vue`: componente raíz que renderiza `Table`.
- `src/components/Table.vue`: tabla con los datos de ejemplo.

## Personalización rápida
Para cambiar los datos que se muestran en la tabla, edita el arreglo `personas` dentro de `src/components/Table.vue`.

## Creador
Francisco Hidalgo Quezada
