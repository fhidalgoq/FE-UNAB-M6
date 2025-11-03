<template>
  <div>
    <v-alert
      v-if="!recipe"
      type="error"
      variant="outlined"
      class="mb-6"
    >
      No encontramos la receta con el identificador {{ id }}. Revisa nuestra
      <RouterLink to="/categorias">lista de categorías</RouterLink> para descubrir otras opciones.
    </v-alert>

    <template v-else>
      <v-img
        v-if="recipe.image"
        :src="recipe.image"
        :alt="`Imagen de ${recipe.title}`"
        class="mb-6 rounded-lg"
        height="320"
        cover
      />

      <header class="mb-6">
        <v-chip color="primary" class="mb-3 text-uppercase" label>
          {{ categoryLabel }}
        </v-chip>
        <h1 class="text-h4 font-weight-bold mb-2">{{ recipe.title }}</h1>
        <div class="text-body-1 d-flex flex-wrap align-center gap-4">
          <span>Listo en {{ recipe.readyIn }}</span>
          <span>Rinde {{ recipe.servings }} porciones</span>
          <RouterLink
            v-if="author"
            :to="{ name: 'perfil-autor', params: { nombre: author.slug } }"
            class="text-decoration-none font-weight-medium"
          >
            Autor: {{ author.name }}
          </RouterLink>
        </div>
      </header>

      <v-row>
        <v-col cols="12" md="4">
          <v-card variant="tonal" color="primary">
            <v-card-title>Ingredientes</v-card-title>
            <v-card-text>
              <v-list density="comfortable">
                <v-list-item v-for="item in recipe.ingredients" :key="item">
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card variant="outlined">
            <v-card-title>Preparación paso a paso</v-card-title>
            <v-card-text>
              <ol class="ps-4">
                <li v-for="step in recipe.steps" :key="step" class="mb-3">
                  {{ step }}
                </li>
              </ol>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { findAuthor, categories } from '@/data/recipes'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  recipe: {
    type: Object,
    default: null,
  },
})

const author = computed(() =>
  props.recipe ? findAuthor(props.recipe.authorSlug) : null,
)

const categoryLabel = computed(() => {
  if (!props.recipe) return ''
  const match = categories.find((category) => category.key === props.recipe.category)
  return match ? match.name : props.recipe.category
})
</script>
