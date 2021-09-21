import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    userIsLoading: true,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setUserIsLoading: (state, action) => {
      if (action.payload === true) {
        state.userIsLoading = true;
      } else {
        state.userIsLoading = false;
      }
    },
  },
});

export const { login, logout, setUserIsLoading } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserIsLoading = (state) => state.user.userIsLoading;

export default userSlice.reducer;
