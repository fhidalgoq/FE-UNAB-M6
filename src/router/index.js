import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Categorias from '@/views/Categorias.vue'
import DetalleReceta from '@/views/DetalleReceta.vue'
import PerfilAutor from '@/views/PerfilAutor.vue'
import CategoriasHome from '@/views/categorias/CategoriasHome.vue'
import CategoriaPostres from '@/views/categorias/Postres.vue'
import CategoriaBebidas from '@/views/categorias/Bebidas.vue'
import CategoriaPrincipales from '@/views/categorias/Principales.vue'
import {
  categories,
  findAuthor,
  findRecipeById,
  recipesByAuthor,
  recipesByCategory,
} from '@/data/recipes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      alias: '/inicio',
    },
    {
      path: '/categorias',
      component: Categorias,
      children: [
        {
          path: '',
          name: 'categorias-home',
          component: CategoriasHome,
          props: {
            categories,
          },
        },
        {
          path: 'postres',
          name: 'categorias-postres',
          component: CategoriaPostres,
          props: {
            category: categories.find((cat) => cat.key === 'postres'),
            recipes: recipesByCategory('postres'),
          },
        },
        {
          path: 'bebidas',
          name: 'categorias-bebidas',
          component: CategoriaBebidas,
          props: {
            category: categories.find((cat) => cat.key === 'bebidas'),
            recipes: recipesByCategory('bebidas'),
          },
        },
        {
          path: 'principales',
          name: 'categorias-principales',
          component: CategoriaPrincipales,
          props: {
            category: categories.find((cat) => cat.key === 'principales'),
            recipes: recipesByCategory('principales'),
          },
        },
      ],
    },
    {
      path: '/receta/:id',
      name: 'detalle-receta',
      component: DetalleReceta,
      props: (route) => {
        const recipe = findRecipeById(route.params.id)
        return {
          recipe,
          id: route.params.id,
        }
      },
    },
    {
      path: '/autor/:nombre',
      name: 'perfil-autor',
      component: PerfilAutor,
      props: (route) => {
        const slug = route.params.nombre
        return {
          nombre: slug,
          author: findAuthor(slug),
          recipes: recipesByAuthor(slug),
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router

