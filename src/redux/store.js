import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './features/searchResults';

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
  },
});
