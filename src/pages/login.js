import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import AuthenticationLogin from "../modules/authentication-login"
import SEO from "../components/SEO/seo"

const LoginPage = () => (
  <HeaderFooterLayout activeTab="">
    <SEO title="Prijava" />
    <AuthenticationLogin />
  </HeaderFooterLayout>
)

export default LoginPage
