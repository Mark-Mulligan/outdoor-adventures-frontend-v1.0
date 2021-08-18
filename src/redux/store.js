import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from './features/searchResults';
import searchParamsReducer from './features/searchParams';

export const store = configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    searchParams: searchParamsReducer,
  },
});
