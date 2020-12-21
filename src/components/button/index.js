import React from 'react'
import { Link } from 'gatsby'

const Button = ({text, style}) => (
    <Link to="/login" className={style}>{text}</Link>
)

export default Button