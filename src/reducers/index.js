import { combineReducers } from 'redux';
import activeEntryReducer from './activeEntryReducer';

export const Reducers = combineReducers({
  activeEntry: activeEntryReducer,
});
