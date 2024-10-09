import React, { useState } from 'react';
import cl from './LoginForm.module.scss';
import InputForm from '../../shared/modules/InputForm/InputForm';
import BtnForm from '../../shared/modules/BtnForm/BtnForm';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with: ', { email, password });
  };

  return (
    <div className={cl.loginForm}>
      <h2 className={cl.loginForm__title}>Sign In.</h2>
      <div className={cl.loginForm__content}>
        <div className={cl.loginForm__inputs}>
          <InputForm placeholder="E-mail" value={email} setValue={setEmail} type="email" />
          <InputForm placeholder="Password" value={password} setValue={setPassword} />
        </div>
        <div className={cl.loginForm__actions}>
          <BtnForm onClick={handleLogin} disabled={!email || !password}>Sign In.</BtnForm>
        </div>
        <div className={cl.loginForm__registration}>
          <span className={cl.registration__text}>Don't have an account?</span>
          <span className={cl.registration__link}>Create an account</span>
        </div>
        <div className={cl.loginForm__forgotPassword}>Forgot password?</div>
        <div className={cl.loginForm__separator}>
          <hr />
          <div className={cl.separator__text}>Or</div>
        </div>
        <div className={cl.loginForm__alternativeLogin}>
          <span className={cl.alternativeLogin__title}>Login using</span>
          <div className={cl.alternativeLogin__services}>
            {/* Social login buttons here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
