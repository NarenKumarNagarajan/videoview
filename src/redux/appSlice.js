import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    darkMode: false,
    sidebarOpen: true,
  },
  reducers: {
    sidebarShow: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    sidebarClose: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    darkModeControl: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { sidebarShow, sidebarClose, darkModeControl } = appSlice.actions;

export default appSlice.reducer;
