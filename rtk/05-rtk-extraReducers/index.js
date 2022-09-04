const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

unsubscribe();
// Initial State  { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
// Updated State  { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 9 } }
// Updated State  { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 8 } }
// Updated State  { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 7 } }
// Updated State  { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 7 } }
// Updated State  { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 6 } }
// Updated State  { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 5 } }
// Updated State  { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 4 } }
// Updated State  { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 6 } }
