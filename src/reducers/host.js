import { FETCH_HOST_DATA } from "../actions/host";

export default function (state = {}, action) {
    switch (action.type) {
      case FETCH_HOST_DATA:
        return action.payload
      default:
        return state
    }
  }