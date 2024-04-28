// Importamos la biblioteca Axios
import axios from 'axios'

const apiKey = 'wuFt9hmiKzpGt0AAY6sYmTHdBCUhlUcE'
// https://api.giphy.com/v1/gifs/random?apikey=${apiKey}

// Creamos una instancia de Axios con una configuración base para realizar solicitudes a la API de Giphy
const giphyApp = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey // Parámetro de la API key
    }
})

export default giphyApp

// // Realizamos una solicitud GET a la ruta '/random' de la API de Giphy a través de la instancia de Axios creada
// giphyApp.get('/random')
//     // Manejamos la respuesta de la solicitud
//     .then((response) => {
//         // Extraemos el objeto 'data' de la respuesta de la solicitud
//         const { data } = response.data
//         // Extraemos la URL del gif original del objeto 'data'
//         const { url } = data.images.original
        
//         // Creamos un elemento de imagen y establecemos su fuente como la URL del gif
//         const img = document.createElement('img')
//         img.src = url
        
//         // Añadimos la imagen al cuerpo del documento HTML
//         document.body.append(img)
//     })