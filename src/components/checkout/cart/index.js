import React, { useState,useEffect } from 'react'
import styles from "./style.module.css"
import {Oprema} from "../../../constants/constant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Button from "../../button"
import {useGlobalState} from "../../../global/state"

function Discard(item){
    let list = JSON.parse(localStorage.getItem("Cart"))
    let index = -1
    if( (index = list.findIndex(element => element[0] === item[0])) !== -1 ){
        list.splice(index, 1);
    }
    localStorage.setItem("Cart",JSON.stringify(list))

    return list    
}

function ChangeAmnt(item, step){
    let list = JSON.parse(localStorage.getItem("Cart"))
    let index = -1
    if( (index = list.findIndex(element => element[0] === item[0])) === -1 ){
        console.error(item+" not found")
        return
    }
    if( list[index][1] === 1 && step === -1){
        return Discard(item)
    }
    list[index][1] = list[index][1] + step
    localStorage.setItem("Cart",JSON.stringify(list))
    return list
}

function Sum(){
    let list = JSON.parse(localStorage.getItem("Cart"))
    let sum = 0;
    for (var i = list.length; i--;) {
        sum += list[i][1] * parseFloat(Oprema[list[i][0]]["price"])
    }
    return sum
}

const CartForm = ()=>{
    const [hide,setHide] = useState(true)
    const [cart, setCart] = useGlobalState("Cart")
    useEffect(() => {
        localStorage.setItem("Cart",JSON.stringify(cart))
    },[cart])
    const list = JSON.parse(localStorage.getItem("Cart"))
    return (
    <div className={styles.page}>
        <div className={styles.cart}>
            <h2>Košarica</h2>
            <div className={styles.inventory}>
                {list.map( el =>
                <li>
                    <nav className={styles.enum} onMouseLeave={() => setHide(true)} onMouseOver={() => setHide(false)} >
                        <section className={styles.side}  style={{ visibility: hide ? "hidden" : ""}} onClick={() => setCart(ChangeAmnt(el, -1))} >
                            <FontAwesomeIcon height="12px" icon={faMinus} color="var(--color-disabled)" />
                        </section>
                        <p>{el[1]}</p>
                        <section className={styles.side}  style={{ visibility: hide ? "hidden" : ""}} onClick={() => setCart(ChangeAmnt(el, 1))} >
                            <FontAwesomeIcon height="12px" icon={faPlus} color="var(--color-disabled)" />
                        </section>
                        <p >{Oprema[el[0]]["name"]}</p>
                    </nav>
                    <p>
                        <p style={{padding: "0 6px"}}>{Oprema[el[0]]["price"]} HRK</p>
                        <div onClick={() => setCart( Discard(el))} >
                            <FontAwesomeIcon icon={faTimes} color="var(--highlight-background)" />
                        </div>
                    </p>
                </li>
                )}
            </div>
            <hr />
            <div className={styles.sum}>
                <h3>Ukupno:</h3>
                <h3>{Sum()} HRK</h3>
            </div>
        </div>
        <div style={{ marginTop: "10vh"}} ><Button text={"Obračun"} style={styles.information_block_button} /></div>
    </div>

)}

export default CartForm