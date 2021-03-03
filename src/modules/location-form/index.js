import React,{ useState,useEffect } from "react"
import styles from "./style.module.css"
import { useGlobalState } from "../../global/state"
import MapPage from "../../components/Map"
import BriefForm from "../../components/location-map/brief"
import Description from "../../components/location-map/description"

const LocationForm = () =>{
    const [location,setLocation] = useGlobalState("location")
    let width = "55vw"
    let height = "65vh"
    
    function QueryResize(){
        if(window.matchMedia("(max-width: 900px)").matches){   
            width = "85vw"
            height = "55vh"
        }else{
            width = "55vw"
            height = "65vh"
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", QueryResize)
        return () => { window.removeEventListener("resize",QueryResize)}
    },[])
    
    return (
    <div className={styles.page} > 
        <h2>{location}</h2>
        <div className={styles.mapheader} >
            <MapPage Location={location} mapwidth={width} mapheight={height} />
            <BriefForm Location={location} />
        </div>
        <hr/>
        {Description[location]}
    </div>
   
)}

export default LocationForm