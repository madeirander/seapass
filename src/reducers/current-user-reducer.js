import {
  CURRENT_USER_SUCCESS,
  CURRENT_USER_REQUEST,
  CURRENT_USER_FAILURE,
} from '../actions/action-types'

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
}

const currentUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER_REQUEST:
      return {
        loading: true,
      }
    case CURRENT_USER_SUCCESS:
      return {
        user: action.payload.user,
        loading: false,
        error: null,
      }
    case CURRENT_USER_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default currentUserReducer
