import {USER_LOGOUT} from '../actions/users'
import { UPDATE_INSTAGRAM, UPDATE_STATUS } from '../actions/instagram';

import update from 'immutability-helper'


export default (state = null, {type, payload}) => {
  switch (type) {
    case USER_LOGOUT:
      return null

    // Update all instagram photos reducer
    case UPDATE_INSTAGRAM:
    return payload

    // Update instagram status reducer
    case UPDATE_STATUS:
    const currentImage = {...state.hashtags.find(x => x.mediaId === payload.mediaId)}
    const updateStatus = update(currentImage, { 
      $set: [payload]
    })
    return updateStatus

    // Default 
    default:
      return state
  }
}
