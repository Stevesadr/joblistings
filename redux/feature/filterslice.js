import { createSlice } from "@reduxjs/toolkit";

const INITIAL_VALUE = ["Junior", "React"];

const filterItem = createSlice({
  name: "filter",
  initialState: INITIAL_VALUE,
  reducers: {
    addItems: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeItems: (state, action) => {
      return (state = state.filter((item) => item !== action.payload));
    },
    clearItems: (state) => {
      return (state = []);
    },
  },
});

export const { addItems, removeItems, clearItems } = filterItem.actions;
export default filterItem.reducer;
