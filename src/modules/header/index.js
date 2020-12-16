import React from 'react'
import ContactBar from '../../components/contact-bar'
import NavigationHeader from '../../components/NavigationHeader'

const Header = ({activeTab}) => (
    <header>
        <ContactBar />
        <NavigationHeader activeTab={activeTab} />
    </header>
)

export default Header
