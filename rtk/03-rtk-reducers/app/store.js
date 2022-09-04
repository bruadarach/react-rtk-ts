const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
// 5. import Reducer (so, use Slice and Action(s) too)
const icecreamReducer = require("../features/icecream/icecreamSlice");

// configureStore has a function like rootReducer under the hood to combine multiple reducers
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  // 6. add reducer
});

module.exports = store;
