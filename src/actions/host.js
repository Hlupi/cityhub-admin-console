import * as request from 'superagent'

export const FETCH_HOST_DATA = 'FETCH_HOST_DATA'

const successSlider = data => ({
  type: FETCH_HOST_DATA,
  payload: data.result
})

export const fetchHostData = () => (dispatch) => {
  request
    .get(`https://mobile-api.cityhub.com/api/v1/host/current?HotelCode=AMS`)
    .then(result => dispatch(successSlider(result.body)))  
    .catch(err => console.error(err))
}
