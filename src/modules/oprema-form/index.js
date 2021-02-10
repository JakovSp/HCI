import React from 'react'
import FiltersForm from "../../components/oprema/filters"
import SelectionForm from "../../components/oprema/selection"
import styles from "./style.module.css"

const OpremaForm = ()=>(
    <div className={styles.page}>
        <FiltersForm />
        <SelectionForm />
    </div>
)

export default OpremaForm