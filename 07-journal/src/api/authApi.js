import axios from 'axios'

// Crea una instancia de Axios llamada authApi para comunicarse con la API de autenticación de Google Firebase y los parametros necesarios para realizar la peticion.
const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: "FJLFKJASLKFJSFJHDAKJHFKASLJHFJQH12U"
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


