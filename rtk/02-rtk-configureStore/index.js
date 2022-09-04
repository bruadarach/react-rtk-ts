// 4. import Store
const store = require("./app/store");
// 7.1. dispatch Action(s)
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

// 5. log the initial state
console.log("Initial State ", store.getState());

// 6. subscribe to update Store
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

// 7.2. dispatch Action(s)
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

// 8. unsubscribe to listening to Store
unsubscribe();
// Initial State  { cake: { numOfCakes: 10 } }
// Updated State  { cake: { numOfCakes: 9 } }
// Updated State  { cake: { numOfCakes: 8 } }
// Updated State  { cake: { numOfCakes: 7 } }
// Updated State  { cake: { numOfCakes: 10 } }
