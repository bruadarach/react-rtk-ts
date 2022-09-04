// 2.2. import PayloadAction
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 1.1. type InitialState
type InitialState = {
  numOfCakes: number;
};

// 1.2. type InitialState
const initialState: InitialState = {
  numOfCakes: 20,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    // 2.1. type Action Parameter in Reducer
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
