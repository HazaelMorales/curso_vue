<template>
    <div>
        <h1>Counter - Vuex</h1>
        <!-- Acceso directo al estado del contador -->
        <h2>Direct Access:{{ $store.state.counter.count }}</h2>
        
        <!-- Uso de una propiedad computada para mostrar el contador -->
        <h2>Computed: {{ countComputed }}</h2>

        <button @click="increment">+1</button>
        <button @click="incrementBy">+5</button>
        <button @click="randomInt" :disabled="isLoading">Random</button>
        
        <h1>mapState</h1>
        
        <!-- Uso de mapState para acceder al estado del contador -->
        <h2>mapState: {{ count }}</h2>

        <!-- Uso de mapState para acceder al último cambio en el estado del contador -->
        <h2>lastMutation: {{ lastMutation }}</h2>

        <!-- Acceso directo al getter del contador -->
        <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
    </div>
</template>

<script>
// Importa las funciones 'mapState' y 'mapActions' de Vuex para mapear el estado y las acciones del almacén Vuex
import { mapState, mapActions } from 'vuex'

export default{ 
    computed:{
        // Propiedad computada para acceder directamente al estado del contador
        countComputed(){
            return this.$store.state.counter.count
        },
        
        // Utiliza 'mapState' para mapear el estado del módulo 'counter' a las propiedades de este componente
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },
    methods:{
        // Método para incrementar el contador en 1
        increment(){
            this.$store.commit('counter/increment')
        },

        // Método para incrementar el contador en 5
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
        },
        
        // Utiliza 'mapActions' para mapear las acciones del módulo 'counter' a los métodos de este componente
        // ...mapActions('counter', ['incrementRandomInt'])
        ...mapActions('counter',{
            randomInt: 'incrementRandomInt'
        })
    },

}
</script>