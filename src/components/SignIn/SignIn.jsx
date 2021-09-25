import { Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import { SignInContainer } from './SignIn.style';

function SignIn() {
  const history = useHistory();
  // Input Refs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Event listeners
  const handleSubmit = (e) => {
    e.preventDefault();
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
