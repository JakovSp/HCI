import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import AuthenticationRegistration from "../modules/authentication-registration"

const RegistrationPage = () => (
  <HeaderFooterLayout activeTab="">
    <AuthenticationRegistration />
  </HeaderFooterLayout>
)

export default RegistrationPage
