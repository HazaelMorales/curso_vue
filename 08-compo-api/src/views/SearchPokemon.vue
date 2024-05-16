<template>
    <div>
        <h1>Buscar pokemon: {{ pokemonId }}</h1>

        <form @submit.prevent="onSubmit">
            <!-- Input para ingresar el número del Pokémon -->
            <!-- Vincula el valor del input con la variable pokemonId -->
            <!-- Permite hacer referencia al input en el código -->
            <input 
                type="number"
                placeholder="Numero del pokemon"
                v-model="pokemonId"
                ref="txtSearchId" 
            >
        </form>
        <br>
        <!-- Indicación para presionar Enter para buscar -->
        <span>Presione enter para buscar</span>
    </div>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter() // Obtiene el objeto de router

        const pokemonId = ref(1) // Variable reactiva para almacenar el ID del Pokémon a buscar
        const txtSearchId = ref() // Referencia al input de búsqueda

        // Cuando el componente es activado, selecciona automáticamente el texto en el input de búsqueda
        onActivated(() => {
            txtSearchId.value.select() // Selecciona todo el texto en el input
        })

        return{
            pokemonId, // Se expone la variable pokemonId al template
            txtSearchId, // Se expone la referencia al input al template

            // Función para manejar el envío del formulario
            onSubmit: () => {
                // Navega a la ruta del Pokémon usando el router, pasando el ID del Pokémon como parámetro
                router.push({ name:'pokemon-id', params: { id: pokemonId.value } })
            }
        }
    }
}
</script>

<style>
</style>
