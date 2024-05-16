const getRandomInt = () =>{
    return new Promise(resolve => {
        //Este código genera un número entero aleatorio entre 1 y 20
        const rndInt = Math.floor((Math.random() * 20) + 1)

        setTimeout(()=>{
            resolve(rndInt)
        }, 2000);
    })

}


export default getRandomInt