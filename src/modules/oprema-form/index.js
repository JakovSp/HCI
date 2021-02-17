import React,{useState} from 'react'
import FiltersForm from "../../components/oprema/filters"
import SelectionForm from "../../components/oprema/selection"
import styles from "./style.module.css"
import {Oprema} from "../../constants/constant"
import { createGlobalState } from 'react-hooks-global-state';

const OpremaForm = ()=>{
    const [Cart,SetCart] = useState([])
    return (
    <div className={styles.page}>
        <FiltersForm />
        <SelectionForm Selection={Cart} setSelection={SetCart} />
    </div>
)}

export default OpremaForm