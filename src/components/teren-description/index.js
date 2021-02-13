import React from "react"
import styles from "./style.module.css"
import GradientImage from "../Images/Teren/Description"
import Button from "../CustomButton"
import LocationDesc from "./descriptiontext"

const TerenDescription = ({activeLocation}) => (
    <div className={styles.imageDescription} >
        <div className={styles.description}>
            <div className={styles.text}>
                { LocationDesc[activeLocation]}
            </div>
            <div className={styles.bottom}>
                <p>Pročitajte više</p>
                <Button Text={"Prijavi se"}/>
            </div>
        </div>
        <GradientImage ImageName={activeLocation}/>
    </div>
)

export default TerenDescription