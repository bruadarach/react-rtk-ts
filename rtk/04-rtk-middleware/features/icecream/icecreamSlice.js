// 1. create a slice
const createSlice = require("@reduxjs/toolkit").createSlice;

// 3. define initial state object
const initialState = {
  numOfIcecream: 10,
};

// 2. add a name for the slice
const icecreamSlice = createSlice({
  // 2. add a name for the slice
  name: "icecream",
  // 3. define initial state object
  initialState,
  // 4. specify key-value pair and define reducer's mapping
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
});

// 5. export the reducer as the default export and actions as named export
module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
