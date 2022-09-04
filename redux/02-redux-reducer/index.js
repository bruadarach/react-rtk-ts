// node index.js

/* Action
  - The only way your application can interact with the store.
  - Carry some information from your app to the redux store.
  - Plain JavaScript Objects.
  - Have a type property that describes something that happened in the application.
  - The `type` property is typically defined as string constant.
 */

const CAKE_ORDERED = "CAKE_ORDERED"; // The `type` property is typically defined as string constant.

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
