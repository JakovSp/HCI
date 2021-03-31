import React,{useState, useEffect} from "react"
import styles from "./style.module.css"
import ContentCard from "../../../components/ContentCard"
import * as images from "../../../components/Images/Dvorana"
import {Desc1,Desc2} from "../../../components/CardDescription/dvoranadesc"

const DvoranaForm = () => {
    const [showimage, setShowImage] = useState(window.matchMedia("(min-width: 1024px)").matches)

    function QueryResize(){
        if(window.matchMedia("(max-width: 1024px)").matches){
            setShowImage(false)
        }else{
            setShowImage(true)
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", QueryResize)
        return () => { window.removeEventListener("resize",QueryResize)}
    },[])
    
    return (
    <div className={styles.dvorane}>
        <ContentCard className={styles.deck} Border={true} Direction={"row"} Image={ showimage? images.Dvorana1 : () => <div/>} Text={<Desc1/>} />
        <ContentCard className={styles.deck} Border={true} Direction={"row-reverse"} Image={ showimage? images.Dvorana2 : () => <div/>} Text={<Desc2/>} />
    </div>
)}


export default DvoranaForm