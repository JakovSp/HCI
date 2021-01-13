import React from 'react'
import { Link } from 'gatsby'

const Button = ({text, style, page, action}) => (
    <Link to={page} onClick={ action } className={style}>{text}</Link>
)

export default Button