<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- 
      Este fragmento de código representa la instancia de un componente Counter en un archivo de plantilla Vue.js.
      - <Counter>: Indica la instancia del componente Counter.
      - :start="1": Utiliza la sintaxis de enlace de datos en Vue.js. El prefijo ":" indica que "start" es un atributo HTML dinámico, enlazado a una expresión de datos de Vue.js. En este caso, se pasa el valor 1 al componente Counter como el valor inicial de la propiedad "start".
    -->
    <!-- <Counter :start="1"/> -->
    <Indecision />
  </div>
</template>

<script>
// Importa los componentes de la carpeta componentes'
//import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'

// Exporta un objeto por defecto que representa el componente principal de la aplicación
export default {
  // Asigna el nombre 'App' al componente principal
  name: 'App',
  // Define los componentes utilizados
  components:{
    // Asignamos los componentes
    //Counter
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
