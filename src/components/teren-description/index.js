import React from "react"
import styles from "./style.module.css"
import buttonstyle from "../CustomButton/style.module.css"
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
                <p>Pročitajte više</p>
                <Button page={"/locationmap"} action={()=>{}} text="Prijavi se"  />
            </div>
        </div>
        <GradientImage ImageName={activeLocation}/>
    </div>
)

export default TerenDescription