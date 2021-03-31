import React,{ useState, useEffect } from "react"
import styles from "./style.module.css"
import GradientImage from "../Images/Teren/Description"
import Button from "../button"
import LocationDesc from "./descriptiontext"


const TerenDescription = ({activeLocation}) => {
    const [desktopmode, setDesktopmode] = useState(window.matchMedia("(min-width: 1024px)").matches)
    
    function QueryResize(){
        if(window.matchMedia("(max-width: 1024px)").matches){   
            setDesktopmode(false)
        }else{
            setDesktopmode(true)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", QueryResize)
        return () => { window.removeEventListener("resize",QueryResize)}
    },[desktopmode])
    
    return (
    <div className={styles.imageDescription} >
        <div style={{ display: desktopmode ? "flex" : "none"}} >
            <GradientImage ImageName={activeLocation} width={"750px"}/>
            <div className={styles.transition} ></div>
        </div>
        <div className={styles.description}>
            <div className={styles.text}>
                { LocationDesc[activeLocation]}
            </div>
            <div className={styles.bottom}>
            <Button text="Prijavi se" style={styles.button} page="" action={ () => {} }/>
            </div>
        </div>
    </div>
)}

export default TerenDescription