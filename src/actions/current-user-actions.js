import {
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE,
} from './action-types'
import api from '../services/api'

const currentUserRequest = () => ({
  type: CURRENT_USER_REQUEST,
})

const currentUserSuccess = user => ({
  type: CURRENT_USER_SUCCESS,
  payload: {
    user,
  },
})

const currentUserFailure = error => ({
  type: CURRENT_USER_FAILURE,
  payload: {
    error,
  },
})

export const fetchCurrentUser = () => dispatch => {
  dispatch(currentUserRequest())

  api.get('/auth/user').then(
    res => {
      dispatch(currentUserSuccess(res.data.user))
    },
    err => {
      dispatch(currentUserFailure(err.toString()))
    }
  )
}
