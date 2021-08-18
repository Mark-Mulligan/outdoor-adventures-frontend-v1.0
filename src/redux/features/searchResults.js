import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
  dataStart: 0,
  dataEnd: 0,
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
    setSearchResults: (state, action) => {
      let newObj = { ...action.payload };
      return newObj;
    },
  },
});

// Action creators are generated for each case reducer function

export const { nextPage, previousPage, jumpPage, setSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
