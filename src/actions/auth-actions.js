import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './action-types'
import api from '../services/api'
import { logout, login, extractTokenFromResponse } from '../services/auth'

const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

const loginRequestSuccess = () => ({
  type: LOGIN_SUCCESS,
})

const loginRequestFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
})

export const performLogout = () => {
  logout()
  return {
    type: LOGOUT,
  }
}

export const performLogin = (username, password) => dispatch => {
  dispatch(loginRequest())

  api
    .post('/auth/login', {
      username,
      password,
    })
    .then(
      response => {
        login(extractTokenFromResponse(response))

        dispatch(loginRequestSuccess())
      },
      error => {
        dispatch(loginRequestFailure(error.toString()))
      }
    )
}
