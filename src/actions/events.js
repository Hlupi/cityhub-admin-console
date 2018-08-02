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


// delete a specific event
export const deleteEvent = (eventId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
  .delete(`${baseUrl}/events/${eventId.id}`)
  .set('Authorization', `Bearer ${jwt}`)
  .then(result => dispatch(removeEvent(eventId.id)))
  .catch(err => console.error(err))
}

// Dispatch Action to store
export const REMOVE_EVENT = 'REMOVE_EVENT'
const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    payload: ({id: eventId})
})


// Create a new message on server
export const createMessage = (newMessage) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/messages`)
    .send(newMessage)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => dispatch(addMessage(result.body)))
    .catch(err => console.error(err))
}

// Dispatch Action to store
export const ADD_MESSAGE = 'ADD_MESSAGE'
const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message
})


// Get messages
export const getMessages = (city) => (dispatch) => {
  // const state = getState()
  // if (!state.currentUser) return null
  // const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/messages/${city}`)
    // .set('Authorization', `Bearer ${jwt}`)
    // .send(city)
    .then(result => dispatch(updateMessages(result.body)))
    .catch(err => console.error(err))
}

// Dispatch action to store
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES'
const updateMessages = messages => ({
  type: UPDATE_MESSAGES,
  payload: messages
})


//Edit a specific message
export const updateMessage = (updates) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
  .patch(`${baseUrl}/messages`)
  .set('Authorization', `Bearer ${jwt}`)
  .send(updates)
  .then(result => dispatch(editMessage(result.body)))
  .catch(err => console.error(err))
}

// Dispatch Action to store
export const EDIT_MESSAGE = 'EDIT_MESSAGE'
const editMessage = message => ({
  type: EDIT_MESSAGE,
  payload: message
})

export const GET_SINGLE_EVENT = 'GET_SINGLE_EVENT'
export const getSingleEventSuccess = (data) => ({
  type: GET_SINGLE_EVENT,
  payload: data
})

//Get Single Event
export const getSingleEvent = (id) => (dispatch) => {
  console.log(id)
  request
  .get(`${baseUrl}/events/${id}`)
  .then(result => dispatch(getSingleEventSuccess(result.body)))
  .catch(err => console.error(err))
}
