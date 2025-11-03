<template>
  <div class="d-flex flex-column gap-6">
    <header>
      <h1 class="text-h4 font-weight-bold mb-2">Categorías</h1>
      <p class="text-body-1">
        Selecciona una categoría para ver recetas filtradas sin salir de esta sección.
      </p>
    </header>

    <v-row>
      <v-col
        v-for="category in categories"
        :key="category.key"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          :to="`/categorias/${category.key}`"
          class="h-100"
          variant="tonal"
        >
          <v-img
            :src="category.image"
            :alt="`Plato representativo de ${category.name}`"
            height="160"
            cover
          />
          <v-card-item>
            <v-card-title>{{ category.name }}</v-card-title>
          </v-card-item>
          <v-card-text>
            {{ category.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="primary">
              Ver recetas
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import { categories } from '@/data/recipes'
</script>
