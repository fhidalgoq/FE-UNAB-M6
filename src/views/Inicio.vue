<template>
  <div class="d-flex flex-column gap-6">
    <v-sheet class="pa-6" color="primary-lighten-4" rounded="lg">
      <div class="d-flex flex-column flex-md-row align-center gap-6">
        <div class="flex-grow-1">
          <h1 class="text-h4 text-md-h3 font-weight-bold mb-4">
            Bienvenido a Recetas 360
          </h1>
          <p class="text-body-1">
            Explora nuestras categorías, descubre autores destacados y guarda tus recetas
            favoritas sin recargar la página.
          </p>
          <div class="d-flex flex-wrap gap-3 mt-6">
            <v-btn color="primary" :to="{ path: '/categorias' }">
              Explorar categorías
            </v-btn>
            <v-btn variant="outlined" :to="{ name: 'detalle-receta', params: { id: '1' } }">
              Ver receta destacada
            </v-btn>
          </div>
        </div>

        <v-img
          class="hero-illustration rounded-lg"
          :src="heroImage"
          alt="Ingredientes frescos sobre una mesa"
          cover
          height="220"
          max-width="320"
        />
      </div>
    </v-sheet>

    <section>
      <h2 class="text-h5 font-weight-medium mb-4">Selección de la semana</h2>
      <v-row>
        <v-col
          v-for="recipe in featuredRecipes"
          :key="recipe.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="h-100"
            :to="{ name: 'detalle-receta', params: { id: recipe.id } }"
            variant="outlined"
          >
            <v-img
              :src="recipe.image"
              :alt="`Fotografía de ${recipe.title}`"
              height="180"
              cover
            />
            <v-card-item>
              <v-card-title>{{ recipe.title }}</v-card-title>
              <v-card-subtitle>
                Listo en {{ recipe.readyIn }} • {{ recipe.servings }} porciones
              </v-card-subtitle>
            </v-card-item>
            <v-card-text>
              {{ recipe.summary }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" variant="text">
                Ver receta
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { recipes } from '@/data/recipes'

const featuredRecipes = computed(() => recipes.slice(0, 3))
const heroImage =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
</script>

<style scoped>
.hero-illustration {
  min-width: 220px;
}
</style>
