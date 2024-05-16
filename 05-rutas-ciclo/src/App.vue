<template>
  <div>
    <!-- Componente de navegación -->
    <Navbar />
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- Vista del router para mostrar el contenido de la ruta actual -->
    <router-view />
  </div>
</template>

<script>
// Importa la función defineAsyncComponent de Vue para cargar componentes de forma asíncrona
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    // Componente "Navbar" cargado de forma asíncrona
    Navbar: defineAsyncComponent(() => import(/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar'))
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
