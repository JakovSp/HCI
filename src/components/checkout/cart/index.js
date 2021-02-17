import React from 'react'
import styles from "./style.module.css"
import MiscIcons from "../../Images/misc/index"
import {useGlobalState} from "../../../global/state"
import {Oprema} from "../../../constants/constant"

const CartForm = ()=>{
    const [list, setList] = useGlobalState("Cart")
    return (
    <div className={styles.cart}>
        <div className={styles.inventory}>
            {list.map( el =>
            <li>
                <nav>
                    <MiscIcons id={"minus"} className={styles.side} Item={"minus"} Width={"12px"} />
                    <p className={styles.enum} >{"1"}</p>
                    <MiscIcons id={"plus"} className={styles.side} Item={"plus"} Width={"12px"} />
                    <p style={{paddingLeft: "12px"}}>{Oprema[el]["name"]}</p>
                </nav>
                <p>
                    <p style={{padding: "0 12px"}}>{Oprema[el]["price"]} HRK</p>
                    <MiscIcons id={"x"} Item={"x"} Width={"12px"} />
                </p>
            </li>
            )}
        </div>
        <hr />
        <div className={styles.sum}>
            <p>Ukupno:</p>
            <h2>{"299 HRK"}</h2>
        </div>
    </div>
)}

export default CartForm