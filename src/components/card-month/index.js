import React from 'react'
import styles from './style.module.css'
import CardMonthDay from '../card-month-day'
import { hikingLocations } from '../../constants/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const CardMonth = ({monthName, monthColor, onClickEvent, numberOfMonths}) => {

    if(numberOfMonths === 0) {
        return (
            <div inputColor={monthColor} className={styles.month_container} onClick={ onClickEvent }>
                <div className={styles.month_header}>
                    <p className={styles.month_name}>{monthName}</p>
                    <p className={styles.month_details} onClick={ onClickEvent }>Pregled mjeseca&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} color="inherit" /></p>
                </div>
                <div className={styles.month_hikings_container_no}>
                    <p>Nema izleta za ovaj mjesec.</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div inputColor={monthColor} className={styles.month_container} >
                <div className={styles.month_header}>
                    <p className={styles.month_name}>{monthName}</p>
                    <p className={styles.month_details} onClick={ onClickEvent }>Pregled mjeseca&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight} color="inherit" /></p>
                </div>
                <div className={styles.month_hikings_container}>
                    {hikingLocations.slice(0, numberOfMonths).map(({date}) => (
                        <CardMonthDay monthColor={monthColor} day={date}/>
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default CardMonth