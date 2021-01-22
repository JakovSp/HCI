import React from 'react'
import styles from './style.module.css'
import Button from '../button'

const CoursesInformation = () => (
    <main className={styles.container}>
        <h1 className={styles.courses_header}>Početnik ste i mislite da je pravo vrijeme da naučite kako navigirati planinama?<br></br>Prijavi se na naše tečajeve.</h1>
        <Button page={"/courses"} style={styles.courses_button} text="Prijavi se"/>
    </main>
)

export default CoursesInformation
