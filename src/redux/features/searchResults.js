import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  resultLimit: 10,
  totalResults: 0,
  totalPages: 0,
  entryStart: 0,
  entryEnd: 0,
};

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage -= 1;
    },
    jumpPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextPage, previousPage, jumpPage } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
