import { Button } from '@material-ui/core';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { login, selectUserIsLoading } from '../../../app/slices/userSlice';
import { auth, facebookProvider, googleProvider } from '../../../lib/firebase';
import {
  LoginContainer,
  LoginInnerContainer,
  SignInButton,
} from './Login.style';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(selectUserIsLoading);

  const googleSignin = () => {
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

  const facebookSignIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, facebookProvider);

      dispatch(
        login({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        })
      );
    } catch (error) {
      alert(error);
    }
  };

  const emailSignIn = () => {};

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
          alt='Logo'
        />
        <h1>Sign in to the ChatterBox</h1>
        <p>chatterbox.slack.com</p>

        <SignInButton google onClick={googleSignin}>
          Sign in with Google
        </SignInButton>

        <SignInButton facebook onClick={facebookSignIn}>
          Sign in with Facebook
        </SignInButton>

        <SignInButton email onClick={emailSignIn}>
          Sign in with Email
        </SignInButton>

        <Link to='/signup'>Create an Account</Link>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export { Login };
