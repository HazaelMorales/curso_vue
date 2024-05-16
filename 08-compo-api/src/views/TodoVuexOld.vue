<template>
    <div>
        <!-- Título de la lista de tareas -->
        <h1>Lista de Tareas de Thanos</h1>
        
        <!-- Contadores de tareas pendientes, todas y completadas -->
        <h4>Pendientes: {{ pending.length }}</h4>
        <h4>Todos: {{ all.length }}</h4>
        <h4>Completados: {{ completed.length }}</h4>
        
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
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        // Se obtiene la instancia del store de Vuex
        const store = useStore()

        // Variable reactiva para almacenar el tab actual
        const currentTab = ref('all')

        return{
            currentTab, // Tab actual

            // Propiedades calculadas para obtener las listas de tareas pendientes, todas y completadas
            pending: computed(() => store.getters['pendingTodos']),
            all: computed(() => store.getters['allTodos']),
            completed: computed(() => store.getters['completedTodos']),
            // Propiedad calculada para obtener las tareas según el tab actual
            getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),
            
            // Método para cambiar el estado de una tarea
            toggleTodo: (id) => store.commit('toggleTodo', id)
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