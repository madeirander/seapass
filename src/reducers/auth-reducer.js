import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE,
} from '../actions/action-types'

const INITIAL_STATE = {
  loginLoading: false,
  loginError: false,
  userLoading: false,
  userError: false,
  user: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loginLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        loginLoading: false,
        authenticated: true,
      }
    case LOGIN_FAILURE:
      return {
        loginLoading: false,
        loginError: action.payload.error,
      }
    case CURRENT_USER_REQUEST:
      return {
        userLoading: true,
      }
    case CURRENT_USER_SUCCESS:
      return {
        userLoading: false,
        user: action.payload.user,
      }
    case CURRENT_USER_FAILURE:
      return {
        userLoading: false,
        userError: action.payload.error,
      }
    default:
      return state
  }
}

export default authReducer
