<template>
    <!-- Renderiza una lista no ordenada -->
    <ul>
        <!-- <li v-for="user in users" :key="user.id">
        </li> -->

        <!-- Itera sobre la lista de usuarios utilizando un slot
            Proporciona cada usuario al slot y 
            define una clave única para cada usuario -->
        <slot v-for="user in users" 
            :user="user" 
            :key="user.id">
        </slot> 
    </ul>
</template>

<script>
// Exporta un componente de lista de usuarios

export default {    
    // Define una propiedad de componente llamada 'users' que espera un array de usuarios y es obligatoria
    props:{
        users:{
            type:Array,
            required:true
        }
    }
}
</script>

<style>
ul{
    list-style: none;
}
</style>