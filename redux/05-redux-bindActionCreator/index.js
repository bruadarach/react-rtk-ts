// node index.js
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTICkED";

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

const initialState = { numOfCakes: 10, anotherProperty: 0 };

// Reducer
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
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3)); // 3. restock 3 cakes

/* 
  bindActionCreator({ actionCreator1, actionCreator2 }, store.dispatch)
*/
const actions = bindActionCreator({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

unsubscribe();
// Initial state { numOfCakes: 10, anotherProperty: 0 }
// Update state { numOfCakes: 9, anotherProperty: 0 }
// Update state { numOfCakes: 8, anotherProperty: 0 }
// Update state { numOfCakes: 7, anotherProperty: 0 }
// Update state { numOfCakes: 10, anotherProperty: 0 }
