import React from 'react'
import InfoForm from "../../components/checkout/info"
import CartForm from "../../components/checkout/cart"
import styles from "./style.module.css"
import CustomButton from "../../components/CustomButton"

const CheckoutFrom = ()=>(
    <>
        <div className={styles.main}>
            <InfoForm />
            <CartForm />
        </div>
        <div  className={styles.bottom}>
            <label className={styles.container} >Koristi adresu dostave za plaćanje
                <input type="checkbox" />
                <span className={styles.checkbox} ></span>
            </label>
            <CustomButton Text={"Obračun"} />
        </div>
    </>
)

export default CheckoutFrom