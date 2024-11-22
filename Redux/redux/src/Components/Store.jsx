import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a counter slice with actions and reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    ball: false,
    menuToggle: false,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    thruthy: (state) => {
        state.ball = !state.ball;
    },
    handleMenu: (state) => {
        state.menuToggle = !state.menuToggle;
    }

  },
});

// Export actions for the component to dispatch
export const { increment, decrement, thruthy, handleMenu } = counterSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
