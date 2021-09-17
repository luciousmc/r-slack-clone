import { createSlice } from '@reduxjs/toolkit';

const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterChannel: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

// Export Actions
export const { enterChannel } = channelSlice.actions;

// Selectors
export const selectRoomId = (state) => state.room.roomId;

export default channelSlice.reducer;
