import { useStore } from 'vuex'
import { computed } from 'vue'

// Define una función llamada useAuth que encapsula la lógica relacionada con la autenticación
const useAuth = () =>{

    // Obtiene la instancia de la store Vuex
    const store = useStore()
    
    // Define una función asincrónica llamada createUser para crear un nuevo usuario
    const createUser = async(user) => {
        const resp = store.dispatch('auth/createUser' ,user) // Dispatch a la acción 'auth/createUser' con el usuario proporcionado
        return resp
    }
    
    // Define una función asincrónica llamada loginUser para iniciar sesión con un usuario existente
    const loginUser = async(user) => {
        const resp = store.dispatch('auth/signInUser' ,user) // Dispatch a la acción 'auth/signInUser' con el usuario proporcionado
        return resp
    }
    
    // Define una función asincrónica llamada checkAuthStatus para verificar el estado de autenticación del usuario
    const checkAuthStatus = async(user) => {
        const resp = await store.dispatch('auth/checkAuthentication' ,user) // Dispatch a la acción 'auth/checkAuthentication' con el usuario proporcionado y espera la respuesta
        return resp
    }

    // Define una función llamada logout para cerrar la sesión del usuario
    const logout = () => {
        store.commit('auth/logout') // Realiza una mutación para cerrar la sesión de usuario
        store.commit('journal/clearEntries') // Realiza una mutación para limpiar las entradas del diario
    }
    

    // Retorna un objeto con las funciones de autenticación y propiedades computadas
    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,

        // Propiedades computadas para acceder al estado de autenticación y al nombre de usuario
        authStatus: computed(()=> { store.getters['auth/currentState']}),
        username: computed(()=> { store.getters['auth/username']})
    }
}

export default useAuth