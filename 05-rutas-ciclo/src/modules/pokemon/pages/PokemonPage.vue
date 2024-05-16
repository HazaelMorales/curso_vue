<template>
    <div>
        <h1>Pokemon Page</h1>
        <h2>Pokemon: <span>#{{ id }}</span></h2>

        <!-- Muestra la imagen del Pokémon si está disponible -->
        <div v-if="pokemon">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
        </div>
        <!-- <img :src="pokemon.sprites.front_default" :alt="pokemon.name"> -->
    </div>
</template>

<script>
export default {
    // Propiedades del componente: 'id' que representa el número de Pokémon
    props: {
        id:{
            type: Number,
            required: true
        },
    },

    // Datos del componente: 'pokemon' que almacena los detalles del Pokémon
    data(){
        return {
            // id : null
            pokemon: null
        }
    },

    // Método llamado cuando se crea el componente para obtener los detalles del Pokémon
    created(){
        // const { id } = this.$route.params
        // console.log(id)
        // this.id = id
        this.getPokemon()
    },
    
    methods:{
        // Método asincrónico para obtener los detalles del Pokémon desde la API
        async getPokemon(){
            try{
                // Realiza una solicitud a la API de Pokémon para obtener los detalles del Pokémon con el id proporcionado
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(response => response.json())
                console.log(pokemon)
                this.pokemon = pokemon 

            }catch(error){
                // Si ocurre un error al obtener los detalles del Pokémon, redirige al usuario a la página de inicio
                this.$router.push('/')
                console.log('No hay nada que hacer aqui')
            }
        }
    },

    // Vigila cambios en la propiedad 'id' para obtener los detalles del nuevo Pokémon cuando cambia el id
    watch:{
        id(){
            this.getPokemon()
        }
    }
}
</script>
