export default {
    
    // Nombre del módulo de rutas de autenticación
    name: 'auth',

    // Componente principal para el diseño de autenticación
    component: () => import(/* webpackChunkName: "AuthLayout" */ '@/modules/auth/layouts/AuthLayout.vue'),

    // Definición de las rutas hijas del módulo de autenticación
    children: [
        {
            // Ruta para la página de inicio de sesión
            path: '',
            name: 'login', // Nombre de la ruta
            component: () => import(/* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue')
        },
        {
            // Ruta para la página de registro de usuario
            path: '/register',
            name: 'register', // Nombre de la ruta
            component: () => import(/* webpackChunkName: "Register" */ '@/modules/auth/views/Register.vue')
        }
    ]
}