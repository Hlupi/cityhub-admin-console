import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './users'
// import {isExpired} from '../jwt'


// Get all events from server
export const getInstagram = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/hashtags`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(updateInstagram(result.body)))
    .catch(err => console.error(err))
}

// Dispatch action to store
export const UPDATE_INSTAGRAM = 'UPDATE_INSTAGRAM'
const updateInstagram = instagram => ({
  type: UPDATE_INSTAGRAM,
  payload: instagram
})

