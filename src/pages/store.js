import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import OpremaForm from "../modules/oprema-form"
import SEO from "../components/SEO/seo"

const OpremaPage = () => (
  <HeaderFooterLayout activeTab="Oprema">
      <SEO title="Oprema" />
      <OpremaForm />
  </HeaderFooterLayout>
)

export default OpremaPage
