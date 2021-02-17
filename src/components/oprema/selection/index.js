import React,{useState} from 'react'
import styles from "./style.module.css"
import ContentCard from "../../ContentCard"
import {Oprema} from "../../../constants/constant"
import ItemsImages from "../../Images/Oprema"
import {useGlobalState} from "../../../global/state"

function Filter(list, filters)
{
    if(filters.length == 0)
    { 
        alert("no filter")
        return Object.keys(list)}
    else{
        var items = new Array
        items = list
        items = items.filter((el) => !!el.for.find((e) => filters.includes(e.vrsta)))
        alert(filters)

    }
    return Object.keys(items)
}

const SelectionForm = ({filters, setFilters})=>{
    const [selection, setSelection] = useGlobalState("Cart")
    return(
    <div className={styles.selection}>
        {Object.keys(Oprema).map(key => 
            <div 
                onClick={() => {
                    var Cart = new Array 
                    Cart = selection
                    Cart.push(key)
                    setSelection(Cart)
                } } 
                className={styles.element}>
                <ContentCard
                    Image={() => <ItemsImages Item={key}/>} 
                    Direction={"column"} 
                    Text={
                    <div className={styles.pricetag} >
                        <h4>{Oprema[key]["name"]}</h4>
                        <p>{Oprema[key]["price"]} HRK</p> 
                    </div>
                } /> 
            </div>
        )}
    </div>
)}

export default SelectionForm