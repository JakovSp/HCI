import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const BannerInformationBlock = () => (
    <main className={styles.container}>
        <h2>Postanite član Planinarskog kluba Rockreacija već danas i uživajte u brojnim pogodnostima.</h2>
        <a className={styles.button_custom}>
            <span>Učlani se</span>
            <FontAwesomeIcon className={styles.arrow} icon={faChevronRight} color="white" />
        </a>
    </main>
)

export default BannerInformationBlock
