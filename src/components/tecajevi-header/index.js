import React from "react"
import styles from "./styles.module.css"
import HeaderImage from "../Images/Tecajevi/HeaderImage"
import Button from "../button"

const TecajeviHeader = () => (
    <div className={styles.overlay} >
    <HeaderImage className={styles.image} />
        <div className={styles.description} >
            <p>
                Obuka planinarenja, uvod u opremu, navigacija ...
            </p>
            <Button text={"Saznajte Više"} style={styles.header_button} />
        </div>
    </div>
  )
export default TecajeviHeader