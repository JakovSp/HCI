import React from 'react'
import styles from './style.module.css'
import Navigation from '../Navigation/index.js'
import ProfileNav from '../ProfileNav/index.js'

const NavigationHeader = ({activeTab}) => (
  <section className={styles.header}  >
    <Navigation  activeTab = "Naslovna"/>
    <ProfileNav />
  </section>
)

export default NavigationHeader