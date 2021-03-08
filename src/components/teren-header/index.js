import React,{ useState, useEffect } from 'react'
import styles from "./style.module.css"
import * as images from "../../components/Images/Teren/Header"
import {Locations} from "../../constants/constant"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function rotate(index, inc){
    if(inc === 1 && index === 5){
        index=0
    } else if(inc === -1 && index === 0) {
        index=5
    }
    else{
        index+=inc
    }
    return index
}

const TerenHeader = ({selected,setSelected}) =>{
    const [desktopmode, setDesktopmode] = useState(window.matchMedia("(min-width: 1024px)").matches)
    let index = Locations.findIndex(element => element === selected)

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
    <div className={styles.header} >
        <div style={{visibility: desktopmode? "hidden" : "visible"}}><FontAwesomeIcon className={styles.arrow} size="3x" icon={faChevronLeft} onClick={() => {
                index = rotate(index, -1)
                setSelected(Locations[index])}}/></div>

        { desktopmode ? Locations.map(el => <>
                {el === selected ?
                <li className={styles.active} ><images.Selected ImageName={el} /><p>{el}</p></li>: 
                <li onClick={() => { setSelected(el) }}>
                    <images.Unselected ImageName={el} />
                    <p>{el}</p>
                </li>
                }</>) 
                : <li className={styles.active} ><images.Selected ImageName={selected} /><p>{selected}</p></li>
            }
        <div style={{visibility: desktopmode? "hidden" : "visible"}}><FontAwesomeIcon className={styles.arrow} size="3x" icon={faChevronRight} onClick={() => {
                index = rotate(index, 1)
                setSelected(Locations[index])}}/></div>
    </div>
)}

export default TerenHeader