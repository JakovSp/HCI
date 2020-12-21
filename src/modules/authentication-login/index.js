import React from 'react'
import SectionTitle from '../../components/section-title'
import styles from './style.module.css'
import LoginForm from './../../components/login-form'

const AuthenticationLogin = () => (
    <main className={styles.page_container}>
        <SectionTitle title="Prijava" subtitle="Prijavite se za dodatne mogućnost"/>
        <LoginForm />
    </main>
)

export default AuthenticationLogin