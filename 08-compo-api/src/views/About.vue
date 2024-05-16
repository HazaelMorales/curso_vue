<template>
  <!-- Componente de la página Acerca de -->
  <div class="about">
    <!-- Título dinámico que muestra la propiedad 'title' -->
    <h1>{{ title }}</h1>

    <!-- Botón para cambiar el título -->
    <button @click="changeTitle">Cambiar título</button>
  </div>
</template>

<script>
// Importa funciones de ciclo de vida y ref de Vue para el componente
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from 'vue'

export default {
  // Configuración del componente utilizando el nuevo sistema de composición de Vue (setup)
  setup() {
    // Declara una referencia reactiva para almacenar el título
    const title = ref('About')

    // Función de ciclo de vida: se ejecuta después de que el componente se haya montado en el DOM
    onMounted(() => {
      console.log('onMounted')
    }),

    // Función de ciclo de vida: se ejecuta después de que el componente se haya actualizado
    onUpdated(() => {
      console.log('onUpdated')
    }),

    // Función de ciclo de vida: se ejecuta antes de que el componente se desmonte del DOM
    onUnmounted(() => {
      console.log('onUnmounted')
    }),

    // Función de ciclo de vida: se ejecuta antes de que el componente se monte en el DOM
    onBeforeMount(() => {
      console.log('onBeforeMount')
    }),

    // Función de ciclo de vida: se ejecuta antes de que el componente se actualice
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    }),

    // Función de ciclo de vida: se ejecuta antes de que el componente se desmonte del DOM
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    }),

    // Función de captura de errores: se ejecuta cuando un error ocurre dentro del componente
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    }),

    // Función de seguimiento de renderizado: se ejecuta cuando el renderizado del componente es rastreado
    onRenderTracked(() => {
      console.log('onRenderTracked')
    }),

    // Función de disparo de renderizado: se ejecuta cuando se desencadena el renderizado del componente
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    }),

    // Función de ciclo de vida: se ejecuta cuando el componente se activa
    onActivated(() => {
      console.log('onActivated')
    }),

    // Función de ciclo de vida: se ejecuta cuando el componente se desactiva
    onDeactivated(() => {
      console.log('onDeactivated')
    }),

    // Función de precarga del servidor: se ejecuta durante la precarga del servidor (SSR)
    onServerPrefetch(() => {
      console.log('onServerPrefetch')
    })

    // Retorna las propiedades y métodos que el componente necesita
    return {
      title, // Propiedad para almacenar el título
      changeTitle: () => title.value = 'New About' // Método para cambiar el título
    }
  },
}
</script>
