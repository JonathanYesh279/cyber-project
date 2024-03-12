import React from 'react'
import ButtonRegister from './shared/ButtonRegister';
import { auth, signInWithGoogle, signInWithGitHub, signInWithFacebook, signOut } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';



function LoginPage() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Google sign in error:', error);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('GitHub sign in error:', error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Facebook sign in error:', error);
      });
  };

  const handleSignOut = () => {
    signOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <div className='login-container'>
      <h1>Sign-In</h1>
      <div className='login-buttons'>
        {user ? (
          <button onClick={signOut} className='login-button'>
            Sign Out
          </button>
        ) : (
          <>
            <ButtonRegister provider='Google' onClick={handleGoogleSignIn} />
            <ButtonRegister provider='GitHub' onClick={handleGitHubSignIn} />
            <ButtonRegister provider='Facebook' onClick={handleFacebookSignIn} />
          </>
        )}
     </div>
    </div>
  );
}

export default LoginPage;
