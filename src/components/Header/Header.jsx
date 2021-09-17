import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from './Header.style';
import { useDispatch } from 'react-redux';
import { logout } from '../../../app/slices/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../../lib/firebase';

function Header() {
  const dispatch = useDispatch();

  const signOutUser = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          // TODO: Add onclick
          onClick={signOutUser}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Searcdh */}
      <HeaderSearch>
        <SearchIcon />
        <input type='text' placeholder='Search' />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export { Header };
