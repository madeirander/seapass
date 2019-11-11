import {
  ENTRIES_REQUEST,
  ENTRIES_REQUEST_SUCCESS,
  ENTRIES_REQUEST_FAILURE,
} from './action-types'
import api from '../services/api'

const entriesRequest = () => ({
  type: ENTRIES_REQUEST,
})

const entriesRequestSuccess = entries => ({
  type: ENTRIES_REQUEST_SUCCESS,
  payload: {
    entries,
  },
})

const entriesRequestFailure = error => ({
  type: ENTRIES_REQUEST_FAILURE,
  payload: {
    error,
  },
})

export const fetchEntries = () => dispatch => {
  dispatch(entriesRequest())

  api.get('/entries').then(
    response => {
      dispatch(entriesRequestSuccess(response.data))
    },
    error => {
      dispatch(entriesRequestFailure(error.toString()))
    }
  )
}
