import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'
import { navTabs } from '../../constants/constant'

const MenuFooter = () => (
    <main className={styles.container}>
        <h2 className={styles.header}>Menu</h2>
        <nav className={styles.menu_list}>
            {navTabs.map(({tab, to}) => (
                <Link to={to} >
                    <li><span>{tab}</span></li>
                </Link>)
            )}
        </nav>
    </main>
)

export default MenuFooter