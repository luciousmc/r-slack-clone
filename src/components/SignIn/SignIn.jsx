import { signInWithEmailAndPassword } from '@firebase/auth';
import { Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../../app/slices/userSlice';
import { auth } from '../../../lib/firebase';
import { SignInContainer } from './SignIn.style';

function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  // Input Refs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Event listeners
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get input values for login
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
      history.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    history.replace('/');
  };
  return (
    <SignInContainer>
      <h2>Sign In to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address: <br />
          <input type='email' name='email' ref={emailRef} required />
        </label>

        <label>
          Password: <br />
          <input type='text' name='password' ref={passwordRef} required />
        </label>

        <Button variant='contained' color='primary' type='submit'>
          Sign In
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </form>
    </SignInContainer>
  );
}

export { SignIn };
