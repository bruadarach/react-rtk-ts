// node index.js

// 1. create a constant
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTICkED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    // quantity: 1,
    payload: 1, // 4. rename `quantity` to payload
  };
};

// 2. create an action creator
const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    // quantity: qty,
    payload: qty, // 4. rename `quantity` to payload
  };
};

const initialState = { numOfCakes: 10, anotherProperty: 0 };

// 3. add a new case with a new action in reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        // numOfCakes: state.numOfCakes + action.quantity,
        numOfCakes: state.numOfCakes + action.payload, // 4. rename `quantity` to payload
      };
    default:
      return state;
  }
};

const redux = require("redux");
const createStore = redux.createStore;
const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
// 3. restock 3 cakes
store.dispatch(restockCake(3));

unsubscribe();
// Initial state { numOfCakes: 10, anotherProperty: 0 }
// Update state { numOfCakes: 9, anotherProperty: 0 }
// Update state { numOfCakes: 8, anotherProperty: 0 }
// Update state { numOfCakes: 7, anotherProperty: 0 }
// Update state { numOfCakes: 10, anotherProperty: 0 }
