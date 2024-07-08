import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    message: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.message.splice(20, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;

export default chatSlice.reducer;
