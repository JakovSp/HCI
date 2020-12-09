import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { navTabs } from '../../constants/constant.js'
import { dropDownTabs } from '../../constants/constant.js'


const NavigationMenu = ({activeTab}) => (
    <nav className={styles.navigationMenu}>
      <ul>
      {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}>
        {tab}
        { dropDownTabs.includes(tab) ? 
          <FontAwesomeIcon icon={faChevronDown} style={  {paddingLeft: "5px"}} /> : 
          ''}
        </li>
      )}
      </ul>
    </nav>
  )

export default NavigationMenu