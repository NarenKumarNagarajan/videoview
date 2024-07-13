import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    message: [],
    chatOpen: true,
  },
  reducers: {
    addMessages: (state, action) => {
      state.message.splice(20, 1);
      state.message.unshift(action.payload);
    },
    chatStatus: (state) => {
      state.chatOpen = !state.chatOpen;
    },
  },
});

export const { addMessages, chatStatus } = chatSlice.actions;

export default chatSlice.reducer;
