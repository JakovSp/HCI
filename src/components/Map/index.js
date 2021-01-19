import React from 'react'
import styles from "./style.module.css"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {LatLng} from "../../constants/constant.js"

const Map = withScriptjs(withGoogleMap(({Location},props) =>
  <GoogleMap
    mapTypeId={'terrain'}
    defaultZoom={12}
    defaultCenter={{lat: Location[0], lng: Location[1]}}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))


const MapPage = ({Location}) =>(
      <div className={styles.map}>
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ width: '65vw', height: `65vh` }} />}
          containerElement={<div style={{ width: '65vw', height: `65vh`}} />}
          mapElement={<div style={{ width: '65vw', height: `65vh` }} />}
          Location = {LatLng[Location]} 
        />
      </div>
      
)

export default MapPage