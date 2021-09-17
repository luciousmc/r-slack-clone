import React, { useEffect, useState } from 'react';
import { AppBody, AppLoading, AppLoadingContents } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../app/slices/userSlice';
import Login from './components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      }
    });
  }, []);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
            alt='Logo'
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path='/' exact>
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
