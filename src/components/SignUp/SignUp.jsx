import { Avatar, Button } from '@material-ui/core';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../app/slices/userSlice';
import { auth } from '../../../lib/firebase';
import {
  BrowseImageButton,
  ImageContainer,
  SignUpContainer,
} from './SignUp.style';

function SignUp() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const displayNameRef = useRef('');
  const imageFileRef = useRef(null);
  const [image, setImage] = useState(null);

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
        photoURL: image ? image : <Avatar />,
      });

      dispatch(
        login({
          displayName: email,
          photoURL: image ? image : <Avatar />,
          email: email,
        })
      );
      history.replace('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleBrowseClick = (e) => {
    imageFileRef.current.click();
  };

  const handleImageChange = (e) => {
    const chosenImg = e.target.files[0];

    if (chosenImg) {
      const reader = new FileReader();

      reader.readAsDataURL(chosenImg);

      reader.onload = (eventReader) => {
        setImage(eventReader.target.result);
      };
    }
  };

  const handleCancelClick = () => {
    history.push('/');
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
          Password: <br />
          <input type='text' name='password' ref={passwordRef} required />
        </label>

        <label>
          Display Name: <span>(optional)</span> <br />
          <input type='text' name='displayName' ref={displayNameRef} />
        </label>

        <label>
          Profile image: <span>(optional)</span>
          <BrowseImageButton onClick={handleBrowseClick} variant='contained'>
            {image ? 'Change...' : 'Browse...'}
          </BrowseImageButton>
          {image && (
            <>
              <ImageContainer>
                <img src={image ? image : null} alt='' />
              </ImageContainer>
            </>
          )}
          <input
            onChange={handleImageChange}
            ref={imageFileRef}
            type='file'
            accept='image/jpg, image/png, image/jpeg, image/bmp'
            hidden
          />
        </label>

        <Button variant='contained' color='primary' type='submit'>
          Create Account
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </form>
    </SignUpContainer>
  );
}

export { SignUp };
