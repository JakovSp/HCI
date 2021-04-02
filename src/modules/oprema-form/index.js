import React,{useState} from 'react'
import FiltersForm from "../../components/oprema/filters"
import SelectionForm from "../../components/oprema/selection"
import styles from "./style.module.css"
import {Oprema} from "../../constants/constant"
import SectionTitle from '../../components/section-title'



const OpremaForm = ()=>{
    const [list, setList] = useState(Object.keys(Oprema))
    return (
    <div className={styles.page1}>
        <SectionTitle title="Oprema" subtitle="Iznajmite opremu za vaše nove pustolovine"/>
        <div className={styles.page2}>
            <FiltersForm list={list} setList={setList} />
            <SelectionForm list={list} setList={setList} />
        </div>
    </div>
)}

export default OpremaForm