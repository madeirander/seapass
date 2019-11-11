import {
  ENTRIES_REQUEST,
  ENTRIES_REQUEST_SUCCESS,
  ENTRIES_REQUEST_FAILURE,
} from '../actions/action-types'

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
}

const entriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTRIES_REQUEST:
      return {
        loading: true,
      }
    case ENTRIES_REQUEST_SUCCESS:
      return {
        items: action.payload.entries,
        loading: false,
        error: null,
      }
    case ENTRIES_REQUEST_FAILURE:
      return {
        items: [],
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default entriesReducer
