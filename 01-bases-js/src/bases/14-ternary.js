// Declaramos una variable 'firstName' sin asignarle un valor inicial, Declaramos una variable 'lastName' y le asignamos el valor 'Morales'
let firstName;
let lastName = 'Morales';

// Imprimimos un mensaje que combina el nombre y apellido, con valores predeterminados en caso de que alguno de ellos sea undefined
console.log(`${firstName || 'Sin nombre'} ${ lastName || 'Sin apellido'}`)

// Declaramos una constante 'isActive' con el valor booleano true
const isActive = true

// Asignamos a la constante 'message' el valor 'Activo' si 'isActive' es true, de lo contrario, el valor 'Inactivo'
const message = (isActive) ? 'Activo' : 'Inactivo'

// Imprimimos el valor de 'message'
console.log(message)