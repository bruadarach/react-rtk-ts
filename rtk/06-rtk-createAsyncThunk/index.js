const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
// 12. import fetchUsers thunk
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

// 13. dispatch fetchUsers
store.dispatch(fetchUsers());
// Initial State  {
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecream: 10 },
//   user: { loading: false, users: [], error: '' }
// }
// Updated State  { //=> PENDING!
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecream: 10 },
//   user: { loading: true, users: [], error: '' }
// }
// Updated State  { //=> FULFILLED!
//   cake: { numOfCakes: 10 },
//   icecream: { numOfIcecream: 10 },
//   user: {
//     loading: false,
//     users: [
//       1, 2, 3, 4,  5,
//       6, 7, 8, 9, 10
//     ],
//     error: ''
//   }
// }

//=> comment out all dispatch lines as fetchUsers is an async action!
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe();
