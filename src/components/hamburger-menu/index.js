import React, { useState } from 'react'
import styles from './style.module.css'
import cx from 'classnames'
import { DrawerMenuContext } from './../../layout/header-footer'

const HamburgerMenu = () => {

    return(
        <DrawerMenuContext.Consumer>
            {
                ({isDrawerOpen, toggleDrawer}) =>  (
                    <div className={cx(styles.nav, (isDrawerOpen) ? styles.open : '')} onClick={ toggleDrawer }>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )
            }
        </DrawerMenuContext.Consumer>
    )
}  

export default HamburgerMenu