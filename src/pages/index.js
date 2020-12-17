import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import HomePageBanner from "../modules/home-page-banner"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="Naslovna">
    <HomePageBanner/>
  </HeaderFooterLayout>
)

export default IndexPage
