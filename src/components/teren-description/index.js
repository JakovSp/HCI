import React from "react"
import styles from "./style.module.css"
import GradientImage from "../Images/Teren/Description"
import Button from "../button"
import LocationDesc from "./descriptiontext"

const TerenDescription = ({activeLocation}) => (
    <div className={styles.imageDescription} >
        <div className={styles.description}>
            <div className={styles.text}>
                { LocationDesc[activeLocation]}
            </div>
            <div className={styles.bottom}>
            <Button text="Prijavi se" style={styles.button} page="" action={ () => {} }/>
            </div>
        </div>
    </div>
)

export default TerenDescription