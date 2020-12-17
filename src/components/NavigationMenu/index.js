import React,{useState} from 'react'
import styles from './style.module.css'
import DropDown from '../Dropdown'

import * as constants from '../../constants/constant.js'

const NavigationMenu = ({activeTab}) => (
   <nav className={styles.navigationMenu}>
      <ul>
      { constants.navTabs.map(tab => <li >
        <p className={tab === activeTab ? styles.active : ''} >{tab}</p>
        { constants.dropDownTabs.includes(tab) ?
          <DropDown list={constants.DropHash[tab]} /> : 
          ''}
        </li> 
      )}
      </ul>
    </nav>
  )

export default NavigationMenu