import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "location",
  initialState: {
    value: [],
  },
  reducers: {
    addLocation: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addLocation } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addLocationAsync = (city) => (dispatch) => {
  setTimeout(() => {
    dispatch(addLocation(city));
  }, 500);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectLocation = (state) => state.location.value;

export default counterSlice.reducer;
