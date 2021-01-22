import React from "react"
import styles from "./style.module.css"
import { useGlobalState } from "../../global/state"
import MapPage from "../../components/Map"

const LocationForm = () =>{
    const [location,setLocation] = useGlobalState("location")
    return (
    <div className={styles.page} >
        <MapPage Location={location} mapwidth={"55vw"} mapheight={"65vh"} />
        <div className={styles.selector} >
            <ul>
                <li>
                    <span className={styles.choice} />
                    <p>lagano</p>
                </li>
                <li><span className={styles.choice} /><p>teško</p></li>
                <li><span className={styles.choice} /><p>teže</p></li>
            </ul>
        </div>
    </div>
   
)}

export default LocationForm