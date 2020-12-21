import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import AuthenticationLogin from "../modules/authentication-login"

const LoginPage = () => (
  <HeaderFooterLayout activeTab="">
    <AuthenticationLogin />
  </HeaderFooterLayout>
)

export default LoginPage
