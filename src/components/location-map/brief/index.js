import React, {useState} from "react"
import styles from "./style.module.css"
import Brief from "./description"

const levels = ["Početnički", "Umjereno", "Napredno"]

const BriefForm = ({Location}) =>{ 
    const [radio, setRadio] = useState(0)
    return (
    <div className={styles.brief}>
        <div className={styles.selector} >
            {levels.map( el =>
                <div style={{display: "flex", flexDirection:"row"}} >
                    <label className={styles.container} onClick={()=> setRadio(levels.findIndex(element => element == el))} >
                        <input type="radio" name="radio"/>
                        <span className={styles.checkmark} ></span>
                    </label>
                    {el}
                </div>
            )}
        </div>
        { Brief[Location][radio] }
    </div>
)}

export default BriefForm