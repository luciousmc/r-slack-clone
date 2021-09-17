import { createSlice } from '@reduxjs/toolkit';

const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    channelId: null,
  },
  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.channelId;
    },
  },
});

// Export Actions
export const { enterChannel } = channelSlice.actions;

// Selectors
export const selectChannelId = (state) => state.channel.channelId;

export default channelSlice.reducer;
