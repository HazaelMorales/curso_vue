// Importamos la variable 'owners' del módulo "./data/heroes"
// import {owners} from "./data/heroes"
// console.log(owners)

// // Desestructuramos el arreglo 'owners' para asignar sus elementos a las variables 'dc' y 'marvel'
// const [dc, marvel] = owners

// console.log(dc)
// console.log(marvel)

// Importamos la variable predeterminada 'superHeroes' del módulo "./data/heroes"
import superHeroes from '../data/heroes'

// Definimos una función 'getHeroById' que toma un ID como argumento y devuelve el héroe correspondiente
export const getHeroById = (id) => superHeroes.find(heroe => heroe.id === id)

// Definimos una función 'getHeroByOwner' que toma un propietario como argumento y devuelve un arreglo de héroes correspondientes a ese propietario
export const getHeroByOwner = (owner) => superHeroes.filter(heroe => heroe.owner === owner)


// Importamos las funciones 'getHeroById' y 'getHeroByOwner' desde el módulo "./bases/08-imp-exp"
// import { getHeroById, getHeroByOwner } from "./bases/08-imp-exp"

// Llamamos a la función 'getHeroById' del módulo importado para encontrar el héroe con ID 3 y lo imprimimos
//console.log(getHeroById(3))

// Llamamos a la función 'getHeroByOwner' del módulo importado para encontrar los héroes que tienen como propietario a 'DC' y los imprimimos
//console.log(getHeroByOwner('DC'))