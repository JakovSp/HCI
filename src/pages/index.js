import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import HomePageBanner from "../modules/home-page-banner"
import HomePageNews from "../modules/home-page-news"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="Naslovna">
    <HomePageBanner/>
    <HomePageNews/>
  </HeaderFooterLayout>
)

export default IndexPage
