// node index.js
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
// 1. import redux logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
// 2. apply middleware
const applyMiddleware = redux.applyMiddleware;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTICkED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action Creator
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCremeState = {
  numOfIceCream: 20,
};

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCremeReducer = (state = initialIceCremeState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreme: iceCremeReducer,
});

// 3. pass applyMiddleware(logger) in the 2nd parameter of Store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("numOfCakes", store.getState());
console.log("numOfIceCream", store.getState());

const unsubscribe = store.subscribe(() => {
  // 4. logger will handle so remove the line below. Now the Logger Middleware is in charge. Check all the logs on console.
  // console.log("Update state", store.getState());
});

// Dispatch
const actions = bindActionCreator(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
// numOfCakes { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
// numOfIceCream { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 9 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 8 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 7 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 18 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 17 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }
//  bruadarach 💛   ~/Desktop/youtuve-codevolution-redux-toolkit-tutorial/08-redux-middleware-logger  node index.js
// numOfCakes { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
// numOfIceCream { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
//  action CAKE_ORDERED @ 02:08:44.437
//    prev state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
//    action     { type: 'CAKE_ORDERED', payload: 1 }
//    next state { cake: { numOfCakes: 9 }, iceCreme: { numOfIceCream: 20 } }
//  action CAKE_ORDERED @ 02:08:44.438
//    prev state { cake: { numOfCakes: 9 }, iceCreme: { numOfIceCream: 20 } }
//    action     { type: 'CAKE_ORDERED', payload: 1 }
//    next state { cake: { numOfCakes: 8 }, iceCreme: { numOfIceCream: 20 } }
//  action CAKE_ORDERED @ 02:08:44.439
//    prev state { cake: { numOfCakes: 8 }, iceCreme: { numOfIceCream: 20 } }
//    action     { type: 'CAKE_ORDERED', payload: 1 }
//    next state { cake: { numOfCakes: 7 }, iceCreme: { numOfIceCream: 20 } }
//  action CAKE_RESTICkED @ 02:08:44.439
//    prev state { cake: { numOfCakes: 7 }, iceCreme: { numOfIceCream: 20 } }
//    action     { type: 'CAKE_RESTICkED', payload: 3 }
//    next state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
//  action ICECREAM_ORDERED @ 02:08:44.439
//    prev state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
//    action     { type: 'ICECREAM_ORDERED', payload: 1 }
//    next state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }
//  action ICECREAM_ORDERED @ 02:08:44.440
//    prev state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }
//    action     { type: 'ICECREAM_ORDERED', payload: 1 }
//    next state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 18 } }
//  action ICECREAM_ORDERED @ 02:08:44.440
//    prev state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 18 } }
//    action     { type: 'ICECREAM_ORDERED', payload: 1 }
//    next state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 17 } }
//  action ICECREAM_RESTOCKED @ 02:08:44.441
//    prev state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 17 } }
//    action     { type: 'ICECREAM_RESTOCKED', payload: 2 }
//    next state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }
