import {UPDATE_MESSAGES, EDIT_MESSAGE, ADD_MESSAGE} from '../actions/events'


export default (state = null, {type, payload}) => {
  switch (type) {

  case UPDATE_MESSAGES:
    return payload

  // Add message reducer
  case ADD_MESSAGE:
    return [
      ...state,
      payload
    ]

  case EDIT_MESSAGE:
  return payload

  default:
  return state
  }
}
