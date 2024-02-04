// Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Base URL
const URL = `http://localhost:3000/messages.json`;

export const fetchGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch(URL);
    const json = await response.json();

    return json;
  },
);

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.greetings = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchGreetings.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

// Selectors
export const selectGreetings = (state) => state.greetings.greetings;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectHasError = (state) => state.books.hasError;

export default greetingsSlice.reducer;