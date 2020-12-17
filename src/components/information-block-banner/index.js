import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'

const BannerInformationBlock = () => (
    <main className={styles.container}>
        <h2>Postanite član Planinarskog kluba Rockreacija već danas i uživajte u brojnim pogodnostima.</h2>
        <Button variant="primary" className={styles.button_custom}>
            <span>Učlani se</span>
            <FontAwesomeIcon className={styles.arrow} icon={faChevronRight} color="white" />
        </Button>
    </main>
)

export default BannerInformationBlock
