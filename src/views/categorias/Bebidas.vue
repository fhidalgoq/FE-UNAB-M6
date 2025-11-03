<template>
  <section>
    <header class="mb-4">
      <h2 class="text-h5 font-weight-bold mb-1">{{ category.name }}</h2>
      <p class="text-body-1">{{ category.description }}</p>
    </header>

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
            :alt="`Bebida ${recipe.title}`"
            height="160"
            cover
          />
          <v-card-item>
            <v-card-title>{{ recipe.title }}</v-card-title>
            <v-card-subtitle>Sirve {{ recipe.servings }} vasos</v-card-subtitle>
          </v-card-item>
          <v-card-text>{{ recipe.summary }}</v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="primary">Preparar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-alert v-else type="warning" variant="tonal">
      Estamos preparando más bebidas para ti.
    </v-alert>
  </section>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
  recipes: {
    type: Array,
    default: () => [],
  },
})
</script>
