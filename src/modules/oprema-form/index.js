import React,{useState} from 'react'
import FiltersForm from "../../components/oprema/filters"
import SelectionForm from "../../components/oprema/selection"
import styles from "./style.module.css"
import {Oprema} from "../../constants/constant"


const OpremaForm = ()=>{
    const [list, setList] = useState(Object.keys(Oprema))
    return (
    <div className={styles.page}>
        <FiltersForm list={list} setList={setList} />
        <SelectionForm list={list} />
    </div>
)}

export default OpremaForm