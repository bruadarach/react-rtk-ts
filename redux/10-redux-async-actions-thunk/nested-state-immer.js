// let's update address
// 1. install a package : npm install immer
const redux = require("redux");
// 2,. import produce
const produce = require("immer").produce;

const initialState = {
  name: "Sujeong Ji",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      // 3. return produce
      return produce(state, (draft) => {
        // Immer allows us to update this draft state as if the state is mutable
        // Therefore, it seems to update the property directly, but under the hood, Immer translates the code to something like we have above
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

const store = redux.createStore(reducer);

console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

store.dispatch(updateStreet("456 Main St"));

unsubscribe();
