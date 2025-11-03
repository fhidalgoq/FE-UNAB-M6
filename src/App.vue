<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container class="py-8">
        <transition name="fade" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

