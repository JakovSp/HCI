import React from 'react'
import styles from './style.module.css'
import NavigationMenu from '../NavigationMenu/index.js'
import Logo from '../Logo/index.js'

const Navigation = ({activeTab}) => (
  <section className={styles.navigation}  >
      <Logo className={styles.logo}/>
      <NavigationMenu className={styles.navigationmenu} activeTab={activeTab} />
  </section>
)

export default Navigation