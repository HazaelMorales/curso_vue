/*
    Actualmente 2024 -> Ya no se utiliza el declarador var
    
    Ahora se utiliza --const y let--
    
    const es mejor utilizar no tiene ninguna manera de establecer un valor, por lo cual la constante es mas ligera
*/


// Definicion de 2 variables constantes de tipo texto
const nombre = 'Mario'
const apellido = 'Morales'

// Let solo lo utilizaremos solamente sabemos que vamos a cambiar el valor de la variable
//let nombre = Panda

//Imprimmos en consola del navegador las 2 variables
console.log(nombre,apellido)


//Creamos una condicion
if(true){
    //Esta bien declarar let, porque el scope afecta solo a la condicion.
    //let nombre = Panda

    const nombre = 'Hazael'
    console.log(nombre)
}