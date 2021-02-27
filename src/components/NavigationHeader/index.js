import React from 'react'
import styles from './style.module.css'
import Navigation from '../Navigation/index.js'
import ProfileNav from '../ProfileNav/index.js'
import HamburgerMenu from '../hamburger-menu/index.js'

const NavigationHeader = ({activeTab}) => (
  <section className={styles.header}  >
    <Navigation activeTab={activeTab}/>
    <ProfileNav />
    <HamburgerMenu />
  </section>
)

export default NavigationHeader