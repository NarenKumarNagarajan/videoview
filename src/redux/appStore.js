import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
  reducer: {
    appSlice: appSlice,
    searchSlice: searchSlice,
    chatSlice: chatSlice,
  },
});

export default appStore;
