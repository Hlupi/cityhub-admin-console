import * as request from 'superagent'

export const FETCH_SLIDER_DATA = 'FETCH_SLIDER_DATA'

const successSlider = data => ({
  type: FETCH_SLIDER_DATA,
  payload: data
})

export const fetchSliderData = (param) => (dispatch) => {
  request
    .get(`https://cityhub-backend.herokuapp.com/hashtagsaccepted/${param}`)
    .then(result => dispatch(successSlider(result.body)))  
    .catch(err => console.error(err))
}
