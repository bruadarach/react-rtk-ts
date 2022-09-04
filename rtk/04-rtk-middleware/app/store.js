const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
// 1. install and import redux-logger : npm install redux-logger
const reduxLogger = require("redux-logger");
const icecreamReducer = require("../features/icecream/icecreamSlice");

// 2. create a redux logger
const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },

  // 3. add logger middleware to Reducer
  // why defaultMiddleware and concat? by default the configureStore function adds some middlewares to the Redux Store Setup Automatically
  // So, to the list of default middleware, we append the logger middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
