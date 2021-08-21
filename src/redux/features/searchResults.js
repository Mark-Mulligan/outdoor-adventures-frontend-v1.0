import { createSlice } from '@reduxjs/toolkit';

import { formatTableData } from '../../utils/uilt';

const initialState = {
  results: [],
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
  dataStart: 0,
  dataEnd: 0,
  resultLimit: 10,
  states: [],
  designations: [],
  debouncedParkName: '',
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
    setResultLimit: (state, action) => {
      state.resultLimit = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = formatTableData(action.payload.results);
      state.currentPage = action.payload.currentPage;
      state.totalResults = action.payload.totalResults;
      state.totalPages = action.payload.totalPages;
      state.dataStart = action.payload.dataStart;
      state.dataEnd = action.payload.dataEnd;
    },
    setStatesFilter: (state, action) => {
      state.states = action.payload;
      state.currentPage = 1;
    },
    setDesignationsFilter: (state, action) => {
      state.designations = action.payload;
      state.currentPage = 1;
    },
    setDebouncedParkName: (state, action) => {
      state.debouncedParkName = action.payload;
      state.currentPage = 1;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  nextPage,
  previousPage,
  jumpPage,
  setResultLimit,
  setSearchResults,
  setStatesFilter,
  setDesignationsFilter,
  setDebouncedParkName,
} = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
