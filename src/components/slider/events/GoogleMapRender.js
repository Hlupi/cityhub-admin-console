import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GoogleMapsStyle } from './GoogleMapsStyle'
import { ApiKey } from './Key'
import '../main/carousel.css'
import markerCH from '../images/CH-logo.png'
import redCH1 from '../images/red-marker1.png'
import redCH2 from '../images/red-marker2.png'
import redCH3 from '../images/red-marker3.png'
import redCH4 from '../images/red-marker4.png'
/*global google*/

const cities = [
  {amsterdam: {lat: 52.3672857, lng: 4.8650415}},
  {rotterdam: {lat: 51.9153354, lng: 4.4733156}}
]

const markers = [redCH1,redCH2,redCH3,redCH4]
const markerHolder = markers.map(item => item)

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${ ApiKey }`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `1000px`, width:'100%' }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={cities.filter(a => a[props.params])[0][props.params]}
    defaultOptions={{ styles: GoogleMapsStyle, disableDefaultUI: true }}
    ref={(ref) => { this.map = ref }}
    disableDefaultUI={{disableDefaultUI: true}}
  >
    { <Marker
      position={cities.filter(a => a[props.params])[0][props.params]}
      defaultAnimation={google.maps.Animation.DROP}
      icon={markerCH}
    /> }

    { props.data.map((a, index) => 
      <Marker
      position={ {lat: +a.lat, lng: +a.lng} }
      defaultAnimation={ google.maps.Animation.DROP }
      key={ index }
      icon = {markerHolder[index]}
      />
    ) }

     { setTimeout(() =>  {
       const bounds = new window.google.maps.LatLngBounds()
       props.data.forEach(bound => bounds.extend(new window.google.maps.LatLng(+bound.lat, +bound.lng)))
       this.map.fitBounds(bounds)
       this.map.panToBounds(bounds);
       }, 2000)}

  </GoogleMap>
)

class GoogleMapRender extends React.PureComponent {

  render() { 
    return (
         <MapComponent data={this.props.data} params={this.props.params}/>
    )
  }
}

export default GoogleMapRender
