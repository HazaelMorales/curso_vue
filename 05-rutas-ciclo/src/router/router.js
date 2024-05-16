// Importa las funciones necesarias de vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// Importa el guard de autenticación
import isAuthenticatedGuard from './auth-guard'

// Define las rutas de la aplicación
const routes = [
    
    // Redirige la ruta raíz a /pokemon
    {
        path:'/',
        redirect: '/pokemon'
    },
    {
        // Componente principal de Pokémon
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children:[
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage'),
            },
            { 
                path: 'about',
                name: 'pokemon-about', 
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage'),
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number(route.params.id)
                    return isNaN( id ) ? { id: 1 } : { id }
                }
            },
            {
                path:'',
                redirect: { name:'pokemon-about' }
            },
        ]
    },
    
    // Rutas relacionadas con Dragon Ball Z
    {
        path: '/dbz',
        name: 'dbz',
        // Guard de autenticación aplicado a esta ruta
        beforeEnter:[ isAuthenticatedGuard ],
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallZLayout'),
        children:[
            { 
                path: 'characters', 
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DbzCharacters" */ '@/modules/dbz/pages/Characters'),
            },
            { 
                path: 'about',
                name: 'dbz-about', 
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/dbz/pages/About'),
            },
            {
                path:'',
                redirect: { name:'dbz-characters' }
            },
            
        ]
    },
    
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound'),
    },
]

// Crea el enrutador con la configuración especificada
const router = createRouter({
    // Historial de navegación basado en hash
    history: createWebHashHistory(),
    routes,
})


// Guard Global - Sincrono
// router.beforeEach((to, from, next) => {
//     console.log({to, from, next})

//     const random = Math.random() * 100
//     if( random > 50){
//         console.log('autenticado')
//         next()
//     }else{
//         console.log(random, 'bloqueado por el beforeEach Guard')
//         next({name: 'pokemon-home'})
//     }
// })

// const canAccess = () =>{
//     return new Promise(resolve => {
//         const random = Math.random() * 100
//         if( random > 50){
//             console.log('autenticado - canAccess')
//             resolve(true)
//         }else{
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach(async(to, from, next) => {
//     const auth = await canAccess()
//     auth 
//         ? next()
//         : next( {name:'pokemon-home'} )
// })


export default router