import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import Card from "../components/Card"
import Prva from "../components/Images/Tecajevi/Prva"
import Druga from "../components/Images/Tecajevi/Druga"
import Treca from "../components/Images/Tecajevi/Treca"
import styles from "./Tecajevi.module.css"

const TecajeviPage = () => (
  <HeaderFooterLayout activeTab="Tečajevi">
    <div className={styles.deck}>
      <Card Image={Prva} Text={"Pobijedite strah of visine"} />
      <Card Image={Druga} Text={"Naučite vrijednosti timskog rada"} />
      <Card Image={Treca} Text={"Osvjestite svoje tijelo"} />
    </div>
    <div>
      
    </div>

  </HeaderFooterLayout>
)

export default TecajeviPage