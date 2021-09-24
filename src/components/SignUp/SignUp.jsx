import { Button } from '@material-ui/core';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../app/slices/userSlice';
import { auth } from '../../../lib/firebase';
import { SignUpContainer } from './SignUp.style';

function SignUp() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const displayNameRef = useRef('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const displayName = displayNameRef.current.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth, auth.currentUser, {
        displayName: displayName || email,
        photoURL:
          'https://avatars.githubusercontent.com/u/47552603?s=400&u=9d2e64d36c494d1f508fde1cf0387a1fc678582c&v=4',
      });

      dispatch(
        login({
          displayName: email,
          photoURL:
            'https://avatars.githubusercontent.com/u/47552603?s=400&u=9d2e64d36c494d1f508fde1cf0387a1fc678582c&v=4',
          email: email,
        })
      );
      history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SignUpContainer>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address: <br />
          <input type='email' name='email' ref={emailRef} required />
        </label>

        <label>
          Display Name <span>(optional)</span>: <br />
          <input type='text' name='displayName' ref={displayNameRef} />
        </label>

        <label>
          Password: <br />
          <input type='text' name='password' ref={passwordRef} required />
        </label>

        <Button type='submit'>Create Account</Button>
      </form>
    </SignUpContainer>
  );
}

export { SignUp };
