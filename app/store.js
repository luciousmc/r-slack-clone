import { configureStore } from '@reduxjs/toolkit';
import channelReducer from './slices/channelSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    channel: channelReducer,
    user: userReducer,
  },
});

export default store;
