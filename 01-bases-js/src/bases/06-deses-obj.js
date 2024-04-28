// Definimos un objeto 'person' con propiedades como nombre, edad y nombre de código
const person = {
    name: 'Mario',
    age: 24,
    codeName: 'PandaMorales',
}

// Extraemos las propiedades del objeto 'person' utilizando desestructuración,
// asignándolas a variables correspondientes y proporcionando un valor predeterminado para 'power'
const {age, name, codeName, power="No tiene poder"} = person

// Imprimimos las propiedades extraídas del objeto 'person'
console.log(name)  
console.log(age)
console.log(power)  


// Accedemos a las propiedades del objeto 'person' directamente
console.log(person.name)
console.log(person.age)
console.log(person.codeName) 


// Definimos una función 'createHero' que toma un objeto como argumento
const createHero = ({name, age, codeName, power}) =>
    ({
        id: 11111,
        name,
        age,
        codeName,
        power,
    })

// Llamamos a la función 'createHero' pasando el objeto 'person' como argumento e imprimimos el resultado
console.log(createHero(person))