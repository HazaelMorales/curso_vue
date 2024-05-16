// Importa Axios para realizar solicitudes HTTP
import axios from 'axios'
// Importa 'ref' de Vue para crear referencias reactivas
import { ref } from 'vue'

// Define un hook personalizado llamado 'usePokemon' para manejar la lógica relacionada con la búsqueda de Pokémon
const usePokemon = (pokemonId = '1') => {
    // Declara referencias reactivas para almacenar datos y estados relacionados con el Pokémon
    const pokemon = ref() // Almacena los datos del Pokémon
    const isLoading = ref(false) // Indica si se está cargando la información del Pokémon
    const errorMessage = ref() // Almacena el mensaje de error, si lo hay

    // Función asincrónica para buscar información de un Pokémon por su ID
    const searchPokemon = async(id) => {
        // Verifica si el ID del Pokémon es válido
        if (!id) return

        // Indica que se está cargando la información del Pokémon
        isLoading.value = true
        // Inicializa el valor del Pokémon como nulo
        pokemon.value = null

        try {
            // Realiza una solicitud GET a la API 'https://pokeapi.co/api/v2/pokemon/{id}' para obtener información del Pokémon
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            // Almacena los datos del Pokémon obtenidos de la respuesta
            pokemon.value = data
            // Limpia el mensaje de error
            errorMessage.value = null
        } catch (error) {
            // Si ocurre un error durante la solicitud, muestra un mensaje de error
            errorMessage.value = 'No se pudo cargar ese pokemon'
        }

        // Indica que se ha completado la carga de la información del Pokémon
        isLoading.value = false
    }

    // Inicia la búsqueda del Pokémon utilizando el ID proporcionado al inicializar el hook
    searchPokemon(pokemonId)

    // Retorna un objeto con las referencias y funciones necesarias para manejar la búsqueda de Pokémon
    return {
        errorMessage, // Mensaje de error, si lo hay
        isLoading, // Indicador de carga
        pokemon, // Datos del Pokémon encontrado
        searchPokemon // Función para buscar información de un Pokémon por su ID
    }
}

// Exporta el hook 'usePokemon' para que pueda ser utilizado en otros componentes
export default usePokemon