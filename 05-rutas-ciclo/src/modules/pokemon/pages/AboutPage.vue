<template>
    <div>
        <h1>About Page</h1>
        <hr>
        <h2>{{ name }}</h2>
        <!-- al hacer clic en el obton, activa la metodo 'onChangeName'-->
        <button @click ="onChangeName">
            Cambiar nombre
        </button>
    </div>
</template>


<script>
export default{
    
    data(){
        return{
            name:'Mario'
        }
    },

    methods:{
        onChangeName(){
            this.name = 'Panda'
        }
    }, 

    created(){
        console.log('created')
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    },
    errorCaptured(){
        console.log('errorCaptured')
    },
    renderTracked(){
        console.log('renderTracked')
    },
    renderTriggered(){
        console.log('renderTriggered')
    },
}
</script>

