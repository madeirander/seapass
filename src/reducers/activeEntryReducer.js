import { UPDATE_ACTIVE_ENTRY } from '../actions/actionTypes';

const initialState = {
  entryId: {},
};

const activeEntryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ENTRY:
      return {
        ...state,
        entryId: action.entryId,
      };
    default:
      return state;
  }
};

export default activeEntryReducer;
