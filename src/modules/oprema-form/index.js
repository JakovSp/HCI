import React,{useState} from 'react'
import FiltersForm from "../../components/oprema/filters"
import SelectionForm from "../../components/oprema/selection"
import styles from "./style.module.css"


const OpremaForm = ()=>{
    const [filters, setFilters] = useState([])

    return (
    <div className={styles.page}>
        <FiltersForm filters={filters} setFilters={setFilters} />
        <SelectionForm filters={filters} />
    </div>
)}

export default OpremaForm