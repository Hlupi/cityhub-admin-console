import {USER_LOGOUT} from '../actions/users'
import {ADD_EVENT, UPDATE_EVENTS, EDIT_EVENT, ADD_MESSAGE} from '../actions/events'

// import update from 'immutability-helper'


export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    // Update all events reducer
    case UPDATE_EVENTS:
      return payload

    // Edit an event
    case EDIT_EVENT:
      return state.map(event => {
        if(event.id === payload.id) {
          return payload
        }
        else return event
      })

    // Add event reducer
    case ADD_EVENT:
      return [
        ...state,
        payload
      ]

      // Add message reducer
      case ADD_MESSAGE:
        return [
          ...state,
          payload
        ]

    // Default
    default:
      return state
  }
}
