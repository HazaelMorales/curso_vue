// Definición de un guard de ruta asincrónico llamado isAuthenticatedGuard
const isAuthenticatedGuard = async(to, from, next ) => {
    return new Promise(()=>{
        // Devuelve una promesa para controlar el flujo de navegación
        // Verifica si el número aleatorio (0-100) es mayor que 50 (simulando autenticación exitosa)
        const random = Math.random() * 100
        if(random > 50){
            console.log('Esta autenticado')
            // Continúa con la navegación
            next()
        }else{
            console.log('bloqueado por el isAuthenticatedGuard', random)
            // Redirige a la página 'pokemon-home'
            next({name:'pokemon-home'})
        }
    })
}


export default isAuthenticatedGuard