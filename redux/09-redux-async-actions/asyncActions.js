const redux = require("redux");
const createStore = redux.createStore;

// initial state
const initialState = {
  loading: false,
  user: [],
  error: "",
};

// action types
FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// action creators
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

// reducer
const reducer = (state = initialState, action) => {
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
        error: "",
      };
  }
};

// store
const store = createStore(reducer);

/* State
state = {
    loading: true,
    date: [],
    error: ''
}

loading - Display a loading spinner in your component
data - List of users
error - Display error to the user
*/

/* Actions
 FETCH_USERS_REQUESTED - Fetch list of users
 FETCH_USERS_SUCCEEDED - Fetched successfully
 FETCH_USERS_FAILED - Error when fetching the data
*/

/* Reducers
case:  FETCH_USERS_REQUESTED
        loading: true
case:   FETCH_USERS_SUCCEEDED
        loading: false
        users: data( from API )
case:   FETCH_USERS_FAILED
        loading: false
        error: error( from API )
*/
