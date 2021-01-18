import React,{useState} from "react"
import styles from "./style.module.css"
import TerenDescription from "../../../components/teren-description"
import TerenHeader from "../../../components/teren-header"

const TerenForm = () =>{
    const [selectedLocation, setSelectedLocation] = useState("Paklenica")
    return (
    <div className={styles.page}>
        <TerenHeader selected={selectedLocation} setSelected={setSelectedLocation} />
        <TerenDescription activeLocation={selectedLocation} />
    </div>
)}

export default TerenForm