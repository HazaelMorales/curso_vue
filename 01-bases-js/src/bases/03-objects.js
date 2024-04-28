
// creamos objeto persona y sus propiedades.
const persona = {
    nombre: 'Mario',
    apellido: 'Morales',
    edad: 45,
    direccion:{
        ciudad: 'Manzanillo',
        zip: 1000000,
        lat: 14.2323,
        lng: 10000
    }
}

/*
    Creamos objeto persona2 pero si cambiamos las propiedades del objeto persona2, 
    tambien afectara a persona
*/
//const persona2 = persona

/*
    Creamos objeto persona3 utilizando el operador spread, si cambiamos las propiedades de objeto persona3
    no afectara a las propiedades del objeto persona.

    Cambiamos la propiedad nombre del objeto persona3

    Imprimimos los objetos persona y persona3
*/ 
const persona3 = {...persona};
persona3.nombre = 'Hazael'

console.log(persona)
console.log(persona3)


