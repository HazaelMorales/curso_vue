<template>
  <div>
      <!--  En la plantilla, se muestra una imagen y el componente 'Counter'. -->
      <img alt="Vue logo" src="./assets/logo.png">
      <Counter />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  
  // Componente 'Counter' cargado de forma asíncrona
  components: {
    Counter: defineAsyncComponent(()=>import('@/components/Counter.vue'))
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
