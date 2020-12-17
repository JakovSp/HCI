import React,{useState} from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'

import * as constants from '../../constants/constant.js'

const NavigationMenu = ({activeTab}) => (
   <nav className={styles.navigationMenu}>
      <ul>
      { constants.navTabs.map(tab => 
      <Link to={tab} className={styles.tablink}>
        <li className={tab === activeTab ? styles.active : ''} >{tab}</li>
      </Link>
      )}
      </ul>
    </nav>
  )

export default NavigationMenu