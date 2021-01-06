import React from 'react'
import styles from './style.module.css'
import CardMonthDay from '../card-month-day'

const CardMonth = ({monthName, monthColor}) => (
    <main className={styles.month_container}>
        <p className={styles.month_name}>{monthName}</p>
        <div className={styles.month_hikings_container}>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
        </div>
    </main>
)

export default CardMonth