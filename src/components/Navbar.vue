<template>
  <v-app-bar color="primary" density="comfortable" dark>
    <v-toolbar-title class="font-weight-bold">Recetas 360</v-toolbar-title>

    <v-spacer />

    <v-btn variant="text" :to="{ name: 'inicio' }" class="text-none">
      Inicio
    </v-btn>
    <v-btn variant="text" :to="{ path: '/categorias' }" class="text-none">
      Categorías
    </v-btn>
    <v-btn
      variant="text"
      :to="{ name: 'detalle-receta', params: { id: '1' } }"
      class="text-none"
    >
      Receta destacada
    </v-btn>
    <v-btn
      variant="text"
      :to="{ name: 'perfil-autor', params: { nombre: 'ana-perez' } }"
      class="text-none"
    >
      Autora
    </v-btn>

    <v-btn
      :icon="themeIcon"
      variant="text"
      @click="toggleTheme"
      :title="themeTitle"
    />

    <v-divider class="mx-4" inset vertical />

    <v-btn
      icon="mdi-arrow-left"
      variant="text"
      @click="goBack"
      :title="`Volver${canGoBack ? '' : ' al inicio'}`"
    />
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

const router = useRouter()
const route = useRoute()
const theme = useTheme()

const canGoBack = computed(() => window.history.length > 2 || route.name !== 'inicio')
const isDarkTheme = computed(() => theme.global.current.value.dark)
const themeIcon = computed(() =>
  isDarkTheme.value ? 'mdi-weather-sunny' : 'mdi-weather-night',
)
const themeTitle = computed(() =>
  isDarkTheme.value ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro',
)

const goBack = () => {
  if (window.history.length > 2) {
    router.back()
  } else {
    router.push({ name: 'inicio' })
  }
}

const toggleTheme = () => {
  theme.global.name.value = isDarkTheme.value ? 'light' : 'dark'
}
</script>
