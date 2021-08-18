import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resultLimit: 10,
};

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    changeResultLimit: (state, action) => {
      state.resultLimit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const { changeResultLimit } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;
