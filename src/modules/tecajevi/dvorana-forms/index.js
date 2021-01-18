import React from "react"
import styles from "./style.module.css"
import ContentCard from "../../../components/ContentCard"
import * as images from "../../../components/Images/Dvorana"
import {Desc1,Desc2} from "../../../components/CardDescription/dvoranadesc"

const DvoranaForm = () => (

<div className={styles.page}>
    <div className={styles.deck} >
        <ContentCard Border={true} Direction={"row"} Image={images.Dvorana1} Text={<Desc1/>} />
    </div>
    <div className={styles.deck} >
        <ContentCard Border={true} Direction={"row-reverse"} Image={images.Dvorana2} Text={<Desc2/>} />
    </div>
</div>
)

export default DvoranaForm