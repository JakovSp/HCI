import React from 'react'
import SectionTitle from '../../components/section-title'
import styles from './style.module.css'
import RegistrationForm from './../../components/registration-form'

const AuthenticationRegistration = () => (
    <main className={styles.page_container}>
        <SectionTitle title="Registracija" subtitle="Registrirajte se za dodatne mogućnost"/>
        <RegistrationForm />
    </main>
)

export default AuthenticationRegistration