import React from 'react'
import styles from './style.module.css'
import Logoimg from './../../images/new-logo.svg'
import LogoimgIcon from './../../images/new-logo-icon.svg'
import { navigate } from 'gatsby'

const Logo = () => (
    <main>
        <img style={{height: '50px'}} onClick={ () => navigate("/") } className={styles.logo1} src={Logoimg} alt=''></img>
        <img style={{height: '50px'}} onClick={ () => navigate("/") } className={styles.logo2} src={LogoimgIcon} alt=''></img>
    </main>
)

export default Logo