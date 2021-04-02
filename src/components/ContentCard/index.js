import React from 'react'
import styles from "./style.module.css"

const ContentCard = ({Image,Text,Direction,Border,action}) => (
    <div className={styles.card} onClick={action}>
        <Image className={styles.image} />
        <p className={styles.columndesc} >{Text}</p>
    </div>
)

export default ContentCard
