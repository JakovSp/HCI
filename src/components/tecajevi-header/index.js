import React from "react"
import styles from "./styles.module.css"
import HeaderImage from "../Images/Tecajevi/HeaderImage"
import CustomButton from "../CustomButton"

const TecajeviHeader = () => (
    <div className={styles.overlay} >
    <HeaderImage className={styles.image} />
        <div className={styles.description} >
            <p>
                Obuka planinarenja, uvod u opremu, navigacija ...
            </p>
            <CustomButton Text={"Saznajte Više"} />
        </div>
    </div>
  )
export default TecajeviHeader