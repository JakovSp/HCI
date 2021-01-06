import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import HikingList from "../modules/hiking-page-list"

const HikingPage = () => (
  <HeaderFooterLayout activeTab="Izleti">
    <HikingList />
  </HeaderFooterLayout>
)

export default HikingPage
