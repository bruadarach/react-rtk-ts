// node index.js
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
// 8. createStore can only accept one reducer! so, let's combine reducers. Import first!
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTICkED";
// 1. create a constant
const ICECREAM_ORDERED = "ICECREAM_ORDERED"; // 1. create a constant
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

// 2. create an action creator
const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};
// 2. create an action creator
const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

// 3. add new State property : numOfIceCream
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };

// 6. split states
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCremeState = {
  numOfIceCream: 20,
};

// Reducer
// 4. add Reducer case
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };

//     // 4. add Reducer case
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };

//     // 4. add Reducer case
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream + action.payload,
//       };

//     default:
//       return state;
//   }
// };

// 7. split reducers with initialCakeState
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

// 7. split reducers with initialIceCremeState
const iceCremeReducer = (state = initialIceCremeState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    // 4. add Reducer case
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };

    default:
      return state;
  }
};

// 8. createStore can only accept one reducer! so, let's combine reducers => combineReducers(Object)
// 8. combination of all reducers as a 'rootReducer' => createStore(rootReducer)
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreme: iceCremeReducer,
});

// const store = createStore(reducer);
const store = createStore(rootReducer);

// 9. how to access to the state?
// console.log("Initial state", store.getState());
console.log("numOfCakes", store.getState());
console.log("numOfIceCream", store.getState());

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

// 5. dispatch actions and invoke
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
// Initial state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 9 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 8 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 7 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 20 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 18 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 17 } }
// Update state { cake: { numOfCakes: 10 }, iceCreme: { numOfIceCream: 19 } }

/* Create and combine Multiple Reducers

Create reducers
  1. Create a constant
  2. Create an action creator
  3. Add new `initialState` property
  4. Add Reducer case
  5. Dispatch and invoke actions

Split reducers out
  6. Split `initialStates`
  7. Split reducers with `initialStates`
  8. Import`combineReducers`
  8. Create a `rootReducer`, using `combineReducers`
  9. Check new initialStates in Store, using 	`store.getState()`

*/
