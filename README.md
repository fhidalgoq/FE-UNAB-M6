# Recetas 360

Aplicación web desarrollada con Vue 3 y Vite que ofrece un catálogo interactivo de recetas. Permite explorar categorías, consultar el detalle de cada preparación y conocer a los autores destacados, todo sin recargar la página gracias al enrutamiento del lado del cliente.

## Características

- Portada con recomendaciones destacadas y accesos rápidos a las secciones clave.
- Listado de categorías con navegación anidada y filtros por tipo de receta.
- Vista detallada con ingredientes, pasos y vínculo al perfil del autor.
- Página de autor con biografía, especialidades y recetas asociadas.
- Cambio de tema claro/oscuro integrado con Vuetify y persistencia durante la sesión.

## Tecnologías utilizadas

- [Vite](https://vitejs.dev/) como bundler y servidor de desarrollo.
- [Vue 3](https://vuejs.org/) con sintaxis `<script setup>`.
- [Vue Router](https://router.vuejs.org/) para las rutas y vistas anidadas.
- [Vuetify 3](https://next.vuetifyjs.com/) para componentes UI y tematización.
- [Material Design Icons](https://pictogrammers.github.io/@mdi/font/) para iconografía.

## Requisitos previos

- Node.js 18 o superior.
- npm (instalado junto con Node.js).

## Puesta en marcha

```bash
npm install      # Instala dependencias
npm run dev      # Inicia el servidor de desarrollo en modo hot-reload
```

El servidor quedará disponible en el puerto que indique Vite (por defecto http://localhost:5173).

## Otros scripts útiles

```bash
npm run build    # Genera la versión optimizada para producción en dist/
npm run preview  # Sirve la build mediante el servidor de Vite
```

## Estructura relevante

- `src/main.js`: arranque de la aplicación, registro de Vuetify y router.
- `src/router/index.js`: definición de rutas, vistas anidadas y props dinámicas.
- `src/data/recipes.js`: conjunto de autores, recetas y utilidades para consultas.
- `src/views/`: vistas principales (Inicio, Categorías, Detalle y Perfil de autor).
- `src/components/Navbar.vue`: barra superior con navegación y switch de tema.