import React from 'react'
<<<<<<< HEAD
import ContactBar from '../components/contact-bar'
import Footer from '../modules/footer'

const HeaderFooterLayout = ({children}) => (
    <>
        <ContactBar/>
=======
import Footer from '../modules/footer'
import Header from '../modules/header'

const HeaderFooterLayout = ({activeTab},{children}) => (
    <>
        <Header activeTab={activeTab}/>
>>>>>>> development
            {children}
        <Footer/>
    </>
)

export default HeaderFooterLayout