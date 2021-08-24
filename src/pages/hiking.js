import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import HikingList from "../modules/hiking-page-list"
import SEO from "../components/SEO/seo"

const HikingPage = () => (
  <HeaderFooterLayout activeTab="Izleti">
    <SEO title="Izleti" />
    <HikingList />
  </HeaderFooterLayout>
)

export default HikingPage
