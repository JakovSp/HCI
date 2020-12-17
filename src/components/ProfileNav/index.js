// Za sad nek samo stoji "Prijava" pa ćemo kasnije popunit sa imenima i dodat košaricu
import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'

const ProfileNav = ({loggedIn}) => (
    <section className={styles.profile}>
    {/* <li> Košarica </li> */}
    <Button variant="primary" className={styles.login_button}>Prijava</Button>
    </section>
)

export default ProfileNav