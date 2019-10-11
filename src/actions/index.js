import { UPDATE_ACTIVE_ENTRY } from './actionTypes'

export const setActiveEntry = value => ({
  type: UPDATE_ACTIVE_ENTRY,
  entryId: value,
})
