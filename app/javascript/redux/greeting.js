import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/greetings.json';

export const fetchGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  const response = await fetch(URL);
  const json = await response.json();

  return json;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => ({
      ...state,
      greetings: action.payload,
      isLoading: false,
      error: false,
    }),
    [fetchGreetings.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    [fetchGreetings.rejected]: (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }),

  },
});

export const selectIsLoading = (state) => state.greetings.isLoading;
export const selectError = (state) => state.greetings.error;
export const selectGreetings = (state) => state.greetings.greetings;

export default greetingsSlice.reducer;
