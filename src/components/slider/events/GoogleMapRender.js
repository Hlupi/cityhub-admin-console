import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { GoogleMapsStyle } from './GoogleMapsStyle'
import { ApiKey } from './Key'
import '../main/carousel.css'
import markerCH from '../images/pin-black&w-logo.png'
/*global google*/

const cityHubAmsterdam = { lat: 52.3672857, lng: 4.8650415 }
const dummyData = [
  {adress: 'Anne Frank Huis, Prinsengracht, Amsterdam',
  lat: 52.3752215,
  lng: 4.8817878},

  {adress:'Codaisseur, Burgerweeshuispad, Amsterdam',
  lat: 52.3395029,
  lng: 4.854355},

  {adress:'EYE Filmmuseum, IJpromenade, Amsterdam',
  lat: 52.3843513,
  lng: 4.8990873},

  {adress:'Heineken Experience, Stadhouderskade, Amsterdam',
  lat: 52.3578346,
  lng: 4.8896362}
]


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
    defaultCenter={cityHubAmsterdam}
    defaultOptions={{ styles: GoogleMapsStyle, disableDefaultUI: true }}
    ref={(ref) => { this.map = ref }}
    disableDefaultUI={{disableDefaultUI: true}}
  >
    { <Marker
      position={cityHubAmsterdam}
      defaultAnimation={google.maps.Animation.DROP}
      icon={markerCH}
    /> }
      {console.log(props.data)}
    { props.data.map((a, index) => 
      <Marker
      position={ {lat: +a.lat, lng: +a.lng} }
      defaultAnimation={ google.maps.Animation.DROP }
      key={ index }
    //   icon={{icon: }}
      />
    ) }

{props.data.map(m => console.log(m))}
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
         <MapComponent data={this.props.data}/>
    )
  }
}

export default GoogleMapRender
