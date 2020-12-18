// Za sad nek samo stoji "Prijava" pa ćemo kasnije popunit sa imenima i dodat košaricu
import React from 'react'
import Button from '../button'
import styles from './style.module.css'

const ProfileNav = ({loggedIn}) => (
    <section className={styles.profile}>
    {/* <li> Košarica </li> */}
    <Button style={styles.login_button} text="Prijava"/>
    </section>
)

export default ProfileNav