import React from 'react'
import styles from './style.module.css'
import Logoimg from './../../images/new-logo.svg'
import { navigate } from 'gatsby'

const Logo = () => (
    <img onClick={ () => navigate("/") } className={styles.logo} src={Logoimg} alt=''></img>
)

export default Logo