import React from 'react'
import styles from './style.module.css'
import Button from '../button'

const BannerInformationBlock = () => (
    <main className={styles.container}>
        <h1>Odlučili ste se za neki planinarski pothvat? Iznajmite opremu kod nas pri dostupnim cijenama!</h1>
        <Button style={styles.information_block_button} text="Najam opreme"/>
    </main>
)

export default BannerInformationBlock
