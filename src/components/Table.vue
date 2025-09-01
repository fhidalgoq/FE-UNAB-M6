<script>
export default {
  data() {
    return {
      personas: [
        { nombre: 'Ana', apellido: 'Perez', fechaNacimiento: '07/01/1964', edad: 61 },
        { nombre: 'Luis', apellido: 'Gonzales', fechaNacimiento: '20/04/1987', edad: 38 },
        { nombre: 'María', apellido: 'López', fechaNacimiento: '13/12/1951', edad: 73 },
      ]
    };
  }
}
</script>

<template>
<div class="container mt-4 p-4 border rounded shadow text-center">
    <h1 class="mb-3 text-center">Tabla de Personas</h1>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Nacimiento</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ personas[0].nombre }}</td>
          <td>{{ personas[0].apellido }}</td>
          <td>{{ personas[0].fechaNacimiento }}</td>
          <td>{{ personas[0].edad }}</td>
        </tr>
        <tr>
          <td>{{ personas[1].nombre }}</td>
          <td>{{ personas[1].apellido }}</td>
          <td>{{ personas[1].fechaNacimiento }}</td>
          <td>{{ personas[1].edad }}</td>
        </tr>
        <tr>
          <td>{{ personas[2].nombre }}</td>
          <td>{{ personas[2].apellido }}</td>
          <td>{{ personas[2].fechaNacimiento }}</td>
          <td>{{ personas[2].edad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>
