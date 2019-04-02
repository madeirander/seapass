import { UPDATE_ACTIVE_ENTRY } from '../actions/actionTypes';

const initialState = {
  entry: {},
};

const activeEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ENTRY:
      return {
        ...state,
        entry: action.entry,
      };
    default:
      return state;
  }
};

export default activeEntryReducer;
