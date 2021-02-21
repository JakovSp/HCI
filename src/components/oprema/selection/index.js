import React,{useState, useEffect} from 'react'
import styles from "./style.module.css"
import ContentCard from "../../ContentCard"
import {Oprema} from "../../../constants/constant"
import ItemsImages from "../../Images/Oprema"

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

const SelectionForm = ({list})=>{

    return(
    <div className={styles.selection}>
        {list.map(item => 
            <div 
                onClick={() => AddItem(item) } 
                className={styles.element}>
                <ContentCard
                    Image={() => <ItemsImages Item={item}/>} 
                    Direction={"column"} 
                    Text={
                    <div className={styles.pricetag} >
                        <h4>{Oprema[item]["name"]}</h4>
                        <p>{Oprema[item]["price"]} HRK</p> 
                    </div>
                } /> 
            </div>
        )}
    </div>
)}

export default SelectionForm