<template>
    <div>
        <!-- Muestra un mensaje de "Espere por favor..." mientras se cargan los datos -->
        <h2 v-if="isLoading">Espere por favor...</h2>

        <!-- Muestra "Usuarios" una vez que se han cargado los datos -->
        <h2 v-else>Usuarios</h2>

        <!-- Muestra un mensaje de error si se produce algún error durante la carga de los datos -->
        <h5 v-if="errorMessage">{{ errorMessage }}</h5>

        <!-- Renderiza la lista de usuarios si hay usuarios disponibles -->
        <div v-if="users.length > 0">
            
            <!-- Componente UserList para mostrar la lista de usuarios -->
            <!-- Utiliza el slot del componente UserList para cada usuario -->
            <user-list 
                :users="users"
                v-slot="{ user }"
            >
                <!-- Muestra el nombre completo del usuario -->
                <h5>{{ user.first_name }} {{user.last_name}}</h5>
                <!-- Muestra el correo electrónico del usuario -->
                <span>{{ user.email }}</span>
            </user-list>
        </div>

        <!-- Botones para navegar entre páginas de usuarios -->
        <button @click="previousPage">Atras</button> 
        <button @click="nextPage">Siguiente</button>

        <!-- Muestra el número de página actual -->
        <span>Pagina: {{ currentPage }}</span>
    </div>
</template>

<script>
import useUsers from '../composables/useUsers' // Importa el hook useUsers para obtener datos de usuarios
import UserList from '../components/UserList.vue' // Importa el componente UserList

export default {
    components: { UserList }, // Registra el componente UserList
    setup(){
        // Utiliza el hook useUsers para obtener datos y métodos relacionados con usuarios
        const { 
            currentPage, // Número de página actual
            errorMessage, // Mensaje de error
            isLoading, // Indica si los datos se están cargando
            nextPage, // Función para ir a la siguiente página
            previousPage, // Función para ir a la página anterior
            users // Lista de usuarios
        } = useUsers()

        return{
            currentPage, // Propiedad reactiva para el número de página actual
            errorMessage, // Propiedad reactiva para el mensaje de error
            isLoading, // Propiedad reactiva que indica si los datos se están cargando
            nextPage, // Método para ir a la siguiente página
            previousPage, // Método para ir a la página anterior
            users // Propiedad reactiva para la lista de usuarios
        }
    }
}
</script>


<style scoped>
h2{
    text-align: center;
    width: 100%;
}

div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

ul{
    width: 250px;
}

</style>