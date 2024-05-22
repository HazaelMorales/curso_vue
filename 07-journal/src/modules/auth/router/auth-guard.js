import store from '@/store'

// Define un guardia de navegación llamado isAuthenticatedGuard que verifica si el usuario está autenticado antes de permitir el acceso a una ruta protegida
const isAuthenticatedGuard = async (to, from , next) =>{

    // Realiza una acción asincrónica 'auth/checkAuthentication' para verificar el estado de autenticación del usuario
    const { ok } = await store.dispatch('auth/checkAuthentication')

    // Si el usuario está autenticado (ok es verdadero), permite la navegación a la siguiente ruta
    if(ok) next()
    // Si el usuario no está autenticado, redirige a la ruta con nombre 'login'
    else next({ name: 'login' })
}

export default isAuthenticatedGuard