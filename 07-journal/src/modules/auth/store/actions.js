
// export const myAction = async ({ commit }) => {

// }

import authApi from "@/api/authApi"

// ACCIÓN PARA CREAR USUARIO
export const createUser = async ({ commit }, user) => {

    // Extrae el nombre, correo electrónico y contraseña del objeto de usuario
    const { name, email, password } = user

    try{
        // Realiza una solicitud POST a la API de autenticación para registrar un nuevo usuario
        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data
        
        // Actualiza el nombre de usuario en la base de datos de la autenticación
        await authApi.post(':update', { displayName: name, idToken })
        
        // Elimina la contraseña del objeto de usuario antes de almacenarlo en la tienda Vuex
        delete user.password

        // Realiza una mutación para iniciar sesión al usuario y almacenar los tokens de autenticación
        commit('loginUser', {user, idToken, refreshToken})

        return { ok: true }
        
    }catch(error){
        return { ok: false, message: error.response.data.error.message}
    }
}

// ACCIÓN PARA INICIAR SESIÓN
export const signInUser = async ({ commit }, user) => {
    // Extrae el correo electrónico y la contraseña del objeto de usuario
    const { email, password } = user

    try{
        // Realiza una solicitud POST a la API de autenticación para iniciar sesión con el usuario existente
        const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
        const { displayName, idToken, refreshToken } = data
        
        // Actualiza el nombre de usuario en el objeto de usuario
        user.name =  displayName
        
        // Realiza una mutación para iniciar sesión al usuario y almacenar los tokens de autenticación
        commit('loginUser', {user, idToken, refreshToken})

        return { ok: true }
        
    }catch(error){
        return { ok: false, message: error.response.data.error.message}
    }
}

// ACCIÓN PARA VALIDAR EL USUARIO
export const checkAuthentication = async ({ commit }) => {
    
    // Obtiene los tokens de autenticación almacenados en el almacenamiento local
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    // Si no se encuentra el token de identificación, se realiza una mutación para cerrar la sesión y se devuelve un mensaje de error
    if(!idToken){
        commit('logout')
        return { ok: false, message: 'No hay Token'}
    }

    try {
        // Realiza una solicitud POST a la API de autenticación para validar el token de identificación
        const data = await authApi.post(':lookup', {idToken})
        const { displayName, email } = data.users[0]

        // Crea un objeto de usuario con el nombre y el correo electrónico obtenidos de la respuesta
        const user = {
            name: displayName,
            email
        }

        // Realiza una mutación para iniciar sesión al usuario y almacenar los tokens de autenticación
        commit('loginUser', {user, idToken, refreshToken})

    } catch (error) {
        // Maneja el error y devuelve un objeto indicando que la operación no fue exitosa junto con un mensaje de error
        commit('logout')
        return { ok: false, message: error.response.data.error}
    }
}