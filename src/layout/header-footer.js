import React from 'react'
import ContactBar from '../components/contact-bar'
import Footer from '../modules/footer'
import NavigationHeader from '../components/NavigationHeader'

const HeaderFooterLayout = ({children}) => (
    <>
        <ContactBar/>
        <NavigationHeader />
            {children}
        <Footer/>
    </>
)

export default HeaderFooterLayout