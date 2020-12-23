import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import ContentCard from "../components/ContentCard"
import * as images from "../components/Images/Tecajevi"

import styles from "./Tecajevi.module.css"


const TecajeviPage = () => (
  <HeaderFooterLayout activeTab="Tečajevi">
    <div className={styles.page}>
      <div className={styles.deck}>
        <ContentCard className={styles.card} Image={images.Prva}   Direction={"column"} Text={"Pobijedite strah of visine"} />
        <ContentCard Image={images.Druga}  Direction={"column"} Text={"Naučite vrijednosti timskog rada"}/>
        <ContentCard Image={images.Treca}  Direction={"column"} Text={"Osvjestite svoje tijelo"} />
      </div>
      <div className={styles.deck}>
        <ContentCard Border={true} Image={images.Dvorana}  Direction={"row"} Text={"Dvorana"}  />
        <ContentCard Border={true} Image={images.Teren}    Direction={"row"} Text={"Teren"} />
      </div>
    </div>

  </HeaderFooterLayout>
)

export default TecajeviPage