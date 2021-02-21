import React from "react"
import styles from "./style.module.css"
import ContentCard from "../../../components/ContentCard"
import TecajeviTop from "../../../components/Images/Tecajevi/Top"
import TecajeviBottom from "../../../components/Images/Tecajevi/Bottom"
import {Desc1,Desc2} from "../../../components/CardDescription/tecajevidesc"

const Tabs=["Dvorana","Literatura","Teren"]

const TecajeviForm = ({selected,setSelected}) => (
    <div className={styles.page}>
        <div className={styles.deck}>
            <ContentCard Border={false} Direction={"column"} Image={ () => <TecajeviTop ImageName={"Prva"} />}  Text={<Desc1 Text="Pobijedite strah of visine" />} />
            <ContentCard Border={false} Direction={"column"} Image={ () => <TecajeviTop ImageName={"Druga"} />} Text={<Desc1 Text="Naučite vrijednosti timskog rada" /> }/>
            <ContentCard Border={false} Direction={"column"} Image={ () => <TecajeviTop ImageName={"Treca"} />} Text={<Desc1 Text="Osvjestite svoje tijelo" /> }/>

        </div>
        <div className={styles.deck2} >
            {Tabs.map(el => 
                <div onClick={() => setSelected(el)} >
                    <ContentCard Border={true} Direction={"row"} Image={ () => <TecajeviBottom ImageName={el} />}   Text={<Desc2 Text={el} />} />
                </div>
                )}

        </div>
    </div>
)

export default TecajeviForm