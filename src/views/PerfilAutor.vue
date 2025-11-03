<template>
  <div>
    <v-alert
      v-if="!author"
      type="warning"
      variant="outlined"
      class="mb-6"
    >
      No tenemos información publicada para el autor <strong>{{ decodedName }}</strong>.
      Vuelve al listado de <RouterLink to="/categorias">categorías</RouterLink> para seguir explorando.
    </v-alert>

    <template v-else>
      <header class="mb-6">
        <div class="d-flex flex-column flex-md-row align-start gap-4">
          <v-avatar size="96" class="elevation-2">
            <v-img :src="author.avatar" :alt="`Retrato de ${author.name}`" cover />
          </v-avatar>

          <div>
            <h1 class="text-h4 font-weight-bold mb-2">{{ author.name }}</h1>
            <p class="text-body-1">
              {{ author.bio }}
            </p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <v-chip
                v-for="tag in author.specialties"
                :key="tag"
                color="primary"
                variant="tonal"
                prepend-icon="mdi-star-outline"
              >
                {{ tag }}
              </v-chip>
            </div>
          </div>
        </div>
      </header>

      <section>
        <h2 class="text-h5 font-weight-medium mb-4">Recetas del autor</h2>
        <v-row v-if="recipes.length">
          <v-col
            v-for="recipe in recipes"
            :key="recipe.id"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card
              variant="outlined"
              :to="{ name: 'detalle-receta', params: { id: recipe.id } }"
              class="h-100"
            >
              <v-img
                :src="recipe.image"
                :alt="`Receta ${recipe.title}`"
                height="160"
                cover
              />
              <v-card-item>
                <v-card-title>{{ recipe.title }}</v-card-title>
                <v-card-subtitle>
                  {{ categoryLabel(recipe.category) }} • {{ recipe.readyIn }}
                </v-card-subtitle>
              </v-card-item>
              <v-card-text>{{ recipe.summary }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" variant="text">Ver receta</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-alert v-else type="info" variant="tonal">
          Todavía no hay recetas publicadas por este autor.
        </v-alert>
      </section>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { categories } from '@/data/recipes'

const props = defineProps({
  nombre: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    default: null,
  },
  recipes: {
    type: Array,
    default: () => [],
  },
})

const decodedName = computed(() =>
  props.nombre.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()),
)

const categoryLabel = (categoryKey) => {
  const match = categories.find((category) => category.key === categoryKey)
  return match ? match.name : categoryKey
}
</script>
