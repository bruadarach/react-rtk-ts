// 1. import createSlice
const createSlice = require("@reduxjs/toolkit").createSlice;

// 2.2. define initial state
const initialState = {
  numOfCakes: 10,
};
// 2.1. define Reducer => createSlice({ sliceName, initialState}, reducerFunction{ reducers: { key : (state, action) => {}})
const cakeSlice = createSlice({
  // what about actions? createSlice automatically generates action creators with the same names of the written Reducer functions. No need to type by hand
  // createSlice also returns Reducer function which we can provide to our Redux Store
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
      // (!) we don't have to explicitly return the new state
      // (!) we can directly mutate the state
      // how? createSlice uses the Immer library under the hood !
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// 2. export reducer
module.export = cakeSlice.reducer;
module.export.cakeACtions = cakeSlice.actions;

/* 
    cakeSlice generates cakeReducer and cakeActions
    next, let's connect Reducer to Store and dispatch some Actions

    Slice effectively takes care of 
    - defining Action Type Constant,
    - Action Object and Action Creator,
    - Switch Statement of Reducer
    - Handling immutable updates of Reducer
*/
