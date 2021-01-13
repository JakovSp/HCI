import React from 'react'
import styles from './style.module.css'

const ButtonGroup = ({children}) => (
    <main className={styles.group_container}>
        {children}
    </main>
    
)

export default ButtonGroup