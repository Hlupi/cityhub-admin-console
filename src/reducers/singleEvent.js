import {GET_SINGLE_EVENT} from '../actions/events'



export default (state = null, {type, payload}) => {
  switch (type) {
  case GET_SINGLE_EVENT:
    return payload
  default:
    return state
  }
}