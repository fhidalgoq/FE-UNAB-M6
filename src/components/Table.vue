<script setup>
import { ref } from 'vue'

// Radio buttons
const estudios = ref('')
const opcionesEstudios = ['Basica', 'Media', 'Tecnica', 'Superior']

// Select días de la semana
const dias = [
  'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
]
const diaSeleccionado = ref('')
</script>

<template>
  <div class="container py-4">
    <div class="row g-4">
      <!-- Columna izquierda: Radios -->
      <div class="col-md-6">
        <div class="p-3 border rounded shadow-sm bg-light">
          <h4 class="mb-3 text-primary">Tipo de estudios</h4>
          <div
            class="form-check mb-2"
            v-for="opcion in opcionesEstudios"
            :key="opcion"
          >
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
          <div class="mt-3">
            <span class="fw-bold">Seleccionado:</span>
            {{ opcionesEstudios.includes(estudios) ? estudios : 'Ninguno' }}
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="p-3 border rounded shadow-sm bg-light">
          <h4 class="mb-3 text-success">Día de la semana</h4>
          <select v-model="diaSeleccionado" class="form-select mb-3">
            <option disabled value="">Seleccione un día...</option>
            <option v-for="dia in dias" :key="dia" :value="dia">
              {{ dia }}
            </option>
          </select>
          <div v-if="diaSeleccionado">
            <span class="fw-bold">Día seleccionado:</span> {{ diaSeleccionado }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>