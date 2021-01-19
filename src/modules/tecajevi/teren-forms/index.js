import React,{useState} from "react"
import styles from "./style.module.css"
import TerenDescription from "../../../components/teren-description"
import TerenHeader from "../../../components/teren-header"

const TerenForm = ({selected, setSelected}) =>{
    return (
    <div className={styles.page}>
        <TerenHeader setSelected={setSelected} />
        <TerenDescription activeLocation={selected}/>
    </div>
)}

export default TerenForm