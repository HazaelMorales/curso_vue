// Importa la función 'getRandomInt' desde el archivo 'getRandomInt.js' ubicado en el directorio '../../helpers'
import getRandomInt from '../../helpers/getRandomInt'

export const incrementRandomInt = async( {commit} ) => {
    // Activa la mutación 'setLoading' para indicar que se está realizando una operación
    commit('setLoading', true)
    
    // Obtiene un número entero aleatorio utilizando la función 'getRandomInt'
    const randomInt = await getRandomInt()
    
    // Obtiene un número entero aleatorio utilizando la función 'getRandomInt'
    commit('incrementBy', randomInt)
    
    // Desactiva la carga una vez completada la operación
    commit('setLoading', false)

}