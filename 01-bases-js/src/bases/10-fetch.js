const apiKey = 'wuFt9hmiKzpGt0AAY6sYmTHdBCUhlUcE'
// https://api.giphy.com/v1/gifs/random?apikey=wuFt9hmiKzpGt0AAY6sYmTHdBCUhlUcE

// Realizamos una solicitud fetch a la API de Giphy para obtener un gif aleatorio
fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`)
    // Procesamos la respuesta de la solicitud fetch convirtiéndola en formato JSON
    .then(response => response.json())
    // Desestructuramos el objeto 'data' de la respuesta para obtener la URL del gif original
    .then(({ data }) => {
        const { url } = data.images.original

        // Creamos un elemento de imagen y establecemos su fuente como la URL del gif
        const img = document.createElement('img')
        img.src = url

        // Añadimos la imagen al cuerpo del documento HTML
        document.body.append(img)
    })
    // Capturamos cualquier error que ocurra durante el proceso y lo mostramos en la consola
    .catch(error => console.log(error))