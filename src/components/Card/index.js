import React from 'react'
import styles from "./style.module.css"
const Card = ({Image,Text}) => (
    <div className={styles.card}>
        <Image className={styles.image}/>
        <p className={styles.desc}>{Text}</p>
    </div>
)

export default Card