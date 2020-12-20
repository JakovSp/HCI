import React from 'react'
import styles from "./style.module.css"

const ColumnCard = ({Image,Text,Style}) => (

    <div className={styles.card}>
        <Image className={styles.image} style={{flexDirection: Style}} />
        <p className={styles.desc}>{Text}</p>
    </div>
)

export default ColumnCard