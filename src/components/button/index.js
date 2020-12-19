import React from 'react'
import styles from './style.module.css'

const Button = ({text, style}) => (
    <a href="#" className={style}>{text}</a>
)

export default Button