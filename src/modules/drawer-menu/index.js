import React from 'react'
import styles from './style.module.css'
import { Link } from 'gatsby'
import { navTabs } from '../../constants/constant'
import { DrawerMenuContext } from './../../layout/header-footer'
import DrawerProfileNav from '../../components/DrawerProfileNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const DrawerMenu = ({activeTab}) => {

    return(
        <DrawerMenuContext.Consumer>
            {
                ({isDrawerOpen, toggleDrawer}) => (
                    <nav style={{ display: (isDrawerOpen) ? 'flex' : 'none' }} className={styles.navigationMenu}>
                        {navTabs.map(({tab, to}) => (
                        <Link to={to} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <li className={ (tab === activeTab) ? styles.active : ''}>{tab}</li>
                            <FontAwesomeIcon style={{marginRight: '35px'}} icon={faChevronRight} color="#004e7c" />
                        </Link>)
                        )}
                        <DrawerProfileNav />
                    </nav>
                )
            }
        </DrawerMenuContext.Consumer>
    )
}

export default DrawerMenu