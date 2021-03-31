import React from 'react'
import styles from './style.module.css'
import LitImages from '../../components/Images/Literatura'
import carticon from "../../images/cart.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Literatura = () =>(
    <div className={styles.booklist}>
        <div className={styles.book} >
            <LitImages Item={"Udzbenik"}/>
            <div className={styles.bookdesc}>
                <p>Preglednim dizajnom, konkretnim i modernim pristupom te obiljem ilustracija ova knjiga omogućava lako i jednostavno usvajanje i obnavljanje znanja i vještina potrebnih planinarima, penjačima, alpinistima, gorskim spašavateljima i vodičima.</p>
                <div style={{display: "flex"}}>
                    <img src={carticon} height="45px" />
                    <FontAwesomeIcon className={styles.plusicon} height="12px" icon={faPlus}/>
                    <p >Dodaj u košaricu</p>
                </div>
            </div>
        </div>

        <div className={styles.book} >
            <LitImages Item={"Medicina"}/>
            <div className={styles.bookdesc}>
                <p>Na vrlo živopisan i jedinstven način ova knjiga liječnika brojnih hrvatskih himalajskih ekspedicija donosi brojna njegova medicinsko-planinarska iskustva i osnovna medicinska znanja korisna svakome tko se upućuje u planine.</p>
                <div style={{display: "flex"}}>
                    <img src={carticon} height="45px" />
                    <FontAwesomeIcon className={styles.plusicon} height="12px" icon={faPlus}/>
                    <p >Dodaj u košaricu</p>
                </div>
            </div>
        </div>
    </div>
)

export default Literatura