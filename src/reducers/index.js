import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import currentUserReducer from './current-user-reducer'

const reducers = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
})

export default reducers
