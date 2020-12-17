// Za sad nek samo stoji "Prijava" pa ćemo kasnije popunit sa imenima i dodat košaricu
import React from 'react'
import styles from './style.module.css'

const ProfileNav = ({loggedIn}) => (
    <section className={styles.profile}>
    {/* <li> Košarica </li> */}
    <a variant="primary" className={styles.login_button}>Prijava</a>
    </section>
)

export default ProfileNav