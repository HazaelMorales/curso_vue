// Importa el estado, mutaciones, acciones y getters del módulo 'counter'
import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

// Objeto que representa el módulo 'counter' del almacén Vuex
const counterStore ={
    namespaced: true,
    state, 
    mutations,
    actions, 
    getters
}

export default counterStore