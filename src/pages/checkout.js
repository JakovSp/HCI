import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import CheckoutFrom from "../modules/checkout-form"
import SEO from "../components/SEO/seo"

const CheckoutPage = () => (
  <HeaderFooterLayout activeTab="">
      <SEO title="Košarica" />
      <CheckoutFrom />
  </HeaderFooterLayout>
)

export default CheckoutPage
