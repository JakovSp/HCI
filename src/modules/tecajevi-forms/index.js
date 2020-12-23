import React from "react"
import styles from "./style.module.css"
import ContentCard from "../../components/ContentCard"
import * as images from "../../components/Images/Tecajevi"
import {Desc1,Desc2} from "../../components/CardDescription/tecajevidesc"

const TecajeviFrom = () => (
    <div className={styles.page}>
        <div className={styles.deck}>
            <ContentCard Direction={"column"} Image={images.Prva}  Text={<Desc1 Text="Pobijedite strah of visine" />} />
            <ContentCard Direction={"column"} Image={images.Druga} Text={<Desc1 Text="Naučite vrijednosti timskog rada" /> }/>
            <ContentCard Direction={"column"} Image={images.Treca} Text={<Desc1 Text="Osvjestite svoje tijelo" /> }/>
        </div>
        <div className={styles.deck}>
            <ContentCard Border={true} Direction={"row"} Image={images.Dvorana}     Text={<Desc2 Text="Dvorana" /> }  />
            <ContentCard Border={true} Direction={"row"} Image={images.Literatura}  Text={<Desc2 Text="Literatura" />} />
            <ContentCard Border={true} Direction={"row"} Image={images.Teren}       Text={<Desc2 Text="Teren" />} />
        </div>
    </div>
)

export default TecajeviFrom