import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import currentUserReducer from './current-user-reducer'
import entriesReducer from './entries-reducer'

const reducers = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
  entries: entriesReducer,
})

export default reducers
