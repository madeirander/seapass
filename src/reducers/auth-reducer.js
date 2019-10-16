import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/action-types'
import { isAuthenticated } from '../services/auth'

const INITIAL_STATE = {
  authenticated: isAuthenticated(),
  loading: false,
  error: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        authenticated: true,
        loading: false,
        error: null,
      }
    case LOGIN_FAILURE:
      return {
        authenticated: false,
        loading: false,
        error: action.payload.error,
      }
    case LOGOUT:
      return {
        authenticated: false,
      }
    default:
      return state
  }
}

export default authReducer
