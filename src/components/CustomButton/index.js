import React from 'react'
import styles from './style.module.css'

const Button = ({Text}) => (
    <div className={styles.button}>{Text}</div>
)

export default Button