// node index.js

/* Action
  - The only way your application can interact with the store.
  - Carry some information from your app to the redux store.
  - Plain JavaScript Objects.
  - Have a type property that describes something that happened in the application.
  - The `type` property is typically defined as string constant.
 */

const CAKE_ORDERED = "CAKE_ORDERED"; // The `type` property is typically defined as string constant.

// Action Creator // `Action Object` as Dispatch Parameter //=> dispatch(Action Object)
const orderCake = () => {
  // return plain JavaScript Object.
  return {
    type: CAKE_ORDERED, // Have a type property that describes something that happened in the application.
    quantity: 1,
  };
};

/* Reducer
  - Specify how the app's state changes in response to actions sent to the store
  - Function that accepts state and action as arguments, and returns the next state of the application 
  - `(previousState, action) => newState` 
*/

// (previousState, action) => newState
// `numOfCakes = 10` => should be a plain JavaScript Object!
const initialState = { numOfCakes: 10, anotherProperty: 0 };

const reducer = (state = initialState, action) => {
  // Function that accepts state and action as arguments
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        // returns the next state of the application
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

/* Store
  - One store for the entire application

  < Responsibilities >
    - 1) Holds application state
    - 2) Allows access to state via `getState()`
    - 3) Allows state to be updated via `dispatch(action)`
    - 4) Registers listeners via `subscribe(listener)`
    - 5) Handles unregistering of listeners via the function returned by `subscribe(listener)`
*/

/* 1) Holds application state */
// import redux from 'redux' //=> React.js Application
const redux = require("redux"); //=> Node.js Application
const createStore = redux.createStore; // create Redux Store
const store = createStore(reducer); //=> createStore(reducer function)

/* 2) Allows access to state via `getState()` */
// Log the initial state
console.log("Initial state", store.getState()); // access to the current state via getState()

/* 4) Registers listeners via `subscribe(listener)` */
//=> Right now, we are not capturing the return function from the subscribe method, so let's add `const unsubscribe`
store.subscribe(() => {
  // set up the listener for the store. So, anytime the store updates, we log the state to the console
  //console.log("Update state", store.getState()); // access to the current state via getState()
}); // log the updated state

/* 5) Handles unregistering of listeners via the function returned by `subscribe(listener)`*/
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState()); // access to the current state via getState()
}); // log the updated state

/* 3) Allows state to be updated via `dispatch(action)` */
// dispatch an action
// -> reducer checks a type and matches the reducer function and returns the new state
// -> store stays updated
// -> listener generates a log
store.dispatch(orderCake()); // dispatch(action)
store.dispatch(orderCake());
store.dispatch(orderCake());

// unsubscribe : is not going to check changes in the store
// at the end, simply unsubscribe to any changes in the store
// after unsubscribing, you won't see the log statement which shows the updated value
unsubscribe();
// Initial state { numOfCakes: 10, anotherProperty: 0 }
// Update state { numOfCakes: 9, anotherProperty: 0 }
// Update state { numOfCakes: 8, anotherProperty: 0 }
// Update state { numOfCakes: 7, anotherProperty: 0 }

/* Redux Pattern 
  - 1) Create store
  - 2) Declare initial state and reducer(s)
  - 3) Define your action(s) and action creator(s)
  - 4) Subscribe to the store
  - 5) Dispatch action(s) to update store
  - 6) Finally unsubscribe to the change(s) in the store
*/
