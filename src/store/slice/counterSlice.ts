import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { store } from '../store';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = initialState.count;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;

export type Store = ReturnType<typeof store.getState>;

export default counterSlice.reducer;
