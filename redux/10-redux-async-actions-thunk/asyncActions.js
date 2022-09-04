const redux = require("redux");
const createStore = redux.createStore;
// 1. install and apply Thunk middleware
// npm install --save redux-thunk
// npm install axios
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
// 4. import axios
const axios = require("axios");

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

// 3. define async action creator and return `function` instead of an Action Object
const fetchUsers = () => {
  // 3. return a function that doesn't have to be pure.
  // 3. this function can handle side-effects such as asynchronous API calls
  // 3. this function also can dispatch Actions as it takes dispatch as an argument
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

// 2. pass applyMiddleware in the 2nd argument
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// 4. subscribe to the Store and dispatch async action creator
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
//@@redux/INITa.0.8.9.t.b
// FETCH_USERS_REQUESTED
// { loading: true, user: [], error: '' }
// FETCH_USERS_SUCCEEDED
// {
//   loading: false,
//   users: [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ],
//   error: ''
// }
