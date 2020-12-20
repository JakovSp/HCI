import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import ColumnCard from "../components/ContentCard/ColumnCard"
import RowCard   from "../components/ContentCard/RowCard"
import Prva from "../components/Images/Tecajevi/Prva"
import Druga from "../components/Images/Tecajevi/Druga"
import Treca from "../components/Images/Tecajevi/Treca"
import Dvorana from "../components/Images/Tecajevi/Dvorana"
import Teren from "../components/Images/Tecajevi/Teren"

import styles from "./Tecajevi.module.css"


const TecajeviPage = () => (
  <HeaderFooterLayout activeTab="Tečajevi">
    <div className={styles.page}>
      <div className={styles.deck}>
        <ColumnCard Image={Prva} Text={"Pobijedite strah of visine"} />
        <ColumnCard Image={Druga} Text={"Naučite vrijednosti timskog rada"} />
        <ColumnCard Image={Treca} Text={"Osvjestite svoje tijelo"} />
      </div>
      <div className={styles.deck}>
        <RowCard Image={Dvorana} Text={"Dvorana"}/>
        <RowCard Image={Teren} Text={"Teren"} />
      </div>
    </div>

  </HeaderFooterLayout>
)

export default TecajeviPage