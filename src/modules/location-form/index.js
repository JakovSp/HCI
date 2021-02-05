import React from "react"
import styles from "./style.module.css"
import { useGlobalState } from "../../global/state"
import MapPage from "../../components/Map"
import BriefForm from "../../components/location-map/brief"
import Description from "../../components/location-map/description"

const LocationForm = () =>{
    const [location,setLocation] = useGlobalState("location")
    return (
    <div className={styles.page} >
        <div className={styles.mapheader} >
            <MapPage Location={location} mapwidth={"55vw"} mapheight={"65vh"} />
            <BriefForm Location={location} />
        </div>
        <Description className={styles.description} />
    </div>
   
)}

export default LocationForm