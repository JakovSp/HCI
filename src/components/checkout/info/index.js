import React from 'react'
import styles from "./style.module.css"
import amex from "../../../images/Oprema/payment/amex.svg"
import discover from "../../../images/Oprema/payment/discover.svg"
import mastercard from "../../../images/Oprema/payment/mastercard.svg"
import visa from "../../../images/Oprema/payment/visa.svg"
import paypal from "../../../images/Oprema/payment/paypal.svg"


const Forms=["Ime","Prezime","Adresa 1, Ulica, poštanski broj, ...","Adresa 2, kućni broj, ulaz, kat, ...","E-mail","Kontakt broj"]

const InfoForm = ()=>(
    <div className={styles.info}>
        <h2>Adresa dostave i kontakt</h2>
        {Forms.map(el => <input placeholder={el} className={styles.inputfield} />)}
        
        <div className={styles.payment} >
            <label className={styles.container} >
                <input type="radio" name="radio" />
                <span className={styles.checkmark} ></span>
                <div className={styles.creditcard}>
                    <img src={amex}/>
                    <img src={mastercard}/>
                    <img src={visa}/>
                    <img src={discover}/>
                </div>
            </label>
            <label className={styles.container} >
                <input type="radio" name="radio" />
                <span className={styles.checkmark} ></span>
                <img src={paypal} height={"70px"} style={{padding: "0 20px"}} />
            </label>
            <input placeholder={"Broj Kartice\t\t\t\t\t\t\tMM/YY\t   CVC"} className={styles.inputfield}  />
            <label className={styles.container} style={{fontSize: "15px"}} >Koristi istu karticu za buduće plaćanje
                <input type="checkbox" name="card" />
                <span className={styles.checkbox} ></span>
            </label>
        </div >

    </div>
)

export default InfoForm