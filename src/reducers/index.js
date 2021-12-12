import counterReducer from './counter'
import counterCPUReducer from './counterCPU.js'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    counterCPU : counterCPUReducer
})


export default allReducers