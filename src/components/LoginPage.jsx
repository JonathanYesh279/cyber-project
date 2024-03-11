import React from 'react'
import ButtonRegister from './shared/ButtonRegister';
import { signInWithGoogle, signInWithGitHub, signInWithFacebook } from '../firebase';



function LoginPage() {
  return (
    <div className='login-container'>
      <h1>Sign-In</h1>
      <div className='login-buttons'>
        <ButtonRegister provider='Google' onClick={signInWithGoogle} />
        <ButtonRegister provider='GitHub' onClick={signInWithGitHub} />
        <ButtonRegister provider='Facebook' onClick={signInWithFacebook} />
      </div>
    </div>
  );
}

export default LoginPage;
