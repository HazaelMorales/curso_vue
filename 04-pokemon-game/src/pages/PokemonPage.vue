<template>
    <div>
        <h1 v-if ="!pokemon">Cargando...</h1>
        <div v-else>
            <h1>¿Quién es este pokemon?</h1>
            <!--TODO: img-->
            <PokemonPicture 
                :pokemonId="pokemon.id" 
                :showPokemon="showPokemon"/>

            <!--TODO: opciones-->
            <PokemonOptions 
                :pokemons="pokemonArr"
                @selectionPokemon="checkAnswer"/>
            
            <template v-if="showAnswer">
                <h2 class="fade-in">{{ message }}</h2>
                <button @click="newGame">
                    Nuevo Juego
                </button>
            </template>
        </div>
    </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components:{PokemonOptions, PokemonPicture},
    data(){
        return{
            pokemonArr:[],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer(selectedId){
            this.showPokemon = true
            this.showAnswer = true

            if(selectedId === this.pokemon.id){
                this.message = `Correcto, ${this.pokemon.name}`
            }else{
                this.message = `Oops!, era ${this.pokemon.name}`
            }
        },
        newGame(){
            this.showAnswer = false
            this.showPokemon = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
            
        }
    },
    mounted(){
        this.mixPokemonArray()
    }
}
</script>