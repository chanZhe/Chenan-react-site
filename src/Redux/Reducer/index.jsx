import loginReducer from './loginReducer'
import countReducer from './counteReducer'
import {combineReducers} from 'redux'

export default combineReducers({loginReducer,countReducer})