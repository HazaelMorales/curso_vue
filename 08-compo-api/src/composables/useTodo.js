// Importa 'computed' y 'ref' de Vue para crear referencias reactivas y propiedades computadas
import { computed, ref } from 'vue'
// Importa 'useStore' de Vuex para acceder al almacén Vuex desde el hook
import { useStore } from 'vuex'

// Define un hook personalizado llamado 'useTodo' para manejar la lógica relacionada con las tareas
const useTodo = () => {
    // Obtiene una referencia al almacén Vuex utilizando el hook 'useStore'
    const store = useStore()

    // Declara una referencia reactiva para almacenar la pestaña actual seleccionada
    const currentTab = ref('all')

    // Retorna un objeto con las propiedades y métodos necesarios para manejar las tareas
    return {
        // Propiedad que almacena la pestaña actual seleccionada
        currentTab,

        // Propiedades computadas que obtienen las listas de tareas pendientes, todas las tareas y tareas completadas desde el almacén Vuex
        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),

        // Propiedad computada que obtiene las tareas según la pestaña actual seleccionada desde el almacén Vuex
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

        // Métodos para cambiar el estado de una tarea y crear una nueva tarea, utilizando las mutaciones del almacén Vuex
        toggleTodo: (id) => store.commit('toggleTodo', id),
        createTodo: (text) => store.commit('createTodo', text)
    }
}

// Exporta el hook 'useTodo' para que pueda ser utilizado en otros componentes
export default useTodo