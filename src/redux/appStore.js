import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const appStore = configureStore({
  reducer: {
    appSlice: appSlice,
  },
});

export default appStore;
