import {USER_LOGOUT} from '../actions/users'
import {ADD_EVENT, UPDATE_EVENTS} from '../actions/events'

// import update from 'immutability-helper'


export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    // Update all events reducer
    case UPDATE_EVENTS:
      return payload

    // Add event reducer
    case ADD_EVENT:
      return {
        ...state,
        [payload.id]: payload
      }

    // Default 
    default:
      return state
  }
}
