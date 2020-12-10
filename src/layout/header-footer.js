import React from 'react'
import ContactBar from '../components/contact-bar'
import Footer from '../modules/footer'

const HeaderFooterLayout = ({children}) => (
    <>
        <ContactBar/>
            {children}
        <Footer/>
    </>
)

export default HeaderFooterLayout