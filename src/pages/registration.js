import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import AuthenticationRegistration from "../modules/authentication-registration"
import SEO from "../components/SEO/seo"

const RegistrationPage = () => (
  <HeaderFooterLayout activeTab="">
    <SEO title="Registracija" />
    <AuthenticationRegistration />
  </HeaderFooterLayout>
)

export default RegistrationPage
