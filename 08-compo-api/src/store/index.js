// Importa la función 'createStore' de Vuex para crear un nuevo almacén Vuex
import { createStore } from 'vuex'

// Importa la función 'v4' de la librería 'uuid' para generar identificadores únicos
import { v4 as uuidv4 } from 'uuid'

// Crea y exporta un nuevo almacén Vuex con su estado, mutaciones, acciones y getters
export default createStore({
  // Estado inicial del almacén Vuex
  state: {
    // Lista de tareas pendientes (todos)
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed:false },
      { id: '2', text: 'Piedra del alma', completed:true },
      { id: '3', text: 'Piedra del poder', completed:false },
      { id: '4', text: 'Piedra de la realidad', completed:true },
      { id: '5', text: 'Piedra de la mente', completed:true },
      { id: '6', text: 'Piedra del tiempo', completed:false },
      { id: '7', text: 'Piedra del espacio', completed:false }
    ]
  },
  // Mutaciones: funciones que modifican el estado de forma síncrona
  mutations: {
    
    // Mutación para cambiar el estado de completado de una tarea
    toggleTodo(state, id){
      const todoIdx= state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    
    // Mutación para crear una nueva tarea
    createTodo(state, text=''){
      if(text.length <= 1) return
      state.todos.push({
        id: uuidv4(), 
        completed: false,
        text
      })
    }
  },
  actions: {
  },
  
  // Mutaciones: funciones que modifican el estado de forma síncrona
  getters:{
    // Getter para obtener todas las tareas pendientes
    pendingTodos( state, getters, rootSate){
      return state.todos.filter( todo => !todo.completed )
    },

    // Getter para obtener todas las tareas, independientemente de su estado
    allTodos(state, getters, rootSate){
      return state.todos
    },

    // Getter para obtener todas las tareas completadas
    completedTodos(state, getters, rootSate){
      return state.todos.filter( todo => todo.completed )
    },
    
    // Getter para obtener tareas según la pestaña seleccionada
    getTodosByTab: (_ , getters) => (tab) => {
      switch(tab){
        case 'all': return getters.allTodos
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos
      }
    }
  },
  modules: {
  }
})
