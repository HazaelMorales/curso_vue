// Importamos la función 'getHeroById' desde el módulo "./bases/08-imp-exp"
import { getHeroById } from './bases/08-imp-exp'

// console.log('Inicio')

// new Promise((resolve,reject) => {
//     console.log('Cuerpo de la promesa')
//     resolve('Promesa Resuelta')
//     //reject('Promesa resuelta con error')
// })
// //.then(msg => console.log(msg))
// .then(console.log)
// //.catch(err => console.log(err))
// .catch(console.log)

// console.log('Fin')


// Definimos una función 'getHeroByIdAsync' que toma un ID como argumento y devuelve una promesa
const getHeroByIdAsync = (id) => {
    // Retornamos una nueva promesa que ejecutará su cuerpo después de 1 segundo
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Intentamos obtener el héroe usando la función 'getHeroById'
            const heroe = getHeroById(id)
            // Si se encuentra el héroe, resolvemos la promesa con el héroe, si no existe, rechazamos la promesa con un mensaje de error
            if (heroe) {
                resolve(heroe)
            } else {
                reject('Heroe no existe')
            }
        }, 1000); // Esperamos 1 segundo antes de ejecutar el cuerpo de la promesa
    });
}

// Llamamos a la función 'getHeroByIdAsync' para obtener el héroe con ID 100
getHeroByIdAsync(100)
    // Si la promesa se resuelve satisfactoriamente, mostramos el nombre del héroe
    .then(heroe => {
        console.log(`El héroe es: ${heroe.name}`)
    })
    // Si la promesa se rechaza (porque el héroe no existe), mostramos el mensaje de error
    .catch(console.log)