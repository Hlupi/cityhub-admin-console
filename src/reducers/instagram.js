import {USER_LOGOUT} from '../actions/users'
import { UPDATE_INSTAGRAM } from '../actions/instagram';

// import update from 'immutability-helper'


export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    // Update all events reducer
    case UPDATE_INSTAGRAM:
    return payload

    // Default 
    default:
      return state
  }
}
