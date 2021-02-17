import React from 'react'
import { Link } from 'gatsby'
import cart from "../../images/cart.svg"
import {useGlobalState} from "../../global/state"
import styles from './style.module.css'

const Cart = () =>{
    const [list, setList] = useGlobalState("Cart")
    return(
        <Link to={'/checkout'}> 
        <div className={styles.cart}>
            <div className={styles.size}>{list.length}</div>
            <img src={cart} height="45px" /> 
        </div>
    </Link>
)}
export default Cart