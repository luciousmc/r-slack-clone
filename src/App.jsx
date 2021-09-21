import React, { useEffect, useState } from 'react';
import { AppBody, AppLoading, AppLoadingContents } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import {
  login,
  selectUser,
  selectUserIsLoading,
  setUserIsLoading,
} from '../app/slices/userSlice';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Spinner } from './components/Spinner/Spinner';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      if (currUser) {
        dispatch(
          login({
            displayName: currUser.displayName,
            photoURL: currUser.photoURL,
            email: currUser.email,
          })
        );
      }
    });
  }, []);

  // if (loading) {
  //   return (
  //     <AppLoading>
  //       <AppLoadingContents>
  //         <img
  //           src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
  //           alt='Logo'
  //         />

  //         <Spinner />
  //       </AppLoadingContents>
  //     </AppLoading>
  //   );
  // }

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <>
            <Switch>
              <Route exact path='/'>
                <Login />
              </Route>
              <Route path='/signup'>
                <SignUp />
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path='/'>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
