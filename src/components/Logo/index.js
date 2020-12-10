import React from 'react'
import styles from './style.module.css'
import Logoimg from './../../images/new-logo.svg'

const Logo = () => (
    <img className={styles.logo} src={Logoimg}></img>
)

export default Logo