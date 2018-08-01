import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GoogleMapsStyle } from './GoogleMapsStyle'
import { ApiKey } from '../slider/events/Key'
// import '../main/carousel.css'
import markerCH from '../slider/images/pin-black&w-logo.png'
/*global google*/

const cities = [
  {amsterdam: {lat: 52.3672857, lng: 4.8650415}},
  {rotterdam: {lat: 51.9153354, lng: 4.4733156}}
]

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ ApiKey }`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width:'100%' }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
props.data && (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={props.data && cities[0][props.data.location]}
    defaultOptions={{ styles: GoogleMapsStyle, disableDefaultUI: false }}
    ref={(ref) => { this.map = ref }}
    disableDefaultUI={{disableDefaultUI: true}}
  >

    { <Marker
      position={props.data && cities[0][props.data.location]}
      defaultAnimation={google.maps.Animation.DROP}
      icon={markerCH}
    /> }
      { props.data && console.log(cities[0][props.data.location])}
      { props.data && console.log(props.data.location)}
      { <Marker
      position={{lat: (props.data && +props.data.lat), lng: (props.data && +props.data.lng)}}
      defaultAnimation={google.maps.Animation.DROP}
      // icon={markerCH}
    /> }
     { setTimeout(() =>  {
       const bounds = new window.google.maps.LatLngBounds()
       bounds.extend(new window.google.maps.LatLng(cities[0][props.data.location].lat, cities[0][props.data.location].lng))
       bounds.extend(new window.google.maps.LatLng(+props.data.lat, +props.data.lng))
       this.map.fitBounds(bounds)
       this.map.panToBounds(bounds);
       }, 2000)}

  </GoogleMap>
)
)

class GoogleMapRender extends React.PureComponent {

  render() { 
    return (
         <MapComponent data={this.props.data}/>
    )
  }
}

export default GoogleMapRender
