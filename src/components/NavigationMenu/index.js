import React from 'react'
 
import styles from './style.module.css'

const navTabs = ['Naslovna', 'Tečajevi', 'Oprema', 'Izleti', 'Arhiva', 'Blog']

const NavigationMenu = ({activeTab}) => (
    <nav className={styles.navigationMenu}>
      <ul>
      {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}>
        {tab}</li>
      )}
      </ul>
    </nav>
  )

export default NavigationMenu