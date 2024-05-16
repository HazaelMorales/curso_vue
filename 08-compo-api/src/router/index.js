// Importa las funciones 'createRouter' y 'createWebHashHistory' de Vue Router
import { createRouter, createWebHashHistory } from 'vue-router'
// Importa los componentes de las vistas
import HomeView from '../views/Home.vue'

// Define las rutas de la aplicación
const routes = [
  // Ruta para la página de inicio
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // Ruta para la página "About" (carga diferida)
  {
    path: '/about',
    name: 'about',
    // Carga el componente de la página "About" de forma diferida
    // Genera un chunk (about.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  // Ruta para la página del contador (carga diferida)
  {
    path: '/counter',
    name: 'counter',
    // Carga el componente del contador de forma diferida
    // Genera un chunk (counter.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },

  // Ruta para la página de usuarios (carga diferida)
  {
    path: '/users',
    name: 'users',
    // Carga el componente de la página de usuarios de forma diferida
    // Genera un chunk (Users.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue')
  },

  // Ruta para la página de búsqueda de Pokémon (carga diferida)
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    // Carga el componente de la página de búsqueda de Pokémon de forma diferida
    // Genera un chunk (SearchPokemon.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "SearchPokemon" */ '../views/SearchPokemon.vue')
  },

  // Ruta para la página de detalle de Pokémon (carga diferida)
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    // Carga el componente de la página de detalle de Pokémon de forma diferida
    // Genera un chunk (Pokemon.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "Pokemon" */ '../views/Pokemon.vue')
  },

  // Ruta para la página de lista de tareas (carga diferida)
  {
    path: '/todo',
    name: 'todo',
    // Carga el componente de la página de lista de tareas de forma diferida
    // Genera un chunk (TodoVuex.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "TodoVuex" */ '../views/TodoVuex.vue')
  },
  
  // Ruta para la página de slots personalizados (carga diferida)
  {
    path: '/slots',
    name: 'slots',
    // Carga el componente de la página de slots personalizados de forma diferida
    // Genera un chunk (CustomSlots.[hash].js) separado para esta ruta, que se carga de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "CustomSlots" */ '../views/CustomSlots.vue')
  }
]

// Crea el enrutador de la aplicación con el historial basado en hash
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Exporta el enrutador de la aplicación
export default router