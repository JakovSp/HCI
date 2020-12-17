import React,{useState} from 'react'
import styles from './style.module.css'

import * as constants from '../../constants/constant.js'

const NavigationMenu = ({activeTab}) => (
   <nav className={styles.navigationMenu}>
      <ul>
      { constants.navTabs.map(tab => 
        <li className={tab === activeTab ? styles.active : ''} >
        {tab}
        </li> 
      )}
      </ul>
    </nav>
  )

export default NavigationMenu