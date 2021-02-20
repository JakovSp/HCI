import React,{useState} from 'react'
import styles from "./style.module.css"
import ContentCard from "../../ContentCard"
import {Oprema} from "../../../constants/constant"
import ItemsImages from "../../Images/Oprema"

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

function AddItem(item)
{
    let ar = new Array 
    let index = -1
    ar = JSON.parse(localStorage.getItem("Cart"))
    if( (index = ar.findIndex(element => element[0] === item)) != -1 )
    { ar[index][1] += 1 }
    else{ ar.push([item, 1]) }
    localStorage.setItem("Cart",JSON.stringify(ar))
}

const SelectionForm = ({filters, setFilters})=>{
 
    return(
    <div className={styles.selection}>
        {Object.keys(Oprema).map(key => 
            <div 
                onClick={() => AddItem(key) } 
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