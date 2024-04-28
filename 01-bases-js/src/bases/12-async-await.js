// Definimos una función que devuelve una promesa
const miPromesa = () => {
    return new Promise((resolve, reject) => {
        // Simulamos una operación asíncrona con un retardo de 1 segundo
        setTimeout(() => {
            // Si la promesa se resuelve satisfactoriamente, llamamos a 'resolve' con un mensaje
            //resolve('Tenemos un valor en la promesa')
            // Si la promesa se rechaza, llamamos a 'reject' con un mensaje de error
            reject('Error en la promesa')
        },1000)
    })
}

// Definimos una función asíncrona que mide el tiempo de ejecución de la operación asincrónica 'miPromesa'
const medirTiempoAsync = async() => {
    try {
        console.log('Inicio')

        // Esperamos a que la promesa se resuelva o se rechace
        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('Fin')
        // Si la operación es exitosa, retornamos un mensaje
        return 'fin de medir tiempo async'    

    } catch (error) {
        // Si ocurre un error, lanzamos una excepción
        //return 'catch en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }
}

// Llamamos a la función 'medirTiempoAsync' y manejamos el resultado
medirTiempoAsync()
    // Si la promesa se resuelve satisfactoriamente, mostramos el valor
    .then(valor => console.log(valor))
    // Si la promesa se rechaza, mostramos el error
    .catch(err => console.log('error:',err))