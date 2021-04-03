import React, { useState } from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {Oprema} from "../../constants/constant"
import ItemsImages from "../Images/Oprema"
import {useGlobalState} from "../../global/state"

function AddItem(item)
{
    let list = JSON.parse(localStorage.getItem("Cart"))
    let index = -1
    if( (index = list.findIndex(element => element[0] === item)) != -1 )
    { list[index][1] += 1 }
    else{ list.push([item, 1]) }
    return list
}

const CardGear = ({Item}) => {
    const[cart, setCart] = useGlobalState("Cart")
    return (
    <div className={styles.card_container}>
        <ItemsImages Item={Item} />
        <div className={styles.inner_card_container} >
            <div className={styles.title_container}>
                <h5 className={styles.card_title}>{Oprema[Item]["name"]}</h5>
            </div>
            <div className={styles.card_footer} >
                <p style={{color: 'orange', fontSize: "25px", fontWeight: 'bold'}}>{Oprema[Item]["price"]} HRK</p>
                <FontAwesomeIcon size="2x" onClick={() => setCart(AddItem(Item))} className={styles.plusicon} height="12px" icon={faCartPlus} color="#591C0B"/>
            </div>
        </div>
    </div>
)}

export default CardGear