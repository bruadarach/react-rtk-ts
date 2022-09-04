// 1. create a slice
const createSlice = require("@reduxjs/toolkit").createSlice;
// 2.1. import cakeAction from cakeSllice
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,

  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // 1. add extraReducers OR
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // },

  // 1. add extraReducers + builder + addCase
  // 2.1. import cakeAction from cakeSllice
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
