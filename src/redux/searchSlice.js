import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    saveSearchCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { saveSearchCache } = searchSlice.actions;

export default searchSlice.reducer;
