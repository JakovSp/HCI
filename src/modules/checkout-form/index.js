import React from 'react'
import InfoForm from "../../components/checkout/info"
import CartForm from "../../components/checkout/cart"
import styles from "./style.module.css"
import CustomButton from "../../components/CustomButton"

const CheckoutFrom = ()=>(
    <div className={styles.checkout}>
        <InfoForm />
        <CartForm />
    </div>
)

export default CheckoutFrom