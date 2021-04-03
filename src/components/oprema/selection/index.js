import React from 'react'
import styles from "./style.module.css"
import CardGear from "../../card-gear"

const SelectionForm = ({list, setList})=>{
    return(
    <div className={styles.selection}>
        {list.map(item => 
            <div className={styles.element} >
                <CardGear Item={item} />
            </div>
        )}
    </div>
)}

export default SelectionForm