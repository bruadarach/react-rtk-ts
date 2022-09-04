const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("Initial State ", store.getState());

// 4. remove the log statement in the Store Subscription as the Logger middleware will take care of it
const unsubscribe = store.subscribe(() => {
  // console.log("Updated State ", store.getState());
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
//  action cake/ordered @ 16:53:13.590
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 10 } }
//  action cake/ordered @ 16:53:13.591
//    prev state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 10 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 10 } }
//  action cake/ordered @ 16:53:13.592
//    prev state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 10 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 10 } }
//  action cake/restocked @ 16:53:13.592
//    prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 10 } }
//    action     { type: 'cake/restocked', payload: 3 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
//  action icecream/ordered @ 16:53:13.593
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 10 } }
//    action     { type: 'icecream/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 9 } }
//  action icecream/ordered @ 16:53:13.593
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 9 } }
//    action     { type: 'icecream/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 8 } }
//  action icecream/ordered @ 16:53:13.594
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 8 } }
//    action     { type: 'icecream/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 7 } }
//  action icecream/restocked @ 16:53:13.594
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 7 } }
//    action     { type: 'icecream/restocked', payload: 2 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 9 } }
