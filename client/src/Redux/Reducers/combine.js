import {logged} from './logged'
import {vinhistory} from './vinhistory'
import {combineReducers} from 'redux'
const allReducers=combineReducers({
    login:logged,
    vinhistory:vinhistory

})
export default allReducers