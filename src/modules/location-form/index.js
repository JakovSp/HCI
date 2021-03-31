import React,{ useState,useEffect } from "react"
import styles from "./style.module.css"
import MapPage from "../../components/Map"
import BriefForm from "../../components/location-map/brief"
import Description from "../../components/location-map/description"

const LocationForm = ({location}) =>{
    const [mapWidth, setMapWidth] = useState(() => {if(window.matchMedia("(max-width: 1024px)").matches){return "85vw"}else{ return "55vw"}})
    const [mapHeight, setMapHeight] = useState(() => {if(window.matchMedia("(max-width: 1024px)").matches){return "55vh"}else{ return "65vh"}})

    function QueryResize(){
        if(window.matchMedia("(max-width: 1024px)").matches){   
            setMapWidth("85vw")
            setMapHeight("55vh")
        }else{
            setMapWidth("55vw")
            setMapHeight("65vh")
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", QueryResize)
        return () => { window.removeEventListener("resize",QueryResize)}
    },[mapWidth,mapHeight])
    
    return (
    <div className={styles.page} > 
        <div className={styles.mapheader} >
            <MapPage Location={location} mapwidth={mapWidth} mapheight={mapHeight} />
            <BriefForm Location={location} />
        </div>
        <hr/>
        {Description[location]}
    </div>
   
)}

export default LocationForm