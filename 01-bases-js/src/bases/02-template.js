/*
    Creamos 2 constantes: nombre y apellido de tipo string
*/
const nombre = 'Mario'
const apellido = 'Morales'

/* 
    Declaramos 1 constante tipo string
    Concatenamos las constantes nombre y apellido
*/
const nombreCompleto = nombre+apellido
console.log(nombreCompleto)


/*  TEMPLATE LITERALS (template strings):
    Son literales delimitados con caracteres de marca (`), que permiten cadenas de varias líneas,
    interpolación de cadenas con expresiones incrustadas y construcciones especiales denominadas 
    plantillas etiquetadas.

    Backticks -> ``
*/

/* 
    Declaramos 1 constante tipo string
    Creamos un templeate string con las variables nombre y apellido
*/
const nombreCompleto_ = `${nombre} ${apellido}`
console.log(nombreCompleto_)


//Imprimimos una template string del resultado de la suma de 1 + 5
console.log(`Resultado: ${1 + 5}`)


/*
    Creamos una funcion getSaludo, espera como parametro
    un string, retorna saludo concatenando nombre
*/
function getSaludo(nombre){
    return 'Hola ' + nombre
}

//Imprimimos la template string de un saludo, mandando como parametro la constante nombre
console.log(`Este es un texto: ${getSaludo(nombre)}`)

