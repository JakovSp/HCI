import React, {useState} from "react"
import styles from "./style.module.css"
import Brief from "./description"

const BriefForm = ({Location}) =>{ 
    const [radio, setRadio] = useState(0)
    return (
    <div className={styles.brief}>
        <div className={styles.selector} >
            <label class="container" onClick={()=> setRadio(0)} >
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
                Početnički
            </label>
            <label class="container" onClick={()=> setRadio(1)} >
                <input type="radio" value="Umjereno" name="radio" />
                <span class="checkmark"></span>
                Umjereno
            </label>
            <label class="container" onClick={()=> setRadio(2)} >
                <input type="radio" value="Napredno" name="radio" />
                Napredno
            </label>
        </div>
        { Brief[Location][radio] }
    </div>
)}

export default BriefForm