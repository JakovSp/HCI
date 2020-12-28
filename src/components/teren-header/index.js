import React from 'react'
import styles from "./style.module.css"
import * as images from "../../components/Images/Teren/Header"
import {Locations} from "../../constants/constant"

const TerenHeader = ({activeTab}) =>(
    <div className={styles.header} >
    {Locations.map(el => <>
        {el === activeTab ?
        <li className={styles.active} ><images.Selected ImageName={el} /><p>{el}</p></li>: 
        <li><images.Unselected onClick={() => activeTab = el} ImageName={el} /><p>{el}</p></li>}
        </>
    )}

    </div>
)

export default TerenHeader