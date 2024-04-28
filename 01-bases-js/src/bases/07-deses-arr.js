// Definimos un arreglo 'characters' con nombres de personajes
const characters = ['Mario', 'Aaron', 'Sisu', 'Yamil']

// Desestructuramos el arreglo 'characters' para extraer valores individuales y asignarlos a variables correspondientes,
// proporcionando un valor predeterminado para 'nuevo' en caso de que el elemento no exista en el arreglo
const [mario, aaron, sisu, nuevo = 'No tiene valor'] = characters

// Imprimimos las variables extraídas del arreglo 'characters'
console.log(mario, aaron, sisu, nuevo) // Muestra 'Mario Aaron Sisu No tiene valor'

// Definimos una función 'returnArray' que devuelve un arreglo de dos elementos
const returnArray = () => {
    return ['ABC', 123]
}

// Llamamos a la función 'returnArray' y asignamos los elementos del arreglo devuelto a las variables 'letters' y 'numbers'
const pair = returnArray()
console.log(pair[0], pair[1])

// Desestructuramos el arreglo devuelto por la función 'returnArray' para extraer sus elementos y asignarlos a variables correspondientes
const [letters, numbers] = returnArray()
console.log(letters, numbers)

// Definimos una función 'returnArray2' que toma un arreglo como argumento y devuelve un nuevo arreglo con los dos primeros elementos del arreglo de entrada
const returnArray2 = (arr) =>{
    return [arr[0], arr[1]]
}

// Llamamos a la función 'returnArray2' pasando un arreglo como argumento y desestructuramos el arreglo devuelto para asignar sus elementos a variables correspondientes
const [letters2, numbers2] = returnArray2(["DEF",456])
console.log(letters2, numbers2)

// Definimos una función 'returnArray3' que toma un arreglo como argumento y devuelve un nuevo arreglo con los mismos elementos
const returnArray3 = ([letters, numbers]) =>{
    return [letters, numbers]
}

// Llamamos a la función 'returnArray3' pasando un arreglo como argumento y desestructuramos el arreglo devuelto para asignar sus elementos a variables correspondientes
const [letters3, numbers3] = returnArray3(["FGH",789])
console.log(letters3, numbers3)