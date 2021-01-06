import React from 'react'
import styles from './style.module.css'

const CardMonthDay = ({ monthColor }) => (
    <main className={styles.day_container} style={{backgroundColor: monthColor}}>
        <p style={{ fontSize: '20px' }}>12.</p>
    </main>
)

export default CardMonthDay