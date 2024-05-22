
// export const myGetter = ( state ) => {
//  return state
// }

// Retorna el estado de autenticación actual del usuario desde el estado de Vuex
export const currentStatue = (state) => {
    return state.status
}

// Retorna el nombre de usuario del estado de Vuex, o una cadena vacía si el nombre de usuario no está definido
export const username = (state) => {
    return state.user?.name || '' 
}



