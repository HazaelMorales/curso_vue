<template>
    <!-- Vista del contador -->
    <div>
        <!-- Título del contador -->
        <h1>Counter View</h1>
        <!-- Muestra el valor del contador -->
        <h2>{{ counter }}</h2>

        <!-- Botón para incrementar el contador -->
        <button @click="increase">+1</button>
        <!-- Botón para decrementar el contador -->
        <button @click="decrease">-1</button>
    </div>
</template>

<script>
// Importa el hook personalizado 'useCounter' que maneja la lógica del contador
import useCounter from '@/composables/useCounter'

export default {
    name: 'Counter', // Nombre del componente
    props: {}, // Propiedades del componente (ninguna en este caso)
    emits: [], // Eventos emitidos por el componente (ninguno en este caso)
    setup() {
        // Obtiene el contador y las funciones para incrementar y decrementar el contador utilizando el hook 'useCounter'
        const { counter, increase, decrease } = useCounter(25)

        // Retorna los datos y métodos necesarios para el componente
        return {
            counter, // Valor actual del contador
            increase, // Función para incrementar el contador
            decrease // Función para decrementar el contador
        }
    }
}
</script>

<style>
/* Estilos del componente (ninguno en este caso) */
</style>