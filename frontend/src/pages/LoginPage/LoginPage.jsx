import React from 'react'
import cl from "./LoginPage.module.scss"
import LoginForm from '../../widgets/LoginForm/LoginForm'

function LoginPage() {
  return (
    <div className={cl.loginPage}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage