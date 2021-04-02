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

function filterData(query, filters) {
    return ApplyFilter(filters).filter((el) => Oprema[el]["name"].toLowerCase().includes(query?.toLowerCase()))
}

const FiltersForm = ({list, setList})=>{
    const [filters, setFilters] = useState([])
    const [hiding, setHide] = useState(false)
    return (
    <div className={styles.page}>
        <div className={styles.inputfield} >
            <input type="text" placeholder="Search.." name="search" onFocus={() => setHide(true)} onBlur={ () => setHide(false)} onChange={ (e) => {
                        setList(filterData(e.target.value, filters))
                    }}/>
            <FontAwesomeIcon className={styles.input_image} icon={faSearch} color="black" />
        </div>
        {Filters.map(FilterType => 
            <div className={styles.filterblock}>
                <h4>{FilterType[0]}</h4>
                {FilterType[1].map( el =>
                    <label className={styles.container} >{el}
                        <input type="checkbox" onClick={e => {
                            setFilters(checkFilter(el,e.target.checked,filters))
                            setList(ApplyFilter(filters))
                        }} />
                        <span className={styles.checkmark} ></span>
                    </label>
                )}
            </div>
            )}
    </div>
)}

export default FiltersForm