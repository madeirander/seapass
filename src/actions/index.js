import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CURRENT_USER_REQUEST,
  CURRENT_USER_FAILURE,
} from './action-types'
import api from '../services/api'
import { logout, login } from '../services/auth'

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

const currentUserRequest = () => ({
  type: CURRENT_USER_REQUEST,
})

const currentUserSuccess = user => ({
  type: CURRENT_USER_REQUEST,
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
      dispatch(currentUserSuccess(res.data))
    },
    err => {
      dispatch(currentUserFailure(err.toString()))
    }
  )
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
        login(response.data.token)

        dispatch(loginRequestSuccess())

        fetchCurrentUser()(dispatch)
      },
      error => {
        loginRequestFailure(error.toString())
      }
    )
}

export const performLogout = () => {
  logout()
  return {
    type: LOGOUT,
  }
}
