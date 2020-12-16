import React from 'react'
import Footer from '../modules/footer'
import Header from '../modules/header'

const HeaderFooterLayout = ({activeTab},{children}) => (
    <>
        <Header activeTab={activeTab}/>
            {children}
        <Footer/>
    </>
)

export default HeaderFooterLayout