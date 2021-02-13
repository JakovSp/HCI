import React, {useState} from "react"
import HeaderFooterLayout from "../layout/header-footer"
import TecajeviMain from "../modules/tecajevi"

const TecajeviPage = () => (
    <HeaderFooterLayout activeTab="Tečajevi">
      <TecajeviMain />
    </HeaderFooterLayout> 
  )
export default TecajeviPage