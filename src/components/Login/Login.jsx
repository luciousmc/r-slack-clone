import { Button } from '@material-ui/core';
import { signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../app/slices/userSlice';
import { auth, googleProvider } from '../../../lib/firebase';
import { LoginContainer, LoginInnerContainer } from './Login.style';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      dispatch(
        login({
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
          email: res.user.email,
        })
      );
    });
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
          alt='Logo'
        />
        <h1>Sign in to the ChatterBox</h1>
        <p>chatterbox.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export { Login };
