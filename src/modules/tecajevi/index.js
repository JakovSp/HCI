import React,{useState} from "react"
import styles from "./style.module.css"
import SectionTitle from '../../components/section-title'
import Courses from '../../components/courses'

const TecajeviMain = () => (
    <div className={styles.page}>
      <SectionTitle title="Tečajevi" subtitle="Prijavite se naše tečajeve i naučite se penjati"/>
      <Courses />
    </div>
)

export default TecajeviMain