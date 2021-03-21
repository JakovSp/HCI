import React from 'react'
import styles from "./style.module.css"
import * as images from "../../components/Images/Teren/Header"
import {Locations} from "../../constants/constant"

const TerenHeader = ({selected,setSelected}) =>(
    <div className={styles.header} >
    {Locations.map(el => <>
        {el === selected ?
        <li style={{marginTop: '20px'}} className={styles.active} ><images.Selected ImageName={el}/><p style={{marginTop: '10px', marginBottom: '10px'}}>{el}</p></li>: 
        <li style={{marginTop: '20px'}} onClick={() => setSelected(el)} ><images.Unselected ImageName={el} /><p style={{marginTop: '10px', marginBottom: '10px'}}>{el}</p></li>}
        </>
    )}

    </div>
)

export default TerenHeader