import React, { useState, createContext } from 'react'
import DrawerMenu from '../modules/drawer-menu'
import Footer from '../modules/footer'
import Header from '../modules/header'
import styles from './style.module.css'

export const DrawerMenuContext = createContext({
    isDrawerOpen: false,
    toggleDrawer: () => {}
}
)

const HeaderFooterLayout = ({children, activeTab}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState()
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <DrawerMenuContext.Provider value={{isDrawerOpen, toggleDrawer}}>
            <div className={styles.site}>
                <Header activeTab={activeTab}/>
                <div className={styles.site_content}>
                    <DrawerMenu activeTab={activeTab}/>
                    <div style={{ display: (isDrawerOpen) ? 'none' : 'block' }}>{children}</div>
                </div>
                <Footer/>
            </div>
        </DrawerMenuContext.Provider>
    )
}

export default HeaderFooterLayout