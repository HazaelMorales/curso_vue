<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>    

    <!-- Muestra el nombre de Ironman -->
    <h3>{{ ironman }}</h3>    
    <!-- Muestra el nombre de Hulk -->
    <h3>{{ hulk }}</h3>

    <!-- Botón para cambiar el nombre de Ironman -->
    <button @click="changeIronman">Cambiar ironman</button>    
    <!-- Botón para cambiar el nombre de Hulk -->
    <button @click="changeHulk">Cambiar hulk</button>

    <!-- Muestra el estado de Ironman -->
    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <!-- Muestra el estado de Hulk -->
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <!-- Botón para cambiar el estado de los personajes -->
    <button @click="changeStatus">Cambiar status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView', // Nombre del componente
  setup() {
    // Declaración de variables reactivas
    // Utilizando 'ref' para Ironman
    const ironman = ref({ name: 'Tony', age: '50' })
    // Utilizando 'reactive' para Hulk
    const hulk = reactive({ name: 'Bruce', age: '45' })

    // Utilizando 'reactive' para indicar si Ironman está vivo o muerto
    const ironmanIsAlive = reactive(false)
    // Utilizando 'ref' para indicar si Hulk está vivo o muerto
    const hulkIsAlive = ref(true)

    // Función para cambiar el estado de los personajes
    const changeStatus = () => {
      // Cambia el estado de Hulk (vivo/muerto)
      hulkIsAlive.value = !hulkIsAlive.value
    }

    // Retorna los datos y métodos necesarios para el componente
    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,

      // Método para cambiar el nombre y la edad de Ironman
      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = '51'
      },

      // Método para cambiar el nombre y la edad de Hulk
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = '46'
      }
    }
  }
}
</script>
