// Importamos la instancia de axios 'giphyApp' desde el módulo "./bases/11-axios"
import giphyApp from "./bases/11-axios";

// Definimos una función asíncrona 'getImage' para obtener y mostrar una imagen aleatoria desde la API de Giphy
const getImage = async() => {
    try {
        // Realizamos una solicitud GET a la ruta '/random' de la API de Giphy a través de la instancia de axios 'giphyApp'
        const { data } = (await giphyApp.get('/random')).data
        // Extraemos la URL de la imagen original del objeto 'data'
        const { url } = data.images.original

        // Creamos un elemento de imagen y establecemos su fuente como la URL del gif
        const img = document.createElement('img')
        img.src = url

        // Añadimos la imagen al cuerpo del documento HTML
        document.body.append(img)
        
    } catch (error) {
        // Si ocurre un error durante la solicitud, lo manejamos mostrando un mensaje en la consola y lanzando la excepción
        console.log('Error en la petición', error)
        throw error
    }
}

// Llamamos a la función 'getImage' para obtener y mostrar la imagen
getImage()