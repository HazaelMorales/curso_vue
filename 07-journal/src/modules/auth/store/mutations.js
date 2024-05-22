
// export const myAction = ( state ) => {

// }


// Mutación para establecer el estado de autenticación del usuario como autenticado y almacenar los tokens de autenticación en el almacenamiento local y en el estado Vuex
export const loginUser = (state, { user, idToken, refreshToken }) => {
    // Si se proporciona un token de identificación, se almacena en el almacenamiento local y en el estado Vuex
    if (idToken) {
        localStorage.setItem('idToken', idToken)
        state.idToken = idToken
    }

    // Si se proporciona un token de actualización, se almacena en el almacenamiento local y en el estado Vuex
    if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken)
        state.refreshToken = refreshToken
    }

    // Se establece el objeto de usuario y el estado de autenticación en el estado Vuex
    state.user = user
    state.status = 'authenticated'
}

// Mutación para cerrar la sesión del usuario y eliminar los tokens de autenticación del almacenamiento local y del estado Vuex
export const logout = (state) => {
    // Se establecen los valores del usuario, el token de identificación, el token de actualización y el estado de autenticación en nulos o no autenticados
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = "not-authenticated"

    // Se eliminan los tokens de autenticación del almacenamiento local
    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
}
