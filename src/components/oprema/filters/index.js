import React,{useState} from 'react'
import styles from "./style.module.css"
import {Filters} from "../../../constants/constant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Oprema} from "../../../constants/constant"

function checkFilter(name,tick,filters)
{
    var ar = new Array
    ar = filters

    if(tick){ ar.push(name) }
    else{ ar.splice(ar.findIndex(element => element === name), 1) }
    return ar
}
function ApplyFilter(filters){
    var items = new Array

    if(filters.length != 0){
        Object.keys(Oprema).forEach( el => {
            if(
            filters.includes(Oprema[el]["brend"]) ||
            filters.includes(Oprema[el]["vrsta"]) ){
                items.push(el)
            }
        })
    }
    else { items = Object.keys(Oprema)}
    return items
}

const FiltersForm = ({list,setList})=>{
    const [filters, setFilters] = useState([])

    return (
    <div className={styles.page}>
        <input className={styles.inputfield} placeholder={ "search"} />
        {Filters.map(FilterType => 
            <div className={styles.filterblock}>
                <p>{FilterType[0]}</p>
                {FilterType[1].map( el =>
                    <label className={styles.container} >{el}
                        <input type="checkbox" onClick={e => {
                            setFilters(checkFilter(el,e.target.checked,filters))
                            setList(ApplyFilter(filters))
                        }} />
                        <span className={styles.checkmark} ></span>
                    </label>
                )}
                <hr/>
            </div>
            )}
    </div>
)}

export default FiltersForm