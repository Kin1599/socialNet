import React from 'react'
import cl from "./LoginPage.module.scss"

function LoginPage() {
  return (
    <div className={cl.loginPage}>
        <h2 className={cl.loginPage_header}>Log in</h2>
        <div className={cl.loginPage_inputs}>
            <input type="text" placeholder='name@gmail.com' className={cl.input}/>
            <input type="text" placeholder='Enter your password' className={cl.input}/>
            <div className={cl.loginPage_more}>
                <span className={cl.loginPageMore_forgotPassword}>Forgot Password?</span>
                <div>
                    <input type="checkbox"/>
                    <span>remember me</span>
                </div>
            </div>
        </div>
        <div>
            <button className={cl.loginPage_btn}>Log in</button>
            <div className={cl.loginPage_registration}>
                don't have an account yet? <a href='/'>Sign up</a>
            </div>
        </div>
    </div>
  )
}

export default LoginPage