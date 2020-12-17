import React from 'react'
import Footer from '../modules/footer'
import Header from '../modules/header'

const HeaderFooterLayout = ({children, activeTab}) => (
    <>
        <Header activeTab={activeTab}/>
            {children}
        <Footer/>
    </>
)

export default HeaderFooterLayout