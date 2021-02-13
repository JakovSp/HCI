import React from 'react'
import styles from './style.module.css'
import Logoimg from './../../images/new-logo.svg'
import { navigate } from 'gatsby'

const Logo = () => (
    <img style={{width: '30%', height: '50px'}} onClick={ () => navigate("/") } className={styles.logo} src={Logoimg} alt=''></img>
)

export default Logo