import React,{useState,useEffect} from 'react'
import { Link } from 'gatsby'
import carticon from "../../images/cart.svg"
import styles from './style.module.css'
import {useGlobalState} from "../../global/state"

const Cart = () =>{

    const[cart, setCart] = useGlobalState("Cart")
    
    useEffect(() => {
        localStorage.setItem("Cart",JSON.stringify(cart))
    },[cart])

    return(
        <Link to={'/checkout'}> 
        <div className={styles.cart}>
            <div className={styles.size}>{cart.length}</div>
            <img src={carticon} height="45px" /> 
        </div>
    </Link>
)}
export default Cart