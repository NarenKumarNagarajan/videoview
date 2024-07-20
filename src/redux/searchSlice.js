import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    searchResults: {},
    selectedSearch: "",
  },
  reducers: {
    saveSearchCache: (state, action) => {
      state.searchResults = Object.assign(state.searchResults, action.payload);
    },
    saveSearchResult: (state, action) => {
      state.selectedSearch = action.payload;
    },
  },
});

export const { saveSearchCache, saveSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
