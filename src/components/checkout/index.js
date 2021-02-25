import React,{useState,useEffect} from 'react'
import { Link } from 'gatsby'
import carticon from "../../images/cart.svg"
import styles from './style.module.css'
import {useGlobalState} from "../../global/state"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {myLocalStorage} from '../../helpers/local-storage'

function move(e)
{
    let x = e.clientX;
    let y = e.clientY;
    let top =  y - e.currentTarget.offsetTop - 5 + "px";
    let left = x - e.currentTarget.offsetLeft - 7 + "px";
    return [top,left]
}
const Cart = () =>{
    const[cart, setCart] = useGlobalState("Cart")
    const[hidden, setHide] = useState(true)
    const[coord, setcoord] = useState(["25px","25px"])

    useEffect(() => {
        myLocalStorage.setItem("Cart",JSON.stringify(cart))
    },[cart])

    return(
        <Link to={ cart.length ? '/checkout' : '/store'}> 
        <div className={styles.cart} onMouseMove={ e => 
                    setcoord(move(e))
                } onMouseOver={() => setHide(false)}  onMouseLeave={() => setHide(true)}>
            <img src={carticon} height="45px" /> 
            <div className={styles.size} >{ cart.length ? cart.length :
                <>
                    <div className={styles.emptycartlabel}  style={{ top: coord[0], left: coord[1] }}>Prazna Košarica</div>
                    <FontAwesomeIcon className={styles.emptycarticon} height="12px" icon={faExclamationTriangle} color="darkred" />
                </>}
            </div>
        </div>
    </Link>
)}
export default Cart