import React from 'react'
import Footer from '../modules/footer'
import Header from '../modules/header'
import styles from './style.module.css'

const HeaderFooterLayout = ({children, activeTab}) => (
    <div className={styles.site}>
        <Header activeTab={activeTab}/>
            <div className={styles.site_content}>{children}</div>
        <Footer/>
    </div>
)

export default HeaderFooterLayout