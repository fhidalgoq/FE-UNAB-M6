<template>
  <v-alert
    type="info"
    border="start"
    variant="tonal"
    color="primary"
    class="mb-4"
  >
    <div class="text-body-1 mb-4">
      Selecciona una subcategoría para mostrar recetas especializadas. Puedes volver aquí en
      cualquier momento sin recargar la página.
    </div>
    <div class="d-flex flex-wrap gap-2">
      <v-chip
        v-for="category in categories"
        :key="category.key"
        :to="`/categorias/${category.key}`"
        variant="elevated"
        color="primary"
        :prepend-avatar="category.image"
      >
        {{ category.name }}
      </v-chip>
    </div>
  </v-alert>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
})
</script>
