// Definimos una función que devuelve el saludo "Hola Mundo"
function saludar(){
    return 'Hola Mundo'
}

// Definimos una función que devuelve un saludo personalizado
function saludar2(nombre){
    return `Hola ${nombre}`
}

// Definimos una función anónima que devuelve un saludo personalizado, nos permite proteger la funcion de cualquier modificacion
const saludar3 = function (nombre){
    return `Hola ${nombre}`
}

// Definimos una función tipo flecha que devuelve un saludo personalizado
const saludar4 = (nombre) => {
    return `Hola ${nombre}`
}

// Definimos una función de flecha que devuelve un saludo personalizado con un valor predeterminado
const saludar5 = (nombre = 'Hazael') => `Hola ${nombre}`

const nombre = 'Mario'

// Imprimimos el resultado de la función saludar5 con el nombre proporcionado
console.log(saludar5(nombre))


// Definimos una función de flecha que devuelve un objeto de usuario
const getUser = () =>{
    return {
        uid: 'ABC123',
        username: 'pandamorales'
    } 
}

// Definimos una función de flecha que devuelve un objeto de usuario (forma abreviada)
const getUser1 = () => ({uid: '12345', username: 'devpanda'})

// Imprimimos los objetos de usuario devueltos por las funciones getUser y getUser1
console.log(getUser())
console.log(getUser1())


// Definimos un arreglo de héroes
const heroes = [{
    id:1,
    name: 'Batman'
},{
    id:2,
    name: 'Superman'
}]

// Verificamos si existe un héroe con id 2 en el arreglo de héroes
const existe = heroes.some((heroe) => heroe.id === 2)

// Buscamos un héroe con id 1 en el arreglo de héroes
const heroe = heroes.find((heroe) => heroe.id ===2)

// Extraemos el nombre del héroe encontrado, desestructurando el resultado
const {name} = heroes.find((heroe) => heroe.id === 1)

// Imprimimos los resultados de las operaciones anteriores
console.log(existe)
console.log(heroe.name)
console.log(name)