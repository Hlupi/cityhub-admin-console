import * as request from 'superagent'
import {baseUrl} from '../constants'


// Get all events from server
export const getEvents = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(updateEvents(result.body)))
    .catch(err => console.error(err))
}

// Dispatch action to store
export const UPDATE_EVENTS = 'UPDATE_EVENTS'
const updateEvents = events => ({
  type: UPDATE_EVENTS,
  payload: events
})


// Create a new event on server
export const createEvent = (newEvent) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/events`)
    .send(newEvent)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addEvent(result.body)))
    .catch(err => console.error(err))
}

// Dispatch Action to store
export const ADD_EVENT = 'ADD_EVENT'
const addEvent = event => ({
  type: ADD_EVENT,
  payload: event
})


//Edit a specific event
export const updateEvent = (updates) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
  .patch(`${baseUrl}/events`)
  .set('Authorization', `Bearer ${jwt}`)
  .send(updates)
  .then(result => dispatch(editEvent(result.body)))
  .catch(err => console.error(err))
}

// Dispatch Action to store
export const EDIT_EVENT = 'EDIT_EVENT'
const editEvent = event => ({
  type: EDIT_EVENT,
  payload: event
})
