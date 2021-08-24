import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import CustomErrorPage from "../modules/error-page"
import SEO from "../components/SEO/seo"

const ErrorPage = () => (
  <HeaderFooterLayout>
      <SEO title="Ne postojeća stranica :(" />
      <CustomErrorPage/>
  </HeaderFooterLayout>
)

export default ErrorPage
