<template>
    <!-- Si el enlace es externo, se renderiza como un enlace normal -->
    <a v-if="isExternalLink"
        target="_blank"
        class="normal-link"
        :href="link.to">{{ link.name }}</a>
    
    <!-- Si el enlace es interno, se utiliza 'router-link' -->
    <router-link
        v-else
        :to="{ name: link.to, params: { id: link.id } }"
        v-slot="{ isActive }"
    >
        <!-- Se renderiza como un enlace interno de la aplicación -->
        <a :class=" isActive ? 'is-active' : 'normal-link' ">
            {{ link.name }}
        </a>
    </router-link>
</template>

<script>
export default {
    // Propiedades del componente: 'link' que representa la información del enlace
    props:{
        link:{
            type: Object,
            required: true
        }
    },

    // Propiedades calculadas: determina si el enlace es externo o no
    computed: {
        isExternalLink(){
            return this.link.to.startsWith('http')
        }
    }
}
</script>

<style scoped>

.is-active{
    color: #42b983;
}

.normal-link{
    color: #c6c5c5;
}

</style>