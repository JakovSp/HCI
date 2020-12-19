import React from 'react'
import styles from './style.module.css'

const SectionTitle = ({title, subtitle}) => (
    <main className={styles.section_title_container}>
        <h2 style={{margin: 0}}>{title}</h2>
        <p className={styles.section_desc}>{subtitle}</p>
    </main>
    
)

export default SectionTitle