import React from 'react'
import styles from './style.module.css'

const CardMonthDay = ({ monthColor, day }) => (
    <main className={styles.day_container} style={{backgroundColor: monthColor}}>
        <p style={{ fontSize: '20px' }}>{day}.</p>
    </main>
)

export default CardMonthDay