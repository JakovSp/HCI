import React from 'react'
import styles from './style.module.css'

const ComboboxItem = ({category, setSelected, selected}) => (
    <li onClick={ setSelected } className={`${styles.comboboxItem} ${selected ? styles.selected : ''}`} >
        <span>{category}</span>
    </li>
)
 
export default ComboboxItem