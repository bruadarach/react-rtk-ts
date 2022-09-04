// 1. import createSlice
const createSlice = require("@reduxjs/toolkit").createSlice;
// 5. import createAsyncThunk
// 5. RTK provides a createAsyncThunk function to implement the creation and dispatching of async Action
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
// 6. import axios
const axios = require("axios");

// 4.1. define initialState
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// 7. invoke the createAsyncThunk function outside of Slice
// createAsyncThunk(action type, ()=>{ to create payload(s)})
// createAsyncThunk will automatically dispatch lifecycle Actions based on returned Promise (pending, fulfilled, rejected)
//=> generate pending, fulfilled and rejected action types!
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id)); // no need to catch errors as it will be handled
});

// 2. define a Slice with name, initialState, and reducer(s)
const userSlice = createSlice({
  // 3. define name
  name: "user",
  // 4.1. define initialState
  initialState,
  extraReducers: (builder) => {
    // 8. define builders
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

// 9. export Reducers and async functions
module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
