<template>
    <div>
        <!-- Se muestra "Buscando..." cuando no hay un pokemon cargado y no hay mensaje de error -->
        <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
        <!-- Se muestra el mensaje de error si existe -->
        <h1 v-else-if="errorMessage">{{errorMessage}}</h1>
        <template v-else>
            <!-- Si no hay errores y se ha cargado un pokemon, se muestra su nombre y su imagen -->
            <h3>{{ pokemon.name }}</h3>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            <br>
            <!-- Se muestra un enlace para regresar a la página de búsqueda de pokémon -->
            <router-link :to="{ name: 'pokemon-search' }"> Regresar </router-link>
        </template>
    </div>
</template>

<script>
// Se importan las funciones watch y onBeforeRouteLeave de Vue y useRoute de Vue Router
import { watch } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router';

// Se importa el hook usePokemon de un archivo '../composables/usePokemon'
import usePokemon from  '../composables/usePokemon'

export default {
    setup(){
        // Se obtiene el objeto de ruta actual
        const route = useRoute()

        // Se llama al hook usePokemon pasando el parámetro de id de la ruta actual
        const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id)
        
        // Se observa el cambio en el parámetro de id de la ruta y se ejecuta searchPokemon cuando cambia
        watch(
            () => route.params.id,
            () => searchPokemon(route.params.id)
        )

        // Se ejecuta antes de que el usuario salga de la ruta actual
        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Está seguro que desea salir?')
            if(!answer) return false
        })

        // Se retorna el mensaje de error, el estado de carga y la información del pokemon
        return{
            errorMessage,
            isLoading,
            pokemon
        }
    }
}
</script>

<style>
</style>
