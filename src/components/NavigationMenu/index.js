import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'
import { navTabs } from '../../constants/constant'

const NavigationMenu = ({activeTab}) => (
   <nav className={styles.navigationMenu}>
      {navTabs.map(({tab, to}) => (
      <Link to={to} >
          <li className={ (tab === activeTab) ? styles.active : ''}>{tab}</li>
      </Link>)
    )}
    </nav>
  )

export default NavigationMenu