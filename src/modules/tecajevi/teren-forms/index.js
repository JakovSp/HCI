import React,{ useState, useEffect } from "react"
import styles from "./style.module.css"
import TerenDescription from "../../../components/teren-description"
import TerenHeader from "../../../components/teren-header"
import LocationForm from "../../location-form"

const TerenForm = () =>{
    const [location,setLocation] = useState("Paklenica")
    return (
    <div className={styles.page}>
        <TerenHeader selected={location} setSelected={setLocation} />
        <TerenDescription activeLocation={location} />
        <LocationForm location={location}/>
    </div>
)}

export default TerenForm