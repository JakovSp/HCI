import React from 'react'
import styles from './style.module.css'
import Logoimg from './../../images/Logo.png'

const Logo = () => (
  <section className={styles.logo}>
      <img src={Logoimg}></img>
  </section>
)

export default Logo