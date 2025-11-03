# Tabla de Pokemon - Vue 3 + Vite

Aplicacion creada con Vue 3 y Vite que renderiza una tabla con un listado estatico de Pokemon. La interfaz usa Bootstrap 5 a traves de CDN y ofrece un buscador en tiempo real para filtrar por nombre.

## Caracteristicas
- Filtro reactivo por nombre usando la Composition API (`ref` y `computed`).
- Tabla con estilos listos mediante Bootstrap 5 incluido en `index.html`.
- Datos iniciales en memoria, faciles de extender o reemplazar por una fuente externa.

## Requisitos
- Node.js 18 o superior.
- npm (se instala junto con Node.js).

## Puesta en marcha
```bash
npm install      # instala dependencias
npm run dev      # arranca el servidor de desarrollo en modo hot-reload
npm run build    # genera la version optimizada en dist/
npm run preview  # sirve la build para verificarla en local
```

Cuando `npm run dev` este activo, visita la URL que muestra la terminal (por defecto http://localhost:5173).

## Estructura del proyecto
```
.
|-- index.html                # Punto de entrada, inyecta Bootstrap por CDN
|-- src/
|   |-- main.js               # Crea la app de Vue y la monta en #app
|   |-- App.vue               # Componente raiz; renderiza TablePokemon
|   `-- components/
|       `-- TablePokemon.vue  # Tabla y logica de busqueda
`-- vite.config.js            # Configuracion de Vite (por defecto)
```

## Personalizacion rapida
- Reemplaza el arreglo `personajes` en `src/components/TablePokemon.vue` para cambiar los datos.
- Agrega nuevas columnas anadiendo propiedades a cada objeto y celdas adicionales en la tabla.
- Si necesitas estilos propios, agrega reglas en la seccion `<style>` de los componentes o incorpora un CSS global.

## Ideas para seguir
- Consumir una API (por ejemplo, PokeAPI) y poblar la tabla dinamicamente.
- Anadir paginacion, ordenamiento o conteos de resultados.
- Internacionalizar la interfaz y los mensajes segun tus necesidades.
