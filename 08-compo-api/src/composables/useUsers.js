// Importa la función 'ref' de Vue para crear referencias reactivas
import { ref } from 'vue'
// Importa Axios para realizar solicitudes HTTP
import axios from 'axios'

// Define un hook personalizado llamado 'useUsers' para manejar la lógica relacionada con los usuarios
const useUsers = () => {
    // Declara referencias reactivas para almacenar datos y estados relacionados con los usuarios
    const users = ref([]) 
    const isLoading = ref(true)
    const currentPage = ref(1)
    const errorMessage = ref()

    // Función asincrónica para obtener la lista de usuarios desde la API
    const getUsers = async(page = 1) => {
        // Asegura que la página sea mayor que 0
        if (page <= 0) page = 1

        // Indica que se está cargando la lista de usuarios
        isLoading.value = true

        try {
            // Realiza una solicitud GET a la API 'https://reqres.in/api/users' con el número de página como parámetro
            const { data } = await axios.get('https://reqres.in/api/users', {
                params: { page }
            })

            // Verifica si se obtuvieron usuarios
            if (data.data.length > 0) {
                // Actualiza la lista de usuarios, la página actual y limpia el mensaje de error
                users.value = data.data
                currentPage.value = page
                errorMessage.value = null
            } else if (currentPage.value > 0) {
                // Si no se encontraron usuarios y la página actual es mayor que 0, muestra un mensaje de error
                errorMessage.value = 'No hay usuarios'
            }
        } catch (error) {
            // Si ocurre un error durante la solicitud, muestra el mensaje de error correspondiente
            errorMessage.value = error.message
        }

        // Indica que se ha completado la carga de la lista de usuarios
        isLoading.value = false
    }

    // Llama a la función getUsers con la página 1 cuando se inicializa el hook
    getUsers(1)

    // Retorna un objeto con referencias a los datos y funciones necesarios para manejar la lista de usuarios
    return {
        currentPage,
        errorMessage,
        isLoading,
        users,

        // Función para cargar la página siguiente
        nextPage: () => getUsers(currentPage.value + 1),
        // Función para cargar la página anterior
        previousPage: () => getUsers(currentPage.value - 1)
    }
}

// Exporta el hook 'useUsers' para que pueda ser utilizado en otros componentes
export default useUsers