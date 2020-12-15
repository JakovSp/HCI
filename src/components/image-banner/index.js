import React from 'react'
import styles from './style.module.css'
import Logoimg from './../../images/planina.jpg'

const BannerImage = () => (
    <img className={styles.image} src={Logoimg} alt=''></img>
)

export default BannerImage