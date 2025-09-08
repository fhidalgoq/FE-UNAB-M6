<script setup>
import { ref } from 'vue'

// Radio buttons
const estudios = ref('universitarios')
const opcionesEstudios = ['Basica', 'Media', 'Tecnica', 'Superior']

// Select días de la semana
const dias = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
]
const diaSeleccionado = ref('')
</script>

<template>
  <div class="container py-4">
    <!-- Radios -->
    <h2 class="mb-3">Tipo de estudios</h2>
    <div class="form-check" v-for="opcion in opcionesEstudios" :key="opcion">
      <input
        class="form-check-input"
        type="radio"
        :id="opcion"
        :value="opcion"
        v-model="estudios"
      />
      <label class="form-check-label text-capitalize" :for="opcion">
        {{ opcion }}
      </label>
    </div>
    <div class="mt-2">
      <span class="fw-bold">Seleccionado:</span> {{ opcionesEstudios.includes(estudios) ? estudios : 'Ninguno' }}
    </div>

    <hr class="my-4" />

    <!-- Select -->
    <h2 class="mb-3">Día de la semana</h2>
    <div class="mb-3">
      <select v-model="diaSeleccionado" class="form-select">
        <option disabled value="">Seleccione un día...</option>
        <option v-for="dia in dias" :key="dia" :value="dia">
          {{ dia }}
        </option>
      </select>
    </div>
    <div v-if="diaSeleccionado">
      <span class="fw-bold">Día seleccionado:</span> {{ diaSeleccionado }}
    </div>
  </div>
</template>