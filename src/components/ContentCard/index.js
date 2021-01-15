import React from 'react'
import styles from "./style.module.css"

const ContentCard = ({Image,Text,Direction,Border}) => (

    <div className={styles.card} style={{   flexDirection:Direction, 
                                            border: Border? "solid #591C0B 0.1rem" : "none" }} >
        <Image className={styles.image} style={{flexDirection: Direction}} />
        <p className={Direction.includes("row")? styles.rowdesc : styles.columndesc} >{Text}</p>
    </div>
)

export default ContentCard
