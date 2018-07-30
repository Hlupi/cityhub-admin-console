import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './users'
// import {isExpired} from '../jwt'


// Get all instagram photos from server
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



// ------------------------------------------------------------



// Change status of instagram photo on server
export const updateStatus = (mediaId, status) => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .put(`${baseUrl}/hashtags`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({mediaId: mediaId, status: status})
    // .then(result => dispatch(updateInstagramStatus(result.body)))
    .then(() => dispatch(getInstagram()))
    .catch(err => console.error(err))
}

// Dispatch action to store
export const UPDATE_STATUS = 'UPDATE_STATUS'
const updateInstagramStatus = status => ({
  type: UPDATE_STATUS,
  payload: status
})

