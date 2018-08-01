import {USER_LOGOUT} from '../actions/users'
import {ADD_EVENT, UPDATE_EVENTS, EDIT_EVENT, REMOVE_EVENT} from '../actions/events'

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

      // Remove Event
    case REMOVE_EVENT:
      const copy = [...state]
      const eventId = copy.find(element => element.id = payload.id)
      return copy.splice(eventId,1)


    // Default
    default:
      return state
  }
}
