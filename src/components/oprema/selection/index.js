import React,{useState, useEffect} from 'react'
import styles from "./style.module.css"
import ContentCard from "../../ContentCard"
import {Oprema} from "../../../constants/constant"
import ItemsImages from "../../Images/Oprema"
import {useGlobalState} from "../../../global/state"
import {setGlobalState} from 'react-hooks-global-state'

function AddItem(item)
{
    let list = JSON.parse(localStorage.getItem("Cart"))
    let index = -1
    if( (index = list.findIndex(element => element[0] === item)) != -1 )
    { list[index][1] += 1 }
    else{ list.push([item, 1]) }
    return list
}

const SelectionForm = ({list, setList})=>{
    const[cart, setCart] = useGlobalState("Cart")
    return(
    <div className={styles.selection}>
        {list.map(item => 
            <div 
                onClick={ () => setCart( AddItem(item)) } 
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