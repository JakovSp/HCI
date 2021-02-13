import React from 'react'
import Button from '../../components/button'
import styles from './style.module.css'

const CustomErrorPage = () => (
    <main className={styles.page_container}>
        <h2>Čini se da ste se izgubili!</h2>
        <p style={{marginBottom: '30px'}}>Niste pratili naše markacije i zalutali ste u nepoznato mjesto.</p>
        <Button text="Zovite HGSS i vratite se doma" style={styles.button} page="/" action={ () => {} }/>
    </main>
)

export default CustomErrorPage