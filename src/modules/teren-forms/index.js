import {React,useState} from "react"
import styles from "./style.module.css"
import TerenDescription from "../../components/teren-description"
import TerenHeader from "../../components/teren-header"

const TerenForm = () =>{
    var Location = "Paklenica"
    return (
    <div className={styles.page}>
        <TerenHeader activeTab={Location} />
        <TerenDescription activeLocation={Location} />
    </div>
)}

export default TerenForm