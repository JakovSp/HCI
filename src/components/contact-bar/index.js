import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactBar = () => (
    <main className={styles.container}>
        <FontAwesomeIcon icon={faEnvelope} color="white" />
        <span className={styles.contact_text}>info@rockreacija.hr</span>
        <FontAwesomeIcon icon={faPhone} color="white"/>
        <span className={styles.contact_text}>+0385911122334</span>
    </main>
)

export default ContactBar