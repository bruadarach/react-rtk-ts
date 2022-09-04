// 1. import configureStore
const configureStore = require("@reduxjs/toolkit").configureStore;
// 2. import Reducer
const cakeReducer = require("../features/cake/cakeSlice");

// 2. define Store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

// 3. export to dispatch Action(s)
module.exports = store;
