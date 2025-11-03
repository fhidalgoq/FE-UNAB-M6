<script setup>
import { computed, ref } from 'vue';
const personajes = ref([
  {
    "id": "1",
    "nombre": "pikachu",
  },
  {
    "id": "2",
    "nombre": "kakuna",
  },
  {
    "id": "3",
    "nombre": "beedrill",
  },
  {
    "id": "4",
    "nombre": "metapod",
  },
  {
    "id": "5",
    "nombre": "rattata",
  }
]);
const busqueda = ref('');
const filtradoPokemon = computed(() => {
  const pokemon = busqueda.value.trim().toLowerCase();
  if (!pokemon) {
    return personajes.value;
  }
  return personajes.value.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(pokemon)
  );
});
const MostrarNoEncontrado = computed(() => busqueda.value && filtradoPokemon.value.length === 0);
</script>
<template>
  <div class="container mt-4 p-4 border rounded shadow text-center">
    <h1 class="mb-3 text-center">Tabla de Pokemon En Array</h1>
    <div class="mb-3">
      <input
        v-model="busqueda"
        type="text"
        class="form-control"
        placeholder="Buscar por nombre"
      />
    </div>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="personaje in filtradoPokemon" :key="personaje.id">
          <td>{{ personaje.id }}</td>
          <td>{{ personaje.nombre }}</td>
        </tr>
      </tbody>
    </table>
    <p v-if="MostrarNoEncontrado" class="mt-3 text-danger">El pokemon que desea buscar no existe</p>
  </div>
</template>
<style>
</style>