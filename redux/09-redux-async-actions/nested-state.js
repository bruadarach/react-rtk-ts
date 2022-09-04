// let's update address
const redux = require("redux");

// 1. define  a nested state
const initialState = {
  name: "Sujeong Ji",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
  },
};

// 2. define constant for an Action Type
const STREET_UPDATED = "STREET_UPDATED";

// 3. define an Action Creator which effectively returns the Action Object
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// 4. define Reducer to handle the Action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    default: {
      return state;
    }
  }
};

// 5. create the Store
const store = redux.createStore(reducer);

// 6. track the initialState
console.log("Initial State ", store.getState());

// 7. subscribe the Store
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

// 8. dispatch the Action
store.dispatch(updateStreet("456 Main St"));

// 9. unsubscribe
unsubscribe();
// Initial State  {
//     name: 'Sujeong Ji',
//     address: { street: '123 Main St', city: 'San Francisco', state: 'CA' }
//   }
//   Updated State  {
//     name: 'Sujeong Ji',
//     address: { street: '456 Main St', city: 'San Francisco', state: 'CA' }
//   }
