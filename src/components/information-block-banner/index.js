import React from 'react'
import styles from './style.module.css'
import Button from '../button'

const BannerInformationBlock = () => (
    <main className={styles.container}>
        <h1>Postanite član Planinarskog kluba Rockreacija već danas i uživajte u brojnim pogodnostima.</h1>
        <Button style={styles.information_block_button} text="Učlani se"/>
    </main>
)

export default BannerInformationBlock
