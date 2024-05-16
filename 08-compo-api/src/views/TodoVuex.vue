<template>
    <div>
        <!-- Título de la lista de tareas -->
        <h1>Lista de Tareas de Thanos</h1>
        
        <!-- Contador de tareas pendientes -->
        <h4>Pendientes: {{ pending.length }}</h4>
        
        <!-- Línea divisoria -->
        <hr>

        <!-- Botones para filtrar las tareas -->
        <button 
            :class="{ 'active': currentTab =='all' }"
            @click="currentTab='all'"
        >
            Todos
        </button>

        <button 
            :class="{ 'active': currentTab =='pending' }"
            @click="currentTab='pending'"
        >
            Pendientes
        </button>

        <button 
            :class="{ 'active': currentTab =='completed' }"
            @click="currentTab='completed'"
        >
            Completados
        </button>

        <!-- Lista de tareas -->
        <div>
            <ul>
                <!-- Renderiza las tareas según el filtro actual -->
                <li v-for="todo in getTodosByTab" :key="todo.id"
                    :class="{ 'completed': todo.completed }"
                    @dblclick="toggleTodo(todo.id)">
                    {{ todo.text }}
                </li>
            </ul>
        </div>

        <!-- Botón para abrir el modal de creación de tareas -->
        <button @click="isOpen=true">Crear Todo</button>

        <!-- Modal para crear nuevas tareas -->
        <modal v-if="isOpen"
            @on:close="isOpen = false">
            <template v-slot:header>
                <h1>Nueva Tarea</h1>
            </template>

            <template v-slot:body>
                <!-- Formulario para crear una nueva tarea -->
                <form @submit.prevent="createTodo(newTodoText); isOpen=false">
                    <input type="text"
                        placeholder="Nueva Tarea"
                        v-model="newTodoText">
                    <br>
                    <br>
                    
                    <button type="submit">Crear</button>
                </form>
            </template>
        </modal>
    </div>
</template>

<script>
import { ref } from 'vue'
import useTodo from "../composables/useTodo"
import Modal from '../components/Modal.vue'

export default {
    components: { Modal },
    setup(){
        // Se importan las funciones y datos del hook useTodo
        const { pending, currentTab, toggleTodo, getTodosByTab, createTodo } = useTodo()

        // Se retornan los datos y métodos necesarios para el template
        return{
            currentTab, 
            getTodosByTab, 
            pending, 
            toggleTodo, // Función para cambiar el estado de una tarea
            createTodo, // Función para crear una nueva tarea

            // Estado para controlar la apertura/cierre del modal
            isOpen: ref(false),
            // Texto de la nueva tarea
            newTodoText: ref('')
        }
    }
}
</script>


<style scoped>
div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

ul{
    width: 300px;
    text-align: left;
}

li{
    cursor: pointer;
}

.active{
    background-color: #2c3e50;
    color: white;
}

.completed{
    text-decoration: line-through;
}

</style>