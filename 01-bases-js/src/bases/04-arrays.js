
const arreglo = [1, 2, 3, 4];

//Agregamos el valor nuevo al final de la lista
arreglo.push(5);

// Creamos una copia del arreglo original usando el operador spread (...)
const arreglo2 = [...arreglo];

arreglo2.push(6);

// Creamos un nuevo arreglo (arreglo3) a partir del arreglo2, 
// donde cada elemento es el doble de su valor original
const arreglo3 = arreglo2.map(function(n) {
    return n * 2;
});

arreglo3.push(14);

console.log(arreglo); 
console.log(arreglo2); 
console.log(arreglo3);
