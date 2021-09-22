import {createStore, combineReducers} from 'redux';
import {citasReducer} from '../reducers/citasReducer'
import {obtenerLocalStorage, guardarLocalStorage} from '../localStorage'

const storeState = obtenerLocalStorage();

//Combinacion de reducers, todos dentro de sus objetos
const reducers = combineReducers({
    citas: citasReducer
})

//Se exporta al store que se crea con createStore
export const store = createStore(
    reducers,
    storeState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)