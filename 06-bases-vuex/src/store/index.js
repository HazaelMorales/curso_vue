// Importa la función 'createStore' de Vuex para crear una nueva instancia del almacén Vuex
import { createStore } from 'vuex'

// Importa el módulo 'counterStore' que contiene las configuraciones y lógica relacionadas con el contador
import counterStore from './counter'

export default createStore({
    // Define los módulos que componen el almacén Vuex
    modules:{   
        counter: counterStore
    }
})