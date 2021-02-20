import React,{useState,useEffect} from 'react'
import { Link } from 'gatsby'
import cart from "../../images/cart.svg"
import styles from './style.module.css'

const Cart = () =>{
    if(!JSON.parse(localStorage.getItem("Cart"))){
        localStorage.setItem("Cart",JSON.stringify([]))
    }
    
    const[list, setList] = useState(JSON.parse(localStorage.getItem("Cart")))
    function checkCart() {
        const data = JSON.parse(localStorage.getItem("Cart"))
        if(data != list){
            setList(data)
        }
    }
    useEffect(() => {
        window.addEventListener("storage", checkCart)
        return(
            () => window.removeEventListener("storage", checkCart)
        )
      }, [])    
      return(
        <Link to={'/checkout'}> 
        <div className={styles.cart}>
            <div className={styles.size}>{list.length}</div>
            <img src={cart} height="45px" /> 
        </div>
    </Link>
)}
export default Cart