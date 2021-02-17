import React,{useState} from 'react'
import FiltersForm from "../../components/oprema/filters"
import SelectionForm from "../../components/oprema/selection"
import styles from "./style.module.css"

const OpremaForm = ()=>{
    return (
    <div className={styles.page}>
        <FiltersForm />
        <SelectionForm />
    </div>
)}

export default OpremaForm