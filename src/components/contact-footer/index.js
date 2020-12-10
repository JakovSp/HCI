import React from 'react'
import styles from './style.module.css'

const ContactFooter = () => (
    <main className={styles.container}>
        <h2 className={styles.header}>Kontakt</h2>
        <ul className={styles.contact_list}>
            <li>Ulica: Ruđera Boškovića 32</li>
            <li>Grad: Split</li>
            <li>Poštanski broj: 21000</li>
            <li>E-mail: info@rockreacija.hr</li>
            <li>Kontakt broj: +0385911122334</li>
        </ul>
    </main>
)

export default ContactFooter