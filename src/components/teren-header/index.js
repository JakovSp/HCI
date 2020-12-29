import React from 'react'
import styles from "./style.module.css"
import * as images from "../../components/Images/Teren/Header"
import {Locations} from "../../constants/constant"

const TerenHeader = ({selected,setSelected}) =>(
    <div className={styles.header} >
    {Locations.map(el => <>
        {el === selected ?
        <li className={styles.active} ><images.Selected ImageName={el} /><p>{el}</p></li>: 
        <li onClick={() => setSelected(el)} ><images.Unselected ImageName={el} /><p>{el}</p></li>}
        </>
    )}

    </div>
)

export default TerenHeader