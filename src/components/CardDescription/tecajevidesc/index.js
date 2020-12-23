import React from 'react'
import styles from "./style.module.css"

export const Desc1 = ({Text}) => (
    <div className={styles.top} >{Text}</div>
)

export const Desc2 = ({Text}) => (
    <div className={styles.bottom} >{Text}</div>
)