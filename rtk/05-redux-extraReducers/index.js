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

    // 1. add a reducer
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreme: iceCremeReducer,
});

const store = createStore(rootReducer);

console.log("numOfCakes", store.getState());
console.log("numOfIceCream", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
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
// Update state { cake: { numOfCakes: 9 }, iceCreme: { numOfIceCream: 19 } }
// Update state { cake: { numOfCakes: 8 }, iceCreme: { numOfIceCream: 18 } }
// Update state { cake: { numOfCakes: 7 }, iceCreme: { numOfIceCream: 17 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 17 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 16 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 15 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 14 } }
