import React,{useState} from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const DropDown = ({list}) => {
    const [open, setOpen] = useState(false)
    return (
        <section>
            <FontAwesomeIcon icon={faChevronDown} className={styles.dropdown} onClick={() => setOpen(!open) } />
            <ul style={{display: open ? 'flex' : 'none'}}>
                { list.map(el => <li>{el}</li> )}
            </ul>
        </section>
    )
}

export default DropDown