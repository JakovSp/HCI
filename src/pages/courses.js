import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import TecajeviMain from "../modules/tecajevi"
import SEO from "../components/SEO/seo"

const TecajeviPage = () => (
    <HeaderFooterLayout activeTab="Tečajevi">
      <SEO title="Tečajevi" />
      <TecajeviMain />
    </HeaderFooterLayout> 
  )
export default TecajeviPage