import React from 'react'
import styles from './style.module.css'

const MenuFooter = () => (
    <main className={styles.container}>
        <h2 className={styles.header}>Menu</h2>
        <ul className={styles.menu_list}>
            <li>Naslovnica</li>
            <li>Izleti</li>
            <li>Oprema</li>
            <li>Tečajevi</li>
            <li>Arhiva</li>
            <li>Blog</li>
        </ul>
    </main>
)

export default MenuFooter