<template>
    <div>
        <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link :to="{ name:'pokemon-id', params: { id: 85 } }">Pokemon por id</router-link>
        <router-link :to="{ name: 'about' }">About</router-link> -->

        <!-- Itera sobre la lista de enlaces y renderiza cada uno utilizando el componente 'CustomLink' -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    // Datos del componente: lista de enlaces
    data(){
        return{
            links:[
                { to: 'pokemon-home', name: 'Pokemons' },
                { to: 'pokemon-id', name: 'Por ID', id: 151},
                { to: 'pokemon-about', name: 'About' },
                
                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'DBZ-About' },

                { to: 'https://google.com', name: 'Google' },
            ]
        }
    },
    
    // Componentes utilizados en este componente: 'CustomLink' (cargado de forma asíncrona)
    components:{
        CustomLink: defineAsyncComponent(() => import('./CustomLink'))
    }
}
</script>

<style scoped>
    div{
        padding: 0 30px;
    }

    div a{
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    /* div .router-link-exact-active{
        color: #42b983;
    } */
</style>