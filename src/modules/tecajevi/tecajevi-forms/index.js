import React,{useEffect, useState } from "react"
import styles from "./style.module.css"
import ContentCard from "../../../components/ContentCard"
import TecajeviTop from "../../../components/Images/Tecajevi/Top"
import TecajeviBottom from "../../../components/Images/Tecajevi/Bottom"

const Tabs=["Dvorana","Literatura","Teren"]

const TecajeviForm = ({selected, setSelected}) => {

    const[cardtype, setCardType] = useState(() => { if(window.matchMedia("(max-width: 860px)").matches){ return "row" } else {return "column"}})
    function QueryResize(){
        if(window.matchMedia("(max-width: 860px)").matches){
            setCardType("row")
        }else{
            setCardType("column")
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize", QueryResize)
        return () => { window.removeEventListener("resize",QueryResize)}
    },[])

    return (
    <div className={styles.page}>
        <div className={styles.deck}>
            <ContentCard Border={false} Direction={cardtype} Image={ () => <TecajeviTop ImageName={"Prva"}  width={"20vw"} />}  Text={"Pobijedite strah od visine"} />
            <ContentCard Border={false} Direction={cardtype} Image={ () => <TecajeviTop ImageName={"Druga"} width={"20vw"}  />} Text={"Naučite vrijednosti timskog rada"}/>
            <ContentCard Border={false} Direction={cardtype} Image={ () => <TecajeviTop ImageName={"Treca"} width={"20vw"}  />} Text={"Osvjestite svoje tijelo"}/>
        </div>
        <div className={styles.deck} >
            {Tabs.map(title => 
                    <ContentCard action={ () => setSelected(title) } Border={true} Direction={"row"} Image={ () => <TecajeviBottom ImageName={title} />}   Text={title} />
                )}

        </div>
    </div>
)}

export default TecajeviForm