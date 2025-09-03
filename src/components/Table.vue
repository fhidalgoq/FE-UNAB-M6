<script setup>
import { ref } from 'vue';
const personajes = ref([ 
            { 
                "id": "1", 
                "nombre": "pikachu", 
                "descripcion": "lorem ipsum uhiuhiuhihoi" 
            }, 
            { 
                "id": "2", 
                "nombre": "kakuna", 
                "descripcion": "lorem ipsum uhiuhiuhihoi" 
            }, 
            { 
                "id": "3", 
                "nombre": "beedrill", 
                "descripcion": "lorem ipsum uhiuhiuhihoi" 
            }, 
            { 
                "id": "4", 
                "nombre": "metapod", 
                "descripcion": "lorem ipsum uhiuhiuhihoi" 
            }, 
            { 
                "id": "5", 
                "nombre": "rattata", 
                "descripcion": "lorem ipsum uhiuhiuhihoi" 
            },
        ])
</script>

<template>
<div class="container mt-4 p-4 border rounded shadow text-center">
    <h1 class="mb-3 text-center">Tabla de Pokemon En Array</h1>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="personaje in personajes" :key="personaje.id">
        <td>{{ personaje.id }}</td>
        <td>{{ personaje.nombre }}</td>
        <td>{{ personaje.descripcion }}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>
<style>
</style>
