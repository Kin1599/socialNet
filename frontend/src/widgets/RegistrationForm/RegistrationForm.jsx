import React, { useState } from 'react'
import cl from './RegistrationForm.module.scss'
import InputForm from '../../shared/modules/InputForm/InputForm'
import BtnForm from '../../shared/modules/BtnForm/BtnForm'

function RegistrationForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    console.log("Registration with in: ", { email, password })
  }

  return (
    <div className={cl.registrationForm}>
        <div className={cl.registrationForm__title}>Registration</div>
        <div className={cl.registrationForm__content}>
          <div className={cl.registrationForm__inputs}>
            <InputForm placeholder="E-mail" value={email} setValue={setEmail}/> 
            <InputForm placeholder="Password" value={password} setValue={setPassword}/> 
            <InputForm placeholder="Confirm password" value={confirmPassword} setValue={setConfirmPassword}/> 
          </div>
          <div className={cl.registrationForm__actions}>
              <BtnForm onClick={handleRegistration} disabled={ !email || password !== confirmPassword }>Registration</BtnForm>
          </div>
          <div className={cl.registrationForm__login}>
            <span className={cl.login__text}>I already have an account</span>
            <span className={cl.login__link}>login</span>
          </div>
          <div className={cl.registrationForm__separator}>
            <hr />
            <div className={cl.separator__text}>Or</div>
          </div>
          <div className={cl.registrationForm__alternativeRegistration}>
            <span className={cl.alternativeRegistration__title}>Login using</span>
            <div className={cl.alternativeRegistration__services}>
              {/* Social login buttons here */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default RegistrationForm